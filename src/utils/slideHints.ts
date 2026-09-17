import { Slide, Lesson } from '../types';

export function getSlideAnswerHint(slide: Slide, lesson: Lesson, slideIndex: number): {
  hint: string;
  suggestedAnswer: string;
} {
  // If slide already has explicit hints
  if (slide.answerHint && slide.suggestedAnswer) {
    return {
      hint: slide.answerHint,
      suggestedAnswer: slide.suggestedAnswer
    };
  }

  // Quiz slides
  if (slide.visualType === 'quiz' && slide.interactiveQuiz) {
    const correctOption = slide.interactiveQuiz.options[slide.interactiveQuiz.answerIndex];
    return {
      hint: `💡 Gợi ý tư duy: Hãy loại trừ các mốc thời gian hoặc phương án quá mới hoặc quá vô lý. Tập trung vào bản chất câu hỏi: "${slide.interactiveQuiz.question}".`,
      suggestedAnswer: `🎯 Đáp án chính xác: "${correctOption}". Giải thích chi tiết: ${slide.interactiveQuiz.explanation}`
    };
  }

  // Activity slides
  if (slide.visualType === 'activity' && slide.activity) {
    return {
      hint: `💡 Hướng dẫn tổ chức: ${slide.activity.tips}`,
      suggestedAnswer: `🎯 Sản phẩm kỳ vọng của học sinh: Các nhóm hoàn thành đúng yêu cầu theo 3 bước hướng dẫn, có báo cáo ngắn gọn và phân tích được ít nhất 2 ưu điểm và 1 hạn chế thực tế.`
    };
  }

  // Comparison slides
  if (slide.visualType === 'comparison' && slide.comparisonData) {
    return {
      hint: `💡 Gợi ý so sánh: Hãy đối chiếu sự khác biệt cốt lõi về mục tiêu, dữ liệu đầu vào và khả năng thích ứng giữa hai đối tượng "${slide.comparisonData.leftTitle}" và "${slide.comparisonData.rightTitle}".`,
      suggestedAnswer: `🎯 Kết luận sư phạm: Hai trường phái/công nghệ này không triệt tiêu nhau mà bổ trợ cho nhau. Cần hiểu rõ ngữ cảnh ứng dụng thực tế để lựa chọn phương án tối ưu.`
    };
  }

  // Diagram slides
  if (slide.visualType === 'diagram') {
    return {
      hint: `💡 Gợi ý phân tích sơ đồ: Hãy quan sát luồng truyền dữ liệu từ trái sang phải (Input -> Processing -> Output) và ý nghĩa của các mũi tên liên kết.`,
      suggestedAnswer: `🎯 Lời giải thích trực quan: Sơ đồ minh họa quá trình trích xuất đặc trưng và suy luận toán học tự động của mạng mô phỏng nơ-ron.`
    };
  }

  // Intro / Starter question slides
  if (slide.visualType === 'intro') {
    return {
      hint: `💡 Gợi ý khơi gợi hứng thú: Cho học sinh liên hệ với các ứng dụng công nghệ các em dùng hàng ngày trên điện thoại như TikTok, FaceID, Google Dịch, Siri...`,
      suggestedAnswer: `🎯 Câu trả lời mẫu của học sinh: "Em thấy AI có trong tính năng gợi ý video của TikTok, tự nhận diện khuôn mặt khi mở khóa iPhone, và trợ lý học tập tạo dàn ý văn bằng ChatGPT."`
    };
  }

  // Default concepts / summary
  return {
    hint: `💡 Câu hỏi tương tác gợi mở: Em hãy lấy một ví dụ thực tế trong đời sống để minh họa cho khái niệm "${slide.title}".`,
    suggestedAnswer: `🎯 Ý chính cần khắc sâu: Nắm vững nguyên lý cơ bản, hiểu rõ AI là công cụ hỗ trợ tư duy con người và cần sử dụng với tinh thần trách nhiệm, đạo đức.`
  };
}
