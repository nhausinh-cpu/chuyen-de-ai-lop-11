export type InteractiveExerciseType = 'quiz' | 'matching' | 'true_false' | 'prompt_builder' | 'ethical_dilemma' | 'speed_game';

export type FontSizeOption = '20pt' | '22pt' | '24pt' | '28pt' | '32pt';

export interface MatchingPair {
  id: string;
  concept: string;
  match: string;
  category?: string;
}

export interface TrueFalseItem {
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
  hint: string;
}

export interface PromptBuilderData {
  goal: string;
  roleOptions: string[];
  taskOptions: string[];
  contextOptions: string[];
  outputOptions: string[];
  correctRole: string;
  correctTask: string;
  correctContext: string;
  correctOutput: string;
  samplePrompt: string;
  evaluationTip: string;
}

export interface EthicalDilemmaData {
  scenario: string;
  question: string;
  options: Array<{
    id: string;
    text: string;
    standpoint: string;
    votesPercent: number;
  }>;
  suggestedDebatePoints: string[];
}

export interface InteractiveExercise {
  id: string;
  type: InteractiveExerciseType;
  title: string;
  description: string;
  hint: string;
  suggestedAnswer: string;
  quizData?: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  };
  matchingData?: {
    instruction: string;
    pairs: MatchingPair[];
  };
  trueFalseData?: {
    instruction: string;
    items: TrueFalseItem[];
  };
  promptData?: PromptBuilderData;
  dilemmaData?: EthicalDilemmaData;
  gameData?: {
    instruction: string;
    timeLimitSeconds: number;
    questions: Array<{
      id: string;
      question: string;
      options: string[];
      answerIndex: number;
      explanation: string;
    }>;
  };
}

export interface SlideVideo {
  id: string;
  title: string;
  description?: string;
  duration?: string;
  youtubeId?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  sourceLabel?: string;
  discussionQuestion?: string;
}

export interface Slide {
  id: string;
  title: string;
  visualType: 'title' | 'intro' | 'concepts' | 'diagram' | 'comparison' | 'interactive' | 'quiz' | 'activity' | 'summary';
  content: string[];
  visualUrl?: string;
  visualLabel?: string;
  video?: SlideVideo;
  answerHint?: string;
  suggestedAnswer?: string;
  diagramData?: {
    nodes: Array<{ id: string; label: string; x: number; y: number; color?: string }>;
    links: Array<{ source: string; target: string; label?: string }>;
  };
  comparisonData?: {
    leftTitle: string;
    leftItems: string[];
    rightTitle: string;
    rightItems: string[];
  };
  interactiveQuiz?: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
    hint?: string;
    suggestedAnswer?: string;
  };
  activity?: {
    title: string;
    duration: string;
    instructions: string[];
    tips: string;
    hint?: string;
    suggestedAnswer?: string;
  };
  interactiveExercise?: InteractiveExercise;
  speakerNotes: string;
}

export interface Lesson {
  period: number;
  title: string;
  description: string;
  objectives: string[];
  slides: Slide[];
  exercises?: InteractiveExercise[];
  featuredVideo?: SlideVideo;
}

