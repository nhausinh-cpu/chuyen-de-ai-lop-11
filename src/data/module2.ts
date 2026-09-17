import { Lesson } from '../types';

export const module2: Lesson[] = [
  {
    period: 4,
    title: "NLP và Thị giác máy tính",
    description: "Khám phá hai lĩnh vực ứng dụng AI gần gũi và mạnh mẽ nhất hiện nay: Xử lý ngôn ngữ tự nhiên và Thị giác máy tính.",
    objectives: [
      "Hiểu rõ khái niệm và phạm vi ứng dụng của Xử lý ngôn ngữ tự nhiên (NLP) và Thị giác máy tính (Computer Vision).",
      "Liệt kê được các ứng dụng thực tế của hai lĩnh vực này trong cuộc sống hàng ngày.",
      "Vẽ và giải thích được sơ đồ quy trình hoạt động cơ bản của Thị giác máy tính."
    ],
    slides: [
      {
        id: "l4_s1",
        title: "XỬ LÝ NGÔN NGỮ TỰ NHIÊN & THỊ GIÁC MÁY TÍNH",
        visualType: "title",
        content: [
          "Tiết 4: Cách AI nghe, hiểu tiếng người và nhìn thế giới xung quanh",
          "Mục tiêu: Làm chủ hai giác quan mạnh mẽ nhất của trí tuệ nhân tạo",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Cùng khám phá công nghệ đứng sau Google Translate và FaceID!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Thị giác máy tính và phân tích",
        speakerNotes: "Chào cả lớp. Hôm nay chúng ta học Tiết 4 về hai lĩnh vực quan trọng nhất giúp máy tính có thể 'nghe, nói, đọc, viết' (NLP) và 'nhìn, hiểu' (Thị giác máy tính)."
      },
      {
        id: "l4_s2",
        title: "Khởi Động: Câu Hỏi Thực Tế",
        visualType: "intro",
        content: [
          "💭 Đố các em:",
          "• Khi các em đăng nhập vào các trang web, tại sao thỉnh thoảng hệ thống lại bắt các em bấm vào hình ảnh để chứng minh 'Tôi không phải là robot' (CAPTCHA)?",
          "• Tại sao máy tính lại khó nhận biết đâu là cột đèn giao thông hơn con người?",
          "💡 Thảo luận: Sự khác biệt trong cách con người nhận biết hình ảnh và cách máy tính phân tích ma trận điểm ảnh."
        ],
        visualUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Dữ liệu ma trận số hóa",
        speakerNotes: "Máy tính chỉ nhìn thấy hình ảnh dưới dạng một bảng số (ma trận điểm ảnh với các giá trị từ 0 đến 255). Việc nhận ra đồ vật là cực kỳ khó khăn với máy tính truyền thống."
      },
      {
        id: "l4_s3",
        title: "Xử Lý Ngôn Ngữ Tự Nhiên (NLP) Là Gì?",
        visualType: "concepts",
        content: [
          "Định nghĩa: NLP (Natural Language Processing) là nhánh của AI giúp máy tính hiểu, dịch thuật, phân tích và phản hồi bằng ngôn ngữ tự nhiên của con người.",
          "Các bài toán NLP cốt lõi:",
          "• Nhận diện giọng nói (Speech-to-Text): Chuyển giọng nói thành văn bản.",
          "• Phân tích cảm xúc (Sentiment Analysis): Đo lường thái độ tích cực/tiêu cực của người bình luận.",
          "• Dịch thuật máy (Machine Translation): Chuyển ngữ tự động.",
          "• Sinh văn bản (Text Generation): Chatbot viết văn, trả lời thư."
        ],
        visualUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Mạng lưới kết nối tri thức ngôn ngữ",
        speakerNotes: "Ngôn ngữ của con người có tính đa nghĩa, ẩn dụ và phụ thuộc ngữ cảnh cực kỳ lớn. Do đó, NLP là một trong những bài toán phức tạp nhất của AI."
      },
      {
        id: "l4_s4",
        title: "Thị Giác Máy Tính (Computer Vision) Là Gì?",
        visualType: "concepts",
        content: [
          "Định nghĩa: Thị giác máy tính là lĩnh vực AI giúp máy tính thu nhận, xử lý và hiểu thông tin từ hình ảnh hoặc video kỹ thuật số.",
          "Các khả năng ấn tượng:",
          "• Phân loại hình ảnh (Image Classification): Xác định đây là con chó hay con mèo.",
          "• Phát hiện vật thể (Object Detection): Xác định vị trí và vẽ khung bao quanh các vật thể trong khung hình.",
          "• Nhận diện khuôn mặt (Face Recognition): So khớp cấu trúc khuôn mặt để mở khóa thiết bị.",
          "• Phân đoạn hình ảnh (Segmentation): Tách nền, xóa phông ảnh chụp."
        ],
        visualUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Phân tích camera thông minh",
        speakerNotes: "Computer Vision giúp máy có mắt để nhìn. Từ camera giám sát, máy có thể đếm số lượng xe cộ trên đường phố theo thời gian thực."
      },
      {
        id: "l4_s5",
        title: "So Sánh Ứng Dụng Thực Tế: NLP vs Vision",
        visualType: "comparison",
        content: [
          "Hai lĩnh vực này hỗ trợ nhau để tạo ra các giải pháp toàn diện cho đời sống xã hội:",
          "Hãy quan sát các ứng dụng tiêu biểu của từng nhóm để hiểu rõ sự phân vai công nghệ."
        ],
        comparisonData: {
          leftTitle: "Ứng Dụng Xử Lý Ngôn Ngữ Tự Nhiên (NLP)",
          leftItems: [
            "Trợ lý ảo thông minh: Apple Siri, Google Assistant.",
            "Công cụ dịch thuật tức thời: Google Translate, DeepL.",
            "Công cụ soạn thảo thông minh: Tự động sửa lỗi chính tả, gợi ý viết email.",
            "Chatbot chăm sóc khách hàng tự động trên các sàn thương mại điện tử."
          ],
          rightTitle: "Ứng Dụng Thị Giác Máy Tính (Vision)",
          rightItems: [
            "Bảo mật sinh trắc học: FaceID mở khóa điện thoại, chấm công vân tay khuôn mặt.",
            "Giao thông thông minh: Xe tự lái nhận diện làn đường, camera phạt nguội.",
            "Y tế: AI phân tích phim X-quang, MRI để phát hiện sớm tế bào ung thư.",
            "Mạng xã hội: Tự động gắn thẻ (tag) bạn bè trong ảnh chụp chung."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        visualLabel: "So sánh ứng dụng thực tế NLP và Thị giác máy tính",
        speakerNotes: "Hãy cho học sinh thấy một chiếc xe tự hành cần cả hai: Thị giác máy tính để lái xe, và NLP để nghe mệnh lệnh chỉ đường của hành khách."
      },
      {
        id: "l4_s6",
        title: "Sơ Đồ Quy Trình Hoạt Động Của Thị Giác Máy Tính",
        visualType: "diagram",
        content: [
          "Quy trình xử lý một hình ảnh từ camera thô đến khi máy đưa ra quyết định:",
          "• 1. Camera thu nhận tín hiệu ánh sáng, số hóa thành điểm ảnh.",
          "• 2. Tiền xử lý: Làm sạch nhiễu, cân bằng sáng và xoay ảnh.",
          "• 3. Trích xuất đặc trưng: Thuật toán tìm kiếm các đường nét góc cạnh nổi bật.",
          "• 4. Phân loại: Mạng neuron đưa ra kết luận (Ví dụ: '98% đây là xe cứu thương')."
        ],
        diagramData: {
          nodes: [
            { id: "input", label: "1. Camera thu nhận ảnh", x: 10, y: 50, color: "#3B82F6" },
            { id: "preprocess", label: "2. Tiền xử lý (Xoay, Lọc)", x: 36, y: 30, color: "#10B981" },
            { id: "features", label: "3. Trích xuất góc cạnh", x: 62, y: 30, color: "#8B5CF6" },
            { id: "classify", label: "4. Ra quyết định (Phân loại)", x: 88, y: 50, color: "#EF4444" }
          ],
          links: [
            { source: "input", target: "preprocess", label: "Truyền ảnh" },
            { source: "preprocess", target: "features", label: "Làm sạch" },
            { source: "features", target: "classify", label: "Phân tích" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ quy trình nhận dạng thị giác máy tính",
        speakerNotes: "Giải thích các bước đơn giản này. Nhờ tốc độ phần cứng, toàn bộ 4 bước này diễn ra trong chưa đầy 1/100 giây ở điện thoại của các em."
      },
      {
        id: "l4_s7",
        title: "Hoạt Động Trải Nghiệm: Thử Thách Kể Tên Ứng Dụng",
        visualType: "activity",
        content: [
          "📝 Trải nghiệm tương tác tại chỗ:",
          "Hãy ghép đôi các ứng dụng công nghệ sau đây vào đúng nhóm NLP hay Thị giác máy tính:",
          "• A. Tiktok nhận diện khuôn mặt để chèn sticker mèo đáng yêu.",
          "• B. YouTube tự động dịch phụ đề từ tiếng Anh sang tiếng Việt.",
          "• C. Máy quét hải quan tự động nhận diện hộ chiếu.",
          "• D. Trò chuyện với trợ lý ảo hỗ trợ học tập Gemini.",
          "👉 Hãy viết đáp án ra nháp trong 1 phút."
        ],
        activity: {
          title: "Ghép đôi ứng dụng công nghệ thực tế",
          duration: "5 Phút",
          instructions: [
            "Học sinh tự làm việc độc lập trong 1 phút.",
            "Giáo viên gọi ngẫu nhiên học sinh trả lời từng câu ghép.",
            "Cả lớp phản biện và nhận xét chéo."
          ],
          tips: "Đáp án: A - Vision, B - NLP, C - Vision, D - NLP. Hãy đặt câu hỏi phụ về một ứng dụng kết hợp cả hai."
        },
        visualUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Thử thách ghép đôi ứng dụng công nghệ thực tế",
        speakerNotes: "Bài tập này giúp học sinh thực hành phân loại nhanh và phân biệt sắc nét hai giác quan số của AI."
      },
      {
        id: "l4_s8",
        title: "Trắc Nghiệm Tương Tác: NLP & Vision",
        visualType: "quiz",
        content: [
          "Hãy kiểm tra mức độ nắm bắt kiến thức của em về NLP và Thị giác máy tính qua câu hỏi bên phải nhé!"
        ],
        interactiveQuiz: {
          question: "Ứng dụng nào sau đây KHÔNG thuộc lĩnh vực Thị giác máy tính (Computer Vision)?",
          options: [
            "Hệ thống phát hiện biển báo giao thông trên đường của xe Tesla",
            "Mở khóa màn hình điện thoại bằng nhận diện FaceID",
            "Công cụ chuyển đổi âm thanh bài giảng thành văn bản chữ viết",
            "Camera giám sát tự động phát hiện kẻ gian đột nhập vào kho"
          ],
          answerIndex: 2,
          explanation: "Chuyển đổi âm thanh thành văn bản là tác vụ nhận diện giọng nói (Speech-to-Text), thuộc lĩnh vực Xử lý ngôn ngữ tự nhiên (NLP) chứ không phải Thị giác máy tính."
        },
        visualUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm tương tác phân biệt NLP và Vision",
        speakerNotes: "Giáo viên giải thích tại sao nhận diện giọng nói mặc dù liên quan đến âm thanh vật lý nhưng lại là bài toán NLP (vì đích đến cuối cùng là hiểu ngôn ngữ viết)."
      },
      {
        id: "l4_s9",
        title: "Tổng Kết Bài Học & Gợi Ý Chuẩn Bị",
        visualType: "summary",
        content: [
          "📌 NLP giúp máy hiểu tiếng người, hỗ trợ giao tiếp người - máy tự nhiên hơn.",
          "📌 Thị giác máy tính cung cấp đôi mắt kỹ thuật số giúp máy phân tích dữ liệu hình ảnh, video của thế giới thực.",
          "🏠 Chuẩn bị bài học sau: Hãy tự suy nghĩ xem máy tính học tập dựa trên dữ liệu như thế nào? Liệu nó có giống cách con người học từ lỗi sai không?"
        ],
        visualUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Tinh thần chuẩn bị học tập",
        speakerNotes: "Cảm ơn cả lớp. Ở tiết sau, chúng ta sẽ học về thuật toán tự học của AI, một bài học cốt lõi giải thích tại sao AI lại thông minh lên từng ngày."
      }
    ]
  },
  {
    period: 5,
    title: "Học máy và Học sâu",
    description: "Khám phá bản chất của sự tự học ở máy tính: So sánh lập trình truyền thống với học máy, các phương pháp học chính và mạng neuron sâu.",
    objectives: [
      "Giải thích được sự khác biệt bản chất giữa lập trình truyền thống và Học máy (Machine Learning).",
      "Liệt kê và định nghĩa sơ lược 3 phương pháp học chính: Có giám sát, Không giám sát, và Học tăng cường.",
      "Mô tả được khái niệm Học sâu (Deep Learning) và cách nó mô phỏng mạng neuron sinh học."
    ],
    slides: [
      {
        id: "l5_s1",
        title: "HỌC MÁY VÀ HỌC SÂU (MACHINE & DEEP LEARNING)",
        visualType: "title",
        content: [
          "Tiết 5: Máy tính tự học từ dữ liệu như thế nào?",
          "Mục tiêu: Hiểu bản chất phương thức thông minh lên của AI",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Mở khóa bí ẩn thuật toán đứng sau sự tiến hóa của AI!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Phân tích lập trình phức tạp",
        speakerNotes: "Chào các em. Trong các bài trước, chúng ta đã nhắc nhiều đến thuật toán tự học của AI. Hôm nay chúng ta sẽ trực tiếp tìm hiểu bản chất của Học máy và Học sâu."
      },
      {
        id: "l5_s2",
        title: "Khởi Động: Trí Tuệ Tự Học vs Lập Trình Truyền Thống",
        visualType: "intro",
        content: [
          "💭 Câu hỏi tư duy:",
          "• Nếu viết code truyền thống để nhận diện số viết tay, em sẽ viết bao nhiêu câu lệnh If-Else để phủ hết mọi nét vẽ nguệch ngoạc của con người?",
          "• Liệu có giải pháp nào giúp máy tự nhìn hàng vạn chữ số mẫu và tự rút ra quy luật viết số không?",
          "👉 Gợi ý: Đó chính là điểm xuất phát của Học máy."
        ],
        visualUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Chữ số và dòng lệnh máy tính",
        speakerNotes: "Rất khó để viết đủ câu lệnh If-Else cho mọi kiểu viết tay của con người. Học máy giải quyết bài toán này bằng cách tự tìm quy luật."
      },
      {
        id: "l5_s3",
        title: "Lập Trình Truyền Thống vs Học Máy",
        visualType: "comparison",
        content: [
          "Học máy đảo ngược tư duy giải quyết vấn đề bằng máy tính truyền thống:",
          "Hãy quan sát hai mô hình hoạt động để nhận thấy cuộc cách mạng tư duy lập trình."
        ],
        comparisonData: {
          leftTitle: "Lập trình truyền thống (Traditional Programming)",
          leftItems: [
            "Đầu vào: Dữ liệu (Data) + Quy tắc/Công thức lập trình (Rules).",
            "Máy tính đóng vai trò thực thi các bước tuần tự một cách máy móc.",
            "Đầu ra: Kết quả chính xác (Answers).",
            "Hạn chế: Thất bại hoàn toàn trước các tác vụ phức tạp, mơ hồ."
          ],
          rightTitle: "Học máy (Machine Learning)",
          rightItems: [
            "Đầu vào: Dữ liệu (Data) + Kết quả mẫu (Answers).",
            "Máy tính đóng vai trò tự phân tích để tìm ra công thức chung.",
            "Đầu ra: Quy tắc/Thuật toán thông minh (Rules).",
            "Ưu điểm: Càng nhiều dữ liệu, quy tắc rút ra càng chính xác."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        visualLabel: "So sánh lập trình truyền thống và thuật toán học máy",
        speakerNotes: "Hãy giải thích rõ: Học máy cho phép máy tính tự viết ra 'quy luật' thay vì con người phải nhọc công ngồi nghĩ ra quy luật đó."
      },
      {
        id: "l5_s4",
        title: "Ba Phương Pháp Học Máy Chính",
        visualType: "diagram",
        content: [
          "Máy tính có nhiều cách học khác nhau tùy thuộc vào dạng dữ liệu được cung cấp:",
          "• 1. Học có giám sát (Supervised Learning): Học từ dữ liệu đã dán nhãn mẫu sẵn.",
          "• 2. Học không giám sát (Unsupervised Learning): Tự tìm quy luật tiềm ẩn trong dữ liệu thô.",
          "• 3. Học tăng cường (Reinforcement Learning): Học từ trải nghiệm thử sai để nhận điểm thưởng/phạt."
        ],
        diagramData: {
          nodes: [
            { id: "ml", label: "PHƯƠNG PHÁP HỌC MÁY", x: 50, y: 15, color: "#EF4444" },
            { id: "sup", label: "1. Học có giám sát (Dữ liệu gán nhãn)", x: 15, y: 55, color: "#3B82F6" },
            { id: "unsup", label: "2. Học không giám sát (Tự gom cụm)", x: 50, y: 65, color: "#10B981" },
            { id: "reinf", label: "3. Học tăng cường (Phần thưởng/Phạt)", x: 85, y: 55, color: "#8B5CF6" }
          ],
          links: [
            { source: "ml", target: "sup", label: "Phân loại" },
            { source: "ml", target: "unsup", label: "Phân loại" },
            { source: "ml", target: "reinf", label: "Phân loại" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ 3 phương pháp học máy căn bản",
        speakerNotes: "Học có giám sát giống như học sinh học có thầy giáo chấm bài. Học không giám sát là tự đọc sách tìm quy luật. Học tăng cường giống như tập đi xe đạp, ngã thì đau, đi vững thì đi được xa."
      },
      {
        id: "l5_s5",
        title: "Học Sâu (Deep Learning) Là Gì?",
        visualType: "concepts",
        content: [
          "Định nghĩa: Học sâu là phân nhóm nâng cao của Học máy, sử dụng các Mạng Neuron Nhân Tạo Nhiều Tầng (Deep Neural Networks) để tự động trích xuất đặc trưng phức tạp.",
          "Tại sao gọi là 'Sâu'?",
          "• Có hàng chục, thậm chí hàng trăm lớp neuron trung gian (hidden layers) nằm giữa đầu vào và đầu ra.",
          "• Khả năng tự động phát hiện các đặc trưng từ đơn giản đến phức tạp mà không cần con người chỉ rõ.",
          "• Nhược điểm: Đòi hỏi tài nguyên phần cứng siêu mạnh và lượng dữ liệu khổng lồ."
        ],
        visualUrl: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Sơ đồ mạng neuron sâu đa tầng",
        speakerNotes: "Học sâu chính là công nghệ cốt lõi đứng sau các chatbot thông minh ngày nay như ChatGPT và Gemini."
      },
      {
        id: "l5_s6",
        title: "Bảng So Sánh Machine Learning vs Deep Learning",
        visualType: "comparison",
        content: [
          "Để phân biệt rõ ranh giới kỹ thuật giữa hai thuật ngữ thường bị nhầm lẫn này:",
          "Hãy quan sát sự khác biệt về sự can thiệp của con người và tài nguyên vận hành."
        ],
        comparisonData: {
          leftTitle: "Học Máy Truyền Thống (Machine Learning)",
          leftItems: [
            "Con người phải tự thiết kế, trích xuất đặc trưng thủ công trước khi đưa vào mô hình học.",
            "Hoạt động tốt với tập dữ liệu vừa và nhỏ.",
            "Có thể chạy mượt mà trên máy tính cá nhân cấu hình trung bình."
          ],
          rightTitle: "Học Sâu (Deep Learning)",
          rightItems: [
            "Máy tự động học cách trích xuất đặc trưng từ ảnh/văn bản thô.",
            "Cực kỳ đói dữ liệu: Càng nhiều dữ liệu, độ chính xác càng tiệm cận hoàn hảo.",
            "Bắt buộc phải sử dụng hệ thống siêu máy tính trang bị GPU/TPU mạnh mẽ."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
        visualLabel: "So sánh Machine Learning truyền thống và Học sâu Deep Learning",
        speakerNotes: "Hãy ví dụ: Với Machine Learning truyền thống, ta phải bảo máy 'hãy đo khoảng cách 2 mắt'. Còn với Deep Learning, ta chỉ việc quăng 1 triệu cái ảnh mặt người vào, máy tự biết đo gì."
      },
      {
        id: "l5_s7",
        title: "Hoạt Động Nhóm: Phân Tích Kịch Bản Học",
        visualType: "activity",
        content: [
          "📋 Thảo luận tình huống học tập của AI:",
          "Hãy xác định xem kịch bản sau sử dụng phương pháp học máy nào (Có giám sát, Không giám sát, hay Học tăng cường):",
          "• Tình huống 1: AI huấn luyện robot tự tìm đường ra khỏi mê cung. Mỗi khi đâm vào tường bị trừ 5 điểm, đi đúng đường được cộng 10 điểm.",
          "• Tình huống 2: Ứng dụng phân tích dữ liệu mua sắm của khách hàng siêu thị để tự chia khách hàng thành 4 nhóm sở thích khác nhau.",
          "• Tình huống 3: Hệ thống phân loại ảnh thư rác dựa trên bộ 10,000 email đã được con người đánh dấu 'Thư rác' và 'Thư thường'."
        ],
        activity: {
          title: "Xác định phương pháp học máy phù hợp",
          duration: "10 Phút",
          instructions: [
            "Thảo luận nhóm 4 học sinh.",
            "Ghi đáp án cho 3 tình huống trên giấy nháp.",
            "Đáp án đúng: Tình huống 1 - Học tăng cường, Tình huống 2 - Học không giám sát, Tình huống 3 - Học có giám sát."
          ],
          tips: "Hãy suy nghĩ xem trong cuộc sống, việc con người học tập thường giống phương pháp nào nhất?"
        },
        visualUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Hoạt động phân tích kịch bản học máy",
        speakerNotes: "Bài tập này rất hiệu quả để củng cố 3 khái niệm phương pháp học máy vừa được học."
      },
      {
        id: "l5_s8",
        title: "Trắc Nghiệm Tương Tác: Thử Thách Thuật Toán",
        visualType: "quiz",
        content: [
          "Cùng thử thách tư duy thuật toán của em qua câu hỏi trắc nghiệm dưới đây!"
        ],
        interactiveQuiz: {
          question: "Phương pháp học máy nào hoạt động dựa trên cơ chế 'thử và sai', liên tục tương tác với môi trường để nhận điểm thưởng (reward) nhằm tối ưu hóa hành động?",
          options: [
            "Học có giám sát (Supervised Learning)",
            "Học không giám sát (Unsupervised Learning)",
            "Học tăng cường (Reinforcement Learning)",
            "Lập trình hướng đối tượng"
          ],
          answerIndex: 2,
          explanation: "Học tăng cường (Reinforcement Learning) dựa hoàn toàn trên việc tối đa hóa điểm thưởng nhận được từ môi trường thông qua quá trình thử sai liên tục."
        },
        visualUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm tương tác cơ chế học máy",
        speakerNotes: "Nhấn mạnh lại ứng dụng học tăng cường trong xe tự hành hoặc trò chơi AlphaGo tự đấu với chính mình."
      },
      {
        id: "l5_s9",
        title: "Tổng Kết Bài Học & Nhiệm Vụ",
        visualType: "summary",
        content: [
          "📌 Học máy là cách máy tính tự rút ra quy luật từ dữ liệu thay vì con người lập trình cứng.",
          "📌 Học sâu nâng tầm học máy bằng các mạng neuron đa tầng tự động hóa việc khai phá tri thức.",
          "🏠 Chuẩn bị cho tiết thực hành sau: Hãy đăng ký tài khoản ChatGPT hoặc Gemini để sẵn sàng tham gia trải nghiệm viết Prompt trực tiếp trên lớp!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Thực hành AI tương lai",
        speakerNotes: "Cảm ơn các em. Bài học hôm nay hơi nhiều lý thuyết toán, nhưng rất quan trọng để bài sau chúng ta thực hành tương tác trực tiếp với các chatbot một cách thông minh nhất!"
      }
    ]
  },
  {
    period: 6,
    title: "Thực hành AI: Chatbot & Kỹ thuật viết Prompt",
    description: "Trải nghiệm thực hành tương tác trực tiếp với mô hình ngôn ngữ lớn và rèn luyện kỹ năng viết câu lệnh (Prompt) tối ưu hiệu quả học tập.",
    objectives: [
      "Hiểu được nguyên lý hoạt động cơ bản của Mô hình ngôn ngữ lớn (LLM).",
      "Nắm vững công thức viết Prompt chuẩn 4 yếu tố: Role, Task, Context/Instruction, và Output format.",
      "Viết được các Prompt thực tế giúp hỗ trợ học tập các môn học khác nhau hiệu quả."
    ],
    slides: [
      {
        id: "l6_s1",
        title: "THỰC HÀNH AI: CHATBOT & KỸ THUẬT VIẾT PROMPT",
        visualType: "title",
        content: [
          "Tiết 6: Làm chủ cuộc trò chuyện với Trí tuệ nhân tạo",
          "Mục tiêu: Rèn luyện kỹ năng giao tiếp hiệu quả với mô hình ngôn ngữ",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Kỹ năng Prompt - 'Chìa khóa vàng' mở cánh cửa tri thức kỷ nguyên AI!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Học sinh tương tác máy tính",
        speakerNotes: "Chào các em! Tiết học này cực kỳ thú vị vì chúng ta sẽ trực tiếp thực hành trên máy tính hoặc điện thoại để học kỹ thuật viết Prompt cho AI."
      },
      {
        id: "l6_s2",
        title: "Khởi Động: Trải Nghiệm Chatbot",
        visualType: "intro",
        content: [
          "💭 Thử thách giao tiếp:",
          "• Đã bao giờ em hỏi AI câu gì đó và nhận lại câu trả lời vô cùng chung chung, không đúng ý chưa?",
          "• Tại sao cùng một công cụ AI, bạn bên cạnh lại lấy được tài liệu giải toán cực hay, còn em thì không?",
          "👉 Bí quyết nằm ở cách các em đưa ra yêu cầu (gọi là Prompt). Hãy cùng học cách viết Prompt chuyên nghiệp nhé!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Luồng suy nghĩ giao tiếp",
        speakerNotes: "Giải thích rằng AI giống như một trợ lý cực kỳ thông minh nhưng ngây ngô, ta bảo gì nó làm nấy, nếu ta nói mơ hồ nó sẽ làm mơ hồ."
      },
      {
        id: "l6_s3",
        title: "Mô Hình Ngôn Ngữ Lớn (LLM) Hoạt Động Thế Nào?",
        visualType: "concepts",
        content: [
          "LLM (Large Language Model) như ChatGPT, Gemini, Claude là các hệ thống AI được huấn luyện trên hàng tỷ văn bản:",
          "• Nguyên lý hoạt động thực chất: Dự đoán từ tiếp theo có khả năng xuất hiện cao nhất dựa trên bối cảnh câu hỏi.",
          "• Chúng không 'hiểu' thực tại như con người, mà xử lý xác suất ngôn ngữ siêu việt.",
          "• Kết quả trả lời phụ thuộc 100% vào chất lượng thông tin đầu vào (Prompt)."
        ],
        visualUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Hình khối cấu trúc xác suất",
        speakerNotes: "Vì hoạt động dựa trên xác suất từ ngữ, LLM thỉnh thoảng có thể bị 'ảo tưởng' (hallucination) tạo ra thông tin sai lệch nhưng nghe rất thuyết phục. Học sinh cần kiểm chứng."
      },
      {
        id: "l6_s4",
        title: "Prompt Là Gì? Tại Sao Phải Học Viết Prompt?",
        visualType: "concepts",
        content: [
          "Định nghĩa: Prompt (Câu lệnh) là bất kỳ đoạn văn bản, câu hỏi hay chỉ dẫn nào em nhập vào khung chat để yêu cầu AI xử lý.",
          "Vai trò của Prompt Engineering (Kỹ thuật Prompt):",
          "• Giúp định hình hướng tư duy và phạm vi kiến thức AI sử dụng.",
          "• Tiết kiệm thời gian chỉnh sửa câu trả lời nhiều lần.",
          "• Khai thác tối đa kho tri thức khổng lồ của mô hình AI một cách chính xác."
        ],
        visualUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Sách và tri thức tương tác",
        speakerNotes: "Prompt Engineering được coi là một trong những ngành nghề mới hot nhất hiện nay với thu nhập cực cao. Hãy kích thích ham muốn học hỏi của các em."
      },
      {
        id: "l6_s5",
        title: "Công Thức Prompt Chuẩn 4 Yếu Tố: R-T-C-O",
        visualType: "comparison",
        content: [
          "Áp dụng công thức vàng này để luôn nhận được câu trả lời hoàn hảo từ bất kỳ chatbot AI nào:",
          "Hãy so sánh Prompt thô sơ và Prompt chuẩn hóa theo công thức R-T-C-O."
        ],
        comparisonData: {
          leftTitle: "Prompt thô sơ (Kém hiệu quả)",
          leftItems: [
            "Ví dụ: 'Viết cho tôi một bài văn về bảo vệ môi trường.'",
            "Bị lỗi: Quá chung chung, AI không biết viết cho đối tượng nào đọc, độ dài bao nhiêu, phong cách thế nào.",
            "Kết quả: Bài văn nhạt nhẽo, rập khuôn, không ứng dụng được."
          ],
          rightTitle: "Prompt Chuẩn R-T-C-O (Hiệu quả cao)",
          rightItems: [
            "Bối cảnh (Role): 'Hãy đóng vai chuyên gia môi trường.'",
            "Nhiệm vụ (Task): 'Viết bài thuyết trình kêu gọi bảo vệ môi trường.'",
            "Chỉ dẫn (Context): 'Tập trung vào vấn đề rác thải nhựa ở trường học.'",
            "Định dạng (Output): 'Trình bày dưới dạng 5 gạch đầu dòng ngắn gọn, dí dỏm.'"
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Bảng so sánh công thức viết Prompt R-T-C-O",
        speakerNotes: "Giải thích rõ 4 chữ cái R-T-C-O. Khuyến khích học sinh ghi nhớ và áp dụng ngay từ hôm nay."
      },
      {
        id: "l6_s6",
        title: "Sơ Đồ Luồng Tư Duy Viết Prompt Tối Ưu",
        visualType: "diagram",
        content: [
          "Quy trình cải tiến Prompt liên tục để đạt được kết quả mong muốn:",
          "• Bước 1: Xác định rõ mục tiêu cần AI giải quyết.",
          "• Bước 2: Viết bản nháp đầu tiên áp dụng công thức R-T-C-O.",
          "• Bước 3: Đọc câu trả lời, phát hiện các chỗ AI hiểu sai bối cảnh.",
          "• Bước 4: Tinh chỉnh chỉ dẫn (Feedback) để AI sửa lại hoàn thiện hơn."
        ],
        diagramData: {
          nodes: [
            { id: "goal", label: "Mục tiêu rõ ràng", x: 15, y: 50, color: "#3B82F6" },
            { id: "draft", label: "Bản nháp RTCO", x: 38, y: 30, color: "#10B981" },
            { id: "eval", label: "Đánh giá kết quả", x: 62, y: 30, color: "#8B5CF6" },
            { id: "refine", label: "Feedback tinh chỉnh", x: 85, y: 50, color: "#EF4444" }
          ],
          links: [
            { source: "goal", target: "draft", label: "Áp dụng" },
            { source: "draft", target: "eval", label: "Kiểm tra" },
            { source: "eval", target: "refine", label: "Sửa lỗi" },
            { source: "refine", target: "draft", label: "Lặp lại tối ưu" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ chu trình tối ưu hóa câu lệnh Prompt",
        speakerNotes: "Giao tiếp với AI là một quá trình hội thoại đa bước (multi-turn conversation) chứ không phải chỉ hỏi một câu rồi thôi."
      },
      {
        id: "l6_s7",
        title: "Thực Hành Viết Prompt: Trợ Lý Học Lịch Sử",
        visualType: "activity",
        content: [
          "💻 Thử thách thực hành nhóm đôi (10 phút):",
          "Nhiệm vụ: Viết một Prompt hoàn chỉnh theo công thức R-T-C-O để nhờ AI hỗ trợ học tập.",
          "• Chủ đề: Nhờ AI tóm tắt diễn biến Chiến dịch Điện Biên Phủ lịch sử.",
          "• Yêu cầu: Đóng vai giáo viên lịch sử vui tính, viết tóm tắt dễ nhớ dài tối đa 300 từ cho học sinh lớp 12 dễ thuộc, có chèn thơ hoặc câu nói hài hước.",
          "👉 Hãy thực hiện gõ Prompt này vào ChatGPT/Gemini trên thiết bị và nhận kết quả."
        ],
        activity: {
          title: "Thực hành thiết kế Prompt hỗ trợ học tập",
          duration: "15 Phút",
          instructions: [
            "Học sinh ngồi theo cặp cùng máy tính/điện thoại.",
            "Cùng nhau thảo luận viết câu Prompt thỏa mãn các điều kiện.",
            "Chạy thử trên AI, sao chép câu trả lời tâm đắc nhất và dán lên nhóm học tập của lớp."
          ],
          tips: "Nếu AI viết quá dài, hãy tiếp tục gõ phản hồi: 'Hãy rút gọn lại một nửa và làm nổi bật 3 dấu mốc chính bằng biểu tượng emoji.'"
        },
        visualUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Thực hành thiết kế câu lệnh tương tác cùng AI",
        speakerNotes: "Quan sát hướng dẫn các nhóm viết đúng cấu trúc. Cho cả lớp nhận xét xem bài viết của AI của nhóm nào sinh động nhất."
      },
      {
        id: "l6_s8",
        title: "Trắc Nghiệm Tương Tác: Làm Chủ Prompt",
        visualType: "quiz",
        content: [
          "Kiểm tra xem em đã thực sự nắm được cốt lõi kỹ thuật viết Prompt chưa qua thử thách bên phải nhé!"
        ],
        interactiveQuiz: {
          question: "Yếu tố nào trong công thức viết Prompt R-T-C-O giúp AI hiểu rõ vai trò, tính cách và phong cách ngôn ngữ cần sử dụng khi phản hồi?",
          options: [
            "Task (Nhiệm vụ)",
            "Role (Bối cảnh/Vai trò)",
            "Context (Ngữ cảnh)",
            "Output (Định dạng đầu ra)"
          ],
          answerIndex: 1,
          explanation: "Role (Vai trò) chính là yếu tố thiết lập cho AI đóng vai làm một nhân vật cụ thể (Ví dụ: Chuyên gia, Giáo viên, Lập trình viên) để phản hồi chuẩn phong cách."
        },
        visualUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm kỹ thuật viết Prompt",
        speakerNotes: "Nhắc lại tầm quan trọng của việc gán Role. Nó giúp AI thu hẹp không gian tìm kiếm tri thức phù hợp."
      },
      {
        id: "l6_s9",
        title: "Tổng Kết Tiết Học & Bài Tập Về Nhà",
        visualType: "summary",
        content: [
          "📌 Prompt là công cụ để điều khiển tư duy của các mô hình ngôn ngữ lớn.",
          "📌 Luôn áp dụng công thức R-T-C-O để tạo ra những câu Prompt chất lượng cao.",
          "🏠 Bài tập về nhà: Sử dụng AI để thiết kế 1 bài trắc nghiệm gồm 5 câu hỏi ôn tập môn Tiếng Anh chủ đề môi trường bằng cách viết Prompt tối ưu. Chụp ảnh màn hình cuộc hội thoại nộp vào link nộp bài."
        ],
        visualUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Học tập vui vẻ",
        speakerNotes: "Hôm nay chúng ta đã có một tiết thực hành rất tuyệt vời. Chúc các em vận dụng thành công kỹ năng Prompt để học tốt các môn học khác nhé!"
      }
    ]
  }
];
