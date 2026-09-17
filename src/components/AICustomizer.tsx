import React, { useState } from 'react';
import { Slide } from '../types';
import { Sparkles, Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AICustomizerProps {
  currentSlide: Slide;
  onUpdateSlide: (updatedSlide: Slide) => void;
}

export const AICustomizer: React.FC<AICustomizerProps> = ({ currentSlide, onUpdateSlide }) => {
  const [instruction, setInstruction] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCustomize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!instruction.trim()) return;

    setIsLoading(true);
    setSuccess(false);

    try {
      const response = await fetch('/api/gemini/customize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slideTitle: currentSlide.title,
          currentContent: currentSlide.content,
          userInstruction: instruction,
        }),
      });

      if (!response.ok) {
        throw new Error('Không thể tinh chỉnh slide. Vui lòng thử lại.');
      }

      const data = await response.json();
      
      // Merge customized data
      const updatedSlide: Slide = {
        ...currentSlide,
        title: data.title || currentSlide.title,
        content: data.content || currentSlide.content,
        speakerNotes: data.speakerNotes || currentSlide.speakerNotes,
      };

      onUpdateSlide(updatedSlide);
      setSuccess(true);
      setInstruction('');
      
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      alert('Đã xảy ra lỗi khi tinh chỉnh slide bằng AI.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm" id="ai-customizer-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800">Trợ Lý Giáo Án Gemini AI</h3>
          <p className="text-xs text-slate-500">Tinh chỉnh nhanh nội dung, lời thoại slide này bằng AI</p>
        </div>
      </div>

      <form onSubmit={handleCustomize} className="space-y-3">
        <textarea
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="Ví dụ: 'Thêm ví dụ thực tế về Grab/Uber', 'Làm các gạch đầu dòng ngắn hơn', 'Thay lời thoại giáo viên vui tính hơn'..."
          className="w-full text-xs p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 min-h-[80px] bg-slate-50 placeholder:text-slate-400 leading-relaxed resize-none"
          disabled={isLoading}
          id="ai-prompt-input"
        />

        <div className="flex items-center justify-between gap-2">
          {success ? (
            <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Đã tinh chỉnh slide!
            </span>
          ) : (
            <span className="text-[10px] text-slate-400">
              Sử dụng mô hình Gemini 3.8 Flash siêu tốc
            </span>
          )}

          <button
            type="submit"
            disabled={isLoading || !instruction.trim()}
            className={`py-2 px-4 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isLoading || !instruction.trim()
                ? "bg-slate-100 text-slate-400 border border-slate-200"
                : "bg-amber-500 hover:bg-amber-600 text-white shadow-sm shadow-amber-100"
            }`}
            id="submit-ai-customize-btn"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Đang xử lý...
              </>
            ) : (
              <>
                Tối Ưu Slide
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
