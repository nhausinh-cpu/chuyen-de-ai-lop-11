import React, { useState, useEffect } from 'react';
import { allLessons } from './data/slidesIndex';
import { LessonList } from './components/LessonList';
import { SlidePresenter } from './components/SlidePresenter';
import { ExportToGoogleSlides } from './components/ExportToGoogleSlides';
import { Lesson, Slide } from './types';
import { Sparkles, Award, GraduationCap, CheckCircle, MonitorPlay } from 'lucide-react';

export default function App() {
  // Store lessons in state to allow AI real-time customization to persist during session
  const [lessons, setLessons] = useState<Lesson[]>(allLessons);
  const [currentPeriod, setCurrentPeriod] = useState<number>(1);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);

  // Shortcut F5 for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'F5') {
        e.preventDefault();
        setIsPresentationMode(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentLesson = lessons.find(l => l.period === currentPeriod) || lessons[0];

  const handleSelectPeriod = (period: number) => {
    setCurrentPeriod(period);
    setSlideIndex(0);
  };

  const handleNavigateSlide = (index: number) => {
    if (index >= 0 && index < currentLesson.slides.length) {
      setSlideIndex(index);
    }
  };

  const handleLessonComplete = (period: number) => {
    if (!completedLessons.includes(period)) {
      setCompletedLessons(prev => [...prev, period]);
    }
    
    // Auto advance to next lesson if available
    if (period < 12) {
      setTimeout(() => {
        setCurrentPeriod(period + 1);
        setSlideIndex(0);
      }, 1500);
    }
  };

  // Callback when AI customizer rewrites the current slide
  const handleUpdateCurrentSlide = (updatedSlide: Slide) => {
    setLessons(prevLessons => 
      prevLessons.map(lesson => {
        if (lesson.period === currentPeriod) {
          return {
            ...lesson,
            slides: lesson.slides.map(slide => 
              slide.id === updatedSlide.id ? updatedSlide : slide
            )
          };
        }
        return lesson;
      })
    );
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden font-sans text-slate-800" id="main-app-shell">
      
      {/* Top Application Header */}
      <header className="bg-white border-b border-slate-200/80 px-6 py-3.5 flex items-center justify-between shrink-0 select-none shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-100">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-base font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                Chuyên Đề Trí Tuệ Nhân Tạo (AI)
              </h1>
              <span className="text-[11px] font-black bg-indigo-100 text-indigo-800 border border-indigo-200 px-2.5 py-0.5 rounded-lg shadow-xs">
                Trường THPT Tân Lược
              </span>
              <span className="text-[11px] font-extrabold bg-violet-100 text-violet-800 border border-violet-200 px-2 py-0.5 rounded-lg">
                Design by: Nguyễn Phước Hậu
              </span>
              <span className="text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-current text-amber-600" />
                Dành Cho Khối 11
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Giáo trình trình chiếu 108 slides chuẩn hóa • Tích hợp trắc nghiệm củng cố, hoạt động trải nghiệm & xuất Google Slides
            </p>
          </div>
        </div>

        {/* Header Actions & Metrics */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 block tracking-wider uppercase">Tiến Độ Chuyên Đề</span>
              <span className="text-xs font-extrabold text-slate-700">
                Đã học xong: {completedLessons.length} / 12 Tiết
              </span>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-slate-100 flex items-center justify-center relative">
              <span className="text-[11px] font-extrabold text-indigo-600">
                {Math.round((completedLessons.length / 12) * 100)}%
              </span>
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="transparent"
                  stroke="#4f46e5"
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - completedLessons.length / 12)}`}
                  className="transition-all duration-500"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Core App Workspace split in 3 columns */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        
        {/* Left Column: Lesson Navigation */}
        <LessonList
          lessons={lessons}
          currentPeriod={currentPeriod}
          onSelectPeriod={handleSelectPeriod}
          completedLessons={completedLessons}
        />

        {/* Center Column: Interactive Slide Presenter */}
        <SlidePresenter
          lesson={currentLesson}
          slideIndex={slideIndex}
          onNavigateSlide={handleNavigateSlide}
          onLessonComplete={handleLessonComplete}
          onUpdateCurrentSlide={handleUpdateCurrentSlide}
          isFullscreen={isPresentationMode}
          onToggleFullscreen={() => setIsPresentationMode(prev => !prev)}
        />

        {/* Right Column: Google Slides Export + AI Prompt Helper Customizer */}
        <div className="w-80 shrink-0 border-l border-slate-200/80 bg-slate-50 p-4 space-y-4 overflow-y-auto select-none" id="export-ai-panel">
          
          {/* Section 1: Exporting utility */}
          <ExportToGoogleSlides
            currentLesson={currentLesson}
            allLessons={lessons}
          />

          {/* Guidelines / Tips Card */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-xl p-4 shadow-sm border border-indigo-950/40">
            <div className="flex items-center gap-2 mb-2 text-indigo-300 font-extrabold text-xs tracking-wider uppercase">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Cẩm Nang Giảng Dạy AI</span>
            </div>
            <ul className="space-y-2 text-[11px] text-indigo-100/90 leading-relaxed font-medium">
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Mỗi tiết học thiết kế 9 slides lý thuyết ngắn gọn, kích thích tranh luận.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Sử dụng sơ đồ mạng (Diagram) trực quan để giải thích cấu trúc thuật toán học máy.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Dùng nút <strong>Tinh chỉnh bằng AI</strong> để tự động tái thiết kế slide theo yêu cầu thực tế của học sinh.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
