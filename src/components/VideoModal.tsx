import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Sparkles,
  HelpCircle,
  Clock,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Volume2
} from 'lucide-react';
import { SlideVideo } from '../types';
import { allLessonVideos, getVideoForLesson } from '../data/lessonVideos';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPeriod: number;
  video?: SlideVideo;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  currentPeriod,
  video: initialVideo
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<number>(currentPeriod);
  const activeVideo = initialVideo || getVideoForLesson(selectedPeriod);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-slate-900 border-2 border-indigo-500/40 rounded-3xl overflow-hidden shadow-2xl w-full max-w-5xl max-h-[95vh] flex flex-col text-white"
        >
          {/* Header */}
          <div className="px-5 py-3.5 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border-b border-indigo-800/40 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <Play className="w-4 h-4 fill-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-800/70 text-indigo-200">
                    Tiết {selectedPeriod} • THPT Tân Lược
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-200 border border-emerald-700/50 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Tự động bật Phụ đề Tiếng Việt 🇻🇳
                  </span>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    {activeVideo.duration}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white truncate max-w-xl">
                  {activeVideo.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Đóng cửa sổ video (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Video Viewport */}
          <div className="relative bg-black aspect-video w-full max-h-[58vh] flex items-center justify-center overflow-hidden group">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&hl=vi&cc_lang_pref=vi&cc_load_policy=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={activeVideo.thumbnailUrl}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 hover:scale-110 active:scale-95 text-white flex items-center justify-center shadow-xl shadow-indigo-500/50 transition-all cursor-pointer group-hover:shadow-indigo-500/80"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                  </button>
                  <span className="mt-3 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-200">
                    Bấm để phát video bài giảng
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Pedagogical Panel & Details */}
          <div className="p-4 sm:p-5 bg-slate-900/95 border-t border-slate-800 overflow-y-auto space-y-3.5 text-slate-300 text-xs sm:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-start">
              {/* Left Column: Description & Discussion Question */}
              <div className="md:col-span-8 space-y-3">
                <div className="p-3 bg-indigo-950/40 rounded-2xl border border-indigo-800/40">
                  <div className="flex items-center gap-2 text-indigo-300 font-black text-xs uppercase mb-1">
                    <HelpCircle className="w-4 h-4 text-indigo-400" />
                    <span>Câu hỏi thảo luận sư phạm cho học sinh:</span>
                  </div>
                  <p className="text-white font-bold text-sm leading-relaxed">
                    {activeVideo.discussionQuestion || "Sau khi xem video, em hãy rút ra 2 điểm mấu chốt quan trọng nhất của công nghệ này?"}
                  </p>
                </div>

                <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                  {activeVideo.description}
                </p>
              </div>

              {/* Right Column: Video Selector for all 12 lessons */}
              <div className="md:col-span-4 bg-slate-950/60 p-3 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Chọn video tiết khác:</span>
                  </span>
                  <span className="text-[10px] text-indigo-400 font-bold">12 Tiết</span>
                </div>

                <div className="grid grid-cols-6 gap-1.5 max-h-28 overflow-y-auto pr-1">
                  {allLessonVideos.map((vid, idx) => {
                    const periodNum = idx + 1;
                    const isCur = periodNum === selectedPeriod;
                    return (
                      <button
                        key={vid.id}
                        onClick={() => {
                          setSelectedPeriod(periodNum);
                          setIsPlaying(true);
                        }}
                        className={`p-1.5 rounded-lg text-xs font-black transition-all cursor-pointer text-center ${
                          isCur
                            ? "bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400"
                            : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                        }`}
                        title={`Tiết ${periodNum}: ${vid.title}`}
                      >
                        T{periodNum}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
