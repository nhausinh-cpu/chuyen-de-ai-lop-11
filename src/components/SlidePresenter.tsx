import React, { useState, useEffect, useRef } from 'react';
import { Slide, Lesson, FontSizeOption } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Square,
  Volume2,
  HelpCircle,
  CheckCircle,
  CheckCircle2,
  XCircle,
  Clock,
  Lightbulb,
  GraduationCap,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  MonitorPlay,
  Sparkles,
  Crosshair,
  Type,
  BookOpen,
  Network,
  Layers,
  ArrowRight,
  MousePointerClick,
  Video,
  Film,
  Eye,
  EyeOff,
  Brain
} from 'lucide-react';
import { getSlideAnswerHint } from '../utils/slideHints';
import { getExercisesForLesson } from '../data/exerciseBank';
import { getVideoForSlide, getVideoForLesson } from '../data/lessonVideos';
import { InteractiveExercisesView } from './InteractiveExercisesView';
import { VideoModal } from './VideoModal';

interface SlidePresenterProps {
  lesson: Lesson;
  slideIndex: number;
  onNavigateSlide: (index: number) => void;
  onLessonComplete: (period: number) => void;
  onUpdateCurrentSlide: (slide: Slide) => void;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}

export const SlidePresenter: React.FC<SlidePresenterProps> = ({
  lesson,
  slideIndex,
  onNavigateSlide,
  onLessonComplete,
  onUpdateCurrentSlide,
  isFullscreen: propIsFullscreen,
  onToggleFullscreen
}) => {
  const currentSlide = lesson.slides[slideIndex];
  const isFirstSlide = slideIndex === 0;
  const isLastSlide = slideIndex === lesson.slides.length - 1;

  // Presentation Fullscreen state
  const [internalFullscreen, setInternalFullscreen] = useState(false);
  const isFullscreen = propIsFullscreen !== undefined ? propIsFullscreen : internalFullscreen;
  const containerRef = useRef<HTMLDivElement>(null);

  // Font size setting (20pt, 22pt, 24pt, 28pt, 32pt)
  const [fontSize, setFontSize] = useState<FontSizeOption>('24pt');

  // Chế độ xem sơ đồ (Vector Network vs Cards)
  const [diagramViewMode, setDiagramViewMode] = useState<'vector' | 'cards'>('vector');

  // Answer hint panel toggle
  const [showAnswerHint, setShowAnswerHint] = useState(false);

  // Interactive exercises view toggle
  const [showExercisesModal, setShowExercisesModal] = useState(false);

  // Click-to-reveal build steps state (hiệu ứng xuất hiện từng đối tượng khi click)
  const [revealStep, setRevealStep] = useState<number>(0);
  const [isClickToReveal, setIsClickToReveal] = useState<boolean>(false);

  // Video presentation states
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const [activeMediaTab, setActiveMediaTab] = useState<'image' | 'video'>('image');
  const [isInlineVideoPlaying, setIsInlineVideoPlaying] = useState<boolean>(false);

  // Laser pointer simulation state
  const [isLaserActive, setIsLaserActive] = useState(false);
  const [laserPos, setLaserPos] = useState<{ x: number; y: number } | null>(null);

  // Speaker notes toggles
  const [showNotes, setShowNotes] = useState(false);
  const [copiedNotes, setCopiedNotes] = useState(false);

  // Playback mode toggles
  const [isPlaying, setIsPlaying] = useState(false);

  // Quiz states
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [hasAnsweredQuiz, setHasAnsweredQuiz] = useState(false);

  // Activity timer states
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes default (600s)
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Answer hint data for current slide
  const currentHints = getSlideAnswerHint(currentSlide, lesson, slideIndex);
  const lessonExercises = getExercisesForLesson(lesson.period);
  const currentVideo = currentSlide.video || getVideoForSlide(currentSlide.id, lesson.period);

  // Helper to calculate max steps for current slide
  const getSlideMaxSteps = (slide: Slide): number => {
    switch (slide.visualType) {
      case 'title':
        return Math.max(2, slide.content.length + 1);
      case 'intro':
        return Math.max(2, slide.content.length + 1);
      case 'concepts':
        return Math.max(2, slide.content.length + 1);
      case 'diagram':
        // Slide so do chi dung 2 buoc hien (khoi so do / dong chu thich ben duoi), khong phai theo so nut ben trong so do
        return 2;
      case 'comparison':
        // Slide so sanh chi dung 2 buoc hien (cot trai/cot phai), khong phai tong so muc liet ke
        return 2;
      case 'activity': {
        const instLen = slide.activity?.instructions.length || 2;
        return instLen + 2;
      }
      case 'quiz':
        return 3;
      case 'summary':
        return Math.max(2, slide.content.length + 1);
      default:
        return 3;
    }
  };

  const maxSteps = getSlideMaxSteps(currentSlide);
  const isStepVisible = (stepIndex: number) => !isClickToReveal || revealStep >= stepIndex;
  const isStepFocused = (stepIndex: number) => isClickToReveal && revealStep === stepIndex;

  // Reset states when slide changes
  useEffect(() => {
    setSelectedQuizOption(null);
    setHasAnsweredQuiz(false);
    setIsTimerRunning(false);
    setShowAnswerHint(false);
    setRevealStep(0);
    setActiveMediaTab('image');
    setIsInlineVideoPlaying(false);

    if (currentSlide.activity) {
      const minutes = parseInt(currentSlide.activity.duration) || 10;
      setTimeLeft(minutes * 60);
    }
  }, [currentSlide.id]);

  // Pause inline video when showing the modal video to prevent dual audio streams
  useEffect(() => {
    if (showVideoModal) {
      setIsInlineVideoPlaying(false);
    }
  }, [showVideoModal]);

  // Autoplay handler
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        if (isLastSlide) {
          setIsPlaying(false);
          onLessonComplete(lesson.period);
        } else {
          onNavigateSlide(slideIndex + 1);
        }
      }, 8000); // Auto advances slide every 8 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, slideIndex, isLastSlide]);

  // Activity Timer Countdown
  useEffect(() => {
    let timerInterval: any;
    if (isTimerRunning && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(timerInterval);
  }, [isTimerRunning, timeLeft]);

  // Keyboard navigation & shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        if (isClickToReveal && revealStep < maxSteps - 1) {
          setRevealStep(prev => prev + 1);
        } else if (!isLastSlide) {
          onNavigateSlide(slideIndex + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (isClickToReveal && revealStep > 0) {
          setRevealStep(prev => prev - 1);
        } else if (!isFirstSlide) {
          onNavigateSlide(slideIndex - 1);
        }
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        setIsClickToReveal(prev => !prev);
      } else if (e.key === 'v' || e.key === 'V') {
        e.preventDefault();
        setShowVideoModal(prev => !prev);
      } else if (e.key === 'f' || e.key === 'F' || e.key === 'F5') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        setShowAnswerHint(prev => !prev);
      } else if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        setShowExercisesModal(prev => !prev);
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreenState(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideIndex, isLastSlide, isFirstSlide, isFullscreen, isClickToReveal, revealStep, maxSteps]);

  // Fullscreen state updater
  const setIsFullscreenState = (val: boolean) => {
    if (onToggleFullscreen) {
      if (val !== isFullscreen) onToggleFullscreen();
    } else {
      setInternalFullscreen(val);
    }
  };

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    const nextState = !isFullscreen;
    setIsFullscreenState(nextState);

    if (nextState) {
      try {
        if (containerRef.current && containerRef.current.requestFullscreen) {
          containerRef.current.requestFullscreen().catch(() => {});
        } else if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
      } catch (err) {}
    } else {
      try {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      } catch (err) {}
    }
  };

  // Listen to browser fullscreen change to keep state synced
  useEffect(() => {
    const handleBrowserFullscreen = () => {
      if (!document.fullscreenElement && isFullscreen) {
        setIsFullscreenState(false);
      }
    };
    document.addEventListener('fullscreenchange', handleBrowserFullscreen);
    return () => document.removeEventListener('fullscreenchange', handleBrowserFullscreen);
  }, [isFullscreen]);

  // Laser Pointer tracker
  const handleMouseMoveOnSlide = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isLaserActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setLaserPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleCopyNotes = () => {
    navigator.clipboard.writeText(currentSlide.speakerNotes);
    setCopiedNotes(true);
    setTimeout(() => setCopiedNotes(false), 2000);
  };

  const handleQuizAnswer = (index: number) => {
    if (hasAnsweredQuiz) return;
    setSelectedQuizOption(index);
    setHasAnsweredQuiz(true);
  };

  // Handler for clicking anywhere on the slide arena to advance build steps or slides
  const handleSlideArenaClick = (e: React.MouseEvent) => {
    // Ignore clicks on buttons, inputs, links, or media embeds
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea, iframe, video, .no-reveal-click')) {
      return;
    }
    if (isClickToReveal && revealStep < maxSteps - 1) {
      setRevealStep(prev => prev + 1);
    } else if (!isLastSlide) {
      onNavigateSlide(slideIndex + 1);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Adaptive padding helper so content never overflows or requires mouse scrolling
  const getContentPadding = () => {
    switch (fontSize) {
      case '32pt':
        return 'p-3 sm:p-4 lg:p-5';
      case '28pt':
        return 'p-3.5 sm:p-4.5 lg:p-5.5';
      case '24pt':
        return 'p-4 sm:p-5 lg:p-6';
      case '22pt':
        return 'p-4 sm:p-5.5 lg:p-6.5';
      case '20pt':
      default:
        return 'p-4 sm:p-6 lg:p-7';
    }
  };

  // Font size typography helper (20pt, 22pt, 24pt, 28pt, 32pt) - Compact leading for zero vertical overflow
  const getBodyTypography = () => {
    switch (fontSize) {
      case '20pt':
        return 'text-[17px] sm:text-[18px] lg:text-[19px] xl:text-[21px] leading-relaxed font-medium';
      case '22pt':
        return 'text-[18px] sm:text-[19px] lg:text-[21px] xl:text-[22px] leading-relaxed font-medium';
      case '24pt':
        return 'text-[19px] sm:text-[21px] lg:text-[22px] xl:text-[24px] leading-relaxed font-medium';
      case '28pt':
        return 'text-[21px] sm:text-[22px] lg:text-[24px] xl:text-[26px] leading-relaxed font-semibold';
      case '32pt':
        return 'text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[29px] leading-relaxed font-bold';
      default:
        return 'text-[18px] sm:text-[19px] lg:text-[21px] xl:text-[22px] leading-relaxed font-medium';
    }
  };

  const getTitleTypography = () => {
    switch (fontSize) {
      case '20pt':
        return 'text-lg sm:text-xl lg:text-2xl font-black tracking-tight';
      case '22pt':
        return 'text-xl sm:text-2xl lg:text-2xl font-black tracking-tight';
      case '24pt':
        return 'text-xl sm:text-2xl lg:text-3xl font-black tracking-tight';
      case '28pt':
        return 'text-2xl sm:text-3xl lg:text-3xl font-black tracking-tight';
      case '32pt':
        return 'text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight';
      default:
        return 'text-xl sm:text-2xl lg:text-3xl font-black tracking-tight';
    }
  };

  // Helper for prominent color highlighting of bullet prefixes - da dang mau, xoay vong khi khong khop tu khoa co dinh
  const PREFIX_COLOR_CYCLE = [
    'bg-sky-100 text-sky-900 border border-sky-300 dark:bg-sky-950/70 dark:text-sky-200 dark:border-sky-700',
    'bg-teal-100 text-teal-900 border border-teal-300 dark:bg-teal-950/70 dark:text-teal-200 dark:border-teal-700',
    'bg-fuchsia-100 text-fuchsia-900 border border-fuchsia-300 dark:bg-fuchsia-950/70 dark:text-fuchsia-200 dark:border-fuchsia-700',
    'bg-orange-100 text-orange-900 border border-orange-300 dark:bg-orange-950/70 dark:text-orange-200 dark:border-orange-700',
    'bg-cyan-100 text-cyan-900 border border-cyan-300 dark:bg-cyan-950/70 dark:text-cyan-200 dark:border-cyan-700',
    'bg-lime-100 text-lime-900 border border-lime-300 dark:bg-lime-950/70 dark:text-lime-200 dark:border-lime-700',
  ];

  const getPrefixBadgeClass = (prefix: string, cycleIndex: number = 0) => {
    const p = prefix.toLowerCase();
    if (p.includes('định nghĩa') || p.includes('khái niệm')) {
      return 'bg-indigo-100 text-indigo-900 border border-indigo-300 dark:bg-indigo-950/70 dark:text-indigo-200 dark:border-indigo-700';
    }
    if (p.includes('ví dụ') || p.includes('ứng dụng') || p.includes('thực tế')) {
      return 'bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-200 dark:border-emerald-700';
    }
    if (p.includes('lưu ý') || p.includes('chú ý') || p.includes('cảnh báo')) {
      return 'bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/70 dark:text-amber-200 dark:border-amber-700';
    }
    if (p.includes('đặc điểm') || p.includes('nguyên lý') || p.includes('cốt lõi')) {
      return 'bg-purple-100 text-purple-900 border border-purple-300 dark:bg-purple-950/70 dark:text-purple-200 dark:border-purple-700';
    }
    if (p.includes('bước') || /^\d+\./.test(prefix)) {
      return 'bg-rose-100 text-rose-900 border border-rose-300 dark:bg-rose-950/70 dark:text-rose-200 dark:border-rose-700';
    }
    return PREFIX_COLOR_CYCLE[cycleIndex % PREFIX_COLOR_CYCLE.length];
  };

  const getVisualTypeLabel = (type: string) => {
    switch (type) {
      case 'title': return 'Tiêu Đề Bài Học';
      case 'intro': return 'Khởi Động Gợi Mở';
      case 'concepts': return 'Khái Niệm Cốt Lõi';
      case 'comparison': return 'So Sánh Đối Chiếu';
      case 'diagram': return 'Sơ Đồ Trực Quan';
      case 'activity': return 'Hoạt Động Trải Nghiệm';
      case 'quiz': return 'Trắc Nghiệm Củng Cố';
      case 'summary': return 'Tổng Kết Ghi Nhớ';
      default: return 'Bài Giảng';
    }
  };

  const getVisualTypeBadgeStyle = (type: string) => {
    switch (type) {
      case 'title':
        return 'bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-400 shadow-xs';
      case 'intro':
        return 'bg-gradient-to-r from-sky-600 to-blue-600 text-white border-sky-400 shadow-xs';
      case 'concepts':
        return 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-indigo-400 shadow-xs';
      case 'comparison':
        return 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400 shadow-xs';
      case 'diagram':
        return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-xs';
      case 'activity':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-400 shadow-xs';
      case 'quiz':
        return 'bg-gradient-to-r from-rose-600 to-red-600 text-white border-rose-400 shadow-xs';
      case 'summary':
        return 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-teal-400 shadow-xs';
      default:
        return 'bg-indigo-600 text-white border-indigo-400';
    }
  };

  // Helper to render slide content items cleanly with colorful header highlighting, step reveal, and no overflow
  const renderCleanBullets = (bullets: string[], options?: { checkmarks?: boolean }, baseStep: number = 0) => {
    const spacingClass = fontSize === '32pt' ? 'space-y-4 sm:space-y-5' : fontSize === '28pt' ? 'space-y-4 sm:space-y-4.5' : 'space-y-3.5 sm:space-y-4';

    return (
      <div className={spacingClass}>
        {bullets.map((rawBullet, idx) => {
          const stepIndex = baseStep + idx;
          const isVisible = isStepVisible(stepIndex);
          const isFocused = isStepFocused(stepIndex);

          const hasLeadingBullet = /^[\s]*[•\-\*]\s*/.test(rawBullet);
          const clean = rawBullet.replace(/^[\s]*[•\-\*]\s*/, '').trim();

          if (!clean) return null;

          // Check if this line acts as a category/section header (e.g. "Đặc điểm cốt lõi:", "Khả năng cốt lõi bao gồm:")
          const isCategoryHeader = clean.endsWith(':') && clean.length < 55;

          // Check if it has a bold title prefix (e.g. "Định nghĩa:", "Ví dụ thực tế:", "1. Máy phản ứng:")
          const prefixMatch = clean.match(/^([^:]{2,30}:)\s*(.*)$/);
          const prefix = prefixMatch ? prefixMatch[1] : null;
          const remainingText = prefixMatch ? prefixMatch[2] : clean;

          if (isCategoryHeader) {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? {
                  opacity: 1,
                  x: 0,
                  scale: isFocused ? 1.02 : 1
                } : {
                  opacity: 0,
                  x: -20,
                  pointerEvents: 'none'
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ visibility: isVisible ? 'visible' : 'hidden' }}
                className={`pt-1.5 pb-0.5 flex items-center gap-2 transition-all ${
                  isFocused ? "ring-2 ring-indigo-400/80 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/50 p-1" : ""
                }`}
              >
                <span className="w-2.5 h-5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-600 shrink-0 shadow-2xs" />
                <span className={`${getBodyTypography()} font-black text-indigo-950 dark:text-indigo-100 tracking-tight bg-gradient-to-r from-indigo-100/90 via-indigo-50 to-transparent dark:from-indigo-950/80 dark:via-indigo-900/40 px-3 py-1 rounded-xl border border-indigo-200/80 dark:border-indigo-800/80 shadow-2xs`}>
                  {clean}
                </span>
              </motion.div>
            );
          }

          const isIndented = hasLeadingBullet;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? {
                opacity: 1,
                x: 0,
                scale: isFocused ? 1.015 : 1
              } : {
                opacity: 0,
                x: -20,
                pointerEvents: 'none'
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ visibility: isVisible ? 'visible' : 'hidden' }}
              className={`flex items-start gap-2.5 sm:gap-3 ${getBodyTypography()} text-slate-800 dark:text-slate-200 transition-all ${
                isIndented ? "pl-4 sm:pl-6" : ""
              } ${
                isFocused ? "ring-2 ring-indigo-400/80 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 px-2 py-1 shadow-xs" : ""
              }`}
            >
              {options?.checkmarks ? (
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-black shrink-0 text-xs flex items-center justify-center mt-0.5 border border-emerald-300 shadow-2xs">✓</span>
              ) : isIndented ? (
                <span className="w-2 h-2 rounded-full bg-indigo-400 dark:bg-indigo-500 shrink-0 mt-2" />
              ) : /neuron|não người|não bộ|tế bào thần kinh/i.test(clean) ? (
                <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 shrink-0 mt-0.5 flex items-center justify-center border border-indigo-300 dark:border-indigo-700 shadow-2xs">
                  <Brain className="w-3 h-3" />
                </span>
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 mt-2 shadow-2xs" />
              )}

              <span className="leading-snug">
                {prefix ? (
                  <>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md font-black mr-1.5 text-xs sm:text-sm tracking-tight shadow-2xs ${getPrefixBadgeClass(prefix, idx)}`}>
                      {prefix}
                    </span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{remainingText}</span>
                  </>
                ) : (
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{clean}</span>
                )}
              </span>
            </motion.div>
          );
        })}
      </div>
    );
  };

  // Helper to render the interactive Visual/Video Card with instant play, modal expand, and step reveal
  const renderVisualCard = (stepIndex: number, fallbackLabel: string = "Minh họa bài học", showVideoTab: boolean = false, cardAspectClass: string = "aspect-[16/10] max-h-[36vh] w-full") => {
    const isVisible = isStepVisible(stepIndex);
    const isFocused = isStepFocused(stepIndex);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={isVisible ? {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" }
        } : {
          opacity: 0,
          scale: 0.92,
          y: 15,
          pointerEvents: 'none'
        }}
        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
        className="w-full flex justify-center"
      >
        <div className={`relative rounded-2xl overflow-hidden shadow-xl border-4 ${cardAspectClass} bg-slate-900 flex items-center justify-center group transition-all duration-300 ${
          isFocused
            ? "border-indigo-500 ring-4 ring-indigo-300/80 shadow-indigo-500/20"
            : "border-white dark:border-slate-800"
        }`}>
          {/* Top Controls: Media Switcher and Fullscreen Modal button */}
          <div className="absolute top-2.5 inset-x-2.5 z-20 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center bg-slate-950/85 backdrop-blur-md p-1 rounded-xl border border-white/20 shadow-md">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMediaTab('image');
                  setIsInlineVideoPlaying(false);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeMediaTab === 'image'
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Ảnh HD</span>
              </button>
              {showVideoTab && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMediaTab('video');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeMediaTab === 'video'
                      ? "bg-rose-600 text-white shadow-xs"
                      : "text-amber-300 hover:text-white"
                  }`}
                >
                  <Film className="w-3 h-3 fill-current" />
                  <span>Video Bài Học</span>
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowVideoModal(true);
              }}
              className="bg-slate-950/85 hover:bg-slate-800 text-white px-2.5 py-1 rounded-xl text-xs font-bold border border-white/20 shadow-md transition-all cursor-pointer flex items-center gap-1.5 hover:scale-105"
              title="Phóng to video lớp học & câu hỏi thảo luận sư phạm"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Phóng to</span>
            </button>
          </div>

          {/* Media Content Area */}
          {activeMediaTab === 'image' ? (
            <>
              {currentSlide.visualUrl ? (
                <img
                  src={currentSlide.visualUrl}
                  alt={currentSlide.visualLabel || fallbackLabel}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${currentSlide.visualType === 'summary' ? 'object-contain p-3' : 'object-cover'}`}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-slate-400">
                  <Sparkles className="w-10 h-10 text-indigo-400 mb-2 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">{fallbackLabel}</span>
                </div>
              )}

              {/* Direct Quick Play Video Overlay on Image - chi hien o slide duoc chi dinh de tranh trung video giua cac slide */}
              {showVideoTab && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMediaTab('video');
                    setIsInlineVideoPlaying(true);
                  }}
                  className="absolute bottom-11 right-3 z-20 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 hover:scale-105 active:scale-95 text-white text-xs font-black px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-2xl border border-white/40 cursor-pointer transition-all"
                  title="Bấm để phát trực tiếp video bài học này"
                >
                  <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white translate-x-0.5" />
                  </div>
                  <span>Phát Trực Tiếp Video ({currentVideo.duration})</span>
                </button>
              )}

              {/* Bottom Label Bar */}
              <div className="absolute bottom-2.5 inset-x-2.5 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-bold border border-white/20 flex items-center justify-between shadow-lg">
                <span className="truncate">{currentSlide.visualLabel || fallbackLabel}</span>
                <span className="text-[10px] text-indigo-300 uppercase tracking-widest font-mono shrink-0 ml-2">HD</span>
              </div>
            </>
          ) : (
            /* Video Tab Active */
            <div className="w-full h-full bg-black relative flex items-center justify-center">
              {isInlineVideoPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0&hl=vi&cc_lang_pref=vi&cc_load_policy=1`}
                  title={currentVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={currentVideo.thumbnailUrl || currentSlide.visualUrl}
                    alt={currentVideo.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 flex flex-col items-center justify-center p-4 text-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsInlineVideoPlaying(true);
                      }}
                      className="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 hover:scale-110 active:scale-95 text-white flex items-center justify-center shadow-2xl transition-all cursor-pointer ring-4 ring-white/30 mb-2"
                    >
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </button>
                    <span className="text-xs sm:text-sm font-black text-white line-clamp-2 drop-shadow max-w-sm">
                      {currentVideo.title}
                    </span>
                    <span className="text-[11px] text-amber-300 font-extrabold uppercase mt-1">
                      Thời lượng: {currentVideo.duration} • Bấm để phát trực tiếp
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  // Custom diagram SVG rendering - Vector HD sắc nét tuyệt đối, tỷ lệ 16:7 không biến dạng elip
  const renderDiagram = (data: typeof currentSlide.diagramData) => {
    if (!data) return null;

    // Coordinate mapping to 960x380 SVG area
    const mapX = (x: number) => 80 + (x / 100) * 800;
    const mapY = (y: number) => 50 + (y / 100) * 260;

    return (
      <div className="w-full flex flex-col items-center">
        {/* View Mode Switcher */}
        <div className="flex items-center justify-between w-full mb-3 px-1">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="hidden sm:inline">Sơ đồ cấu trúc liên kết chuẩn vector HD không bể nét</span>
          </div>

          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setDiagramViewMode('vector')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                diagramViewMode === 'vector'
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Sơ Đồ Vector</span>
            </button>
            <button
              onClick={() => setDiagramViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                diagramViewMode === 'cards'
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Thẻ Mốc Chi Tiết</span>
            </button>
          </div>
        </div>

        {diagramViewMode === 'vector' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-gradient-to-br from-slate-50 via-indigo-50/20 to-slate-100 dark:from-slate-900 dark:via-indigo-950/30 dark:to-slate-900 rounded-3xl border-2 border-indigo-200/80 dark:border-indigo-900/60 p-4 md:p-6 shadow-xl relative overflow-hidden select-none"
          >
            {/* Subtle Matrix dot grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

            <svg
              className="w-full h-auto max-h-[46vh] overflow-visible"
              viewBox="0 0 960 380"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <marker
                  id="diagArrow"
                  viewBox="0 0 10 10"
                  refX="38"
                  refY="5"
                  markerWidth="8"
                  markerHeight="8"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#6366f1" />
                </marker>
                <filter id="diagShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" floodColor="#1e1b4b" />
                </filter>
                <filter id="badgeShadow" x="-10%" y="-15%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.12" floodColor="#0f172a" />
                </filter>
              </defs>

              {/* Render Connections */}
              {data.links.map((link, idx) => {
                const sourceNode = data.nodes.find(n => n.id === link.source);
                const targetNode = data.nodes.find(n => n.id === link.target);
                if (!sourceNode || !targetNode) return null;

                const sx = mapX(sourceNode.x);
                const sy = mapY(sourceNode.y);
                const tx = mapX(targetNode.x);
                const ty = mapY(targetNode.y);
                const mx = (sx + tx) / 2;
                const my = (sy + ty) / 2;

                return (
                  <g key={`link-${idx}`}>
                    <line
                      x1={sx}
                      y1={sy}
                      x2={tx}
                      y2={ty}
                      stroke="#c7d2fe"
                      strokeWidth="6"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                    <line
                      x1={sx}
                      y1={sy}
                      x2={tx}
                      y2={ty}
                      stroke="#4f46e5"
                      strokeWidth="3.5"
                      strokeDasharray="8 6"
                      strokeLinecap="round"
                      markerEnd="url(#diagArrow)"
                    />
                    {link.label && (
                      <g transform={`translate(${mx}, ${my})`}>
                        <rect
                          x={-Math.max(45, link.label.length * 5)}
                          y={-14}
                          width={Math.max(90, link.label.length * 10)}
                          height="28"
                          rx="14"
                          fill="#ffffff"
                          stroke="#818cf8"
                          strokeWidth="2"
                          filter="url(#badgeShadow)"
                        />
                        <text
                          x="0"
                          y="5"
                          textAnchor="middle"
                          fill="#312e81"
                          fontSize="13"
                          fontWeight="800"
                          fontFamily="sans-serif"
                        >
                          {link.label}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Render Nodes */}
              {data.nodes.map((node, idx) => {
                const nx = mapX(node.x);
                const ny = mapY(node.y);
                const nodeColor = node.color || "#4f46e5";

                return (
                  <g key={`node-${idx}`} className="cursor-pointer">
                    <circle
                      cx={nx}
                      cy={ny}
                      r="38"
                      fill={nodeColor}
                      opacity="0.18"
                    />
                    <circle
                      cx={nx}
                      cy={ny}
                      r="30"
                      fill={nodeColor}
                      stroke="#ffffff"
                      strokeWidth="4"
                      filter="url(#diagShadow)"
                    />
                    <circle
                      cx={nx}
                      cy={ny}
                      r="19"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <text
                      x={nx}
                      y={ny + 5}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="14"
                      fontWeight="900"
                      fontFamily="sans-serif"
                    >
                      {idx + 1}
                    </text>

                    {/* Node Label Pill below */}
                    <g transform={`translate(${nx}, ${ny + 44})`}>
                      <rect
                        x={-Math.max(70, node.label.length * 4.6)}
                        y="0"
                        width={Math.max(140, node.label.length * 9.2)}
                        height="36"
                        rx="18"
                        fill="#ffffff"
                        stroke="#e2e8f0"
                        strokeWidth="2"
                        filter="url(#badgeShadow)"
                      />
                      <text
                        x="0"
                        y="23"
                        textAnchor="middle"
                        fill="#0f172a"
                        fontSize="14"
                        fontWeight="800"
                        fontFamily="sans-serif"
                      >
                        {node.label}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </motion.div>
        ) : (
          /* Cards View */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-2"
          >
            {data.nodes.map((node, idx) => (
              <div
                key={node.id}
                className="bg-white dark:bg-slate-900 border-2 rounded-2xl p-5 shadow-lg flex flex-col justify-between relative overflow-hidden"
                style={{ borderColor: node.color ? `${node.color}50` : '#818cf850' }}
              >
                <div
                  className="absolute top-0 inset-x-0 h-2"
                  style={{ backgroundColor: node.color || '#4f46e5' }}
                />
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="w-8 h-8 rounded-full text-white flex items-center justify-center font-black text-sm shadow-md"
                      style={{ backgroundColor: node.color || '#4f46e5' }}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Giai đoạn {idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg lg:text-xl font-black text-slate-900 dark:text-white leading-snug mb-2">
                    {node.label}
                  </h4>
                </div>

                {idx < data.nodes.length - 1 && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    <span>{data.links[idx]?.label || "Chuyển tiếp"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`flex flex-col bg-slate-100 overflow-hidden select-none transition-all ${
        isFullscreen ? "fixed inset-0 z-50 bg-slate-950 text-white" : "flex-1 min-w-0"
      }`}
      id="slide-presenter-main"
    >
      
      {/* Top Controls Toolbar */}
      <div className={`px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b shrink-0 select-none ${
        isFullscreen ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200"
      }`}>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs">
            Tiết {lesson.period}
          </span>
          <h2 className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-100 truncate max-w-xs sm:max-w-sm lg:max-w-md bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
            {lesson.title}
          </h2>
        </div>

        {/* Feature Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end">
          
          {/* Cỡ Chữ Linh Hoạt 20pt, 22pt, 24pt, 28pt, 32pt Selector */}
          <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold text-slate-500 px-2 flex items-center gap-1">
              <Type className="w-3.5 h-3.5" />
              Cỡ chữ:
            </span>
            {(['20pt', '22pt', '24pt', '28pt', '32pt'] as FontSizeOption[]).map(size => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  fontSize === size
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                title={`Đặt cỡ chữ slide là ${size} (Chuẩn trình chiếu lớp học)`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Nút Bật/Tắt Hiệu Ứng Xuất Hiện Từng Đối Tượng Khi Click */}
          <button
            onClick={() => setIsClickToReveal(!isClickToReveal)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
              isClickToReveal
                ? "bg-indigo-600 text-white border-indigo-700 shadow-sm"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
            }`}
            title="Bật/Tắt hiệu ứng xuất hiện tuần tự từng đối tượng khi click chuột hoặc bấm phím mũi tên (Phím tắt: R)"
          >
            <MousePointerClick className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hiện Từng Bước:</span>
            <span>{isClickToReveal ? "BẬT (R)" : "TẮT (R)"}</span>
          </button>

          {/* Quick Reveal All if in reveal mode and steps remain */}
          {isClickToReveal && revealStep < maxSteps - 1 && (
            <button
              onClick={() => setRevealStep(maxSteps - 1)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800 transition-all cursor-pointer"
              title="Hiển thị ngay toàn bộ nội dung của slide này"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Hiện Tất Cả</span>
            </button>
          )}

          {/* Gợi Ý Câu Trả Lời Button */}
          <button
            onClick={() => setShowAnswerHint(!showAnswerHint)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer border ${
              showAnswerHint
                ? "bg-amber-500 text-white border-amber-600 shadow-sm"
                : "bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700"
            }`}
            title="Xem gợi ý câu trả lời & hướng dẫn giảng dạy (Phím tắt: H)"
          >
            <Lightbulb className="w-4 h-4 fill-current text-amber-400" />
            <span className="hidden md:inline">{showAnswerHint ? "Ẩn Gợi Ý (H)" : "💡 Gợi Ý (H)"}</span>
            <span className="md:hidden">💡 Gợi ý</span>
          </button>

          {/* Bài Tập Tương Tác Của Tiết Button */}
          <button
            onClick={() => setShowExercisesModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-950 cursor-pointer transition-all"
            title="Mở các dạng bài tập tương tác cho học sinh: Nối cặp, Đúng/Sai, Ghép Prompt, Tranh biện (Phím tắt: E)"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">Bài Tập Tương Tác ({lessonExercises.length})</span>
            <span className="sm:hidden">Bài tập ({lessonExercises.length})</span>
          </button>

          {/* Laser Pointer Toggle in Fullscreen */}
          {isFullscreen && (
            <button
              onClick={() => setIsLaserActive(!isLaserActive)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                isLaserActive
                  ? "bg-rose-600 text-white ring-2 ring-rose-400"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300"
              }`}
              title="Bật/Tắt con trỏ laser chỉ điểm"
            >
              <Crosshair className="w-3.5 h-3.5" />
              <span>Laser</span>
            </button>
          )}

          {/* Nút Trình Chiếu Toàn Màn Hình (Fullscreen Presentation) */}
          <button
            id="btn-present-fullscreen-top"
            onClick={toggleFullscreen}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] ${
              isFullscreen
                ? "bg-amber-500 hover:bg-amber-600 text-slate-950 ring-2 ring-amber-300"
                : "bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white ring-1 ring-indigo-400/50 shadow-indigo-200"
            }`}
            title={isFullscreen ? "Thu nhỏ về màn hình soạn bài (Phím Esc hoặc F)" : "Bắt đầu trình chiếu toàn màn hình (Phím F5 hoặc F)"}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-4 h-4 text-slate-950" />
                <span>Thu Nhỏ (Esc)</span>
              </>
            ) : (
              <>
                <MonitorPlay className="w-4 h-4 text-amber-300" />
                <span>Trình Chiếu Toàn Màn Hình</span>
                <span className="text-[10px] bg-white/25 px-1.5 py-0.5 rounded font-bold hidden sm:inline">F5</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Primary Slide Display Arena - Maximize viewport, minimize black border */}
      <div className={`flex-1 flex flex-col justify-center items-center overflow-hidden relative ${
        isFullscreen ? "p-1 sm:p-1.5 md:p-2" : "p-3 sm:p-4 lg:p-5"
      }`}>
        <div
          id="slide-presentation-arena"
          onClick={handleSlideArenaClick}
          onMouseMove={handleMouseMoveOnSlide}
          onMouseLeave={() => setLaserPos(null)}
          className={`w-full flex flex-col relative transition-all duration-300 cursor-pointer ${
            isFullscreen
              ? "max-w-[99vw] h-[96vh] rounded-xl bg-white text-slate-800 shadow-2xl border border-slate-700"
              : "max-w-[1550px] aspect-[16/9] max-h-[86vh] rounded-2xl bg-white text-slate-800 shadow-xl border border-slate-200/90"
          }`}
        >
          {/* Laser Pointer Dot */}
          {isLaserActive && laserPos && (
            <div
              className="absolute w-5 h-5 rounded-full bg-rose-500 shadow-[0_0_15px_#f43f5e] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 animate-pulse border-2 border-white"
              style={{ left: laserPos.x, top: laserPos.y }}
            />
          )}

          {/* Top Slide indicator bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-slate-100 z-10">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 transition-all duration-300"
              style={{ width: `${((slideIndex + 1) / lesson.slides.length) * 100}%` }}
            />
          </div>

          {/* Floating Click-to-reveal Progress Indicator Pill */}
          {isClickToReveal && (
            <div className="absolute top-2.5 right-4 z-20 flex items-center gap-2 pointer-events-none">
              <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-500/40 text-white text-[11px] font-black flex items-center gap-1.5 shadow-xl">
                <MousePointerClick className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                {revealStep < maxSteps - 1 ? (
                  <span>
                    Đối tượng <span className="text-amber-300 font-extrabold">{revealStep + 1}</span>/{maxSteps} • Nhấp chuột để hiện tiếp
                  </span>
                ) : (
                  <span className="text-emerald-300 flex items-center gap-1 font-bold">
                    <Check className="w-3 h-3 text-emerald-400" /> Đã hiện đủ • Nhấp để sang slide tiếp
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Core Content Layout Area - ZERO SCROLLBAR, FULL VIEWPORT ADAPTIVE */}
          <div className={`flex-1 flex flex-col justify-between overflow-hidden ${getContentPadding()}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex-1 flex flex-col h-full overflow-hidden"
              >
                {/* Slide Title with prominent color highlight & branding badges */}
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mb-2.5 sm:mb-3 shrink-0 border-b border-slate-100 dark:border-slate-800 pb-2.5 flex items-start justify-between gap-3"
                >
                  <div className="min-w-0 flex-1">
                    {/* Kicker / eyebrow label - phong cach slide chuyen nghiep: nhan phan loai mau vang dong bo tren dau moi slide */}
                    <div className="flex items-center gap-1.5 mb-1 sm:mb-1.5">
                      <span className="w-4 sm:w-5 h-[2.5px] rounded-full bg-amber-500 shrink-0" />
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.12em] text-amber-600 dark:text-amber-400">
                        {getVisualTypeLabel(currentSlide.visualType)}
                      </span>
                    </div>
                    <h2 className={`${getTitleTypography()} text-slate-900 dark:text-white leading-snug flex items-center gap-2 tracking-tight`}>
                      <span className="w-2 h-5 sm:h-6 lg:h-7 rounded-full bg-gradient-to-b from-teal-600 to-indigo-600 shrink-0 hidden sm:inline-block shadow-2xs" />
                      <span className="truncate">
                        {currentSlide.title}
                      </span>
                    </h2>
                  </div>


                </motion.div>

                {/* Conditional Layouts based on visualType - High-Impact Colorful Presentation & Step Reveal */}
                <div className="flex-1 min-h-0 flex flex-col justify-center overflow-hidden">
                  
                  {/* 1. TITLE VIEW */}
                  {currentSlide.visualType === 'title' && (
                    <div className="grid grid-cols-12 gap-4 lg:gap-6 items-center h-full">
                      <div className="col-span-12 md:col-span-7 space-y-4 sm:space-y-5 bg-gradient-to-br from-white via-white to-indigo-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30 border border-slate-200/70 dark:border-slate-800/70 rounded-2xl p-5 lg:p-6 shadow-lg relative overflow-hidden">
                        {/* Diem nhan trang trong: dai mau goc tren va huy hieu truong */}
                        <span className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-indigo-600 to-violet-700" />
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35 }}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md border border-amber-400/40 mb-1"
                        >
                          <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                          <span>Trường THPT Tân Lược • Design by: Nguyễn Phước Hậu</span>
                        </motion.div>
                        {(() => {
                          const TITLE_LINE_STYLES = [
                            "text-teal-800 dark:text-teal-300 font-bold border-l-4 sm:border-l-6 border-teal-500 pl-3 sm:pl-4 py-1 bg-teal-50/70 dark:bg-teal-950/30 rounded-r-xl",
                            "text-amber-900 dark:text-amber-200 font-bold border-l-4 sm:border-l-6 border-amber-500 pl-3 sm:pl-4 py-1 bg-amber-50/70 dark:bg-amber-950/30 rounded-r-xl",
                            "text-rose-900 dark:text-rose-200 font-bold border-l-4 sm:border-l-6 border-rose-500 pl-3 sm:pl-4 py-1 bg-rose-50/70 dark:bg-rose-950/30 rounded-r-xl"
                          ];
                          return currentSlide.content.map((bullet, idx) => {
                            const isVisible = isStepVisible(idx);
                            const isFocused = isStepFocused(idx);
                            const clean = bullet.replace(/^[\s]*[•\-\*]\s*/, '').trim();

                            return (
                              <motion.p
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isVisible ? {
                                  opacity: 1,
                                  x: 0,
                                  scale: isFocused ? 1.02 : 1
                                } : {
                                  opacity: 0,
                                  x: -20,
                                  pointerEvents: 'none'
                                }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                style={{ visibility: isVisible ? 'visible' : 'hidden' }}
                                className={`${getBodyTypography()} leading-relaxed transition-all ${
                                  idx === 0
                                    ? "text-white font-black bg-gradient-to-r from-indigo-800 via-indigo-700 to-violet-700 px-4 py-3 rounded-2xl shadow-md border border-indigo-400/30"
                                    : TITLE_LINE_STYLES[(idx - 1) % TITLE_LINE_STYLES.length]
                                } ${
                                  isFocused ? "ring-2 ring-amber-400 shadow-lg" : ""
                                }`}
                              >
                                {clean}
                              </motion.p>
                            );
                          });
                        })()}
                      </div>
                      <div className="col-span-12 md:col-span-5 flex justify-center">
                        {renderVisualCard(currentSlide.content.length, "Minh họa kỷ nguyên AI")}
                      </div>
                    </div>
                  )}

                  {/* 2. INTRO VIEW */}
                  {currentSlide.visualType === 'intro' && (
                    <div className="grid grid-cols-12 gap-4 lg:gap-6 items-stretch h-full">
                      <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
                        {renderVisualCard(0, "Hình Ảnh Khởi Động", true)}
                      </div>
                      <div className="col-span-12 md:col-span-7 bg-indigo-50/50 dark:bg-indigo-950/20 p-4 lg:p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/40 flex flex-col justify-center">
                        {renderCleanBullets(currentSlide.content, undefined, 1)}
                      </div>
                    </div>
                  )}

                  {/* 3. CONCEPTS VIEW */}
                  {currentSlide.visualType === 'concepts' && (
                    <div className="grid grid-cols-12 gap-4 lg:gap-6 items-stretch h-full">
                      <div className="col-span-12 md:col-span-7 bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 lg:p-5 flex flex-col justify-center shadow-2xs">
                        {renderCleanBullets(currentSlide.content, undefined, 0)}
                      </div>
                      <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
                        {renderVisualCard(currentSlide.content.length, "Khái Niệm Cốt Lõi HD", !!currentSlide.video)}
                      </div>
                    </div>
                  )}

                  {/* 4. DIAGRAM VIEW */}
                  {currentSlide.visualType === 'diagram' && (
                    <div className="space-y-2.5 h-full flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={isStepVisible(0) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.35 }}
                        className={isStepFocused(0) ? "ring-4 ring-indigo-400/80 rounded-2xl p-1" : ""}
                      >
                        {currentSlide.diagramData && renderDiagram(currentSlide.diagramData)}
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={isStepVisible(1) ? {
                          opacity: 1,
                          y: 0,
                          scale: isStepFocused(1) ? 1.02 : 1
                        } : {
                          opacity: 0,
                          y: 10,
                          pointerEvents: 'none'
                        }}
                        style={{ visibility: isStepVisible(1) ? 'visible' : 'hidden' }}
                        transition={{ duration: 0.35 }}
                        className={`${getBodyTypography()} text-slate-700 dark:text-slate-300 italic text-center font-bold transition-all ${
                          isStepFocused(1) ? "bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl ring-2 ring-indigo-400" : ""
                        }`}
                      >
                        {currentSlide.content[0] || "Sơ đồ minh họa trực quan thuật toán và liên kết thông minh"}
                      </motion.p>
                    </div>
                  )}

                  {/* 5. COMPARISON VIEW */}
                  {currentSlide.visualType === 'comparison' && currentSlide.comparisonData && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
                      {/* Left Column */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isStepVisible(0) ? {
                          opacity: 1,
                          x: 0,
                          scale: isStepFocused(0) ? 1.02 : 1
                        } : {
                          opacity: 0,
                          x: -30,
                          pointerEvents: 'none'
                        }}
                        style={{ visibility: isStepVisible(0) ? 'visible' : 'hidden' }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className={`bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 sm:p-4.5 shadow-xs flex flex-col transition-all ${
                          isStepFocused(0) ? "ring-4 ring-amber-400/90 shadow-xl" : ""
                        }`}
                      >
                        <h4 className="text-sm sm:text-base lg:text-lg font-black text-white bg-gradient-to-r from-amber-500 to-orange-500 p-2 sm:p-2.5 rounded-xl mb-2.5 tracking-wide uppercase flex items-center gap-2 shadow-2xs">
                          <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                          <span className="whitespace-normal break-words leading-snug">{currentSlide.comparisonData.leftTitle}</span>
                        </h4>
                        <div className="space-y-2 sm:space-y-2.5">
                          {currentSlide.comparisonData.leftItems.map((item, idx) => (
                            <p
                              key={idx}
                              className={`${getBodyTypography()} text-slate-700 dark:text-slate-300 flex gap-2.5 leading-snug`}
                            >
                              <span className="font-bold text-amber-500">•</span>
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </motion.div>

                      {/* Right Column */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isStepVisible(1) ? {
                          opacity: 1,
                          x: 0,
                          scale: isStepFocused(1) ? 1.02 : 1
                        } : {
                          opacity: 0,
                          x: 30,
                          pointerEvents: 'none'
                        }}
                        style={{ visibility: isStepVisible(1) ? 'visible' : 'hidden' }}
                        transition={{ duration: 0.35, delay: 0.06, ease: "easeOut" }}
                        className={`bg-indigo-50/50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-900/40 rounded-2xl p-3.5 sm:p-4.5 shadow-xs flex flex-col transition-all ${
                          isStepFocused(1) ? "ring-4 ring-indigo-400/90 shadow-xl" : ""
                        }`}
                      >
                        <h4 className="text-sm sm:text-base lg:text-lg font-black text-white bg-gradient-to-r from-indigo-600 to-violet-600 p-2 sm:p-2.5 rounded-xl mb-2.5 tracking-wide uppercase flex items-center gap-2 shadow-2xs">
                          <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                          <span className="whitespace-normal break-words leading-snug">{currentSlide.comparisonData.rightTitle}</span>
                        </h4>
                        <div className="space-y-2 sm:space-y-2.5">
                          {currentSlide.comparisonData.rightItems.map((item, idx) => (
                            <p
                              key={idx}
                              className={`${getBodyTypography()} text-indigo-950 dark:text-indigo-200 flex gap-2.5 leading-snug`}
                            >
                              <span className="font-bold text-indigo-500">•</span>
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* 6. ACTIVITY VIEW */}
                  {currentSlide.visualType === 'activity' && currentSlide.activity && (
                    <div className="grid grid-cols-12 gap-3 sm:gap-5 items-center h-full">
                      <div className="col-span-12 md:col-span-8 bg-amber-50/60 dark:bg-amber-950/25 border-2 border-amber-300/80 dark:border-amber-900/50 rounded-2xl p-3.5 sm:p-4.5 flex flex-col justify-between shadow-2xs">
                        <div>
                          <div className="flex items-center gap-2 mb-2 p-2 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-xs">
                            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                            <h4 className="text-sm sm:text-base lg:text-lg font-black uppercase tracking-wide truncate">
                              {currentSlide.activity.title}
                            </h4>
                          </div>
                          <div className="space-y-1.5 sm:space-y-2">
                            {currentSlide.activity.instructions.map((inst, idx) => {
                              const stepIdx = 1 + idx;
                              const isVisible = isStepVisible(stepIdx);
                              const isFocused = isStepFocused(stepIdx);

                              return (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -12 }}
                                  animate={isVisible ? {
                                    opacity: 1,
                                    x: 0,
                                    scale: isFocused ? 1.02 : 1
                                  } : {
                                    opacity: 0,
                                    x: -12,
                                    pointerEvents: 'none'
                                  }}
                                  style={{ visibility: isVisible ? 'visible' : 'hidden' }}
                                  transition={{ duration: 0.3 }}
                                  className={`${getBodyTypography()} text-slate-800 dark:text-slate-200 flex items-start gap-2.5 transition-all ${
                                    isFocused ? "bg-amber-100/80 p-1 rounded-xl ring-2 ring-amber-400" : ""
                                  }`}
                                >
                                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                    {idx + 1}
                                  </span>
                                  <span className="font-medium leading-snug">{inst}</span>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                        {(() => {
                          const tipStep = 1 + currentSlide.activity.instructions.length;
                          const isVisible = isStepVisible(tipStep);
                          const isFocused = isStepFocused(tipStep);

                          return (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={isVisible ? {
                                opacity: 1,
                                y: 0,
                                scale: isFocused ? 1.02 : 1
                              } : {
                                opacity: 0,
                                y: 10,
                                pointerEvents: 'none'
                              }}
                              style={{ visibility: isVisible ? 'visible' : 'hidden' }}
                              transition={{ duration: 0.3 }}
                              className={`mt-2.5 p-2 sm:p-2.5 bg-amber-100/90 dark:bg-amber-900/40 rounded-xl border border-amber-300 dark:border-amber-700/60 flex items-start gap-2 text-xs sm:text-sm text-amber-950 dark:text-amber-200 font-semibold transition-all ${
                                isFocused ? "ring-3 ring-amber-500 shadow-md" : ""
                              }`}
                            >
                              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
                              <span className="leading-snug"><strong className="text-amber-900 font-black">Mẹo giảng dạy:</strong> {currentSlide.activity.tips}</span>
                            </motion.div>
                          );
                        })()}
                      </div>

                      {/* Timer Circle */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.92, x: 25 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
                        className="col-span-12 md:col-span-4 flex flex-col items-center justify-center p-3.5 sm:p-4.5 bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-slate-800 rounded-2xl shadow-lg"
                      >
                        <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 dark:text-indigo-400 mb-1" />
                        <span className="text-[10px] sm:text-xs font-black text-slate-400 tracking-wider uppercase mb-1">
                          Đồng Hồ Hoạt Động
                        </span>
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3 tabular-nums">
                          {formatTime(timeLeft)}
                        </div>
                        <button
                          onClick={() => setIsTimerRunning(!isTimerRunning)}
                          className={`w-full py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                            isTimerRunning
                              ? "bg-rose-500 hover:bg-rose-600 text-white"
                              : "bg-indigo-600 hover:bg-indigo-700 text-white"
                          }`}
                        >
                          {isTimerRunning ? "Tạm Dừng" : "Bắt Đầu Đếm Ngược"}
                        </button>
                      </motion.div>
                    </div>
                  )}

                  {/* 7. QUIZ VIEW */}
                  {currentSlide.visualType === 'quiz' && currentSlide.interactiveQuiz && (
                    <div className="space-y-3 sm:space-y-3.5">
                      {/* Question card */}
                      <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-3 sm:p-3.5 bg-gradient-to-r from-indigo-600 to-violet-700 text-white rounded-2xl flex items-center gap-3 shadow-md"
                      >
                        <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300 shrink-0" />
                        <p className={`${getBodyTypography()} font-black leading-snug text-white`}>
                          {currentSlide.interactiveQuiz.question}
                        </p>
                      </motion.div>

                      {/* Options Grid */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isStepVisible(1) ? { opacity: 1 } : { opacity: 0, pointerEvents: 'none' }}
                        style={{ visibility: isStepVisible(1) ? 'visible' : 'hidden' }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5"
                      >
                        {currentSlide.interactiveQuiz.options.map((option, idx) => {
                          const isSelected = selectedQuizOption === idx;
                          const isCorrect = idx === currentSlide.interactiveQuiz?.answerIndex;

                          let btnStyle = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 text-slate-800 hover:border-indigo-400";
                          if (hasAnsweredQuiz) {
                            if (isCorrect) {
                              btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 shadow-md ring-2 ring-emerald-400";
                            } else if (isSelected) {
                              btnStyle = "border-rose-500 bg-rose-50 text-rose-950 shadow-md ring-2 ring-rose-400";
                            } else {
                              btnStyle = "border-slate-200 bg-slate-50 text-slate-400 opacity-60";
                            }
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => handleQuizAnswer(idx)}
                              disabled={hasAnsweredQuiz}
                              className={`w-full text-left p-2.5 sm:p-3 rounded-xl border-2 ${getBodyTypography()} font-bold transition-all flex items-start justify-between gap-2 cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-start gap-2 min-w-0">
                                <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full font-black text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                                  hasAnsweredQuiz && isCorrect
                                    ? "bg-emerald-600 text-white"
                                    : hasAnsweredQuiz && isSelected && !isCorrect
                                    ? "bg-rose-600 text-white"
                                    : "bg-indigo-100 text-indigo-800"
                                }`}>
                                  {String.fromCharCode(65 + idx)}
                                </span>
                                <span className="whitespace-normal break-words leading-snug">{option}</span>
                              </div>
                              {hasAnsweredQuiz && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                              {hasAnsweredQuiz && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                            </button>
                          );
                        })}
                      </motion.div>

                      {/* Explanations Display */}
                      {(hasAnsweredQuiz || isStepVisible(2)) && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.96, y: 8 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-900 border-2 border-indigo-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-snug font-semibold"
                        >
                          <span className="font-extrabold text-indigo-900">💡 Giải thích khoa học: </span>
                          {currentSlide.interactiveQuiz.explanation}
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* 8. SUMMARY VIEW */}
                  {currentSlide.visualType === 'summary' && (
                    <div className="grid grid-cols-12 gap-4 lg:gap-6 items-stretch h-full">
                      <div className="col-span-12 md:col-span-7 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 rounded-2xl p-4 lg:p-5 flex flex-col justify-center shadow-2xs">
                        {renderCleanBullets(currentSlide.content, { checkmarks: true }, 0)}
                      </div>
                      <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center">
                        {renderVisualCard(currentSlide.content.length, "Tổng kết bài học", false, "aspect-[9/16] max-h-[65vh] w-auto mx-auto")}
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Collapsible Answer Hint Panel right on the slide */}
          <AnimatePresence>
            {showAnswerHint && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-amber-50 border-t-2 border-amber-300 p-3 sm:p-4 shrink-0 select-text"
              >
                <div className="max-w-5xl mx-auto space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-amber-900 font-black text-xs sm:text-sm uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4 text-amber-600" />
                      <span>Phần Gợi Ý Câu Trả Lời & Hướng Dẫn Sư Phạm Cho Slide</span>
                    </div>
                    <button
                      onClick={() => setShowAnswerHint(false)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-900 px-2 py-0.5 bg-amber-100 rounded-md cursor-pointer"
                    >
                      Đóng gợi ý (H)
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                      <span className="font-bold text-amber-700 block mb-0.5">💡 Gợi ý tư duy cho học sinh:</span>
                      {currentHints.hint}
                    </div>
                    <div className="p-2.5 sm:p-3 bg-indigo-50/60 rounded-xl border border-indigo-200 text-xs sm:text-sm text-indigo-950 font-medium leading-relaxed">
                      <span className="font-bold text-indigo-700 block mb-0.5">🎯 Đáp án / Kết luận sư phạm gợi ý:</span>
                      {currentHints.suggestedAnswer}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation and state bar at slide footer */}
          <div className="bg-slate-50/95 border-t border-slate-200/90 px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between select-none shrink-0">
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700 hidden sm:flex">
              <span className="text-indigo-800 font-black bg-indigo-100 px-2 py-0.5 rounded shadow-2xs">
                Trường THPT Tân Lược
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-violet-800 font-bold bg-violet-100 px-2 py-0.5 rounded">
                Design by: Nguyễn Phước Hậu
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-medium hidden md:inline">
                Chuyên đề Ứng dụng AI (GDPT 2018)
              </span>
            </div>
            <div className="text-[11px] font-bold text-indigo-800 sm:hidden truncate">
              THPT Tân Lược • Nguyễn Phước Hậu
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2 sm:gap-3 ml-auto sm:ml-0">
              <button
                onClick={() => onNavigateSlide(slideIndex - 1)}
                disabled={isFirstSlide}
                className={`h-9 sm:h-10 px-3 rounded-xl border-2 flex items-center justify-center transition-all cursor-pointer font-bold text-xs ${
                  isFirstSlide
                    ? "border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed"
                    : "border-slate-300 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 shadow-xs"
                }`}
                title="Quay lại slide trước (Phím mũi tên Trái)"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-0.5" />
                <span>Trước</span>
              </button>

              <span className="text-xs sm:text-sm font-black text-slate-800 tabular-nums px-2 sm:px-3 bg-white py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                {slideIndex + 1} / {lesson.slides.length}
              </span>

              <button
                onClick={() => {
                  if (isLastSlide) {
                    onLessonComplete(lesson.period);
                  } else {
                    onNavigateSlide(slideIndex + 1);
                  }
                }}
                className="h-9 sm:h-10 px-4 sm:px-5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-xs font-black transition-all shadow-md shadow-indigo-100 cursor-pointer flex items-center gap-1.5"
                title={isLastSlide ? "Hoàn tất bài học này" : "Đến slide tiếp theo (Phím mũi tên Phải hoặc Phím Cách)"}
              >
                <span>{isLastSlide ? "Hoàn Thành Tiết Học" : "Slide Tiếp Theo"}</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Speaker Notes Script for Teachers (only in standard view) */}
      {!isFullscreen && (
        <div className="bg-white border-t border-slate-200 shrink-0">
          <div className="px-6 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between select-none">
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-indigo-600" />
              <span>KỊCH BẢN GIẢNG DẠY CỦA GIÁO VIÊN (SPEAKER NOTES)</span>
            </button>
            <button
              onClick={handleCopyNotes}
              className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              {copiedNotes ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Đã sao chép!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Sao chép lời thoại
                </>
              )}
            </button>
          </div>

          {showNotes && (
            <div className="p-4 max-h-32 overflow-y-auto">
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold">
                {currentSlide.speakerNotes}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Modal Interactive Exercises for Students */}
      {showExercisesModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-5xl h-[90vh] flex flex-col">
            <InteractiveExercisesView
              exercises={lessonExercises}
              period={lesson.period}
              onClose={() => setShowExercisesModal(false)}
            />
          </div>
        </div>
      )}

      {/* Video Illustration Modal */}
      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        currentPeriod={lesson.period}
        video={currentVideo}
      />

    </div>
  );
};
