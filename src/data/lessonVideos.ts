import { SlideVideo } from '../types';

export const lessonVideos: Record<number, SlideVideo> = {
  1: {
    id: "vid_lesson_1",
    title: "Trí tuệ nhân tạo (AI) là gì? Khởi nguồn từ Alan Turing",
    description: "Khám phá định nghĩa khoa học về Trí tuệ nhân tạo, sự khác biệt giữa phần mềm thông thường và thuật toán tự học, cùng câu chuyện lịch sử phép thử Turing huyền thoại.",
    duration: "05:15",
    youtubeId: "ICkqlr9-Xo0",
    videoUrl: "https://www.youtube.com/embed/ICkqlr9-Xo0?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Theo em, điều gì phân biệt một chương trình máy tính thông thường với một hệ thống AI có khả năng tự học hỏi dữ liệu?"
  },
  2: {
    id: "vid_lesson_2",
    title: "Dữ Liệu Lớn (Big Data) Là Gì? Nhiên Liệu Nuôi Sống Trí Tuệ Nhân Tạo",
    description: "Giải thích trực quan khái niệm Big Data (dữ liệu lớn) - đặc điểm, nguồn gốc sinh ra dữ liệu khổng lồ mỗi ngày và vì sao đây là 'nhiên liệu' không thể thiếu để huấn luyện các hệ thống AI thông minh.",
    duration: "07:00",
    youtubeId: "w91y_WB-klo",
    videoUrl: "https://www.youtube.com/embed/w91y_WB-klo?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Tại sao dữ liệu lớn (Big Data) lại được ví như 'nhiên liệu' giúp các hệ thống AI ngày càng thông minh và chính xác hơn?"
  },
  3: {
    id: "vid_lesson_3",
    title: "Machine Learning & Bí mật bên trong Mạng Nơ-ron (Neural Networks)",
    description: "Hình dung trực quan cách một mạng nơ-ron nhân tạo lấy cảm hứng từ não người tiếp nhận dữ liệu, điều chỉnh trọng số (weights) và tự sửa sai để học nhận dạng.",
    duration: "08:45",
    youtubeId: "TkFU5D463q0",
    videoUrl: "https://www.youtube.com/embed/TkFU5D463q0?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Mạng nơ-ron nhân tạo mô phỏng cấu trúc nào của sinh học con người, và dữ liệu huấn luyện đóng vai trò gì?"
  },
  4: {
    id: "vid_lesson_4",
    title: "Thị giác máy tính: Cách máy tính 'nhìn' và hiểu thế giới",
    description: "Tìm hiểu cách camera số và thuật toán Convolutional Neural Network (CNN) biến hàng triệu ma trận điểm ảnh thành khả năng nhận diện khuôn mặt và xe cộ thời gian thực.",
    duration: "04:50",
    youtubeId: "isl_sHcYfJY",
    videoUrl: "https://www.youtube.com/embed/isl_sHcYfJY?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Tại sao đối với máy tính, việc phân biệt một con chó và một con mèo lại phức tạp hơn rất nhiều so với con người?"
  },
  5: {
    id: "vid_lesson_5",
    title: "Hướng Dẫn Viết Câu Lệnh (Prompt) Chuẩn Để ChatGPT Trả Lời Chính Xác Nhất",
    description: "Hướng dẫn thực chiến kỹ thuật ra lệnh (prompting) cho ChatGPT: Cấu trúc Vai trò - Nhiệm vụ - Bối cảnh - Định dạng đầu ra giúp tối ưu chất lượng câu trả lời.",
    duration: "06:00",
    youtubeId: "5CjlJxhKOYk",
    videoUrl: "https://www.youtube.com/embed/5CjlJxhKOYk?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Cấu trúc 4 yếu tố (Vai trò, Nhiệm vụ, Bối cảnh, Định dạng) giúp em kiểm soát câu trả lời của AI chính xác như thế nào?"
  },
  6: {
    id: "vid_lesson_6",
    title: "Khai thác công cụ AI trong học tập và nghiên cứu học đường",
    description: "Minh họa quy trình học sinh THPT sử dụng AI làm gia sư cá nhân: giải thích kiến thức khó, kiểm tra lỗi ngữ pháp, phản biện lập luận mà không gian lận học thuật.",
    duration: "05:40",
    youtubeId: "5dy_h5ZRTEI",
    videoUrl: "https://www.youtube.com/embed/5dy_h5ZRTEI?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Làm thế nào để sử dụng AI làm trợ lý học tập đắc lực mà vẫn rèn luyện được tư duy độc lập và tính trung thực học đường?"
  },
  7: {
    id: "vid_lesson_7",
    title: "AI Vẽ Tranh Midjourney: Sáng Tạo Hình Ảnh & Câu Chuyện Bản Quyền",
    description: "Hướng dẫn trực quan cách dùng Midjourney để tạo hình ảnh từ mô tả văn bản; từ đó mở rộng bàn luận về ranh giới sáng tạo và tranh cãi bản quyền giữa nghệ sĩ con người và AI.",
    duration: "05:50",
    youtubeId: "4tLkEjJALDM",
    videoUrl: "https://www.youtube.com/embed/4tLkEjJALDM?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Liệu tác phẩm nghệ thuật do AI tạo ra có được cấp bản quyền tác giả không? Đâu là giá trị không thể thay thế của người nghệ sĩ?"
  },
  8: {
    id: "vid_lesson_8",
    title: "Đừng Để AI Học Hộ: Khi Giáo Viên Phát Hiện Học Sinh Lạm Dụng AI",
    description: "Phóng sự VTV24 phản ánh thực trạng học sinh, sinh viên lệ thuộc AI để chép bài, giải hộ bài tập - hệ quả mất dần khả năng tư duy độc lập và cách giáo viên nhận diện, chấn chỉnh.",
    duration: "04:30",
    youtubeId: "ejaVedV3vQE",
    videoUrl: "https://www.youtube.com/embed/ejaVedV3vQE?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Ranh giới nào giữa việc dùng AI hỗ trợ học tập hợp lý và việc lệ thuộc AI đến mức đánh mất khả năng tự tư duy, tự giải quyết vấn đề?"
  },
  9: {
    id: "vid_lesson_9",
    title: "Đạo Đức AI: Thiên kiến dữ liệu (Bias) và Trách nhiệm xã hội",
    description: "Phân tích các ví dụ thực tế khi AI đưa ra phán quyết phân biệt đối xử do tập dữ liệu huấn luyện lịch sử bị sai lệch; giải pháp thiết kế thuật toán công bằng.",
    duration: "06:45",
    youtubeId: "N5kLA1ilaHA",
    videoUrl: "https://www.youtube.com/embed/N5kLA1ilaHA?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Tại sao chúng ta nói 'AI không tự sinh ra định kiến, mà chính dữ liệu con người đưa vào phản ánh định kiến đó'?"
  },
  10: {
    id: "vid_lesson_10",
    title: "Nhận Diện Deepfake & Bảo Vệ An Toàn Danh Tính Trên Không Gian Mạng",
    description: "Hướng dẫn các kỹ năng thị giác và công cụ kiểm chứng để phát hiện video, giọng nói giả mạo Deepfake; quy tắc bảo vệ dữ liệu cá nhân cho học sinh.",
    duration: "05:15",
    youtubeId: "xWfoJaYqFdI",
    videoUrl: "https://www.youtube.com/embed/xWfoJaYqFdI?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Dấu hiệu nào trên khuôn mặt (mắt, miệng, chuyển động) và giọng nói giúp em nghi ngờ một cuộc gọi video có thể là Deepfake lừa đảo?"
  },
  11: {
    id: "vid_lesson_11",
    title: "Tương Lai Nghề Nghiệp & Kỹ Năng Sống Cùng AI Cho Thế Hệ Trẻ",
    description: "Những ngành nghề nào sẽ thay đổi mạnh mẽ nhất và 4 kỹ năng cốt lõi (Tư duy phản biện, Sáng tạo, Thấu cảm, Kỹ năng số) giúp các em tự tin hội nhập.",
    duration: "06:05",
    youtubeId: "jF_EHG_rK7U",
    videoUrl: "https://www.youtube.com/embed/jF_EHG_rK7U?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Những kỹ năng đặc thù nào của con người mà trí tuệ nhân tạo dù thông minh đến đâu cũng không thể thay thế trọn vẹn?"
  },
  12: {
    id: "vid_lesson_12",
    title: "Học Sinh THPT Sáng Tạo Dự Án AI Giải Quyết Vấn Đề Thực Tế",
    description: "Truyền cảm hứng từ các dự án khoa học kỹ thuật của học sinh phổ thông: hệ thống phân loại rác thông minh, nhận diện cây trồng bị bệnh bằng điện thoại.",
    duration: "07:10",
    youtubeId: "PZ44UgF3Kpg",
    videoUrl: "https://www.youtube.com/embed/PZ44UgF3Kpg?autoplay=1&rel=0",
    thumbnailUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    sourceLabel: "Video tiếng Việt (YouTube)",
    discussionQuestion: "Nhóm của em dự định ứng dụng kiến thức chuyên đề AI này để giải quyết bài toán thực tế nào trong trường học hoặc đời sống?"
  }
};

export const allLessonVideos: SlideVideo[] = Object.values(lessonVideos);

export function getVideoForLesson(period: number): SlideVideo {
  return lessonVideos[period] || lessonVideos[1];
}

export function getVideoForSlide(slideId: string, period: number): SlideVideo {
  return lessonVideos[period] || lessonVideos[1];
}
