import React, { useState, useEffect } from 'react';
import { InteractiveExercise } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
  RotateCcw,
  Scale,
  Award,
  BookOpen,
  ArrowRight,
  Vote,
  ListOrdered,
  Gamepad2,
  Timer,
  Trophy
} from 'lucide-react';

interface InteractiveExercisesViewProps {
  exercises: InteractiveExercise[];
  period: number;
  onClose?: () => void;
  fontSizeClass?: string; // Support large classroom font scaling
}

export const InteractiveExercisesView: React.FC<InteractiveExercisesViewProps> = ({
  exercises,
  period,
  onClose,
  fontSizeClass = 'text-xl'
}) => {
  const [activeExerciseIdx, setActiveExerciseIdx] = useState(0);
  const currentEx = exercises[activeExerciseIdx] || exercises[0];

  // Hint toggle state
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  // States for Matching exercise
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({}); // leftId -> match text
  const [matchingError, setMatchingError] = useState<string | null>(null);

  // States for True/False
  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean>>({});

  // States for Prompt Builder
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedTask, setSelectedTask] = useState<string>('');
  const [selectedContext, setSelectedContext] = useState<string>('');
  const [selectedOutput, setSelectedOutput] = useState<string>('');
  const [promptEvaluated, setPromptEvaluated] = useState<boolean>(false);

  // States for Dilemma Voting
  const [selectedVote, setSelectedVote] = useState<string | null>(null);

  // States for standalone Quiz
  const [quizSelected, setQuizSelected] = useState<number | null>(null);

  // States for Speed Game (Tro Choi Do Vui Tinh Diem)
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameQIdx, setGameQIdx] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [gameSelected, setGameSelected] = useState<number | null>(null);
  const [gameTimeLeft, setGameTimeLeft] = useState(0);

  // Reset exercise-specific states when switching exercises
  const handleSelectExercise = (idx: number) => {
    setActiveExerciseIdx(idx);
    setShowHint(false);
    setShowSolution(false);
    setSelectedLeft(null);
    setMatches({});
    setMatchingError(null);
    setTfAnswers({});
    setSelectedRole('');
    setSelectedTask('');
    setSelectedContext('');
    setSelectedOutput('');
    setPromptEvaluated(false);
    setSelectedVote(null);
    setQuizSelected(null);
    setGameStarted(false);
    setGameFinished(false);
    setGameQIdx(0);
    setGameScore(0);
    setGameSelected(null);
    setGameTimeLeft(0);
  };

  // Matching logic
  const handleLeftClick = (id: string) => {
    setSelectedLeft(id);
    setMatchingError(null);
  };

  const handleRightClick = (matchText: string) => {
    if (!selectedLeft || !currentEx.matchingData) return;

    const pair = currentEx.matchingData.pairs.find(p => p.id === selectedLeft);
    if (!pair) return;

    if (pair.match === matchText) {
      setMatches(prev => ({ ...prev, [selectedLeft]: matchText }));
      setSelectedLeft(null);
      setMatchingError(null);
    } else {
      setMatchingError('Chưa chính xác, hãy đọc kỹ gợi ý và thử lại nhé!');
      setTimeout(() => setMatchingError(null), 2500);
    }
  };

  const resetMatching = () => {
    setMatches({});
    setSelectedLeft(null);
    setMatchingError(null);
  };

  // True/False logic
  const handleTfSelect = (itemId: string, choice: boolean) => {
    setTfAnswers(prev => ({ ...prev, [itemId]: choice }));
  };

  // Speed game (Tro Choi Do Vui Tinh Diem) logic
  const startGame = () => {
    setGameStarted(true);
    setGameFinished(false);
    setGameQIdx(0);
    setGameScore(0);
    setGameSelected(null);
    if (currentEx.gameData) {
      setGameTimeLeft(currentEx.gameData.timeLimitSeconds);
    }
  };

  const handleGameAnswer = (idx: number) => {
    if (gameSelected !== null || !currentEx.gameData) return;
    setGameSelected(idx);
    const q = currentEx.gameData.questions[gameQIdx];
    if (idx === q.answerIndex) {
      setGameScore(prev => prev + 1);
    }
  };

  const goToNextGameQuestion = () => {
    if (!currentEx.gameData) return;
    const isLast = gameQIdx >= currentEx.gameData.questions.length - 1;
    if (isLast) {
      setGameFinished(true);
    } else {
      setGameQIdx(prev => prev + 1);
      setGameSelected(null);
      setGameTimeLeft(currentEx.gameData.timeLimitSeconds);
    }
  };

  // Countdown timer effect for speed game
  useEffect(() => {
    if (!gameStarted || gameFinished || gameSelected !== null) return;
    if (gameTimeLeft <= 0) {
      setGameSelected(-1); // -1 = het gio, khong chon
      return;
    }
    const timerId = setTimeout(() => setGameTimeLeft(prev => prev - 1), 1000);
    return () => clearTimeout(timerId);
  }, [gameStarted, gameFinished, gameSelected, gameTimeLeft]);

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 select-none">
      
      {/* Top Header Bar */}
      <div className="bg-slate-800/90 border-b border-slate-700 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest block">
              Góc Tương Tác Học Sinh • Tiết {period}
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              {currentEx.title}
            </h3>
          </div>
        </div>

        {/* Tab switcher for multiple exercises */}
        <div className="flex items-center gap-2">
          {exercises.map((ex, idx) => (
            <button
              key={ex.id}
              onClick={() => handleSelectExercise(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeExerciseIdx === idx
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-900"
                  : "bg-slate-700/60 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {ex.type === 'matching' && '🔗 Nối Cặp'}
              {ex.type === 'true_false' && '⚖️ Đúng / Sai'}
              {ex.type === 'prompt_builder' && '🧩 Ghép Prompt'}
              {ex.type === 'ethical_dilemma' && '🗳️ Tranh Biện'}
              {ex.type === 'quiz' && '🎯 Trắc Nghiệm'}
              {ex.type === 'speed_game' && '🎮 Trò Chơi Đố Vui'}
            </button>
          ))}
          {onClose && (
            <button
              onClick={onClose}
              className="ml-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
            >
              Đóng
            </button>
          )}
        </div>
      </div>

      {/* Main Interactive Exercise Canvas */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto flex flex-col space-y-6">
        
        {/* Description & Mission */}
        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex items-start gap-3">
          <BookOpen className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-base md:text-lg font-medium text-slate-200 leading-relaxed">
              {currentEx.description}
            </p>
          </div>
        </div>

        {/* 1. MATCHING PAIRS EXERCISE */}
        {currentEx.type === 'matching' && currentEx.matchingData && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-amber-400">
                {currentEx.matchingData.instruction}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold text-slate-400">
                  Đã ghép: {Object.keys(matches).length} / {currentEx.matchingData.pairs.length} cặp
                </span>
                <button
                  onClick={resetMatching}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-md transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại
                </button>
              </div>
            </div>

            {matchingError && (
              <div className="p-3 bg-rose-950/60 border border-rose-600/60 text-rose-200 text-sm font-semibold rounded-xl flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{matchingError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column Items */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Cột A: Khái niệm / Mốc sự kiện
                </h4>
                {currentEx.matchingData.pairs.map(p => {
                  const isMatched = !!matches[p.id];
                  const isSelected = selectedLeft === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => !isMatched && handleLeftClick(p.id)}
                      disabled={isMatched}
                      className={`w-full text-left p-4 rounded-xl border text-base md:text-lg font-bold transition-all duration-200 flex items-center justify-between gap-3 ${
                        isMatched
                          ? "bg-emerald-950/40 border-emerald-500/80 text-emerald-300 opacity-90 cursor-default"
                          : isSelected
                          ? "bg-indigo-950/80 border-indigo-400 text-white ring-2 ring-indigo-400 shadow-lg"
                          : "bg-slate-800/80 border-slate-700 hover:border-slate-500 text-slate-200 hover:bg-slate-800 cursor-pointer"
                      }`}
                    >
                      <span>{p.concept}</span>
                      {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Right Column Items (Shuffled order) */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Cột B: Vai trò / Ý nghĩa tương ứng
                </h4>
                {currentEx.matchingData.pairs.map(p => {
                  const isMatched = Object.values(matches).includes(p.match);
                  return (
                    <button
                      key={`right-${p.id}`}
                      onClick={() => handleRightClick(p.match)}
                      disabled={isMatched || !selectedLeft}
                      className={`w-full text-left p-4 rounded-xl border text-base md:text-lg font-medium transition-all duration-200 flex items-center justify-between gap-3 ${
                        isMatched
                          ? "bg-emerald-950/40 border-emerald-500/80 text-emerald-300 opacity-90 cursor-default"
                          : selectedLeft
                          ? "bg-slate-800 border-indigo-500/60 hover:bg-indigo-900/40 text-slate-200 cursor-pointer hover:border-indigo-400"
                          : "bg-slate-800/40 border-slate-700/60 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      <span>{p.match}</span>
                      {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Victory Badge */}
            {Object.keys(matches).length === currentEx.matchingData.pairs.length && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-5 bg-gradient-to-r from-emerald-950/80 to-indigo-950/80 border border-emerald-500 rounded-2xl flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-base font-extrabold text-white">Xuất Sắc! Cả lớp đã ghép đúng tất cả các cặp!</h4>
                    <p className="text-xs text-emerald-200">Em đã nắm vững các khái niệm và vai trò công nghệ cốt lõi.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* 2. TRUE / FALSE RAPID CHALLENGE */}
        {currentEx.type === 'true_false' && currentEx.trueFalseData && (
          <div className="space-y-4">
            <span className="text-sm font-bold text-amber-400 block mb-1">
              {currentEx.trueFalseData.instruction}
            </span>

            <div className="space-y-4">
              {currentEx.trueFalseData.items.map((item, idx) => {
                const userChoice = tfAnswers[item.id];
                const hasAnswered = userChoice !== undefined;
                const isCorrect = userChoice === item.isTrue;

                return (
                  <div
                    key={item.id}
                    className="p-5 bg-slate-800/80 border border-slate-700/90 rounded-2xl space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-indigo-900/80 text-indigo-300 font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5 border border-indigo-700">
                        {idx + 1}
                      </span>
                      <p className="text-lg md:text-xl font-bold text-slate-100 leading-snug">
                        {item.statement}
                      </p>
                    </div>

                    {/* Dual Decision Buttons */}
                    <div className="flex items-center gap-4 pl-10">
                      <button
                        onClick={() => handleTfSelect(item.id, true)}
                        className={`px-5 py-2.5 rounded-xl font-extrabold text-base transition-all flex items-center gap-2 cursor-pointer ${
                          hasAnswered && userChoice === true
                            ? item.isTrue
                              ? "bg-emerald-600 text-white ring-2 ring-emerald-300"
                              : "bg-rose-600 text-white ring-2 ring-rose-300"
                            : "bg-slate-700 hover:bg-slate-600 text-slate-200"
                        }`}
                      >
                        ✓ ĐÚNG
                      </button>

                      <button
                        onClick={() => handleTfSelect(item.id, false)}
                        className={`px-5 py-2.5 rounded-xl font-extrabold text-base transition-all flex items-center gap-2 cursor-pointer ${
                          hasAnswered && userChoice === false
                            ? !item.isTrue
                              ? "bg-emerald-600 text-white ring-2 ring-emerald-300"
                              : "bg-rose-600 text-white ring-2 ring-rose-300"
                            : "bg-slate-700 hover:bg-slate-600 text-slate-200"
                        }`}
                      >
                        ✗ SAI
                      </button>

                      {hasAnswered && (
                        <div className="flex items-center gap-2 text-sm font-bold">
                          {isCorrect ? (
                            <span className="text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-5 h-5" /> Đúng rồi!
                            </span>
                          ) : (
                            <span className="text-rose-400 flex items-center gap-1">
                              <XCircle className="w-5 h-5" /> Chưa chính xác!
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Explanation Box */}
                    {hasAnswered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pl-10 text-sm text-slate-300 font-medium leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-700/60"
                      >
                        <span className="text-amber-400 font-bold">💡 Phân tích khoa học: </span>
                        {item.explanation}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. PROMPT BUILDER (R-T-C-O) */}
        {currentEx.type === 'prompt_builder' && currentEx.promptData && (
          <div className="space-y-6">
            <div className="p-4 bg-indigo-950/50 border border-indigo-500/40 rounded-xl">
              <h4 className="text-sm font-extrabold text-indigo-300 uppercase tracking-wide mb-1">
                Mục tiêu thử thách
              </h4>
              <p className="text-lg font-bold text-white">
                {currentEx.promptData.goal}
              </p>
            </div>

            {/* 4 Pillars Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Role */}
              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider block">
                  1. R - Role (Vai trò của AI)
                </span>
                <select
                  value={selectedRole}
                  onChange={e => setSelectedRole(e.target.value)}
                  className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <option value="">-- Chọn vai trò phù hợp --</option>
                  {currentEx.promptData.roleOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Task */}
              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
                <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-wider block">
                  2. T - Task (Nhiệm vụ cụ thể)
                </span>
                <select
                  value={selectedTask}
                  onChange={e => setSelectedTask(e.target.value)}
                  className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <option value="">-- Chọn nhiệm vụ cụ thể --</option>
                  {currentEx.promptData.taskOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Context */}
              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
                <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider block">
                  3. C - Context (Bối cảnh học sinh)
                </span>
                <select
                  value={selectedContext}
                  onChange={e => setSelectedContext(e.target.value)}
                  className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <option value="">-- Chọn bối cảnh học tập --</option>
                  {currentEx.promptData.contextOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Output */}
              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
                <span className="text-xs font-extrabold text-rose-400 uppercase tracking-wider block">
                  4. O - Output (Định dạng kết quả)
                </span>
                <select
                  value={selectedOutput}
                  onChange={e => setSelectedOutput(e.target.value)}
                  className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <option value="">-- Chọn định dạng mong muốn --</option>
                  {currentEx.promptData.outputOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Assembled Prompt Preview */}
            <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">
                Câu lệnh Prompt hoàn chỉnh sau khi lắp ghép:
              </span>
              <p className="text-base font-mono text-indigo-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                {selectedRole || '[Vai trò]'} {selectedTask || '[Nhiệm vụ]'} Bối cảnh: {selectedContext || '[Bối cảnh]'}. Định dạng đầu ra: {selectedOutput || '[Định dạng]'}.
              </p>

              <button
                onClick={() => setPromptEvaluated(true)}
                disabled={!selectedRole || !selectedTask || !selectedContext || !selectedOutput}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-extrabold rounded-xl transition-all shadow-md cursor-pointer"
              >
                Kiểm Tra Chất Lượng Câu Lệnh
              </button>
            </div>

            {promptEvaluated && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 bg-emerald-950/40 border border-emerald-500/70 rounded-2xl space-y-2"
              >
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-base">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Đánh giá từ Chuyên gia Prompt Engineering:</span>
                </div>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  {currentEx.promptData.evaluationTip}
                </p>
              </motion.div>
            )}
          </div>
        )}

        {/* 4. ETHICAL DILEMMA & CLASSROOM VOTING */}
        {currentEx.type === 'ethical_dilemma' && currentEx.dilemmaData && (
          <div className="space-y-6">
            <div className="p-6 bg-slate-800/80 border border-slate-700 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-extrabold tracking-wider uppercase">
                <Scale className="w-4.5 h-4.5" />
                <span>Tình Huống Nan Giải</span>
              </div>
              <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                {currentEx.dilemmaData.scenario}
              </p>
              <p className="text-base text-indigo-300 font-semibold italic">
                ❓ {currentEx.dilemmaData.question}
              </p>
            </div>

            {/* Voting Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentEx.dilemmaData.options.map(opt => {
                const isSelected = selectedVote === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedVote(opt.id)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer space-y-3 ${
                      isSelected
                        ? "bg-indigo-950/90 border-indigo-400 ring-2 ring-indigo-400 text-white shadow-xl"
                        : "bg-slate-800 border-slate-700 hover:border-slate-500 text-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wide">
                        {opt.standpoint}
                      </span>
                      {selectedVote && (
                        <span className="text-xs font-bold text-slate-400">
                          {opt.votesPercent}% Lớp biểu quyết
                        </span>
                      )}
                    </div>
                    <p className="text-base md:text-lg font-bold leading-snug">
                      {opt.text}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Suggested debate points */}
            {selectedVote && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-3"
              >
                <div className="flex items-center gap-2 text-indigo-400 font-extrabold text-sm uppercase tracking-wide">
                  <Vote className="w-4 h-4" />
                  <span>Gợi ý điều phối tranh biện cho giáo viên & học sinh:</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-300 leading-relaxed font-medium">
                  {currentEx.dilemmaData.suggestedDebatePoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        )}

        {/* QUIZ EXERCISE - Trac Nghiem Don */}
        {currentEx.type === 'quiz' && currentEx.quizData && (
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
              {currentEx.quizData.question}
            </p>
            <div className="grid grid-cols-1 gap-3">
              {currentEx.quizData.options.map((opt, idx) => {
                const isSelected = quizSelected === idx;
                const isCorrect = idx === currentEx.quizData!.answerIndex;
                let stateClass = "bg-slate-800 border-slate-700 hover:border-indigo-500 text-slate-200";
                if (quizSelected !== null) {
                  if (isCorrect) {
                    stateClass = "bg-emerald-950/70 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500";
                  } else if (isSelected) {
                    stateClass = "bg-rose-950/70 border-rose-500 text-rose-100 ring-2 ring-rose-500";
                  } else {
                    stateClass = "bg-slate-800/50 border-slate-800 text-slate-500";
                  }
                }
                return (
                  <button
                    key={idx}
                    onClick={() => quizSelected === null && setQuizSelected(idx)}
                    className={`p-4 rounded-2xl border text-left font-semibold transition-all duration-200 cursor-pointer flex items-center gap-3 ${stateClass}`}
                  >
                    <span className="w-7 h-7 rounded-full bg-slate-950/60 flex items-center justify-center text-xs font-black shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {quizSelected !== null && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                    {quizSelected !== null && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
            {quizSelected !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-indigo-950/40 border border-indigo-500/50 rounded-xl text-sm text-indigo-200 leading-relaxed font-medium"
              >
                <span className="font-extrabold text-indigo-300">📘 Giải thích: </span>
                {currentEx.quizData.explanation}
              </motion.div>
            )}
          </div>
        )}

        {/* SPEED GAME - Tro Choi Do Vui Tinh Diem */}
        {currentEx.type === 'speed_game' && currentEx.gameData && (
          <div className="space-y-5">
            {!gameStarted && (
              <div className="text-center py-10 md:py-14 space-y-5 bg-gradient-to-br from-slate-800/80 to-slate-900/60 border border-slate-700/60 rounded-2xl">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center shadow-2xl">
                  <Gamepad2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white">🎮 Trò Chơi Đố Vui Tốc Độ</h3>
                <p className="text-slate-200 font-semibold max-w-md mx-auto text-base md:text-lg leading-relaxed">
                  {currentEx.gameData.instruction}
                </p>
                <p className="text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  {currentEx.gameData.questions.length} câu hỏi • Mỗi câu {currentEx.gameData.timeLimitSeconds} giây
                </p>
                <button
                  onClick={startGame}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-black text-base shadow-lg cursor-pointer transition-all hover:scale-105"
                >
                  🚀 Bắt Đầu Trò Chơi
                </button>
              </div>
            )}

            {gameStarted && !gameFinished && currentEx.gameData.questions[gameQIdx] && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span>Câu {gameQIdx + 1}/{currentEx.gameData.questions.length}</span>
                  <span className="flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" /> Điểm: {gameScore}
                  </span>
                  <span className={`flex items-center gap-1 ${gameTimeLeft <= 5 ? "text-rose-400 animate-pulse" : "text-slate-300"}`}>
                    <Timer className="w-3.5 h-3.5" /> {gameTimeLeft}s
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-1000"
                    style={{ width: `${(gameTimeLeft / currentEx.gameData.timeLimitSeconds) * 100}%` }}
                  />
                </div>
                <p className="text-xl md:text-2xl font-black text-white leading-relaxed bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                  {currentEx.gameData.questions[gameQIdx].question}
                </p>
                <div className="flex flex-col gap-3">
                  {currentEx.gameData.questions[gameQIdx].options.map((opt, idx) => {
                    const q = currentEx.gameData!.questions[gameQIdx];
                    const isSelected = gameSelected === idx;
                    const isCorrect = idx === q.answerIndex;
                    let stateClass = "bg-slate-800 border-slate-700 hover:border-amber-500 text-slate-200";
                    if (gameSelected !== null) {
                      if (isCorrect) stateClass = "bg-emerald-950/70 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500";
                      else if (isSelected) stateClass = "bg-rose-950/70 border-rose-500 text-rose-100 ring-2 ring-rose-500";
                      else stateClass = "bg-slate-800/50 border-slate-800 text-slate-500";
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleGameAnswer(idx)}
                        className={`w-full p-4 rounded-xl border text-left font-bold text-base md:text-lg transition-all cursor-pointer ${stateClass}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {gameSelected !== null && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    <div className="p-3.5 bg-indigo-950/40 border border-indigo-500/50 rounded-xl text-sm text-indigo-200 font-medium">
                      {currentEx.gameData.questions[gameQIdx].explanation}
                    </div>
                    <button
                      onClick={goToNextGameQuestion}
                      className="w-full px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm cursor-pointer transition-all flex items-center justify-center gap-2"
                    >
                      <span>{gameQIdx >= currentEx.gameData.questions.length - 1 ? "Xem Kết Quả" : "Câu Tiếp Theo"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </div>
            )}

            {gameFinished && currentEx.gameData && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center shadow-xl">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-black text-white">
                  {gameScore}/{currentEx.gameData.questions.length} câu đúng!
                </p>
                <p className="text-slate-300 font-medium">
                  {gameScore === currentEx.gameData.questions.length
                    ? "Xuất sắc! Em đã nắm vững toàn bộ kiến thức tiết học."
                    : gameScore >= Math.ceil(currentEx.gameData.questions.length / 2)
                    ? "Khá tốt! Hãy xem lại phần giải thích để hiểu sâu hơn nhé."
                    : "Cố gắng thêm nhé! Xem lại slide bài học rồi thử lại lần nữa."}
                </p>
                <button
                  onClick={startGame}
                  className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-black text-sm shadow-lg cursor-pointer transition-all inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Chơi Lại
                </button>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Bottom Answer Hint & Pedagogical Guidance Panel */}
      <div className="bg-slate-800/90 border-t border-slate-700 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>{showHint ? "Ẩn Gợi Ý" : "💡 Xem Gợi Ý Câu Trả Lời"}</span>
          </button>

          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span>{showSolution ? "Ẩn Đáp Án Chi Tiết" : "Đáp Án Chuẩn Giáo Viên"}</span>
          </button>
        </div>

        <span className="text-xs text-slate-400 font-medium">
          Chuyên đề: Ứng dụng Trí tuệ nhân tạo (AI) THPT
        </span>
      </div>

      {/* Dropdown Hints / Solutions drawer */}
      <AnimatePresence>
        {(showHint || showSolution) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-slate-950 border-t border-slate-800 p-6 space-y-3"
          >
            {showHint && (
              <div className="p-4 bg-amber-950/40 border border-amber-500/50 rounded-xl text-sm text-amber-200 leading-relaxed font-medium">
                <span className="font-extrabold text-amber-300">💡 Gợi ý tư duy cho học sinh: </span>
                {currentEx.hint}
              </div>
            )}
            {showSolution && (
              <div className="p-4 bg-indigo-950/40 border border-indigo-500/50 rounded-xl text-sm text-indigo-200 leading-relaxed font-medium">
                <span className="font-extrabold text-indigo-300">🎯 Đáp án và hướng dẫn giải chi tiết: </span>
                {currentEx.suggestedAnswer}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
