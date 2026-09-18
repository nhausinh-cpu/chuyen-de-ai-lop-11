import { Lesson } from '../types';

export const module4: Lesson[] = [
  {
    period: 10,
    title: "Đạo đức AI, Bản quyền & An toàn thông tin",
    description: "Nhận thức sâu sắc về các khía cạnh mặt trái công nghệ: Định kiến thuật toán, Deepfake lừa đảo, sở hữu trí tuệ và bảo mật riêng tư.",
    objectives: [
      "Giải thích được khái niệm định kiến thuật toán (Algorithmic Bias) và deepfake giả mạo.",
      "Hiểu rõ các thách thức bản quyền khi tác phẩm do AI tạo sinh sáng tác.",
      "Vận dụng được 5 nguyên tắc đạo đức cốt lõi và các quy tắc bảo mật dữ liệu khi sử dụng AI hàng ngày."
    ],
    slides: [
      {
        id: "l10_s1",
        title: "ĐẠO ĐỨC AI, BẢN QUYỀN & AN TOÀN THÔNG TIN",
        visualType: "title",
        content: [
          "Tiết 10: Sử dụng Trí tuệ nhân tạo một cách văn minh và tử tế",
          "Mục tiêu: Thấu suốt mặt trái công nghệ và cách bảo vệ bản thân an toàn",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Trở thành những công dân số có trách nhiệm đạo đức!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Bảo mật mạng và khóa an toàn",
        speakerNotes: "Chào cả lớp. Tiết học này vô cùng quan trọng, bàn về vấn đề nóng nhất toàn cầu hiện nay: Đạo đức AI, bản quyền tác giả và bảo vệ dữ liệu riêng tư."
      },
      {
        id: "l10_s2",
        title: "Khởi Động: Vấn Nạn Deepfake Lừa Đảo",
        visualType: "intro",
        content: [
          "💭 Tình huống cảnh báo giả lập:",
          "• Em nhận được cuộc gọi video từ bố mẹ thông báo đang gặp nạn và cần chuyển tiền gấp. Giọng nói và khuôn mặt hoàn toàn trùng khớp.",
          "• Tuy nhiên, đó thực chất là kẻ xấu sử dụng công nghệ Deepfake giả danh nhằm mục đích chiếm đoạt tài sản.",
          "🤔 Làm thế nào để phân biệt video thật và video giả lập do AI tạo sinh dựng nên?",
          "💡 Gợi ý: Kiểm tra cử động mắt, nhấp nháy môi lỗi và gọi điện kiểm chứng bằng kênh liên lạc khác."
        ],
        visualUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Màn hình điện thoại và bảo mật",
        speakerNotes: "Deepfake là mặt tối cực kỳ nguy hiểm của Generative AI. Học sinh cần có ý thức cảnh giác cao độ để bảo vệ gia đình và người thân."
      },
      {
        id: "l10_s3",
        title: "Định Kiến Thuật Toán (Algorithmic Bias) Là Gì?",
        visualType: "concepts",
        content: [
          "AI phản chiếu chính thói hư tật xấu và định kiến xã hội của dữ liệu huấn luyện:",
          "• Khái niệm: AI học từ dữ liệu lịch sử chứa đầy định kiến của con người, dẫn đến việc đưa ra các quyết định bất công.",
          "• Ví dụ: AI tuyển dụng tự động đánh rớt hồ sơ xin việc của phụ nữ vì dữ liệu quá khứ chủ yếu là nam giới trúng tuyển.",
          "• Giải pháp: Con người cần sàng lọc dữ liệu gán nhãn cân bằng trước khi đưa vào huấn luyện mô hình."
        ],
        visualUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22700%22%20height%3D%22600%22%20viewBox%3D%220%200%20700%20600%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bgBias%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e293b%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2255%25%22%20stop-color%3D%22%23334155%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230f172a%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22metalGrad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23e2e8f0%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2394a3b8%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22warnGrad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fca5a5%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23ef4444%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22fairGrad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%236ee7b7%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2310b981%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%22700%22%20height%3D%22600%22%20fill%3D%22url%28%23bgBias%29%22/%3E%0A%20%20%3Ccircle%20cx%3D%22600%22%20cy%3D%22480%22%20r%3D%2280%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.08%22/%3E%0A%20%20%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2270%22%20fill%3D%22%2310b981%22%20opacity%3D%220.08%22/%3E%0A%0A%20%20%3C%21--%20Scale%20stand%20--%3E%0A%20%20%3Crect%20x%3D%22342%22%20y%3D%22150%22%20width%3D%2216%22%20height%3D%22280%22%20fill%3D%22url%28%23metalGrad%29%22/%3E%0A%20%20%3Crect%20x%3D%22270%22%20y%3D%22420%22%20width%3D%22160%22%20height%3D%2220%22%20rx%3D%226%22%20fill%3D%22url%28%23metalGrad%29%22/%3E%0A%0A%20%20%3C%21--%20Tilted%20beam%20%28unbalanced%29%20--%3E%0A%20%20%3Cg%20transform%3D%22translate%28350%2C155%29%20rotate%28-14%29%22%3E%0A%20%20%20%20%3Crect%20x%3D%22-200%22%20y%3D%22-8%22%20width%3D%22400%22%20height%3D%2216%22%20rx%3D%228%22%20fill%3D%22url%28%23metalGrad%29%22/%3E%0A%20%20%20%20%3C%21--%20Left%20pan%20%28heavy%20/%20biased%20side%2C%20weighed%20down%29%20--%3E%0A%20%20%20%20%3Cline%20x1%3D%22-180%22%20y1%3D%220%22%20x2%3D%22-180%22%20y2%3D%2290%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%22-140%22%20y1%3D%220%22%20x2%3D%22-140%22%20y2%3D%2290%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M-200%2090%20Q-160%20130%20-120%2090%20Z%22%20fill%3D%22url%28%23warnGrad%29%22%20stroke%3D%22%237f1d1d%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ctext%20x%3D%22-160%22%20y%3D%2282%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2226%22%20font-weight%3D%22900%22%20fill%3D%22%23fff%22%3E1%3C/text%3E%0A%0A%20%20%20%20%3C%21--%20Right%20pan%20%28light%20/%20underrepresented%20side%2C%20raised%29%20--%3E%0A%20%20%20%20%3Cline%20x1%3D%22140%22%20y1%3D%220%22%20x2%3D%22140%22%20y2%3D%2255%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%22180%22%20y1%3D%220%22%20x2%3D%22180%22%20y2%3D%2255%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M120%2055%20Q160%2090%20200%2055%20Z%22%20fill%3D%22url%28%23fairGrad%29%22%20stroke%3D%22%23065f46%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ctext%20x%3D%22160%22%20y%3D%2248%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2226%22%20font-weight%3D%22900%22%20fill%3D%22%23fff%22%3E0%3C/text%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3C%21--%20Small%20circuit/data%20dots%20trailing%20into%20the%20scale%20representing%20training%20data%20--%3E%0A%20%20%3Cg%20fill%3D%22%2338bdf8%22%20opacity%3D%220.85%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22500%22%20r%3D%227%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22220%22%20cy%3D%22470%22%20r%3D%227%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22260%22%20cy%3D%22510%22%20r%3D%227%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22500%22%20cy%3D%22500%22%20r%3D%227%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22540%22%20cy%3D%22470%22%20r%3D%227%22/%3E%0A%20%20%3C/g%3E%0A%20%20%3Cg%20stroke%3D%22%2338bdf8%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%3E%0A%20%20%20%20%3Cline%20x1%3D%22180%22%20y1%3D%22500%22%20x2%3D%22220%22%20y2%3D%22470%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%22220%22%20y1%3D%22470%22%20x2%3D%22260%22%20y2%3D%22510%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%22500%22%20y1%3D%22500%22%20x2%3D%22540%22%20y2%3D%22470%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3Ctext%20x%3D%22350%22%20y%3D%22540%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2227%22%20font-weight%3D%22900%22%20fill%3D%22%23fecaca%22%3E%C4%90%E1%BB%8Bnh%20Ki%E1%BA%BFn%20Thu%E1%BA%ADt%20To%C3%A1n%3C/text%3E%0A%20%20%3Ctext%20x%3D%22350%22%20y%3D%22572%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20font-weight%3D%22600%22%20fill%3D%22%23cbd5e1%22%3ED%E1%BB%AF%20li%E1%BB%87u%20l%E1%BB%87ch%20khi%E1%BA%BFn%20AI%20%C4%91%C6%B0a%20ra%20quy%E1%BA%BFt%20%C4%91%E1%BB%8Bnh%20thi%E1%BA%BFu%20c%C3%B4ng%20b%E1%BA%B1ng%3C/text%3E%0A%3C/svg%3E",
        visualLabel: "Sự công bằng xã hội",
        speakerNotes: "Giải thích rõ: AI không biết ghét ai, nó chỉ học vẹt các khuôn mẫu sẵn có trong dữ liệu lịch sử thô."
      },
      {
        id: "l10_s4",
        title: "Tranh Chấp Bản Quyền Tác Giả Thời AI",
        visualType: "comparison",
        content: [
          "Sự bùng nổ của AI tạo sinh dẫn đến các cuộc chiến pháp lý bản quyền phức tạp:",
          "Hãy so sánh lập trường của các nghệ sĩ truyền thống và các công ty công nghệ phát triển AI."
        ],
        comparisonData: {
          leftTitle: "Góc Nhìn Nghệ Sĩ Truyền Thống",
          leftItems: [
            "Các công ty AI đã tự ý sao chép hàng triệu bức tranh, cuốn sách của họ mà không xin phép.",
            "Yêu cầu các mô hình AI phải trả tiền bản quyền tác giả sòng phẳng.",
            "Lo ngại AI bóp nghẹt sức lao động và sinh kế của giới họa sĩ, nhà văn."
          ],
          rightTitle: "Góc Nhìn Công Ty Công Nghệ AI",
          rightItems: [
            "AI học từ các bức tranh giống như cách con người đi bảo tàng để tìm cảm hứng sáng tác.",
            "Đây là hành vi 'sử dụng hợp pháp' (Fair Use) không vi phạm luật pháp hiện hành.",
            "Công nghệ giúp bình dân hóa nghệ thuật, giúp ai cũng có thể sáng tạo."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Tranh chấp bản quyền tác phẩm nghệ thuật thời AI",
        speakerNotes: "Đây là tranh chấp pháp lý chưa có hồi kết trên thế giới. Hãy cho học sinh thảo luận xem hướng giải quyết dung hòa nào là hợp lý nhất."
      },
      {
        id: "l10_s5",
        title: "Bảo Vệ Quyền Riêng Tư Khi Sử Dụng AI",
        visualType: "concepts",
        content: [
          "Mỗi câu hỏi, dữ liệu em nhập vào chatbot AI có thể bị lưu trữ lại để tiếp tục huấn luyện máy:",
          "• Tuyệt đối KHÔNG nhập thông tin nhạy cảm (Số căn cước công dân, mật khẩu, thông tin tài khoản ngân hàng).",
          "• Không đăng tải ảnh cá nhân riêng tư của bạn bè lên các ứng dụng hoán đổi khuôn mặt không rõ nguồn gốc.",
          "• Đọc kỹ điều khoản quyền riêng tư của các nền tảng trước khi cấp quyền truy cập camera, danh bạ."
        ],
        visualUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Dòng mã khóa kỹ thuật số",
        speakerNotes: "Học sinh THPT thường rất chủ quan khi đăng tải thông tin cá nhân lên mạng xã hội. Hãy nhắc nhở các em về tầm quan trọng của dấu chân kỹ thuật số (digital footprint)."
      },
      {
        id: "l10_s6",
        title: "5 Nguyên Tắc Đạo Đức AI Cốt Lõi Thế Giới",
        visualType: "diagram",
        content: [
          "Các nguyên tắc giúp loài người phát triển AI có trách nhiệm (Responsible AI) phục vụ nhân sinh:",
          "• 1. Minh bạch (Transparency): Giải thích được cách AI đưa ra quyết định.",
          "• 2. Công bằng (Fairness): Tránh định kiến chủng tộc, giới tính, giàu nghèo.",
          "• 3. An toàn (Safety): Hoạt động ổn định, không gây hại cho sinh mạng con người.",
          "• 4. Quyền riêng tư (Privacy): Bảo vệ dữ liệu cá nhân của người dùng tuyệt đối.",
          "• 5. Trách nhiệm giải trình (Accountability): Con người phải là người chịu trách nhiệm pháp lý cuối cùng."
        ],
        diagramData: {
          nodes: [
            { id: "ethics", label: "5 NGUYÊN TẮC ĐẠO ĐỨC AI", x: 50, y: 50, color: "#EF4444" },
            { id: "fair", label: "1. Công bằng", x: 20, y: 20, color: "#3B82F6" },
            { id: "safe", label: "2. An toàn", x: 80, y: 20, color: "#10B981" },
            { id: "priv", label: "3. Quyền riêng tư", x: 20, y: 80, color: "#8B5CF6" },
            { id: "account", label: "4. Trách nhiệm", x: 80, y: 80, color: "#F59E0B" }
          ],
          links: [
            { source: "ethics", target: "fair", label: "Đảm bảo" },
            { source: "ethics", target: "safe", label: "Giám sát" },
            { source: "ethics", target: "priv", label: "Bảo vệ" },
            { source: "ethics", target: "account", label: "Thực thi" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ 5 nguyên tắc đạo đức AI toàn cầu",
        speakerNotes: "Gợi mở câu hỏi: Nếu xe tự hành đâm phải người đi bộ, ai chịu trách nhiệm? Hãng sản xuất xe, lập trình viên viết code AI, hay người ngồi trong xe? Đây chính là nguyên tắc Trách nhiệm giải trình."
      },
      {
        id: "l10_s7",
        title: "Hoạt Động: Thảo Luận Bài Toán Xe Tự Hành",
        visualType: "activity",
        content: [
          "🔥 Thảo luận tình huống đạo đức kinh điển (The Trolley Problem in AI):",
          "• Tình huống: Một chiếc xe tự lái bị đứt phanh đang lao dốc với tốc độ cao.",
          "• Hướng rẽ A: Xe tiếp tục đi thẳng và đâm phải 5 người đang băng qua đường sai luật.",
          "• Hướng rẽ B: Xe bẻ lái đâm vào vách đá, bảo vệ được 5 người đi đường nhưng sẽ trực tiếp làm thiệt mạng người ngồi trong xe.",
          "🤔 Nếu em là kỹ sư lập trình AI cho chiếc xe đó, em sẽ viết code ưu tiên cứu ai? Tại sao?",
          "👉 Thảo luận nhanh với bạn cùng bàn trong 3 phút."
        ],
        activity: {
          title: "Thảo luận Bài toán đạo đức xe tự lái",
          duration: "10 Phút",
          instructions: [
            "Học sinh tự do đưa ra lập luận cá nhân.",
            "Giáo viên lắng nghe điều phối, ghi lại các giá trị đạo đức được ưu tiên (Tính mạng đa số vs Nghĩa vụ bảo vệ khách hàng của hãng xe).",
            "Nhấn mạnh không có đáp án tuyệt đối đúng, bài toán cho thấy tầm phức tạp khi dạy máy học về đạo đức."
          ],
          tips: "Đây là bài toán tuyệt vời để rèn luyện tư duy phản biện đa chiều và thấu cảm xã hội cho học sinh THPT."
        },
        visualUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Thảo luận tình huống đạo đức xe tự lái",
        speakerNotes: "Hoạt động này cực kỳ kích thích tranh luận của học sinh. Mục tiêu là giúp các em hiểu phát triển công nghệ không chỉ có thuật toán mà còn là triết học nhân sinh."
      },
      {
        id: "l10_s8",
        title: "Trắc Nghiệm Tương Tác: Bảo Vệ An Toàn",
        visualType: "quiz",
        content: [
          "Hãy kiểm tra xem em đã nắm được các quy tắc bảo mật riêng tư cốt lõi khi tương tác với chatbot chưa nhé!"
        ],
        interactiveQuiz: {
          question: "Hành vi nào sau đây là AN TOÀN và ĐÚNG ĐẠO ĐỨC nhất khi sử dụng các công cụ AI công cộng?",
          options: [
            "Đăng tải đoạn code phần mềm độc quyền của công ty bố mẹ lên AI nhờ gỡ lỗi hộ",
            "Sử dụng AI tạo ra các bức ảnh chế giễu bạn học cùng lớp rồi đăng lên mạng xã hội",
            "Đọc kỹ và từ chối cung cấp các thông tin cá nhân nhạy cảm khi được chatbot AI truy vấn",
            "Chia sẻ công khai các đoạn video deepfake giả danh thầy hiệu trưởng thông báo nghỉ học"
          ],
          answerIndex: 2,
          explanation: "Bảo vệ thông tin cá nhân nhạy cảm là quy tắc sống còn giúp tránh rò rỉ dữ liệu cá nhân trên các nền tảng AI đám mây công cộng."
        },
        visualUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm an toàn bảo mật thông tin trên AI",
        speakerNotes: "Nhắc nhở học sinh: Trên không gian mạng, sự bảo mật bắt đầu từ ý thức cá nhân của mỗi chúng ta."
      },
      {
        id: "l10_s9",
        title: "Tổng Kết Bài Học & Cam Kết Công Dân Số",
        visualType: "summary",
        content: [
          "📌 AI là công cụ khuếch đại sức mạnh con người, hãy dùng nó để kiến tạo thay vì phá hủy.",
          "📌 Thượng tôn pháp luật bản quyền và luôn giữ cảnh giác cao độ trước các tin giả deepfake.",
          "🏠 Nhiệm vụ thảo luận: Chia sẻ với người thân trong gia đình về mối nguy deepfake lừa đảo chuyển tiền và thiết lập một 'mật khẩu gia đình' bằng lời nói để xác thực khi có cuộc gọi khẩn cấp đáng ngờ."
        ],
        visualUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Trái đất số kết nối an lành",
        speakerNotes: "Cảm ơn các em. Nhiệm vụ về nhà tuần này cực kỳ có ý nghĩa thực tế để bảo vệ gia đình mình trước các bẫy lừa đảo công nghệ cao hiện nay."
      }
    ]
  },
  {
    period: 11,
    title: "Tác động nghề nghiệp & Định hướng tương lai",
    description: "Nhận định khoa học về sự dịch chuyển thị trường lao động: Các nghề biến mất, các nghề mới xuất hiện và bộ kỹ năng sinh tồn của học sinh THPT.",
    objectives: [
      "Kể tên được một số công việc có nguy cơ bị AI thay thế và các công việc mới ra đời nhờ AI.",
      "Xác định được bộ kỹ năng vàng thế kỷ 21 giúp con người luôn làm chủ máy móc.",
      "Thiết lập lập trường chủ động đón đầu xu hướng công nghệ trong định hướng nghề nghiệp cá nhân."
    ],
    slides: [
      {
        id: "l11_s1",
        title: "ĐỊNH HƯỚNG NGHỀ NGHIỆP TRONG KỶ NGUYÊN AI",
        visualType: "title",
        content: [
          "Tiết 11: Làm sao để không bị thay thế bởi máy móc thông minh?",
          "Mục tiêu: Kiến tạo hành trang nghề nghiệp tương lai vững chắc",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Chào đón những nhà lãnh đạo và chuyên gia công nghệ tương lai!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Những người trẻ thảo luận ước mơ",
        speakerNotes: "Chào cả lớp. Tuần này chúng ta học Tiết 11 - bài học mang tính định hướng tương lai rất cao: AI sẽ tác động thế nào đến ước mơ nghề nghiệp của các em?"
      },
      {
        id: "l11_s2",
        title: "Khởi Động: Trò Chơi Đoán Nghề Nghiệp",
        visualType: "intro",
        content: [
          "💭 Đố các em dự đoán sự biến đổi của các ngành nghề sau trong 10 năm nữa dưới tác động của AI:",
          "• Nghề 1: Nhân viên trực tổng đài điện thoại chăm sóc khách hàng.",
          "• Nghề 2: Bác sĩ tâm lý lắng nghe, thấu cảm và tư vấn cảm xúc.",
          "• Nghề 3: Lập trình viên viết mã nguồn phần mềm.",
          "🤔 Nghề nào sẽ biến mất hoàn toàn? Nghề nào sẽ thăng hoa rực rỡ hơn khi có AI trợ lực?"
        ],
        visualUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Môi trường công nghệ hiện đại",
        speakerNotes: "Nhân viên tổng đài thô sơ dễ bị chatbot thay thế nhất. Bác sĩ tâm lý cần cảm xúc con người thực tế nên rất khó bị thay thế. Lập trình viên sẽ nâng tầm hiệu suất gấp 10 lần nhờ AI viết code hộ."
      },
      {
        id: "l11_s3",
        title: "Sự Dịch Chuyển Của Thị Trường Lao Động",
        visualType: "comparison",
        content: [
          "AI không cướp đi mọi công việc, nó chỉ dịch chuyển từ nhóm việc lặp đi lặp lại sang nhóm sáng tạo hơn:",
          "Hãy quan sát hai luồng dịch chuyển công việc để chủ động chuẩn bị hành trang học tập."
        ],
        comparisonData: {
          leftTitle: "Công Việc Có Nguy Cơ Bị Thay Thế Cao",
          leftItems: [
            "Các việc có tính lặp đi lặp lại cao, ít đòi hỏi tư duy linh hoạt.",
            "Ví dụ: Nhân viên nhập liệu văn phòng, thu ngân siêu thị, nhân viên dịch thuật cơ bản.",
            "Tác hại: Lao động thủ công đơn giản sẽ bị robot và thuật toán tối ưu hóa chi phí."
          ],
          rightTitle: "Công Việc Mới Ra Đời Nhờ AI",
          rightItems: [
            "Các việc đòi hỏi kỹ năng vận hành, giám sát và tối ưu hóa hệ thống thông minh.",
            "Kỹ sư thiết kế Prompt (Prompt Engineer): Thiết kế câu lệnh để điều phối AI.",
            "Kỹ sư nhãn dữ liệu, Chuyên gia kiểm định thuật toán tránh định kiến xã hội.",
            "Chuyên gia tư vấn pháp lý đạo đức AI."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
        visualLabel: "So sánh sự dịch chuyển thị trường lao động thời đại AI",
        speakerNotes: "Khắc sâu thông điệp: 'AI không thay thế con người, nhưng người biết dùng AI sẽ thay thế người không biết dùng AI'."
      },
      {
        id: "l11_s4",
        title: "Bộ Kỹ Năng Vàng 'Không Thể Bị Thay Thế'",
        visualType: "concepts",
        content: [
          "Để chiến thắng máy móc, hãy tập trung bồi dưỡng những giá trị độc bản của loài người:",
          "• 1. Tư duy phản biện (Critical Thinking): Kiểm chứng, đánh giá thông tin độc lập, tránh tin sái cổ vào AI.",
          "• 2. Trí thông minh cảm xúc (EQ): Khả năng thấu cảm, kết nối, động viên đồng nghiệp thực tế.",
          "• 3. Sự sáng tạo phi tuyến tính: Đặt các câu hỏi lớn đột phá hướng đi mới mà AI chưa từng được học dữ liệu.",
          "• 4. Khả năng thích ứng (Adaptability): Sẵn sàng học hỏi công nghệ mới, không bảo thủ."
        ],
        visualUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22700%22%20height%3D%22600%22%20viewBox%3D%220%200%20700%20600%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg2%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c2d12%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2255%25%22%20stop-color%3D%22%23c2410c%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23be185d%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22skin1%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fde68a%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23f59e0b%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22skin2%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fecaca%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fb7185%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%22700%22%20height%3D%22600%22%20fill%3D%22url%28%23bg2%29%22/%3E%0A%20%20%3Ccircle%20cx%3D%2290%22%20cy%3D%22100%22%20r%3D%2270%22%20fill%3D%22%23fde68a%22%20opacity%3D%220.12%22/%3E%0A%20%20%3Ccircle%20cx%3D%22620%22%20cy%3D%22500%22%20r%3D%2290%22%20fill%3D%22%23fde68a%22%20opacity%3D%220.12%22/%3E%0A%0A%20%20%3C%21--%20Rising%20sun%20/%20positive%20energy%20burst%20behind%20the%20hands%20--%3E%0A%20%20%3Cg%20stroke%3D%22%23fef3c7%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%20opacity%3D%220.55%22%3E%0A%20%20%20%20%3Cline%20x1%3D%22350%22%20y1%3D%22150%22%20x2%3D%22350%22%20y2%3D%2290%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%22440%22%20y1%3D%22180%22%20x2%3D%22490%22%20y2%3D%22130%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%22260%22%20y1%3D%22180%22%20x2%3D%22210%22%20y2%3D%22130%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%22480%22%20y1%3D%22250%22%20x2%3D%22540%22%20y2%3D%22230%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%22220%22%20y1%3D%22250%22%20x2%3D%22160%22%20y2%3D%22230%22/%3E%0A%20%20%3C/g%3E%0A%20%20%3Ccircle%20cx%3D%22350%22%20cy%3D%22240%22%20r%3D%2270%22%20fill%3D%22%23fef3c7%22%20opacity%3D%220.25%22/%3E%0A%0A%20%20%3C%21--%20Two%20hands%20reaching%20toward%20each%20other%2C%20forming%20a%20heart-like%20connection%20--%3E%0A%20%20%3Cg%3E%0A%20%20%20%20%3Cpath%20d%3D%22M180%20420%20C170%20380%20190%20340%20230%20330%20C250%20325%20270%20335%20280%20350%20L330%20300%20C345%20285%20370%20285%20380%20300%20C392%20315%20388%20335%20375%20350%20L300%20430%20C280%20450%20240%20455%20210%20440%20Z%22%20fill%3D%22url%28%23skin1%29%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M520%20420%20C530%20380%20510%20340%20470%20330%20C450%20325%20430%20335%20420%20350%20L370%20300%20C355%20285%20330%20285%20320%20300%20C308%20315%20312%20335%20325%20350%20L400%20430%20C420%20450%20460%20455%20490%20440%20Z%22%20fill%3D%22url%28%23skin2%29%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3C%21--%20Small%20heart/spark%20where%20the%20hands%20meet%20--%3E%0A%20%20%3Cpath%20d%3D%22M350%20335%20C345%20320%20320%20320%20320%20342%20C320%20358%20350%20378%20350%20378%20C350%20378%20380%20358%20380%20342%20C380%20320%20355%20320%20350%20335%20Z%22%20fill%3D%22%23fff7ed%22/%3E%0A%0A%20%20%3C%21--%20Uplifting%20particles%20--%3E%0A%20%20%3Cg%20fill%3D%22%23fef3c7%22%20opacity%3D%220.85%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22150%22%20cy%3D%22200%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22560%22%20cy%3D%22180%22%20r%3D%227%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22220%22%20cy%3D%22480%22%20r%3D%226%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22500%22%20cy%3D%22500%22%20r%3D%226%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3Ctext%20x%3D%22350%22%20y%3D%22530%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22900%22%20fill%3D%22%23fff7ed%22%3ES%E1%BB%B1%20Th%E1%BA%A5u%20C%E1%BA%A3m%20Con%20Ng%C6%B0%E1%BB%9Di%3C/text%3E%0A%20%20%3Ctext%20x%3D%22350%22%20y%3D%22565%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2218%22%20font-weight%3D%22600%22%20fill%3D%22%23ffe4e6%22%3EGi%C3%A1%20tr%E1%BB%8B%20%C4%91%E1%BB%99c%20b%E1%BA%A3n%20m%C3%A0%20AI%20kh%C3%B4ng%20th%E1%BB%83%20thay%20th%E1%BA%BF%3C/text%3E%0A%3C/svg%3E",
        visualLabel: "Sự thấu cảm con người",
        speakerNotes: "AI rất giỏi giải đáp câu hỏi 'Làm thế nào' (How), nhưng con người nắm giữ câu hỏi 'Tại sao' (Why). Hãy tập trung hỏi câu hỏi Why."
      },
      {
        id: "l11_s5",
        title: "Trở Thành 'Người Lao Động Trợ Lực AI'",
        visualType: "concepts",
        content: [
          "Phương thức làm việc thăng hoa hiệu suất trong tương lai học đường và công sở:",
          "• Sử dụng AI làm trợ lý viết dàn ý, thu thập tài liệu ban đầu nhanh chóng.",
          "• Dành 80% thời gian còn lại để biên tập, mài giũa ý tưởng, đưa góc nhìn cá nhân và cảm xúc thực vào tác phẩm.",
          "• Kết hợp sức mạnh tính toán siêu tốc của máy và trái tim thấu cảm của con người."
        ],
        visualUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Hiệu suất làm việc nhóm",
        speakerNotes: "Hãy ví dụ một bác sĩ kết hợp AI chẩn đoán hình ảnh sẽ giúp cứu sống nhiều bệnh nhân hơn và có nhiều thời gian trò chuyện an ủi bệnh nhân hơn."
      },
      {
        id: "l11_s6",
        title: "Sơ Đồ Lộ Trình Học Tập Phát Triển Kỹ Năng Số",
        visualType: "diagram",
        content: [
          "Lộ trình bồi dưỡng năng lực công nghệ bền vững từ ghế nhà trường THPT:",
          "• Học kỹ năng cơ bản tin học phổ thông.",
          "• Rèn luyện kỹ năng viết Prompt tối ưu (RTCO).",
          "• Phát triển tư duy phản biện kiểm chứng thông tin (Fact-checking).",
          "• Vận dụng AI vào giải quyết vấn đề thực tế đời sống xã hội."
        ],
        diagramData: {
          nodes: [
            { id: "base", label: "1. Kỹ năng Tin học nền tảng", x: 10, y: 50, color: "#9CA3AF" },
            { id: "prompt", label: "2. Làm chủ Prompt RTCO", x: 36, y: 30, color: "#3B82F6" },
            { id: "critical", label: "3. Tư duy phản biện phản bác", x: 62, y: 30, color: "#10B981" },
            { id: "project", label: "4. Dự án thực tế trợ lực AI", x: 88, y: 50, color: "#EF4444" }
          ],
          links: [
            { source: "base", target: "prompt", label: "Nâng cao" },
            { source: "prompt", target: "critical", label: "Thực chứng" },
            { source: "critical", target: "project", label: "Kiến tạo" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ 4 bước lộ trình bồi dưỡng năng lực số",
        speakerNotes: "Sơ đồ này vẽ ra con đường biến các em từ người tiêu dùng công nghệ thụ động thành người làm chủ công nghệ chủ động."
      },
      {
        id: "l11_s7",
        title: "Hoạt Động: Vẽ Bản Đồ Nghề Nghiệp Ước Mơ",
        visualType: "activity",
        content: [
          "📋 Thực hành kiến tạo tương lai cá nhân (10 phút):",
          "Nhiệm vụ: Hãy thảo luận cặp đôi và ghi ra giấy phác thảo kế hoạch nghề nghiệp ước mơ.",
          "Các câu hỏi gợi mở suy nghĩ:",
          "• 1. Nghề nghiệp ước mơ của em trong tương lai là gì? (Ví dụ: Kiến trúc sư, Giáo viên, Kinh doanh...)",
          "• 2. Công việc đó có những phần nào lặp đi lặp lại dễ bị AI thay thế?",
          "• 3. Em sẽ ứng dụng AI thế nào để nâng tầm hiệu suất và sáng tạo độc bản trong nghề đó?"
        ],
        activity: {
          title: "Thiết kế bản đồ nghề nghiệp trợ lực AI",
          duration: "10 Phút",
          instructions: [
            "Học sinh tự làm việc độc lập hoặc trao đổi nhóm đôi.",
            "Ghi ra 3 điểm mấu chốt ứng dụng AI vào ngành nghề yêu thích.",
            "Đại diện 3 học sinh đứng dậy chia sẻ ước mơ đầy cảm hứng."
          ],
          tips: "Ví dụ: Ước mơ làm kiến trúc sư -> Sử dụng AI vẽ phác thảo hàng chục mẫu nhà trong 5 phút để bàn bạc với khách hàng, sau đó tự tay vẽ chi tiết kỹ thuật."
        },
        visualUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Hoạt động thiết kế bản đồ nghề nghiệp tương lai",
        speakerNotes: "Hoạt động này giúp học sinh thấy AI rất hữu ích cho mọi ngành nghề ước mơ của các em chứ không riêng gì ngành công nghệ thông tin."
      },
      {
        id: "l11_s8",
        title: "Trắc Nghiệm Tương Tác: Thích Ứng Tương Lai",
        visualType: "quiz",
        content: [
          "Hãy kiểm tra xem em đã sẵn sàng thích ứng với thị trường lao động kỷ nguyên số chưa nhé!"
        ],
        interactiveQuiz: {
          question: "Kỹ năng nào được đánh giá là 'Chìa khóa vàng thế kỷ 21' giúp học sinh THPT không bị đào thải bởi máy móc, giúp các em biết kiểm chứng thông tin đúng sai từ AI?",
          options: [
            "Kỹ năng gõ bàn phím siêu tốc",
            "Tư duy phản biện (Critical Thinking)",
            "Kỹ năng sao chép code mẫu",
            "Trí nhớ học thuộc lòng dữ liệu"
          ],
          answerIndex: 1,
          explanation: "Tư duy phản biện giúp học sinh biết đặt câu hỏi hoài nghi khoa học, kiểm chứng sự chính xác của thông tin AI cung cấp để ra quyết định độc lập."
        },
        visualUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm kỹ năng thích ứng kỷ nguyên số",
        speakerNotes: "Nhấn mạnh lại: AI rất hay ảo tưởng tạo ra thông tin sai lệch. Tư duy phản biện là màng lọc bảo vệ tri thức thật."
      },
      {
        id: "l11_s9",
        title: "Tổng Kết Bài Học & Truyền Cảm Hứng",
        visualType: "summary",
        content: [
          "📌 AI là cơ hội vĩ đại nhất để các em học sinh THPT đột phá năng lực bản thân.",
          "📌 Đừng sợ hãi công nghệ, hãy học cách thấu hiểu, làm chủ và cộng tác thông minh với nó.",
          "🏠 Chuẩn bị cho tiết học cuối: Hoàn thiện slide thuyết trình dự án nhóm để tiết sau báo cáo sản phẩm xuất sắc trước lớp học!"
        ],
        visualUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22700%22%20height%3D%22600%22%20viewBox%3D%220%200%20700%20600%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bgFuture%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23082f49%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2255%25%22%20stop-color%3D%22%230c4a6e%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23155e75%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22sunGrad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fde68a%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fb923c%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bldg1%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2338bdf8%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230ea5e9%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%22700%22%20height%3D%22600%22%20fill%3D%22url%28%23bgFuture%29%22/%3E%0A%20%20%3Ccircle%20cx%3D%22350%22%20cy%3D%22230%22%20r%3D%22110%22%20fill%3D%22url%28%23sunGrad%29%22%20opacity%3D%220.9%22/%3E%0A%20%20%3Ccircle%20cx%3D%22350%22%20cy%3D%22230%22%20r%3D%22150%22%20fill%3D%22%23fde68a%22%20opacity%3D%220.15%22/%3E%0A%0A%20%20%3C%21--%20Skyline%20silhouette%20representing%20future%20tech%20city%20--%3E%0A%20%20%3Cg%20fill%3D%22%230c4a6e%22%3E%0A%20%20%20%20%3Crect%20x%3D%2260%22%20y%3D%22380%22%20width%3D%2270%22%20height%3D%22220%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22150%22%20y%3D%22330%22%20width%3D%2260%22%20height%3D%22270%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22230%22%20y%3D%22400%22%20width%3D%2255%22%20height%3D%22200%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22420%22%20y%3D%22360%22%20width%3D%2265%22%20height%3D%22240%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22500%22%20y%3D%22410%22%20width%3D%2255%22%20height%3D%22190%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22570%22%20y%3D%22340%22%20width%3D%2270%22%20height%3D%22260%22/%3E%0A%20%20%3C/g%3E%0A%20%20%3C%21--%20Glowing%20windows%20--%3E%0A%20%20%3Cg%20fill%3D%22%23fde68a%22%20opacity%3D%220.85%22%3E%0A%20%20%20%20%3Crect%20x%3D%2275%22%20y%3D%22400%22%20width%3D%2210%22%20height%3D%2214%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22100%22%20y%3D%22430%22%20width%3D%2210%22%20height%3D%2214%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22165%22%20y%3D%22360%22%20width%3D%2210%22%20height%3D%2214%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22185%22%20y%3D%22410%22%20width%3D%2210%22%20height%3D%2214%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22440%22%20y%3D%22390%22%20width%3D%2210%22%20height%3D%2214%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22460%22%20y%3D%22440%22%20width%3D%2210%22%20height%3D%2214%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22585%22%20y%3D%22380%22%20width%3D%2210%22%20height%3D%2214%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22605%22%20y%3D%22430%22%20width%3D%2210%22%20height%3D%2214%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3C%21--%20Person%20walking%20forward%20confidently%2C%20arms%20raised%20toward%20the%20bright%20future%20--%3E%0A%20%20%3Cg%20transform%3D%22translate%28350%2C470%29%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%220%22%20cy%3D%22-90%22%20r%3D%2226%22%20fill%3D%22%23fde68a%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M-30%20-55%20C%20-30%20-20%20-22%2030%20-22%2060%20L%20-6%2060%20L%20-6%200%20L%206%200%20L%206%2060%20L%2022%2060%20C%2022%2030%2030%20-20%2030%20-55%20C%2030%20-75%20-30%20-75%20-30%20-55%20Z%22%20fill%3D%22%23fb7185%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M-30%20-50%20L%20-60%20-85%22%20stroke%3D%22%23fb7185%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M30%20-50%20L%2060%20-85%22%20stroke%3D%22%23fb7185%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22-20%22%20y%3D%2260%22%20width%3D%2214%22%20height%3D%2255%22%20rx%3D%226%22%20fill%3D%22%230c4a6e%22/%3E%0A%20%20%20%20%3Crect%20x%3D%226%22%20y%3D%2260%22%20width%3D%2214%22%20height%3D%2255%22%20rx%3D%226%22%20fill%3D%22%230c4a6e%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3C%21--%20Rising%20path%20/%20graph%20line%20suggesting%20growth%20and%20future%20skills%20--%3E%0A%20%20%3Cpath%20d%3D%22M100%20560%20L250%20500%20L400%20520%20L520%20420%20L640%20380%22%20stroke%3D%22%2334d399%22%20stroke-width%3D%226%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20opacity%3D%220.9%22/%3E%0A%20%20%3Cg%20fill%3D%22%2334d399%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22250%22%20cy%3D%22500%22%20r%3D%227%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22400%22%20cy%3D%22520%22%20r%3D%227%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22520%22%20cy%3D%22420%22%20r%3D%227%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22640%22%20cy%3D%22380%22%20r%3D%227%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3Ctext%20x%3D%22350%22%20y%3D%2240%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2228%22%20font-weight%3D%22900%22%20fill%3D%22%23fef3c7%22%3ET%C6%B0%C6%A1ng%20Lai%20C%C3%B9ng%20AI%3C/text%3E%0A%20%20%3Ctext%20x%3D%22350%22%20y%3D%2270%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20font-weight%3D%22600%22%20fill%3D%22%23e0f2fe%22%3ET%E1%BB%B1%20tin%20l%C3%A0m%20ch%E1%BB%A7%20k%E1%BB%B9%20n%C4%83ng%20s%E1%BB%91%20cho%20ng%C3%A0y%20mai%3C/text%3E%0A%3C/svg%3E",
        visualLabel: "Tương lai thành thị công nghệ",
        speakerNotes: "Cảm ơn cả lớp đã theo dõi bài học rất ý nghĩa này. Chúc các em luôn tự tin, giữ vững ngọn lửa học hỏi để chinh phục mọi ước mơ tương lai kỷ nguyên số!"
      }
    ]
  },
  {
    period: 12,
    title: "Tổng kết chuyên đề & Báo cáo dự án AI",
    description: "Ngày hội sáng tạo: Các nhóm báo cáo sản phẩm thực hành ứng dụng AI sáng tạo nội dung, giải quyết vấn đề học đường và tổng ôn kiến thức toàn khóa học.",
    objectives: [
      "Báo cáo và tự tin thuyết trình về sản phẩm dự án ứng dụng AI của nhóm trước lớp.",
      "Thực hiện chấm điểm chéo (Peer Assessment) công tâm dựa trên bảng tiêu chí rõ ràng.",
      "Khắc sâu hệ thống kiến thức của toàn bộ chuyên đề 12 tiết học Trí tuệ nhân tạo."
    ],
    slides: [
      {
        id: "l12_s1",
        title: "TỔNG KẾT CHUYÊN ĐỀ & BÁO CÁO DỰ ÁN AI HỌC ĐƯỜNG",
        visualType: "title",
        content: [
          "Tiết 12: Ngày hội Sáng tạo Trí tuệ nhân tạo học đường",
          "Mục tiêu: Báo cáo thành quả dự án sáng tạo nghệ thuật & giải pháp AI",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Chúc mừng tập thể lớp đã hoàn thành xuất sắc chặng đường 12 tiết học!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Lớp học chúc mừng thành công",
        speakerNotes: "Chào cả lớp! Hôm nay là buổi học cuối cùng - Tiết 12. Đây là ngày hội thực sự để vinh danh các sản phẩm sáng tạo, ý tưởng dự án vô cùng độc đáo mà các em đã chuẩn bị suốt các tuần qua."
      },
      {
        id: "l12_s2",
        title: "Khởi Động: Vinh Danh Sự Nỗ Lực Học Tập",
        visualType: "intro",
        content: [
          "🎉 Chào mừng các em đến với Sân khấu báo cáo sáng tạo!",
          "• Trải qua 11 tiết học, chúng ta đã cùng đi từ những khái niệm lịch sử thô sơ đến trải nghiệm viết Prompt thực hành trực tiếp và thấu cảm đạo đức công nghệ.",
          "• Hôm nay là lúc biến các ý tưởng trên trang giấy thành những bài thuyết trình đầy cảm hứng trước thầy cô và bạn bè.",
          "👉 Hãy cùng dành một tràng pháo tay thật lớn để cổ vũ tinh thần của tất cả chúng ta!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Ánh đèn sân khấu trình bày",
        speakerNotes: "Tạo không khí lớp học vui tươi, hào hứng, khích lệ học sinh tự tin trình bày dự án của mình không e ngại."
      },
      {
        id: "l12_s3",
        title: "Tổng Quan Lộ Trình 12 Tiết Học Chuyên Đề AI",
        visualType: "diagram",
        content: [
          "Tóm tắt toàn bộ chặng đường tri thức chúng ta đã cùng nhau vượt qua đầy tự hào:",
          "• Tiết 1-3: Làm quen khái niệm lịch sử, 4 thành phần cốt lõi và phân loại AI hẹp.",
          "• Tiết 4-6: NLP, Thị giác máy tính, Học máy tự học và kỹ năng viết Prompt RTCO.",
          "• Tiết 7-9: Sáng tạo tranh nhạc bằng Generative AI, tự học học đường và ứng dụng đa ngành.",
          "• Tiết 10-12: Đạo đức công nghệ tử tế, định hướng nghề nghiệp tương lai và Báo cáo dự án."
        ],
        diagramData: {
          nodes: [
            { id: "intro", label: "Tiết 1-3: Nhập môn & Cốt lõi", x: 10, y: 50, color: "#3B82F6" },
            { id: "tech", label: "Tiết 4-6: Học máy & Prompt", x: 36, y: 30, color: "#10B981" },
            { id: "app", label: "Tiết 7-9: Nghệ thuật & Tự học", x: 62, y: 30, color: "#8B5CF6" },
            { id: "final", label: "Tiết 10-12: Đạo đức & Dự án", x: 88, y: 50, color: "#EF4444" }
          ],
          links: [
            { source: "intro", target: "tech", label: "Tiến bước" },
            { source: "tech", target: "app", label: "Ứng dụng" },
            { source: "app", target: "final", label: "Tỏa sáng" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ tổng quan lộ trình 12 tiết học chuyên đề AI",
        speakerNotes: "Nhìn lại sơ đồ này, các em có thể thấy bản thân đã trưởng thành và tích lũy được một lượng tri thức công nghệ cực kỳ đồ sộ chỉ trong 12 tuần học."
      },
      {
        id: "l12_s4",
        title: "Báo Cáo Dự Án Nhóm 1 & 2: Sáng Tạo Nội Dung",
        visualType: "comparison",
        content: [
          "Sân khấu trình diễn của hai nhóm đầu tiên tập trung vào việc làm chủ công cụ AI tạo sinh nghệ thuật:",
          "Hãy quan sát các sản phẩm sáng tạo độc đáo của các bạn học sinh."
        ],
        comparisonData: {
          leftTitle: "Sản Phẩm Nhóm 1: Tập San Tranh Ảnh Tương Lai",
          leftItems: [
            "Ứng dụng AI vẽ tranh Stable Diffusion phát họa ý tưởng quê hương năm 2050.",
            "Tập trung viết Prompt tả chi tiết về năng lượng xanh, nhà nổi thông minh chống lũ lụt.",
            "Bài thuyết trình chia sẻ sâu về cách tinh chỉnh Prompt để ảnh đẹp chân thực."
          ],
          rightTitle: "Sản Phẩm Nhóm 2: Bài Hát Lớp Học Tự Sáng Tác",
          rightItems: [
            "Ứng dụng Suno AI viết giai điệu và lời ca mừng ngày nhà giáo Việt Nam.",
            "Sử dụng Prompt gán phong cách nhạc Acoustic mộc mạc, lời ca dạt dào lòng biết ơn.",
            "Trực tiếp trình chiếu nhạc và hát đồng ca cùng toàn thể lớp học vô cùng cảm động."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Báo cáo dự án sáng tạo nghệ thuật AI nhóm 1 và nhóm 2",
        speakerNotes: "Khen ngợi nỗ lực của Nhóm 1 và Nhóm 2. Kêu gọi cả lớp cho tràng pháo tay cổ vũ phong cách sáng tạo nghệ thuật mới mẻ này."
      },
      {
        id: "l12_s5",
        title: "Báo Cáo Dự Án Nhóm 3 & 4: Giải Pháp Xã Hội",
        visualType: "comparison",
        content: [
          "Sân khấu trình bày của hai nhóm tiếp theo hướng tới giải quyết các vấn đề thiết thực của cộng đồng học đường:",
          "Hãy quan sát các ý tưởng giải pháp thông minh mang tính nhân văn sâu sắc."
        ],
        comparisonData: {
          leftTitle: "Sản Phẩm Nhóm 3: Sáng Kiến AI Phân Loại Rác",
          leftItems: [
            "Bản thiết kế mô hình thùng rác thông minh đặt tại hành lang trường học.",
            "Sử dụng camera quét ảnh rác thải, AI phân tích ra quyết định mở nắp thùng rác tương ứng nhựa/giấy.",
            "Kế hoạch truyền thông giáo dục ý thức phân loại rác cho học sinh toàn trường."
          ],
          rightTitle: "Sản Phẩm Nhóm 4: Chatbot Trợ Lý Ôn Tập Sinh Học",
          rightItems: [
            "Xây dựng danh sách Prompt hỗ trợ học sinh lớp 12 tóm tắt các sơ đồ di truyền Men-đen phức tạp.",
            "Prompt hướng dẫn AI giải nghĩa các bước tư duy tìm gen trội/lặn khoa học.",
            "Chia sẻ tài liệu hướng dẫn tự học Sinh học trợ lực AI cho các lớp học khác tham khảo."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Báo cáo dự án ứng dụng giải pháp cộng đồng nhóm 3 và nhóm 4",
        speakerNotes: "Khen ngợi Nhóm 3 và Nhóm 4 đã biết mang công nghệ ứng dụng giải quyết các nỗi đau thực tế của cuộc sống học đường."
      },
      {
        id: "l12_s6",
        title: "Hoạt Động: Chấm Điểm Chéo (Peer Assessment)",
        visualType: "activity",
        content: [
          "📋 Trải nghiệm chấm điểm công tâm khoa học (10 phút):",
          "Mỗi học sinh sẽ nhận được 1 phiếu đánh giá chéo dự án của nhóm bạn dựa trên 3 tiêu chí:",
          "• 1. Tính sáng tạo & Ứng dụng AI khoa học (Tối đa 4 điểm).",
          "• 2. Tính logic, thực tế của giải pháp đề xuất (Tối đa 3 điểm).",
          "• 3. Kỹ năng trình bày thuyết trình tự tin, sinh động (Tối đa 3 điểm).",
          "👉 Hãy thảo luận nhóm và ghi điểm đánh giá công tâm cho các nhóm còn lại."
        ],
        activity: {
          title: "Chấm điểm chéo dự án học sinh",
          duration: "10 Phút",
          instructions: [
            "Các nhóm bàn thảo luận nhanh trong 3 phút.",
            "Thống nhất điểm số và ghi nhận xét ưu/nhược điểm cho các nhóm báo cáo.",
            "Nộp phiếu đánh giá chéo cho giáo viên tổng hợp kết quả."
          ],
          tips: "Hãy hướng học sinh tới việc khen ngợi sáng tạo trước, sau đó góp ý chân thành về giải pháp thực tế sau."
        },
        visualUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Hoạt động chấm điểm đánh giá chéo dự án",
        speakerNotes: "Hoạt động này giúp rèn luyện tư duy đánh giá khách quan, tôn trọng thành quả lao động của bạn bè cho học sinh."
      },
      {
        id: "l12_s7",
        title: "Trắc Nghiệm Tương Tác: Tổng Ôn Toàn Bộ Chuyên Đề",
        visualType: "quiz",
        content: [
          "Thử thách trí tuệ cuối cùng! Hãy cùng tham gia cuộc thi trắc nghiệm tổng ôn kiến thức toàn bộ 12 tiết học AI nhé."
        ],
        interactiveQuiz: {
          question: "Nguyên tắc đạo đức AI nào quy định rằng các nhà khoa học phải giải thích được logic toán học đứng sau cách mô hình đưa ra quyết định dự đoán?",
          options: [
            "Nguyên tắc Minh bạch (Transparency)",
            "Nguyên tắc Bảo mật dữ liệu",
            "Nguyên tắc Thiết kế thẩm mỹ",
            "Nguyên tắc Học máy có giám sát"
          ],
          answerIndex: 0,
          explanation: "Nguyên tắc Minh bạch (Explainable AI / Transparency) đòi hỏi hệ thống AI không được là 'hộp đen bí ẩn' mà phải giải thích rõ ràng được cơ chế ra quyết định cho con người hiểu."
        },
        visualUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm tổng kết chuyên đề trí tuệ nhân tạo",
        speakerNotes: "Giáo viên nhấn mạnh lại: Giải thích được thuật toán giúp con người kiểm soát và tin tưởng AI hơn."
      },
      {
        id: "l12_s8",
        title: "Thông Điệp Về Học Tập Suốt Đời (Lifelong Learning)",
        visualType: "concepts",
        content: [
          "Hành trình tri thức không khép lại sau 12 tiết học chuyên đề này:",
          "• Công nghệ AI thay đổi từng ngày, những gì chúng ta học hôm nay có thể lỗi thời ngày mai.",
          "• Kỹ năng sinh tồn mạnh mẽ nhất là Khả năng tự học suốt đời (Lifelong Learning).",
          "• Hãy giữ tinh thần tò mò khoa học, luôn đặt câu hỏi khám phá thế giới số xung quanh.",
          "• Hãy dùng trí thông minh nhân tạo kết hợp trí thông minh tự nhiên của các em để kiến tạo một ngày mai tươi sáng!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Thế hệ học sinh tương lai",
        speakerNotes: "Truyền cảm hứng học tập suốt đời cho học sinh. Khuyên các em coi AI là công cụ hỗ trợ liên tục trong chặng đường học đại học và lập nghiệp sau này."
      },
      {
        id: "l12_s9",
        title: "Bế Mạc Chuyên Đề & Chứng Nhận Hoàn Thành",
        visualType: "summary",
        content: [
          "🏆 THẦY/CÔ CHÚC MỪNG CẢ LỚP ĐÃ HOÀN THÀNH XUẤT SẮC CHUYÊN ĐỀ ỨNG DỤNG AI!",
          "• Cảm ơn các em đã cùng sáng tạo, cùng tranh luận và đồng hành suốt 12 tuần học vừa qua.",
          "• Thầy/Cô xin trao tặng CHỨNG NHẬN ẢO: 'Chiến binh Làm chủ Công nghệ AI tương lai' cho tất cả học sinh lớp mình!",
          "👉 Hãy luôn giữ vững niềm tin, sự tử tế và khát khao làm chủ tri thức khoa học công nghệ nhé!"
        ],
        visualUrl: `${import.meta.env.BASE_URL}trophy-tot-nghiep.png`,
        visualLabel: "Vinh danh học sinh hoàn thành chuyên đề AI",
        speakerNotes: "Gửi lời chào tạm biệt đầy xúc động tới cả lớp. Có thể tổ chức chụp ảnh lưu niệm toàn bộ lớp học cùng các bức tranh AI trưng bày."
      }
    ]
  }
];
