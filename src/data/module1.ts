import { Lesson } from '../types';

export const module1: Lesson[] = [
  {
    period: 1,
    title: "Làm quen với Trí tuệ nhân tạo (AI)",
    description: "Khái niệm nền tảng, lịch sử phát triển và các dấu mốc đột phá của trí tuệ nhân tạo qua các thời kỳ.",
    objectives: [
      "Hiểu và phát biểu được định nghĩa cơ bản về Trí tuệ nhân tạo (AI).",
      "Nêu được các cột mốc lịch sử chính trong quá trình phát triển của AI.",
      "Nhận diện được các thuật ngữ cơ bản như phép thử Turing và mạng neuron sơ khai."
    ],
    slides: [
      {
        id: "l1_s1",
        title: "CHUYÊN ĐỀ: ỨNG DỤNG TRÍ TUỆ NHÂN TẠO (AI)",
        visualType: "title",
        content: [
          "Tiết 1: Làm quen với Trí tuệ nhân tạo (AI)",
          "Trường THPT Tân Lược - Chuyên đề Tin học Ứng dụng AI",
          "Giáo viên giảng dạy: Nguyễn Phước Hậu",
          "Chào mừng các em đến với kỷ nguyên công nghệ số và trí tuệ nhân tạo!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Kỷ nguyên Trí tuệ nhân tạo",
        speakerNotes: "Chào cả lớp! Hôm nay chúng ta bắt đầu chuyên đề rất thú vị về Trí tuệ nhân tạo (AI) kéo dài 12 tiết. Đây là bài đầu tiên giúp các em có cái nhìn tổng quan nhất về thế giới AI đầy hấp dẫn này."
      },
      {
        id: "l1_s2",
        title: "Mục Tiêu Bài Học & Hoạt Động Khởi Động",
        visualType: "intro",
        content: [
          "🎯 Nhận biết và định nghĩa cơ bản về AI.",
          "🎯 Hiểu rõ các mốc lịch sử quan trọng từ năm 1950 đến nay.",
          "💭 Câu hỏi khởi động: Theo em, những thiết bị hay ứng dụng nào xung quanh chúng ta đang sử dụng AI?",
          "💡 Hãy thảo luận nhanh với bạn bên cạnh trong 2 phút và ghi chép lại các câu trả lời."
        ],
        visualUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Thảo luận lớp học",
        speakerNotes: "Yêu cầu học sinh chia sẻ ý kiến. Ví dụ như Siri, Google Translate, FaceID, hay các gợi ý video trên TikTok, YouTube đều là ứng dụng của AI."
      },
      {
        id: "l1_s3",
        title: "Trí Tuệ Nhân Tạo (AI) Là Gì?",
        visualType: "concepts",
        content: [
          "Định nghĩa: AI (Artificial Intelligence) là một ngành khoa học máy tính nhằm tạo ra những hệ thống máy móc có khả năng mô phỏng tư duy, suy nghĩ, học tập và ra quyết định như con người.",
          "Khả năng cốt lõi bao gồm:",
          "• Nhận thức cảm giác: Thị giác máy tính, nhận diện giọng nói.",
          "• Suy luận và giải quyết vấn đề: Đưa ra quyết định tối ưu dựa trên dữ liệu.",
          "• Khả năng tự học hỏi: Cải thiện hiệu suất qua thời gian mà không cần lập trình lại."
        ],
        visualUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22700%22%20height%3D%22600%22%20viewBox%3D%220%200%20700%20600%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg1%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2255%25%22%20stop-color%3D%22%233730a3%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%236d28d9%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22cyan1%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2367e8f9%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2322d3ee%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22amber1%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fde68a%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fbbf24%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%22700%22%20height%3D%22600%22%20fill%3D%22url%28%23bg1%29%22/%3E%0A%20%20%3Ccircle%20cx%3D%22580%22%20cy%3D%2290%22%20r%3D%2270%22%20fill%3D%22%2367e8f9%22%20opacity%3D%220.10%22/%3E%0A%20%20%3Ccircle%20cx%3D%2290%22%20cy%3D%22500%22%20r%3D%2290%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.10%22/%3E%0A%0A%20%20%3C%21--%20Human%20head%20profile%20%28left%29%20--%3E%0A%20%20%3Cpath%20d%3D%22M230%20460%20C150%20440%20130%20340%20175%20265%20C195%20225%20240%20200%20285%20205%20C300%20175%20335%20165%20355%20185%20C395%20175%20420%20220%20405%20255%20C440%20275%20445%20330%20415%20360%20L415%20460%20Z%22%0A%20%20%20%20%20%20%20%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.95%22/%3E%0A%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%22255%22%20r%3D%227%22%20fill%3D%22%23312e81%22/%3E%0A%0A%20%20%3C%21--%20Neural/circuit%20pattern%20inside%20the%20head%20--%3E%0A%20%20%3Cg%20stroke%3D%22url%28%23cyan1%29%22%20stroke-width%3D%223%22%20fill%3D%22none%22%20opacity%3D%220.9%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M260%20260%20L300%20235%20L340%20255%20L380%20230%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M270%20300%20L320%20285%20L365%20305%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M255%20340%20L300%20335%20L340%20355%20L390%20330%22/%3E%0A%20%20%3C/g%3E%0A%20%20%3Cg%20fill%3D%22url%28%23cyan1%29%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22260%22%20cy%3D%22260%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22300%22%20cy%3D%22235%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%22255%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22380%22%20cy%3D%22230%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22270%22%20cy%3D%22300%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22320%22%20cy%3D%22285%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22365%22%20cy%3D%22305%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22255%22%20cy%3D%22340%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22300%22%20cy%3D%22335%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22340%22%20cy%3D%22355%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22390%22%20cy%3D%22330%22%20r%3D%226%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3C%21--%20Circuit%20lines%20flowing%20out%20to%20the%20right%2C%20representing%20the%20machine%20side%20--%3E%0A%20%20%3Cg%20stroke%3D%22url%28%23amber1%29%22%20stroke-width%3D%224%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20opacity%3D%220.9%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M420%20300%20L480%20300%20L480%20250%20L540%20250%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M410%20350%20L470%20380%20L470%20430%20L530%20430%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M400%20260%20L460%20210%20L520%20210%22/%3E%0A%20%20%3C/g%3E%0A%20%20%3Cg%20fill%3D%22url%28%23amber1%29%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22540%22%20cy%3D%22250%22%20r%3D%228%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22530%22%20cy%3D%22430%22%20r%3D%228%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22520%22%20cy%3D%22210%22%20r%3D%228%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3C%21--%20CPU%20chip%20icon%20representing%20%22may%22%20%28machine%29%20--%3E%0A%20%20%3Cg%20transform%3D%22translate%28555%2C290%29%22%3E%0A%20%20%20%20%3Crect%20x%3D%22-30%22%20y%3D%22-30%22%20width%3D%2260%22%20height%3D%2260%22%20rx%3D%228%22%20fill%3D%22%230f172a%22%20stroke%3D%22url%28%23cyan1%29%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22-14%22%20y%3D%22-14%22%20width%3D%2228%22%20height%3D%2228%22%20rx%3D%224%22%20fill%3D%22url%28%23cyan1%29%22%20opacity%3D%220.85%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3Ctext%20x%3D%22350%22%20y%3D%22540%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22900%22%20fill%3D%22%23fde68a%22%3ET%C6%B0%20Duy%20Con%20Ng%C6%B0%E1%BB%9Di%20%2B%20S%E1%BB%A9c%20M%E1%BA%A1nh%20AI%3C/text%3E%0A%20%20%3Ctext%20x%3D%22350%22%20y%3D%22575%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2218%22%20font-weight%3D%22600%22%20fill%3D%22%23e0e7ff%22%3ES%E1%BB%B1%20giao%20thoa%20t%E1%BA%A1o%20n%C3%AAn%20b%C6%B0%E1%BB%9Bc%20ti%E1%BA%BFn%20v%C6%B0%E1%BB%A3t%20b%E1%BA%ADc%3C/text%3E%0A%3C/svg%3E",
        visualLabel: "Sự giao thoa giữa tư duy người và máy",
        speakerNotes: "Hãy nhấn mạnh cụm từ 'mô phỏng tư duy của con người'. AI không phải là một sinh vật sống, mà là các dòng mã thuật toán thông minh chạy trên siêu máy tính."
      },
      {
        id: "l1_s4",
        title: "Lịch Sử AI: Từ Ý Tưởng Đến Thực Tế",
        visualType: "diagram",
        content: [
          "Quá trình hình thành ý tưởng AI qua các mốc thời gian kinh điển:",
          "• 1950: Alan Turing đề xuất Phép thử Turing (Turing Test) để đánh giá khả năng suy nghĩ của máy tính.",
          "• 1956: Thuật ngữ 'Artificial Intelligence' chính thức ra đời tại Hội thảo Dartmouth do John McCarthy khởi xướng.",
          "• Thập niên 1960: Ra đời các chatbot thô sơ đầu tiên như ELIZA mô phỏng nhà tâm lý học."
        ],
        diagramData: {
          nodes: [
            { id: "1950", label: "1950: Phép thử Turing", x: 20, y: 50, color: "#3B82F6" },
            { id: "1956", label: "1956: Khái niệm AI ra đời", x: 50, y: 30, color: "#10B981" },
            { id: "1960", label: "1960s: Chatbot sơ khai", x: 80, y: 50, color: "#8B5CF6" }
          ],
          links: [
            { source: "1950", target: "1956", label: "Phát triển" },
            { source: "1956", target: "1960", label: "Ứng dụng" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Dòng lịch sử AI từ Alan Turing đến kỷ nguyên số",
        speakerNotes: "Alan Turing là cha đẻ của khoa học máy tính hiện đại. Ông tự hỏi: 'Liệu máy móc có thể suy nghĩ được không?'. Câu hỏi này đã khai sinh ra ngành AI ngày nay."
      },
      {
        id: "l1_s5",
        title: "Thăng Trầm Lịch Sử: Mùa Đông AI & Kỷ Nguyên Mới",
        visualType: "comparison",
        content: [
          "Lịch sử AI không hề bằng phẳng mà trải qua nhiều giai đoạn thịnh suy khác nhau:",
          "• Những kỳ vọng thái quá không đi đôi với năng lực phần cứng thực tế đã dẫn đến việc cắt giảm tài trợ đột ngột.",
          "• Cuộc cách mạng Internet và dữ liệu lớn sau năm 2012 đã đưa AI hồi sinh vô cùng rực rỡ."
        ],
        comparisonData: {
          leftTitle: "Mùa Đông AI (AI Winter)",
          leftItems: [
            "Xuất hiện vào thập niên 1970 và 1980.",
            "Lý do: Phần cứng quá yếu, thiếu hụt dữ liệu huấn luyện.",
            "Kết quả: Hàng loạt dự án bị hủy, mất lòng tin xã hội."
          ],
          rightTitle: "Kỷ Nguyên Bùng Nổ Deep Learning (2012 - nay)",
          rightItems: [
            "Khởi nguồn nhờ sự phổ biến của chip GPU mạnh mẽ.",
            "Sự ra đời của kho dữ liệu khổng lồ trên mạng Internet.",
            "Bước đột phá: AlexNet (2012), AlphaGo (2016), ChatGPT (2022)."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        visualLabel: "So sánh mùa đông AI và kỷ nguyên bùng nổ dữ liệu lớn",
        speakerNotes: "Hãy giải thích khái niệm 'Mùa đông AI'. Đây là bài học sâu sắc về việc kỳ vọng công nghệ cần đi đôi với sự sẵn sàng của hạ tầng tính toán."
      },
      {
        id: "l1_s6",
        title: "Kiến Trúc Mạng Neuron Sơ Khai vs Não Người",
        visualType: "concepts",
        content: [
          "Mạng neuron nhân tạo được lấy cảm hứng trực tiếp từ sinh học của bộ não con người:",
          "• Não người có khoảng 86 tỷ tế bào thần kinh (neuron) kết nối truyền dẫn tín hiệu điện hóa.",
          "• AI mô phỏng điều này bằng cách tạo ra các nút (node) tính toán liên kết chặt chẽ với nhau.",
          "• Tín hiệu đầu vào được nhân với 'trọng số' (weights) và truyền qua 'hàm kích hoạt' để ra quyết định đầu ra."
        ],
        visualUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Trực quan mạng Neuron nhân tạo",
        speakerNotes: "Mặc dù lấy cảm hứng từ não người, nhưng mạng neuron nhân tạo hiện nay vẫn hoạt động dựa trên các phép toán ma trận phức tạp chứ chưa có ý thức như con người."
      },
      {
        id: "l1_s7",
        title: "Hoạt Động Trải Nghiệm: Thử Thách Turing",
        visualType: "activity",
        content: [
          "Hãy đóng vai làm Ban giám khảo trong Phép thử Turing huyền thoại!",
          "• Quy tắc: Một học sinh đại diện máy (dùng ChatGPT trả lời thầm) và một học sinh đại diện con người.",
          "• Nhiệm vụ của lớp học: Đặt 3 câu hỏi bất kỳ qua màn hình chat ẩn danh để đoán xem ai thực sự là máy tính.",
          "• Thảo luận: Làm thế nào để phân biệt tư duy cảm xúc của con người và câu trả lời logic từ máy tính?"
        ],
        activity: {
          title: "Trải nghiệm Phép thử Turing thực tế tại lớp",
          duration: "10 Phút",
          instructions: [
            "Bước 1: Chọn ra 2 tình nguyện viên (1 đóng vai người, 1 đóng vai robot sử dụng AI).",
            "Bước 2: Cả lớp gửi câu hỏi kiểm tra tính nhân văn (Ví dụ: Cảm xúc khi ngắm hoàng hôn, định nghĩa tình yêu).",
            "Bước 3: Xem kết quả trả lời của cả 2 và bỏ phiếu biểu quyết."
          ],
          tips: "Nên tập trung vào các câu hỏi đòi hỏi trải nghiệm giác quan thực tế hoặc bối cảnh văn hóa địa phương mà AI thường khó nắm bắt hoàn hảo."
        },
        visualUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Học sinh thực hành hoạt động Phép thử Turing",
        speakerNotes: "Hoạt động này giúp học sinh hiểu sâu sắc phép thử Turing là gì và nhận thức được ranh giới mong manh giữa ngôn ngữ máy và ngôn ngữ người."
      },
      {
        id: "l1_s8",
        title: "Trắc Nghiệm Tương Tác: Củng Cố Kiến Thức",
        visualType: "quiz",
        content: [
          "Hãy kiểm tra lại những kiến thức lịch sử và khái niệm AI vừa học nhé!",
          "Chọn đáp án đúng nhất để hoàn thành thử thách trắc nghiệm tương tác bên phải."
        ],
        interactiveQuiz: {
          question: "Khái niệm 'Trí tuệ nhân tạo' (Artificial Intelligence) chính thức được công bố rộng rãi tại hội thảo nào và vào năm bao nhiêu?",
          options: [
            "Hội thảo Turing năm 1950",
            "Hội thảo Dartmouth năm 1956",
            "Hội thảo Thung lũng Silicon năm 1990",
            "Sự kiện ra mắt ChatGPT năm 2022"
          ],
          answerIndex: 1,
          explanation: "Thuật ngữ AI chính thức được John McCarthy đưa ra lần đầu tiên tại Hội thảo khoa học Dartmouth mùa hè năm 1956."
        },
        visualUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm tương tác lịch sử phát triển AI",
        speakerNotes: "Giáo viên nhấn mạnh lại mốc thời gian 1956 tại Dartmouth. Đây là mốc khai sinh chính thức của ngành học này."
      },
      {
        id: "l1_s9",
        title: "Tổng Kết Bài Học & Nhiệm Vụ Về Nhà",
        visualType: "summary",
        content: [
          "📌 AI là nỗ lực của con người nhằm làm cho máy tính có thể suy nghĩ và học tập như chúng ta.",
          "📌 Lịch sử AI đã trải qua nhiều mùa đông lạnh giá trước khi đạt được đỉnh cao nhờ sự ra đời của dữ liệu lớn và Deep Learning.",
          "🏠 Nhiệm vụ về nhà: Tìm kiếm và ghi lại 3 ứng dụng AI mà gia đình em đang sử dụng hàng ngày để chuẩn bị cho bài học Tiết 2."
        ],
        visualUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Học tập chủ động",
        speakerNotes: "Cảm ơn các em đã chú ý lắng nghe. Đừng quên ghi lại 3 ứng dụng AI để tiết sau chúng ta cùng thảo luận về các thành phần cốt lõi tạo nên chúng nhé!"
      }
    ]
  },
  {
    period: 2,
    title: "Các thành phần cốt lõi của hệ thống AI",
    description: "Khám phá 4 mảnh ghép không thể thiếu cấu thành một hệ thống AI hoàn chỉnh: Dữ liệu lớn, Thuật toán, Hạ tầng tính toán và Con người.",
    objectives: [
      "Liệt kê và phân tích được vai trò của 4 thành phần cốt lõi trong một hệ thống AI.",
      "Giải thích được lý do tại sao dữ liệu lớn là nhiên liệu cho sự thông minh của AI.",
      "Hiểu rõ mối tương quan hỗ trợ lẫn nhau giữa hạ tầng phần cứng và thuật toán phần mềm."
    ],
    slides: [
      {
        id: "l2_s1",
        title: "CÁC THÀNH PHẦN CỐT LÕI CỦA HỆ THỐNG AI",
        visualType: "title",
        content: [
          "Tiết 2: Bên trong cỗ máy thông minh nhân tạo",
          "Mục tiêu: Tìm hiểu 4 mảnh ghép kiến tạo nên sức mạnh của AI",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Bắt đầu khám phá cấu trúc kỹ thuật của AI!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Bảng mạch điện tử thông minh",
        speakerNotes: "Chào các em quay trở lại. Tiết này chúng ta sẽ tháo mở 'nắp capo' của cỗ máy AI để xem bên trong nó hoạt động dựa trên những yếu tố cốt lõi nào."
      },
      {
        id: "l2_s2",
        title: "Hoạt Động Khởi Động: Trò Chơi Đoán Dữ Liệu",
        visualType: "intro",
        content: [
          "💭 Thử thách tư duy: Nếu muốn huấn luyện một AI nhận biết được quả táo chín, em cần cung cấp những thông tin gì cho nó?",
          "🤔 Liệu chỉ một bức ảnh quả táo màu đỏ có đủ để AI luôn nhận diện chính xác ở mọi góc độ không?",
          "💡 Gợi ý thảo luận: Sự đa dạng về hình ảnh quả táo (đỏ, xanh, héo, cắt lát, ánh sáng tối...) ảnh hưởng thế nào đến độ chính xác?"
        ],
        visualUrl: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Những quả táo đa dạng sắc màu",
        speakerNotes: "Học sinh sẽ dễ dàng nhận thấy cần hàng ngàn bức ảnh quả táo khác nhau. Đó chính là cầu nối dẫn vào khái niệm đầu tiên: Dữ liệu lớn."
      },
      {
        id: "l2_s3",
        title: "1. Dữ Liệu Lớn (Big Data) - Nhiên Liệu Của AI",
        visualType: "concepts",
        content: [
          "Dữ liệu được coi là nguồn 'dầu mỏ mới' của kỷ nguyên số:",
          "• Không có dữ liệu, AI không thể học tập (giống như học sinh không có sách giáo khoa).",
          "• Đặc trưng của Big Data qua nguyên tắc 3V:",
          "  - Volume (Thể tích lớn): Hàng tỷ gigabyte dữ liệu sinh ra mỗi ngày.",
          "  - Velocity (Tốc độ nhanh): Dữ liệu được cập nhật theo thời gian thực liên tục.",
          "  - Variety (Sự đa dạng): Văn bản, âm thanh, hình ảnh, video, dữ liệu cảm biến."
        ],
        visualUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Trực quan luồng dữ liệu số khổng lồ",
        speakerNotes: "Giải thích rõ cho học sinh: AI học bằng cách tìm ra quy luật trong đống dữ liệu khổng lồ đó chứ không phải học vẹt từng ảnh."
      },
      {
        id: "l2_s4",
        title: "2. Thuật Toán (Algorithm) - Bộ Não Xử Lý",
        visualType: "concepts",
        content: [
          "Thuật toán là chuỗi các hướng dẫn toán học giúp AI phân tích dữ liệu và tự đưa ra giải pháp:",
          "• Các mô hình thuật toán phổ biến bao gồm Mạng Neuron Nhân Tạo, Cây Quyết Định, và Thuật toán Di Truyền.",
          "• Thuật toán học máy (Machine Learning) cho phép máy tự điều chỉnh thông số để tối ưu hóa kết quả.",
          "• Thuật toán thông minh giúp chuyển đổi dữ liệu thô thành tri thức có ích."
        ],
        visualUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Dòng code thuật toán",
        speakerNotes: "Nhấn mạnh thuật toán chính là công thức nấu ăn, còn dữ liệu là nguyên liệu. Một công thức giỏi sẽ giúp biến nguyên liệu đơn giản thành món ăn ngon."
      },
      {
        id: "l2_s5",
        title: "3. Hạ Tầng Tính Toán - Cơ Bắp Của AI",
        visualType: "comparison",
        content: [
          "Các phép toán của AI vô cùng đồ sộ, đòi hỏi năng lực phần cứng chuyên biệt:",
          "• CPU thông thường của máy tính văn phòng không thể gánh vác nổi việc huấn luyện các mô hình AI lớn.",
          "• Điện toán đám mây (Cloud Computing) cho phép truy cập tài nguyên siêu máy tính từ mọi nơi."
        ],
        comparisonData: {
          leftTitle: "Bộ xử lý đồ họa (GPU / TPU)",
          leftItems: [
            "Được thiết kế để xử lý hàng ngàn phép tính song song cùng lúc.",
            "Nvidia, Google, AMD là các nhà sản xuất chip AI hàng đầu thế giới.",
            "Rút ngắn thời gian huấn luyện AI từ vài năm xuống vài ngày."
          ],
          rightTitle: "Bộ xử lý trung tâm (CPU)",
          rightItems: [
            "Tối ưu hóa cho các tác vụ tuần tự phức tạp.",
            "Chỉ xử lý hiệu quả một số lượng ít phép tính lớn cùng lúc.",
            "Thường đóng vai trò điều phối thay vì trực tiếp chạy thuật toán Deep Learning."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop",
        visualLabel: "So sánh cấu trúc vi xử lý GPU và CPU",
        speakerNotes: "Học sinh thường chơi game sẽ biết GPU là card đồ họa. Hãy giải thích tại sao card đồ họa lại cực kỳ hợp với toán học ma trận của AI."
      },
      {
        id: "l2_s6",
        title: "4. Con Người - Người Huấn Luyện & Vận Hành",
        visualType: "concepts",
        content: [
          "AI không tự nhiên thông minh, nó cần bàn tay định hướng của con người:",
          "• Kỹ sư nhãn dữ liệu (Data Labelers): Gắn thẻ mô tả cho hàng triệu bức ảnh để máy học.",
          "• Nhà khoa học dữ liệu (Data Scientists): Thiết kế kiến trúc thuật toán thông minh.",
          "• Người dùng cuối (Prompt Engineers / Users): Đưa ra yêu cầu, đánh giá phản hồi để AI cải tiến liên tục.",
          "• Người giám sát đạo đức: Đảm bảo AI hoạt động an toàn và không thiên vị."
        ],
        visualUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Kỹ sư công nghệ thảo luận",
        speakerNotes: "Nhấn mạnh con người là trung tâm quyết định hướng đi của AI. AI chỉ là công cụ phản chiếu năng lực và đạo đức của người tạo ra nó."
      },
      {
        id: "l2_s7",
        title: "Sơ Đồ Tương Tác 4 Thành Phần Cốt Lõi",
        visualType: "diagram",
        content: [
          "Mối quan hệ hữu cơ không thể tách rời giữa 4 yếu tố tạo nên sức mạnh:",
          "• Dữ liệu lớn cung cấp chất liệu đầu vào.",
          "• Thuật toán định hướng phương pháp học tập.",
          "• Hạ tầng tính toán đẩy nhanh tốc độ vận hành.",
          "• Con người thiết kế, giám sát và tận dụng kết quả đầu ra."
        ],
        diagramData: {
          nodes: [
            { id: "data", label: "Dữ liệu lớn (Big Data)", x: 20, y: 30, color: "#3B82F6" },
            { id: "algo", label: "Thuật toán (Algorithms)", x: 50, y: 15, color: "#10B981" },
            { id: "hardware", label: "Hạ tầng (GPU/Cloud)", x: 80, y: 30, color: "#8B5CF6" },
            { id: "human", label: "Con người (Developers/Users)", x: 50, y: 65, color: "#EF4444" }
          ],
          links: [
            { source: "data", target: "algo", label: "Nhiên liệu" },
            { source: "hardware", target: "algo", label: "Tăng tốc" },
            { source: "human", target: "algo", label: "Thiết kế" },
            { source: "human", target: "data", label: "Gán nhãn" },
            { source: "algo", target: "human", label: "Hỗ trợ" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ liên kết 4 thành phần trụ cột AI",
        speakerNotes: "Nhìn vào sơ đồ này, các em có thể thấy bất kỳ sự thiếu hụt nào ở một trong bốn đỉnh đều sẽ khiến hệ thống AI sụp đổ hoặc hoạt động kém hiệu quả."
      },
      {
        id: "l2_s8",
        title: "Trắc Nghiệm Tương Tác: Thành Phần Cốt Lõi",
        visualType: "quiz",
        content: [
          "Hãy kiểm tra lại mức độ thấu hiểu của em về cấu trúc bên trong của AI qua câu hỏi tình huống bên phải."
        ],
        interactiveQuiz: {
          question: "Trong một dự án AI phát hiện biển báo giao thông cho xe tự hành, vai trò của những người thực hiện việc vẽ khung tròn và gán nhãn 'Biển báo cấm' hay 'Biển chỉ dẫn' trên hàng vạn bức ảnh chụp đường phố được gọi là gì?",
          options: [
            "Kỹ sư thiết kế chip GPU",
            "Người gán nhãn dữ liệu (Data Labeler)",
            "Người quản trị đám mây Cloud",
            "Mô hình học sâu tự động"
          ],
          answerIndex: 1,
          explanation: "Data Labeler (Người gán nhãn dữ liệu) đóng vai trò định danh, dán nhãn thông tin thô để làm tập dữ liệu chuẩn cho thuật toán AI học tập."
        },
        visualUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm tình huống thành phần cốt lõi của AI",
        speakerNotes: "Giải thích thêm cho học sinh biết nghề gán nhãn dữ liệu hiện nay đang tạo ra hàng triệu công việc trên toàn cầu."
      },
      {
        id: "l2_s9",
        title: "Hoạt Động Nhóm & Tổng Kết Bài Học",
        visualType: "activity",
        content: [
          "📋 Nhiệm vụ nhóm (4 học sinh): Phân tích hệ thống FaceID trên điện thoại thông minh qua 4 thành phần:",
          "  1. Dữ liệu của FaceID là gì? (Khuôn mặt 3D, các góc chụp...)",
          "  2. Thuật toán làm nhiệm vụ gì? (So khớp khoảng cách mắt, mũi...)",
          "  3. Hạ tầng ở đâu? (Chip bảo mật sinh trắc học trên điện thoại)",
          "  4. Con người tương tác thế nào? (Người dùng đăng ký mặt ban đầu)",
          "👉 Hãy trình bày ý kiến nhóm vào giấy A4 trong 5 phút."
        ],
        activity: {
          title: "Thảo luận ứng dụng FaceID",
          duration: "10 Phút",
          instructions: [
            "Thảo luận theo nhóm bàn học.",
            "Ghi ngắn gọn câu trả lời cho 4 câu hỏi gợi ý trên slide.",
            "Đại diện 2 nhóm nhanh nhất đứng lên trình bày kết quả."
          ],
          tips: "Hãy suy nghĩ về trường hợp người dùng đeo khẩu trang hoặc trang điểm đậm, FaceID sẽ cần thêm dữ liệu gì để học?"
        },
        visualUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Hoạt động thực hành phân tích FaceID sinh trắc học",
        speakerNotes: "Bài tập này giúp gắn liền lý thuyết 4 thành phần vào một công nghệ cực kỳ gần gũi mà học sinh dùng hàng ngày."
      }
    ]
  },
  {
    period: 3,
    title: "Phân loại Trí tuệ nhân tạo (ANI vs AGI vs ASI)",
    description: "Nhận biết ranh giới năng lực của các cấp độ AI: AI hẹp, AI tổng quát và Siêu trí tuệ nhân tạo giả định.",
    objectives: [
      "Phân biệt rõ ràng khái niệm 3 cấp độ phát triển của AI: ANI, AGI, và ASI.",
      "Lấy được ví dụ minh họa thực tế cho AI hẹp (ANI) đang hiện hữu xung quanh.",
      "Nhận định một cách khoa học, tránh hiểu lầm hoặc lo sợ thái quá về Siêu trí tuệ nhân tạo (ASI)."
    ],
    slides: [
      {
        id: "l3_s1",
        title: "PHÂN LOẠI TRÍ TUỆ NHÂN TẠO",
        visualType: "title",
        content: [
          "Tiết 3: Từ Trí tuệ nhân tạo hẹp đến Siêu trí tuệ",
          "Mục tiêu: Tìm hiểu ranh giới thông minh giữa các cấp độ máy móc",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Liệu robot có thống trị thế giới như trong phim viễn tưởng?"
        ],
        visualUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Robot thông minh tương tác",
        speakerNotes: "Chào các em. Trong phim ảnh chúng ta thường thấy những robot có cảm xúc và suy nghĩ tự do. Nhưng thực tế công nghệ đang ở mức độ nào? Hôm nay chúng ta sẽ phân loại chi tiết."
      },
      {
        id: "l3_s2",
        title: "Câu Hỏi Gợi Mở: Sự Khác Biệt Giữa Các Trí Tuệ",
        visualType: "intro",
        content: [
          "💭 Đố vui trí tuệ:",
          "• AlphaGo có thể đánh bại nhà vô địch cờ vây thế giới một cách dễ dàng.",
          "• Nhưng liệu AlphaGo có biết lái xe ô tô hoặc viết một bài thơ tình không?",
          "🤔 Tại sao một siêu máy tính thắng cờ vây lại thất bại trước các việc đơn giản của một đứa trẻ lên năm?",
          "💡 Gợi ý: Đó là sự khác biệt lớn giữa trí thông minh chuyên biệt và trí thông minh đa dụng."
        ],
        visualUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Bàn cờ vây trí tuệ",
        speakerNotes: "Học sinh sẽ nhận ra AlphaGo chỉ được học duy nhất một thuật toán chơi cờ. Từ đó dẫn đến phân loại đầu tiên: AI Hẹp."
      },
      {
        id: "l3_s3",
        title: "1. AI Hẹp (Artificial Narrow AI - ANI)",
        visualType: "concepts",
        content: [
          "Định nghĩa: ANI là loại AI được thiết kế và huấn luyện để thực hiện một tác vụ chuyên biệt duy nhất một cách xuất sắc.",
          "Đặc điểm cốt lõi:",
          "Không có khả năng tự mở rộng kiến thức ngoài phạm vi được lập trình.",
          "Toàn bộ các hệ thống AI trên thế giới hiện nay đều thuộc nhóm ANI.",
          "Ví dụ thực tế: Bộ lọc thư rác Gmail, thuật toán gợi ý của YouTube, xe tự lái Tesla, nhận diện giọng nói Siri."
        ],
        visualUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Hệ thống lập trình ứng dụng",
        speakerNotes: "Dù ChatGPT trả lời được rất nhiều câu hỏi, nó thực chất vẫn là một ANI chuyên về dự đoán từ tiếp theo trong văn bản, chứ không thể tự suy nghĩ sáng tạo độc lập."
      },
      {
        id: "l3_s4",
        title: "2. AI Tổng Quát (Artificial General AI - AGI)",
        visualType: "concepts",
        content: [
          "Định nghĩa: AGI là mức độ AI giả định sở hữu trí tuệ ngang ngửa con người, có thể học hỏi, hiểu, thích ứng và thực hiện bất kỳ công việc trí óc nào.",
          "Năng lực vượt trội của AGI:",
          "Tự ý thức (Self-awareness) và hiểu được ngữ cảnh cuộc sống phức tạp.",
          "Khả năng đa nhiệm hoàn hảo: Vừa nghiên cứu khoa học, vừa vẽ tranh, vừa trò chuyện tâm lý.",
          "Trạng thái phát triển: Hiện nay chưa tồn tại AGI. Đây là đích đến của các tập đoàn công nghệ hàng đầu."
        ],
        visualUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Ý tưởng về trí tuệ nhân tạo toàn diện",
        speakerNotes: "Hãy lưu ý học sinh rằng AGI vẫn đang là mục tiêu nghiên cứu đầy tranh cãi. Nhiều chuyên gia dự báo cần 10 đến 50 năm nữa mới có thể đạt được."
      },
      {
        id: "l3_s5",
        title: "3. Siêu AI (Artificial Super AI - ASI)",
        visualType: "concepts",
        content: [
          "Định nghĩa: ASI là cấp độ AI giả định khi trí thông minh của máy vượt xa tất cả trí tuệ kết hợp của loài người ở mọi khía cạnh sáng tạo, giải quyết vấn đề và kỹ năng xã hội.",
          "Các kịch bản tương lai tưởng tượng:",
          "Khả năng tự nâng cấp thuật toán thần tốc chỉ trong vài giây.",
          "Tìm ra vắc xin cho mọi bệnh tật, giải quyết khủng hoảng khí hậu toàn cầu.",
          "Rủi ro hiện hữu: Nguy cơ mất kiểm soát nếu các mục tiêu của ASI không đồng nhất với lợi ích sinh tồn của loài người."
        ],
        visualUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Vũ trụ kỹ thuật số giả định",
        speakerNotes: "ASI hoàn toàn nằm trên lý thuyết và phim giả tưởng. Học sinh cần hiểu để có tư duy cởi mở nhưng tỉnh táo, không hoang mang lo sợ vô căn cứ."
      },
      {
        id: "l3_s6",
        title: "Bảng So Sánh Các Cấp Độ Trí Tuệ Nhân Tạo",
        visualType: "comparison",
        content: [
          "Tóm tắt trực quan ba cấp độ phát triển để học sinh dễ nắm bắt kiến thức:",
          "Cấp độ càng cao, tính đa dụng và khả năng độc lập tự quyết càng lớn."
        ],
        comparisonData: {
          leftTitle: "AI Hẹp (ANI) - Hiện Tại",
          leftItems: [
            "Khả năng: Chuyên biệt một nhiệm vụ duy nhất.",
            "Trạng thái: Đã cực kỳ phổ biến toàn cầu.",
            "Ví dụ: Bộ lọc ảnh camera, dự báo thời tiết, chatbot AI."
          ],
          rightTitle: "AI Tổng Quát (AGI) & Siêu AI (ASI) - Tương Lai",
          rightItems: [
            "Khả năng: Tự tư duy đa nhiệm, vượt tầm bộ não người.",
            "Trạng thái: Đang nghiên cứu lý thuyết / giả định công nghệ.",
            "Ví dụ: Robot có ý thức tự do, siêu máy tính tự cải tiến mã nguồn."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        visualLabel: "So sánh cấp độ AI hẹp hiện tại và Siêu AI tương lai",
        speakerNotes: "Sử dụng bảng so sánh này để củng cố sự phân biệt rõ ràng giữa thực tế hiện nay (ANI) và viễn tưởng tương lai (AGI/ASI)."
      },
      {
        id: "l3_s7",
        title: "Bản Đồ Phân Loại AI Theo Tâm Lý Học Hành Vi",
        visualType: "diagram",
        content: [
          "Bên cạnh năng lực, các nhà khoa học còn phân loại AI theo mức độ nhận thức xã hội:",
          "• 1. Máy phản ứng (Reactive): Không có trí nhớ, chỉ phản ứng lập thì (AlphaGo).",
          "• 2. Trí nhớ giới hạn (Limited Memory): Học từ lịch sử ngắn hạn (Xe tự lái lái xe dựa trên dữ liệu giao thông vừa qua).",
          "• 3. Lý thuyết tâm lý (Theory of Mind): Hiểu được cảm xúc của người đối diện.",
          "• 4. Tự nhận thức (Self-aware): Có ý thức và cảm xúc cá nhân."
        ],
        diagramData: {
          nodes: [
            { id: "1", label: "1. Máy phản ứng", x: 15, y: 50, color: "#9CA3AF" },
            { id: "2", label: "2. Trí nhớ giới hạn", x: 38, y: 30, color: "#3B82F6" },
            { id: "3", label: "3. Lý thuyết tâm lý", x: 62, y: 30, color: "#10B981" },
            { id: "4", label: "4. Tự nhận thức", x: 85, y: 50, color: "#EF4444" }
          ],
          links: [
            { source: "1", target: "2", label: "Nâng cấp" },
            { source: "2", target: "3", label: "Tương lai gần" },
            { source: "3", target: "4", label: "Viễn tưởng" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ 4 cấp độ nhận thức hành vi AI",
        speakerNotes: "Phân loại này giúp các em thấy ranh giới tiến hóa của công nghệ từ những cỗ máy vô tri đến những thực thể có khả năng thấu cảm."
      },
      {
        id: "l3_s8",
        title: "Trắc Nghiệm Tương Tác: Phân Biệt Cấp Độ AI",
        visualType: "quiz",
        content: [
          "Thử thách trí nhớ của em qua câu hỏi trắc nghiệm thực tế dưới đây."
        ],
        interactiveQuiz: {
          question: "Hệ thống AI dịch ngôn ngữ Google Translate dịch chuẩn xác hàng trăm ngôn ngữ khác nhau trên thế giới thuộc nhóm phân loại trí tuệ nhân tạo nào?",
          options: [
            "Trí tuệ nhân tạo tổng quát (AGI)",
            "Trí tuệ nhân tạo hẹp (ANI)",
            "Siêu trí tuệ nhân tạo (ASI)",
            "Hệ thống tự nhận thức hoàn toàn"
          ],
          answerIndex: 1,
          explanation: "Mặc dù Google Translate thực hiện tác vụ dịch thuật vô cùng xuất sắc trên nhiều ngôn ngữ, nó vẫn là một AI chuyên dụng cho một việc duy nhất (dịch thuật), do đó thuộc nhóm ANI."
        },
        visualUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm phân loại công nghệ AI",
        speakerNotes: "Khắc sâu khái niệm: Cứ làm một việc cụ thể, dù giỏi đến đâu thì vẫn là ANI."
      },
      {
        id: "l3_s9",
        title: "Hoạt Động Tranh Biện: Tương Lai Loài Người",
        visualType: "activity",
        content: [
          "🔥 Thảo luận tranh biện nhanh (5 phút):",
          "• Giả sử trong tương lai con người chế tạo thành công AGI hoặc ASI.",
          "• Phái Ủng hộ: Tin rằng ASI sẽ giúp loài người giải quyết mọi bệnh tật, nghèo đói và bước vào thời hoàng kim.",
          "• Phái Lo ngại: Tin rằng ASI sẽ coi con người là sinh vật kém hiệu quả và chiếm quyền kiểm soát.",
          "👉 Hãy cho biết quan điểm cá nhân của em và đưa ra ít nhất một lý do bảo vệ nó."
        ],
        activity: {
          title: "Tranh biện quan điểm phát triển Siêu AI",
          duration: "10 Phút",
          instructions: [
            "Chia lớp làm 2 phe trái ngược nhau.",
            "Mỗi phe thảo luận nhanh trong 3 phút để tìm ra lập luận sắc bén nhất.",
            "Mỗi phe cử 1 đại diện thuyết trình bảo vệ quan điểm trong 1 phút rưỡi."
          ],
          tips: "Hãy hướng học sinh tới tư duy phát triển công nghệ có trách nhiệm (Ethical AI) thay vì lo sợ thụ động."
        },
        visualUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Tranh biện sôi nổi về tương lai Trí tuệ nhân tạo",
        speakerNotes: "Hoạt động tranh biện kích thích tư duy phản biện rất tốt cho học sinh THPT, giúp các em quan tâm hơn đến đạo đức công nghệ."
      }
    ]
  }
];
