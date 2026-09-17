import React, { useState } from 'react';
import { googleSignIn, getAccessToken } from '../lib/firebaseAuth';
import { Lesson, Slide } from '../types';
import { Share2, CloudLightning, Loader2, CheckCircle, ExternalLink, ShieldAlert, AlertCircle } from 'lucide-react';

interface ExportProps {
  currentLesson: Lesson;
  allLessons: Lesson[];
}

export const ExportToGoogleSlides: React.FC<ExportProps> = ({ currentLesson, allLessons }) => {
  const [status, setStatus] = useState<'idle' | 'authorizing' | 'creating' | 'populating' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [progress, setProgress] = useState<{ current: number; total: number; stage: string }>({ current: 0, total: 0, stage: '' });
  const [presentationUrl, setPresentationUrl] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthorize = async () => {
    setStatus('authorizing');
    try {
      const result = await googleSignIn();
      if (result) {
        setIsAuthenticated(true);
        setStatus('idle');
      }
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message || 'Không thể liên kết tài khoản Google.');
    }
  };

  const executeExport = async (exportAll: boolean) => {
    // Explicit user confirmation before writing/modifying user files as required by the Workspace Integration skill guidelines!
    const targetText = exportAll 
      ? `Toàn bộ chuyên đề AI (12 tiết - 108 slides)` 
      : `Tiết ${currentLesson.period}: ${currentLesson.title} (9 slides)`;
    
    const confirmed = window.confirm(
      `Hệ thống sẽ tạo một file trình chiếu mới mang tên "Giáo án Chuyên đề AI THPT - ${currentLesson.title}" trong tài khoản Google Drive của bạn. Bạn có đồng ý thực hiện không?`
    );
    if (!confirmed) return;

    setStatus('creating');
    setErrorMessage('');
    
    try {
      let accessToken = await getAccessToken();
      if (!accessToken) {
        // Fallback login if token expired or missing
        const res = await googleSignIn();
        accessToken = res?.accessToken || null;
      }
      if (!accessToken) throw new Error('Không tìm thấy mã xác thực Google.');

      const lessonsToExport = exportAll ? allLessons : [currentLesson];
      const slidesList: { slide: Slide; period: number }[] = [];
      lessonsToExport.forEach(lesson => {
        lesson.slides.forEach(s => {
          slidesList.push({ slide: s, period: lesson.period });
        });
      });

      const totalSlides = slidesList.length;
      setProgress({ current: 0, total: totalSlides, stage: 'Đang khởi tạo tệp trình chiếu trên Google Slides...' });

      // 1. Create a blank Presentation
      const createResponse = await fetch('https://slides.googleapis.com/v1/presentations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: exportAll 
            ? `Giáo Án Toàn Chuyên Đề Ứng Dụng AI THPT (12 Tiết)` 
            : `Giáo Án Slide Tiết ${currentLesson.period}: ${currentLesson.title}`
        })
      });

      if (!createResponse.ok) {
        const errData = await createResponse.json();
        throw new Error(errData.error?.message || 'Không thể tạo file Slides.');
      }

      const presentation = await createResponse.json();
      const presentationId = presentation.presentationId;
      setPresentationUrl(`https://docs.google.com/presentation/d/${presentationId}/edit`);

      // Google Slides creates 1 default slide initially, so we can use it or add requests.
      // We will perform batched updates to avoid reaching Google API limits.
      // We process slides in batches of 9 (exactly 1 lesson per batch)
      setStatus('populating');
      
      const batchSize = 9;
      for (let i = 0; i < totalSlides; i += batchSize) {
        const end = Math.min(i + batchSize, totalSlides);
        const batchSlides = slidesList.slice(i, end);
        
        setProgress({ 
          current: i, 
          total: totalSlides, 
          stage: `Đang xuất nội dung các slide từ ${i + 1} đến ${end}...` 
        });

        const requests: any[] = [];

        batchSlides.forEach((item, idx) => {
          const slideIndex = i + idx;
          const { slide, period } = item;
          // Generate unique IDs for the new slide and its elements
          const slideId = `slide_custom_${slideIndex}`;
          const titleId = `title_${slideIndex}`;
          const bodyId = `body_${slideIndex}`;

          // Create Slide with BLANK layout (prevents pre-generated layout placeholders overlap)
          // Exception: The first slide of the presentation is pre-created by Google.
          // We only create slideId if slideIndex > 0.
          if (slideIndex > 0) {
            requests.push({
              createSlide: {
                objectId: slideId,
                insertionIndex: slideIndex,
                slideLayoutReference: {
                  predefinedLayout: 'BLANK'
                }
              }
            });
          }

          const targetPageId = slideIndex === 0 ? 'p' : slideId; // 'p' represents the first default slide in Google Slides API

          // Create Title Text Box
          requests.push({
            createShape: {
              objectId: titleId,
              shapeType: 'RECTANGLE',
              elementProperties: {
                pageId: targetPageId,
                size: {
                  height: { magnitude: 70, unit: 'PT' },
                  width: { magnitude: 650, unit: 'PT' }
                },
                transform: {
                  scaleX: 1, scaleY: 1,
                  translateX: 35, translateY: 30,
                  unit: 'PT'
                }
              }
            }
          });

          // Insert Title Text
          requests.push({
            insertText: {
              objectId: titleId,
              text: `Tiết ${period} - ${slide.title.toUpperCase()}`
            }
          });

          // Style Title Text
          requests.push({
            updateTextStyle: {
              objectId: titleId,
              style: {
                fontFamily: 'Montserrat',
                fontSize: { magnitude: 20, unit: 'PT' },
                bold: true,
                foregroundColor: {
                  opaqueColor: {
                    rgbColor: { red: 0.12, green: 0.16, blue: 0.35 } // Primary Dark Indigo
                  }
                }
              },
              fields: 'fontFamily,fontSize,bold,foregroundColor'
            }
          });

          // Create Body Text Box
          requests.push({
            createShape: {
              objectId: bodyId,
              shapeType: 'RECTANGLE',
              elementProperties: {
                pageId: targetPageId,
                size: {
                  height: { magnitude: 250, unit: 'PT' },
                  width: { magnitude: 650, unit: 'PT' }
                },
                transform: {
                  scaleX: 1, scaleY: 1,
                  translateX: 35, translateY: 110,
                  unit: 'PT'
                }
              }
            }
          });

          // Format body text from slide.content bullets
          let bodyText = slide.content.join('\n\n');
          if (slide.interactiveQuiz) {
            bodyText += `\n\n[Trắc nghiệm Tương tác]\nCâu hỏi: ${slide.interactiveQuiz.question}\nĐáp án đúng: ${slide.interactiveQuiz.options[slide.interactiveQuiz.answerIndex]}\nGiải thích: ${slide.interactiveQuiz.explanation}`;
          }
          if (slide.activity) {
            bodyText += `\n\n[Hoạt động Lớp học - ${slide.activity.duration}]\nNhiệm vụ: ${slide.activity.title}\nLời khuyên: ${slide.activity.tips}`;
          }

          requests.push({
            insertText: {
              objectId: bodyId,
              text: bodyText
            }
          });

          // Style Body Text
          requests.push({
            updateTextStyle: {
              objectId: bodyId,
              style: {
                fontFamily: 'Arial',
                fontSize: { magnitude: 13, unit: 'PT' },
                foregroundColor: {
                  opaqueColor: {
                    rgbColor: { red: 0.2, green: 0.25, blue: 0.3 }
                  }
                }
              },
              fields: 'fontFamily,fontSize,foregroundColor'
            }
          });
        });

        // Send batch request
        const batchResponse = await fetch(`https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ requests })
        });

        if (!batchResponse.ok) {
          const errData = await batchResponse.json();
          throw new Error(errData.error?.message || 'Lỗi khi đồng bộ slide.');
        }
      }

      setProgress({ current: totalSlides, total: totalSlides, stage: 'Đã hoàn tất đồng bộ hóa toàn bộ slide thành công!' });
      setStatus('success');
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message || 'Lỗi xảy ra trong quá trình kết xuất Google Slides.');
    }
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm" id="google-exporter-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
          <Share2 className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800">Đồng Bộ Sang Google Slides</h3>
          <p className="text-xs text-slate-500">Xuất slide trực tiếp vào tài khoản Google Drive cá nhân</p>
        </div>
      </div>

      {status === 'idle' && !isAuthenticated && (
        <div className="space-y-3">
          <p className="text-xs text-slate-600 leading-relaxed">
            Ứng dụng cần liên kết với tài khoản Google để tạo và quản lý tệp trình chiếu mới của bạn trên Google Slides và Drive.
          </p>
          <button
            onClick={handleAuthorize}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-slate-200 hover:border-slate-300 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all duration-150 shadow-sm cursor-pointer"
            id="auth-google-btn"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.78 0 3.37.61 4.62 1.8l3.47-3.47C17.99 1.19 15.22 0 12 0 7.31 0 3.25 2.69 1.28 6.61l3.99 3.09C6.22 6.86 8.87 5.04 12 5.04z" />
              <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.47h6.45c-.28 1.48-1.12 2.74-2.38 3.59l3.69 2.86c2.16-1.99 3.73-4.91 3.73-8.56z" />
              <path fill="#FBBC05" d="M5.27 14.22c-.24-.73-.38-1.51-.38-2.32s.14-1.59.38-2.32L1.28 6.61C.46 8.24 0 10.07 0 12s.46 3.76 1.28 5.39l3.99-3.17z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.97-1.07 7.96-2.91l-3.69-2.86c-1.02.68-2.33 1.09-4.27 1.09-3.13 0-5.78-1.82-6.73-4.66l-3.99 3.09C3.25 21.31 7.31 24 12 24z" />
            </svg>
            Liên kết với tài khoản Google
          </button>
        </div>
      )}

      {status === 'authorizing' && (
        <div className="flex flex-col items-center justify-center py-6 space-y-2">
          <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
          <p className="text-xs text-slate-600">Đang khởi tạo trình đăng nhập Google...</p>
        </div>
      )}

      {(status === 'idle' || status === 'success' || status === 'error') && isAuthenticated && (
        <div className="space-y-3">
          <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center gap-2 text-xs text-emerald-800">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium">Đã kết nối tài khoản Google thành công!</span>
          </div>

          {status === 'idle' && (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => executeExport(false)}
                className="w-full py-2.5 px-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-all cursor-pointer text-center"
                id="export-single-btn"
              >
                Xuất Tiết Hiện Tại
              </button>
              <button
                onClick={() => executeExport(true)}
                className="w-full py-2.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition-all cursor-pointer text-center"
                id="export-all-btn"
              >
                Xuất Cả 12 Tiết
              </button>
            </div>
          )}
        </div>
      )}

      {(status === 'creating' || status === 'populating') && (
        <div className="space-y-4 py-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Loader2 className="w-4.5 h-4.5 text-indigo-600 animate-spin" />
              Đang xuất bài trình chiếu...
            </span>
            <span>{Math.round((progress.current / progress.total) * 100)}%</span>
          </div>
          
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${(progress.current / progress.total) * 100}%` }}
            />
          </div>
          
          <p className="text-[11px] text-slate-500 italic text-center">
            {progress.stage}
          </p>
        </div>
      )}

      {status === 'success' && (
        <div className="space-y-3 mt-3">
          <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 space-y-2">
            <div className="flex items-center gap-1.5 font-bold">
              <CloudLightning className="w-4 h-4 text-indigo-600 animate-bounce" />
              Hoàn Tất Đồng Bộ Hóa!
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Tệp trình chiếu mới của bạn đã được xuất thành công vào Google Drive cá nhân của bạn.
            </p>
          </div>
          <a
            href={presentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-all shadow-md shadow-indigo-100 cursor-pointer"
            id="open-slides-link"
          >
            Mở trên Google Slides
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={() => setStatus('idle')}
            className="w-full text-center py-1 text-[11px] text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            Quay lại bảng xuất
          </button>
        </div>
      )}

      {status === 'error' && (
        <div className="space-y-3 mt-2">
          <div className="p-3 bg-rose-50 border border-rose-100 rounded-lg flex items-start gap-2 text-xs text-rose-800">
            <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">Có lỗi xảy ra:</span>
              <p className="text-[11px] text-rose-600/90 leading-normal mt-0.5">{errorMessage}</p>
            </div>
          </div>
          <button
            onClick={() => setStatus('idle')}
            className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-all cursor-pointer"
          >
            Thử lại
          </button>
        </div>
      )}
    </div>
  );
};
