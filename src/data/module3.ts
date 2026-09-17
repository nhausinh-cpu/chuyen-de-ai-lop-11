import { Lesson } from '../types';

export const module3: Lesson[] = [
  {
    period: 7,
    title: "Sáng tạo nghệ thuật bằng AI (Generative AI)",
    description: "Khám phá thế giới AI tạo sinh (Generative AI) đầy sắc màu, học cách biến từ ngữ thành tranh vẽ, âm nhạc và video sống động.",
    objectives: [
      "Hiểu khái niệm cốt lõi về Trí tuệ nhân tạo tạo sinh (Generative AI).",
      "Kể tên được một số công cụ tạo sinh hình ảnh, âm nhạc và video phổ biến hiện nay.",
      "Nhận thức được vai trò hỗ trợ của AI trong quá trình sáng tạo nội dung số nghệ thuật."
    ],
    slides: [
      {
        id: "l7_s1",
        title: "SÁNG TẠO NGHỆ THUẬT BẰNG AI (GENERATIVE AI)",
        visualType: "title",
        content: [
          "Tiết 7: Khi máy tính cầm cọ vẽ, viết nhạc và làm phim",
          "Mục tiêu: Đột phá ranh giới sáng tạo nghệ thuật kỹ thuật số",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Chào mừng các em đến với kỷ nguyên Generative AI bùng nổ!"
        ],
        visualUrl: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22700%22%20height%3D%22600%22%20viewBox%3D%220%200%20700%20600%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bgArt%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%234c1d95%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22%237c3aed%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23db2777%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22canvasGrad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fef3c7%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22%23fb7185%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2338bdf8%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brushWood%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23d97706%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2392400e%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%22700%22%20height%3D%22600%22%20fill%3D%22url%28%23bgArt%29%22/%3E%0A%20%20%3Ccircle%20cx%3D%22600%22%20cy%3D%22100%22%20r%3D%2280%22%20fill%3D%22%23fde68a%22%20opacity%3D%220.12%22/%3E%0A%20%20%3Ccircle%20cx%3D%2280%22%20cy%3D%22500%22%20r%3D%2290%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22/%3E%0A%0A%20%20%3C%21--%20Canvas%20/%20easel%20--%3E%0A%20%20%3Cg%20transform%3D%22translate%28350%2C300%29%22%3E%0A%20%20%20%20%3Crect%20x%3D%22-160%22%20y%3D%22-140%22%20width%3D%22320%22%20height%3D%22220%22%20rx%3D%2210%22%20fill%3D%22%23fff7ed%22%20stroke%3D%22%2378350f%22%20stroke-width%3D%226%22/%3E%0A%20%20%20%20%3C%21--%20abstract%20colorful%20brush%20strokes%20representing%20AI-generated%20art%20--%3E%0A%20%20%20%20%3Cpath%20d%3D%22M-130%20-100%20C%20-80%20-140%20-20%20-60%2040%20-100%20C%20100%20-140%20150%20-80%20130%20-30%22%20fill%3D%22none%22%20stroke%3D%22%23fb7185%22%20stroke-width%3D%2216%22%20stroke-linecap%3D%22round%22%20opacity%3D%220.85%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M-120%20-20%20C%20-60%2020%2020%20-40%2090%2010%20C%20120%2030%20110%2060%2080%2070%22%20fill%3D%22none%22%20stroke%3D%22%2338bdf8%22%20stroke-width%3D%2216%22%20stroke-linecap%3D%22round%22%20opacity%3D%220.85%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M-110%2060%20C%20-50%2030%2030%2090%20100%2050%22%20fill%3D%22none%22%20stroke%3D%22%23fbbf24%22%20stroke-width%3D%2214%22%20stroke-linecap%3D%22round%22%20opacity%3D%220.85%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22-60%22%20cy%3D%22-60%22%20r%3D%2218%22%20fill%3D%22%23a78bfa%22%20opacity%3D%220.8%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%22-20%22%20r%3D%2212%22%20fill%3D%22%2334d399%22%20opacity%3D%220.8%22/%3E%0A%20%20%20%20%3C%21--%20easel%20legs%20--%3E%0A%20%20%20%20%3Cpath%20d%3D%22M-140%2080%20L-180%20180%20M140%2080%20L180%20180%20M0%20100%20L0%20180%22%20stroke%3D%22%2378350f%22%20stroke-width%3D%228%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3C%21--%20Paintbrush%20with%20glowing%20AI%20spark%20tip%20--%3E%0A%20%20%3Cg%20transform%3D%22translate%28180%2C150%29%20rotate%28-25%29%22%3E%0A%20%20%20%20%3Crect%20x%3D%22-8%22%20y%3D%220%22%20width%3D%2216%22%20height%3D%22150%22%20rx%3D%226%22%20fill%3D%22url%28%23brushWood%29%22/%3E%0A%20%20%20%20%3Crect%20x%3D%22-14%22%20y%3D%22-40%22%20width%3D%2228%22%20height%3D%2250%22%20rx%3D%226%22%20fill%3D%22%23e5e7eb%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M-16%20-40%20C%20-16%20-70%2016%20-70%2016%20-40%20C%2016%20-55%20-16%20-55%20-16%20-40%20Z%22%20fill%3D%22url%28%23canvasGrad%29%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%220%22%20cy%3D%22-75%22%20r%3D%2210%22%20fill%3D%22%23fef3c7%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3C%21--%20Sparkle%20accents%20for%20%22AI%20magic%22%20--%3E%0A%20%20%3Cg%20fill%3D%22%23fef3c7%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M540%20220%20l6%2016%2016%206%20-16%206%20-6%2016%20-6%20-16%20-16%20-6%2016%20-6%20Z%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M120%20380%20l5%2013%2013%205%20-13%205%20-5%2013%20-5%20-13%20-13%20-5%2013%20-5%20Z%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M580%20420%20l4%2010%2010%204%20-10%204%20-4%2010%20-4%20-10%20-10%20-4%2010%20-4%20Z%22/%3E%0A%20%20%3C/g%3E%0A%0A%20%20%3Ctext%20x%3D%22350%22%20y%3D%22540%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2228%22%20font-weight%3D%22900%22%20fill%3D%22%23fef3c7%22%3ENgh%E1%BB%87%20Thu%E1%BA%ADt%20S%C3%A1ng%20T%E1%BA%A1o%20C%C3%B9ng%20AI%3C/text%3E%0A%20%20%3Ctext%20x%3D%22350%22%20y%3D%22572%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22600%22%20fill%3D%22%23f3e8ff%22%3EKhi%20m%C3%A1y%20t%C3%ADnh%20c%E1%BA%A7m%20c%E1%BB%8D%20v%E1%BA%BD%2C%20vi%E1%BA%BFt%20nh%E1%BA%A1c%20v%C3%A0%20l%C3%A0m%20phim%3C/text%3E%0A%3C/svg%3E",
        visualLabel: "Nghệ thuật màu sắc sáng tạo",
        speakerNotes: "Chào cả lớp! Tiết học hôm nay vô cùng đặc biệt. Chúng ta sẽ cùng nhau tìm hiểu về Generative AI - công nghệ cho phép máy tính tự tạo ra tranh vẽ, bài hát và video vô cùng kỳ diệu."
      },
      {
        id: "l7_s2",
        title: "Khởi Động: Vụ Tranh Cãi Nghệ Thuật Thế Kỷ",
        visualType: "intro",
        content: [
          "💭 Câu chuyện gây bão dư luận:",
          "• Năm 2022, bức tranh 'Théâtre D'opéra Spatial' do Jason Allen tạo ra bằng công cụ AI Midjourney đã đoạt giải Nhất tại cuộc thi mỹ thuật bang Colorado (Mỹ).",
          "• Hàng loạt nghệ sĩ truyền thống đã phản đối kịch liệt vì cho rằng máy tính không biết sáng tạo nghệ thuật thực sự.",
          "🤔 Ý kiến của em thế nào? Vẽ tranh bằng AI có được coi là nghệ sĩ không?"
        ],
        visualUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Giá tranh vẽ triển lãm nghệ thuật",
        speakerNotes: "Đây là chủ đề cực kỳ nóng hổi thảo luận về định nghĩa nghệ thuật thời đại số. Hãy khuyến khích học sinh chia sẻ suy nghĩ cá nhân tự do."
      },
      {
        id: "l7_s3",
        title: "Trí Tuệ Nhân Tạo Tạo Sinh (Generative AI) Là Gì?",
        visualType: "concepts",
        content: [
          "Định nghĩa: Generative AI là một nhánh của AI tập trung vào việc tạo ra dữ liệu hoàn toàn mới (văn bản, hình ảnh, âm nhạc, mã nguồn, mô hình 3D) dựa trên những gì nó đã học được từ dữ liệu cũ.",
          "Điểm đột phá lớn:",
          "• Trái ngược với AI truyền thống chỉ làm nhiệm vụ phân tích hoặc phân loại dữ liệu có sẵn.",
          "• Khả năng tự liên kết, suy luận phi tuyến tính để tạo ra những sản phẩm độc bản chưa từng xuất hiện."
        ],
        visualUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Sáng tạo số hóa trừu tượng",
        speakerNotes: "Nhấn mạnh: AI truyền thống giống như bác sĩ chẩn đoán bệnh (phân tích), còn Generative AI giống như nhà văn viết truyện (tạo mới)."
      },
      {
        id: "l7_s4",
        title: "Cách Hoạt Động Của Mô Hình Khuếch Tán (Diffusion)",
        visualType: "diagram",
        content: [
          "Quy trình tạo ảnh kỳ diệu từ văn bản của các AI như Midjourney hay Stable Diffusion:",
          "• 1. Nhận chuỗi Prompt mô tả từ con người.",
          "• 2. Bắt đầu với một khung hình nhiễu trắng ngẫu nhiên (nhiễu hạt tivi cũ).",
          "• 3. Loại bỏ nhiễu hạt từng bước (Denoising) dựa trên hướng dẫn của văn bản.",
          "• 4. Kết xuất bức ảnh nghệ thuật độ sắc nét cao hoàn chỉnh."
        ],
        diagramData: {
          nodes: [
            { id: "text", label: "1. Prompt chữ viết", x: 10, y: 50, color: "#3B82F6" },
            { id: "noise", label: "2. Nhiễu hạt trắng thô", x: 36, y: 30, color: "#9CA3AF" },
            { id: "denoise", label: "3. Khử nhiễu từng lớp", x: 62, y: 30, color: "#10B981" },
            { id: "art", label: "4. Tranh nghệ thuật sắc nét", x: 88, y: 50, color: "#EF4444" }
          ],
          links: [
            { source: "text", target: "noise", label: "Định hướng" },
            { source: "noise", target: "denoise", label: "Lọc hạt" },
            { source: "denoise", target: "art", label: "Khôi phục nét" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ nguyên lý khuếch tán tạo ảnh Diffusion",
        speakerNotes: "Giải thích đơn giản mô hình Diffusion. Nó giống như người tạc tượng, từ một khối đá xù xì vô tri (nhiễu thô) gọt giũa dần thành tác phẩm tuyệt đẹp."
      },
      {
        id: "l7_s5",
        title: "Thế Giới Công Cụ Generative AI Đa Dạng",
        visualType: "comparison",
        content: [
          "Sự bùng nổ của các nền tảng tạo sinh nội dung số đa phương tiện giúp con người giải phóng sức sáng tạo:",
          "Hãy so sánh các công cụ tạo ảnh và các công cụ tạo nhạc, phim hàng đầu thế giới."
        ],
        comparisonData: {
          leftTitle: "Sáng Tạo Hình Ảnh (Text-to-Image)",
          leftItems: [
            "Midjourney: Tạo tranh nghệ thuật, giả lập nhiếp ảnh tuyệt hảo.",
            "DALL-E 3 (OpenAI): Khả năng hiểu ngữ nghĩa văn bản siêu việt, tích hợp sẵn trong ChatGPT.",
            "Stable Diffusion: Mã nguồn mở, cho phép tùy biến cài đặt sâu trên máy tính cá nhân mạnh."
          ],
          rightTitle: "Sáng Tạo Âm Nhạc & Phim Ảnh",
          rightItems: [
            "Suno AI / Udio: Tạo ra cả bài hát hoàn chỉnh (nhạc, lời, giọng hát ca sĩ) chỉ từ mô tả ngắn.",
            "OpenAI Sora / Luma Dream Machine: Tạo video ngắn điện ảnh sống động từ câu lệnh.",
            "ElevenLabs: Chuyển đổi văn bản thành giọng đọc truyền cảm tự nhiên như người thật."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
        visualLabel: "So sánh hệ sinh thái công cụ Generative AI",
        speakerNotes: "Nêu bật việc những công cụ này giúp các em học sinh có thể làm một bộ phim ngắn hoặc viết bài hát tặng lớp mà không cần học nhạc lý hay kỹ thuật dựng phim chuyên sâu."
      },
      {
        id: "l7_s6",
        title: "Vai Trò Của AI Trong Chuỗi Sáng Tạo",
        visualType: "concepts",
        content: [
          "AI không thay thế người nghệ sĩ, nó đóng vai trò làm trợ lý đắc lực:",
          "• Rút ngắn thời gian phác thảo ý tưởng (Storyboarding).",
          "• Tự động thực hiện các phần việc tốn thời gian: Tách nền, chỉnh màu, làm nét ảnh cũ.",
          "• Người nghệ sĩ giữ vai trò quyết định linh hồn tác phẩm bằng cách định hướng ý tưởng sáng tạo độc đáo."
        ],
        visualUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Con người thiết kế ý tưởng",
        speakerNotes: "Nhấn mạnh kỹ năng quan trọng nhất của người nghệ sĩ thời đại mới là khả năng lên ý tưởng (concept) và kể câu chuyện có chiều sâu cảm xúc."
      },
      {
        id: "l7_s7",
        title: "Hoạt Động: Thiết Kế Ý Tưởng Tranh AI",
        visualType: "activity",
        content: [
          "🎨 Thực hành lên ý tưởng nghệ thuật (10 phút):",
          "Nhiệm vụ: Hãy tự thảo luận và viết một Prompt mô tả bức tranh 'Trường học tương lai năm 2050'.",
          "Yêu cầu Prompt phải mô tả chi tiết:",
          "• Bối cảnh (Trường học trên mây, dưới đại dương, hay trong vũ trụ?)",
          "• Đối tượng (Học sinh đeo kính VR, robot giảng bài, xe bay đưa đón?)",
          "• Phong cách mỹ thuật (Cyberpunk, tương lai tươi sáng, hay tranh vẽ màu nước cổ điển?)"
        ],
        activity: {
          title: "Thiết kế Prompt tranh nghệ thuật tương lai",
          duration: "10 Phút",
          instructions: [
            "Thảo luận nhóm 2 học sinh.",
            "Viết đoạn mô tả chi tiết bằng tiếng Anh hoặc tiếng Việt dài khoảng 50 từ.",
            "Trình bày ý tưởng trước lớp. Nhóm nào có Prompt hay nhất sẽ được giáo viên nạp vào AI vẽ trực tiếp xem kết quả."
          ],
          tips: "Nên sử dụng thêm các từ khóa phong cách như 'cyberpunk', 'studio ghibli style', 'highly detailed, 8k resolution' để bức tranh đẹp mắt hơn."
        },
        visualUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Hoạt động thiết kế Prompt mỹ thuật tranh AI",
        speakerNotes: "Hoạt động này giúp học sinh học kỹ năng mô tả chi tiết, kích hoạt tư duy nghệ thuật và rèn luyện ngôn ngữ."
      },
      {
        id: "l7_s8",
        title: "Trắc Nghiệm Tương Tác: Generative AI",
        visualType: "quiz",
        content: [
          "Cùng củng cố lại các công cụ AI tạo sinh phổ biến nhất hiện nay qua câu hỏi trắc nghiệm bên phải."
        ],
        interactiveQuiz: {
          question: "Nền tảng AI tạo sinh nào nổi tiếng nhất hiện nay với khả năng sáng tác bài hát hoàn chỉnh bao gồm nhạc cụ, lời ca và giọng hát chỉ từ một Prompt mô tả bằng chữ?",
          options: [
            "Stable Diffusion",
            "Suno AI",
            "Midjourney",
            "ChatGPT"
          ],
          answerIndex: 1,
          explanation: "Suno AI là công cụ hàng đầu hiện nay giúp tạo nhạc tự động cực kỳ sống động và chuyên nghiệp từ yêu cầu văn bản thô."
        },
        visualUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm kiến thức công cụ AI tạo sinh",
        speakerNotes: "Giải thích thêm cho học sinh biết Suno AI có thể viết cả nhạc Rap tiếng Việt cực kỳ mượt mà."
      },
      {
        id: "l7_s9",
        title: "Tổng Kết Bài Học & Nhiệm Vụ Sáng Tạo",
        visualType: "summary",
        content: [
          "📌 Generative AI mở ra cuộc cách mạng mới giúp ai cũng có thể trở thành người sáng tạo nghệ thuật số.",
          "📌 Sự sáng tạo độc đáo nằm ở tư duy, trí tưởng tượng và cảm xúc của con người, chứ không phải ở công cụ máy tính.",
          "🏠 Nhiệm vụ về nhà: Sử dụng các công cụ vẽ ảnh AI miễn phí (Bing Image Creator, Canva Magic Media...) để vẽ bức tranh em yêu thích, lưu lại ảnh để tiết sau thảo luận về cách ứng dụng AI trong tự học học đường."
        ],
        visualUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Sách vẽ và bút màu nghệ thuật",
        speakerNotes: "Cảm ơn các em đã tham gia tiết học rất sôi nổi hôm nay. Hy vọng các bức tranh vẽ về nhà của các em sẽ vô cùng sáng tạo!"
      }
    ]
  },
  {
    period: 8,
    title: "AI trong Giáo dục và Tự học",
    description: "Biến AI thành gia sư cá nhân hỗ trợ giải bài tập, học ngoại ngữ, lên lộ trình học tập hiệu quả, đồng thời tránh bẫy ỷ lại mất tư duy.",
    objectives: [
      "Nhận diện được các công cụ AI hỗ trợ tự học phổ biến cho học sinh THPT.",
      "Xây dựng được phương pháp học tập chủ động kết hợp AI thay vì chép bài giải sẵn.",
      "Thiết lập được lộ trình tự học thông minh có sự tham vấn, lên kế hoạch từ AI."
    ],
    slides: [
      {
        id: "l8_s1",
        title: "AI TRONG GIÁO DỤC VÀ TỰ HỌC CỦA HỌC SINH THPT",
        visualType: "title",
        content: [
          "Tiết 8: Biến Trí tuệ nhân tạo thành Gia sư cá nhân 24/7",
          "Mục tiêu: Đột phá kết quả học tập bằng phương pháp học thông minh",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Học cách đặt câu hỏi thông thái để sở hữu kho tri thức nhân loại!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Giảng đường học tập hiện đại",
        speakerNotes: "Chào cả lớp. Tiết học này liên quan trực tiếp đến cuộc sống học đường của các em: Làm thế nào để dùng AI để học giỏi hơn, học nhẹ nhàng hơn mà không bị rơi vào lười suy nghĩ."
      },
      {
        id: "l8_s2",
        title: "Khởi Động: Vấn Đề Lạm Dụng AI Giải Bài",
        visualType: "intro",
        content: [
          "💭 Câu hỏi thảo luận thẳng thắn:",
          "• Có phải nhiều học sinh hiện nay đang dùng ChatGPT để chép bài tập làm văn hay lời giải Toán chỉ để đối phó với giáo viên?",
          "🤔 Việc 'chép lời giải' của AI khác gì việc chép từ sách giải bài tập truyền thống?",
          "💡 Hậu quả: Điểm số có thể cao nhất thời, nhưng bộ não của các em sẽ mất dần khả năng tư duy phản biện và giải quyết vấn đề."
        ],
        visualUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Bút viết và bài kiểm tra căng thẳng",
        speakerNotes: "Giáo viên hãy nêu thẳng vấn đề thực tế này. Thừa nhận AI có năng lực giải bài rất mạnh, nhưng nhấn mạnh mục tiêu đi học là luyện não, chứ không phải nộp cho cô một trang giấy đẹp."
      },
      {
        id: "l8_s3",
        title: "Hệ Sinh Thái Công Cụ AI Hỗ Trợ Học Tập",
        visualType: "concepts",
        content: [
          "Sự đa dạng của các ứng dụng AI chuyên dụng trong học đường:",
          "• Học ngoại ngữ: ELSA Speak (sửa lỗi phát âm chuẩn bản xứ), Duolingo (học ngữ pháp thú vị).",
          "• Hỏi đáp bài tập: Photomath, Qanda (quét đề bài, hiển thị các bước giải tức thời).",
          "• Ôn luyện & Nghiên cứu: ChatGPT, Gemini (tóm tắt chương sách, dịch thuật chuyên sâu, giải nghĩa công thức hóa học phức tạp)."
        ],
        visualUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Trường học và sách giáo khoa số",
        speakerNotes: "Đây là những ứng dụng mà rất nhiều học sinh đã và đang dùng. Nhưng chúng ta cần hướng các em sử dụng đúng phương pháp học chủ động."
      },
      {
        id: "l8_s4",
        title: "Phương Pháp Học Chủ Động: Hỏi Cách Giải",
        visualType: "comparison",
        content: [
          "Sự khác biệt lớn giữa học vẹt thụ động và tự học chủ động sáng tạo nhờ AI hỗ trợ:",
          "Hãy thay đổi thói quen đặt câu hỏi để biến máy tính thành người thầy thông thái hướng dẫn tư duy."
        ],
        comparisonData: {
          leftTitle: "Học Vẹt Thụ Động (Sai phương pháp)",
          leftItems: [
            "Prompt: 'Giải giúp tôi bài toán tích phân này.'",
            "Hành động: Sao chép y nguyên kết quả nộp bài.",
            "Kết quả: Đi thi gặp bài tương tự hoàn toàn không biết làm.",
            "Tác hại: Não bộ thụ động, mất tính sáng tạo."
          ],
          rightTitle: "Học Chủ Động Sáng Tạo (Đúng phương pháp)",
          rightItems: [
            "Prompt: 'Hãy giải thích ý nghĩa công thức tích phân này và hướng dẫn cho tôi 3 bước tư duy để giải nó thay vì cho tôi đáp số ngay.'",
            "Hành động: Đọc hiểu các bước gỡ rối tư duy, tự tay gõ lại công thức và tính toán.",
            "Kết quả: Làm chủ bản chất kiến thức toán học sâu sắc."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        visualLabel: "So sánh phương pháp học vẹt thụ động và tự học chủ động cùng AI",
        speakerNotes: "Hãy dặn dò học sinh: Khi dùng AI, hãy luôn thêm câu khóa: 'Hãy giải thích cặn kẽ từng bước và đừng cho tôi đáp số ngay lập tức'."
      },
      {
        id: "l8_s5",
        title: "Thiết Kế Lộ Trình Học Tập Cá Nhân Hóa (Personalized)",
        visualType: "concepts",
        content: [
          "Mỗi học sinh có tốc độ học khác nhau, AI giúp em thiết lập thời khóa biểu và lộ trình tối ưu nhất:",
          "• Tạo bài kiểm tra năng lực thử thách cá nhân (Customized Quizzes).",
          "• Lên kế hoạch tự học môn Tiếng Anh trong 3 tháng để đạt mục tiêu chứng chỉ mong muốn.",
          "• Tự động giải thích lại bài học cũ bằng các từ ngữ đơn giản hơn (Ví dụ: 'Hãy giải thích thuyết tương đối của Einstein cho học sinh lớp 12 hiểu')."
        ],
        visualUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Bảng kế hoạch học tập chi tiết",
        speakerNotes: "AI không bao giờ mệt mỏi hay mất kiên nhẫn. Các em có thể hỏi AI 100 lần về một công thức Lý mà vẫn được trả lời rất nhẹ nhàng."
      },
      {
        id: "l8_s6",
        title: "Sơ Đồ Tương Tác: Lộ Trình Học Tập Trợ Lực AI",
        visualType: "diagram",
        content: [
          "Quy trình tự học khép kín giúp học sinh làm chủ kiến thức học đường chủ động:",
          "• Bước 1: Nhờ AI lập kế hoạch ôn tập chi tiết.",
          "• Bước 2: Tự học lý thuyết, nhờ AI giải thích các khái niệm khó hiểu.",
          "• Bước 3: Nhờ AI soạn 5 câu hỏi trắc nghiệm tự đánh giá năng lực.",
          "• Bước 4: Sửa lỗi sai dựa trên phân tích chi tiết của AI."
        ],
        diagramData: {
          nodes: [
            { id: "plan", label: "1. AI lập kế hoạch ôn", x: 15, y: 50, color: "#3B82F6" },
            { id: "study", label: "2. Tự học và hỏi giải nghĩa", x: 38, y: 30, color: "#10B981" },
            { id: "test", label: "3. AI sinh trắc nghiệm", x: 62, y: 30, color: "#8B5CF6" },
            { id: "feedback", label: "4. Phân tích lỗi sai", x: 85, y: 50, color: "#EF4444" }
          ],
          links: [
            { source: "plan", target: "study", label: "Bắt đầu" },
            { source: "study", target: "test", label: "Kiểm tra" },
            { source: "test", target: "feedback", label: "Đánh giá" },
            { source: "feedback", target: "plan", label: "Tối ưu lộ trình" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ chu trình tự học thông minh cùng trợ lý AI",
        speakerNotes: "Mô hình này giúp học sinh biến AI thành một vòng lặp cải tiến năng lực liên tục (PDCA) cho bản thân."
      },
      {
        id: "l8_s7",
        title: "Thực Hành: Nhờ AI Lập Thời Khóa Biểu Ôn Thi",
        visualType: "activity",
        content: [
          "💻 Thử thách thực hành tại lớp (10 phút):",
          "Nhiệm vụ: Hãy viết một Prompt yêu cầu AI lập lịch ôn thi học kỳ cho em.",
          "• Yêu cầu cụ thể trong Prompt:",
          "  1. Em cần ôn thi 3 môn: Toán, Văn, Tiếng Anh.",
          "  2. Thời gian ôn tập: 2 tuần trước kỳ thi, mỗi ngày dành tối đa 2 tiếng tự học buổi tối.",
          "  3. Phong cách ôn tập: Xen kẽ lý thuyết và giải bài tập thực tế.",
          "👉 Hãy chạy thử và xem kế hoạch ôn thi AI đề xuất cho em có khả thi không!"
        ],
        activity: {
          title: "Thiết kế thời khóa biểu ôn thi thông minh",
          duration: "10 Phút",
          instructions: [
            "Học sinh tự soạn Prompt trên máy tính/điện thoại.",
            "Quan sát cách AI phân bổ lịch học xen kẽ để tránh mệt mỏi bộ não.",
            "Chia sẻ kế hoạch ôn tập hay nhất với bạn cùng bàn."
          ],
          tips: "Hãy hướng dẫn học sinh yêu cầu AI chèn thêm kỹ thuật quả cà chua Pomodoro (học 25 phút nghỉ 5 phút) để tăng hiệu suất tập trung."
        },
        visualUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Thực hành thiết kế thời khóa biểu ôn thi thông minh",
        speakerNotes: "Giáo viên đi xung quanh hướng dẫn học sinh cách tinh chỉnh Prompt nếu thời khóa biểu ban đầu quá dày hoặc không thực tế."
      },
      {
        id: "l8_s8",
        title: "Trắc Nghiệm Tương Tác: Tự Học Đúng Cách",
        visualType: "quiz",
        content: [
          "Cùng kiểm tra xem em đã thấu hiểu nguyên tắc tự học thông minh kết hợp AI chưa nhé!"
        ],
        interactiveQuiz: {
          question: "Phương pháp nào sau đây là cách sử dụng AI thông minh và có trách nhiệm nhất để nâng cao năng lực học tập của học sinh?",
          options: [
            "Yêu cầu AI viết hộ bài văn nghị luận xã hội rồi chép nguyên văn nộp bài",
            "Dùng AI chụp ảnh bài tập Lý để lấy ngay đáp số nộp bài tập về nhà",
            "Yêu cầu AI giải thích bản chất công thức Vật lý và hướng dẫn các bước tư duy giải bài tương tự",
            "Hoàn toàn tẩy chay không sử dụng bất kỳ công cụ AI nào vì sợ mất tư duy"
          ],
          answerIndex: 2,
          explanation: "Học cách tư duy và bản chất kiến thức giúp học sinh tích lũy trí tuệ thật sự, biến AI thành trợ lý đắc lực thay vì công cụ gian lận."
        },
        visualUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm đạo đức và kỹ năng tự học cùng AI",
        speakerNotes: "Củng cố tinh thần cốt lõi: Sử dụng công nghệ để nâng tầm bản thân chứ không để công nghệ biến ta thành thụ động."
      },
      {
        id: "l8_s9",
        title: "Tổng Kết Bài Học & Lời Khuyên Vàng",
        visualType: "summary",
        content: [
          "📌 AI là người thầy gia sư tuyệt vời nhất nếu các em biết đặt câu hỏi truy vấn bản chất vấn đề.",
          "📌 Hãy học cách tư duy (How to think) chứ không học cách sao chép (How to copy).",
          "🏠 Nhiệm vụ tự học: Áp dụng thời khóa biểu do AI lập tối nay để tự học môn tiếng Anh trong 30 phút và ghi lại trải nghiệm của em."
        ],
        visualUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Sự kết nối học đường vui vẻ",
        speakerNotes: "Cảm ơn cả lớp! Hãy nhớ rằng, trí tuệ thực sự nằm ở trong đầu các em khi các em biết làm chủ công nghệ để phục vụ ước mơ của mình."
      }
    ]
  },
  {
    period: 9,
    title: "AI trong đời sống, xã hội và KH-KT",
    description: "Cái nhìn toàn cảnh về cuộc cách mạng công nghiệp 4.0: Ứng dụng AI đột phá trong Y tế, Giao thông đô thị, Sản xuất và Nghiên cứu khoa học.",
    objectives: [
      "Trình bày được các ứng dụng điển hình của AI trong Y tế, Giao thông thông minh, Công nghiệp và Nông nghiệp.",
      "Hiểu rõ tầm ảnh hưởng của AI trong việc đẩy nhanh tốc độ nghiên cứu khoa học kỹ thuật.",
      "Có tư duy đổi mới sáng tạo, nhận thức được sự chuyển mình mạnh mẽ của thế giới xung quanh."
    ],
    slides: [
      {
        id: "l9_s1",
        title: "AI TRONG ĐỜI SỐNG, XÃ HỘI VÀ KHOA HỌC KỸ THUẬT",
        visualType: "title",
        content: [
          "Tiết 9: Sức mạnh chuyển đổi thế giới của Trí tuệ nhân tạo",
          "Mục tiêu: Tìm hiểu cuộc cách mạng công nghiệp và khoa học đa ngành",
          "Chuyên đề Tin học Ứng dụng THPT",
          "Khám phá cách AI tái định hình tương lai cuộc sống loài người!"
        ],
        visualUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Thành phố thông minh rực rỡ",
        speakerNotes: "Chào cả lớp. Tiết học này sẽ giúp chúng ta có tầm nhìn vĩ mô hơn về cách AI đang thay đổi bộ mặt của các ngành công nghiệp, y tế và nghiên cứu khoa học trên toàn cầu."
      },
      {
        id: "l9_s2",
        title: "Khởi Động: Kỳ Tích Khoa Học AlphaFold",
        visualType: "intro",
        content: [
          "💭 Đột phá sinh học chấn động thế giới:",
          "• Việc dự đoán cấu trúc 3D của protein là bài toán thách thức các nhà sinh học suốt 50 năm qua.",
          "• Năm 2020, hệ thống AI AlphaFold của Google DeepMind đã giải quyết thành công bài toán này chỉ trong vài ngày.",
          "🤔 Tại sao đây được coi là một kỳ tích vĩ đại giúp rút ngắn thời gian chế tạo vắc-xin và thuốc chữa bệnh hiểm nghèo từ hàng chục năm xuống vài tháng?"
        ],
        visualUrl: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Phòng thí nghiệm sinh hóa hiện đại",
        speakerNotes: "Sự kiện AlphaFold đoạt giải Nobel hóa học năm 2024 đã minh chứng sức mạnh tuyệt đỉnh của AI trong việc đẩy nhanh tiến trình phát minh khoa học của loài người."
      },
      {
        id: "l9_s3",
        title: "AI Trong Y Tế & Chăm Sóc Sức Khỏe",
        visualType: "concepts",
        content: [
          "Y khoa thông minh đang nâng cao chất lượng sống và tuổi thọ con người:",
          "• Phân tích hình ảnh X-quang, MRI bằng AI giúp phát hiện tế bào ung thư sớm với độ chính xác vượt trội bác sĩ thông thường.",
          "• Robot phẫu thuật thông minh hỗ trợ các ca phẫu thuật vi mô đòi hỏi độ chính xác tuyệt đối.",
          "• Cá nhân hóa phác đồ điều trị dựa trên việc phân tích bản đồ gen của từng bệnh nhân."
        ],
        visualUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Bác sĩ phân tích y tế số hóa",
        video: {
          id: "vid_lesson_9_doctor",
          title: "AlphaFold & Cách mạng AI trong Khoa Học Tự Nhiên & Y Học",
          description: "Bộ phim tài liệu ngắn về AlphaFold của Google DeepMind - giải mã cấu trúc 200 triệu protein, giúp nhân loại rút ngắn công trình thế kỷ xuống vài ngày, hỗ trợ bác sĩ chẩn đoán và bào chế thuốc nhanh hơn.",
          duration: "07:20",
          youtubeId: "A9bjlKzTzDw",
          videoUrl: "https://www.youtube.com/embed/A9bjlKzTzDw?autoplay=1&rel=0",
          thumbnailUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
          sourceLabel: "Video tiếng Việt (YouTube)",
          discussionQuestion: "AI đã giúp các nhà khoa học giải quyết bài toán gấp cuộn protein (Protein Folding) như thế nào để phục vụ chế tạo thuốc mới?"
        },
        speakerNotes: "AI không thay thế bác sĩ, nhưng bác sĩ sử dụng AI sẽ thay thế bác sĩ không sử dụng AI. Đó là xu thế tất yếu."
      },
      {
        id: "l9_s4",
        title: "AI Trong Giao Thông & Đô Thị Thông Minh",
        visualType: "concepts",
        content: [
          "Giải phóng sức lao động và giảm thiểu ùn tắc, tai nạn giao thông:",
          "• Xe tự hành (Self-driving cars): Tesla, Waymo tự động điều hướng an toàn dựa trên hàng chục camera cảm biến.",
          "• Điều phối giao thông thông minh: AI phân tích mật độ xe cộ thời gian thực để tự động điều chỉnh chu kỳ đèn tín hiệu tối ưu.",
          "• Quản lý năng lượng tòa nhà, dự báo nhu cầu điện lưới quốc gia tự động."
        ],
        visualUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Cơ sở hạ tầng thông minh kết nối",
        speakerNotes: "Hãy hình dung một thành phố không còn ùn tắc giao thông vì tất cả đèn giao thông đều được điều phối linh hoạt bằng trí tuệ nhân tạo."
      },
      {
        id: "l9_s5",
        title: "So Sánh Ứng Dụng: Công Nghiệp vs Nông Nghiệp",
        visualType: "comparison",
        content: [
          "AI len lỏi vào mọi hoạt động sản xuất từ nhà máy hiện đại đến cánh đồng thông minh:",
          "Hãy so sánh sự chuyển mình công nghệ ở hai ngành kinh tế cốt lõi này."
        ],
        comparisonData: {
          leftTitle: "AI Trong Công Nghiệp Chế Tạo (4.0)",
          leftItems: [
            "Bảo trì dự đoán (Predictive Maintenance): Dự báo trước thời điểm máy móc hỏng hóc để bảo dưỡng kịp thời.",
            "Robot cộng tác (Cobots): Cánh tay robot tự động hóa dây chuyền lắp ráp ô tô, điện thoại.",
            "Tối ưu hóa chuỗi cung ứng: AI tự tính toán lượng hàng tồn kho và điều phối luồng xe vận chuyển."
          ],
          rightTitle: "AI Trong Nông Nghiệp Thông Minh",
          rightItems: [
            "Flycam quét cánh đồng: AI phân tích màu lá để phát hiện sớm sâu bệnh, thiếu nước.",
            "Robot thu hoạch tự động: Nhận diện quả chín và hái quả nhẹ nhàng không làm dập nát.",
            "Hệ thống tưới tiêu tự động thông minh: Tự động tưới nước phân bón dựa trên độ ẩm đất cảm biến."
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        visualLabel: "So sánh ứng dụng AI trong công nghiệp 4.0 và nông nghiệp chính xác",
        speakerNotes: "Nông nghiệp hiện đại không còn là 'bán mặt cho đất bán lưng cho trời' nữa, mà đã trở thành nông nghiệp chính xác cao có sự tham gia của AI."
      },
      {
        id: "l9_s6",
        title: "Mô Hình Tích Hợp Đa Ngành Của Hệ Sinh Thái AI",
        visualType: "diagram",
        content: [
          "Bản đồ phân bổ sức mạnh chuyển đổi của AI trong xã hội:",
          "• Y tế bảo vệ sức khỏe con người.",
          "• Giao thông tối ưu hóa tốc độ di chuyển vận hành.",
          "• Sản xuất công nông nghiệp tạo ra của cải vật chất dồi dào.",
          "• Nghiên cứu khoa học thúc đẩy tương lai nhân loại."
        ],
        diagramData: {
          nodes: [
            { id: "ai", label: "HỆ SINH THÁI AI", x: 50, y: 50, color: "#EF4444" },
            { id: "health", label: "Y tế thông minh", x: 15, y: 20, color: "#3B82F6" },
            { id: "traffic", label: "Giao thông tối ưu", x: 85, y: 20, color: "#10B981" },
            { id: "produce", label: "Sản xuất Công - Nông", x: 15, y: 80, color: "#8B5CF6" },
            { id: "science", label: "Phát minh Khoa học", x: 85, y: 80, color: "#F59E0B" }
          ],
          links: [
            { source: "ai", target: "health", label: "Chẩn đoán" },
            { source: "ai", target: "traffic", label: "Điều hướng" },
            { source: "ai", target: "produce", label: "Tự động" },
            { source: "ai", target: "science", label: "Mở khóa tri thức" }
          ]
        },
        visualUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Sơ đồ hệ sinh thái đa ngành của công nghệ AI",
        speakerNotes: "Mô hình này minh chứng AI không phải là một ứng dụng đơn lẻ, mà là một công nghệ nền tảng (general-purpose technology) giống như điện năng hay Internet trước đây."
      },
      {
        id: "l9_s7",
        title: "Thảo Luận Nhóm: Sáng Kiến AI Vì Môi Trường",
        visualType: "activity",
        content: [
          "📋 Hoạt động thực hành nhóm (10 phút):",
          "Nhiệm vụ: Hãy lên ý tưởng thiết kế một ứng dụng AI giải quyết vấn đề rác thải nhựa tại trường học hoặc địa phương em.",
          "Các câu hỏi định hướng gợi ý phát triển:",
          "• 1. AI sẽ nhìn thấy gì và thu thập dữ liệu từ đâu? (Camera quét thùng rác)",
          "• 2. AI sử dụng công nghệ gì để xử lý? (Thị giác máy tính nhận diện phân loại nhựa, giấy, kim loại)",
          "• 3. Lợi ích mang lại cho xã hội là gì? (Tự động hóa phân loại rác bảo vệ môi trường)"
        ],
        activity: {
          title: "Thiết kế ý tưởng ứng dụng AI bảo vệ môi trường",
          duration: "10 Phút",
          instructions: [
            "Chia lớp thành các nhóm 4 học sinh.",
            "Thảo luận nhanh và vẽ ý tưởng sơ đồ hoạt động ứng dụng lên giấy vẽ.",
            "Cử đại diện nhóm trình bày ý tưởng độc đáo nhất."
          ],
          tips: "Hãy suy nghĩ về một trò chơi tích điểm thưởng cho học sinh phân loại rác đúng bằng AI để kích thích các bạn tham gia."
        },
        visualUrl: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Thảo luận sáng kiến ứng dụng AI bảo vệ môi trường",
        speakerNotes: "Khuyến khích học sinh suy nghĩ thực tế, ứng dụng công nghệ để giải quyết các vấn đề thiết thực của cộng đồng xung quanh."
      },
      {
        id: "l9_s8",
        title: "Trắc Nghiệm Tương Tác: AI Đa Ngành",
        visualType: "quiz",
        content: [
          "Hãy cùng kiểm tra lại kiến thức ứng dụng đa ngành của AI qua câu hỏi trắc nghiệm dưới đây."
        ],
        interactiveQuiz: {
          question: "Thành tựu đột phá nào của Google DeepMind trong việc sử dụng AI để dự đoán cấu trúc 3D của protein đã đoạt giải Nobel Hóa học năm 2024, tạo ra bước ngoặt vĩ đại cho y học thế giới?",
          options: [
            "AlphaGo",
            "AlphaFold",
            "ChatGPT",
            "Gemini Pro"
          ],
          answerIndex: 1,
          explanation: "AlphaFold là mô hình trí tuệ nhân tạo đột phá giúp dự đoán cấu trúc 3D của protein cực kỳ chính xác, mở khóa các tiềm năng nghiên cứu y sinh học."
        },
        visualUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
        visualLabel: "Trắc nghiệm thành tựu Nobel Hóa học 2024 của AlphaFold",
        speakerNotes: "Nhấn mạnh tầm quan trọng của giải Nobel này, nó chính thức công nhận vị thế khoa học của trí tuệ nhân tạo."
      },
      {
        id: "l9_s9",
        title: "Tổng Kết Bài Học & Nhiệm Vụ",
        visualType: "summary",
        content: [
          "📌 AI đang đóng vai trò là động cơ chính thúc đẩy cuộc cách mạng khoa học và sản xuất hiện đại.",
          "📌 Sự kết hợp giữa con người sáng tạo và AI xử lý dữ liệu lớn sẽ tạo ra những kỳ tích khoa học mới.",
          "🏠 Nhiệm vụ về nhà: Tìm đọc bài báo ngắn về tác động của xe tự lái và suy nghĩ: Nếu xe tự lái đâm phải người đi đường, ai sẽ là người chịu trách nhiệm pháp lý? (Để chuẩn bị cho bài học đạo đức AI tuần sau)."
        ],
        visualUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
        visualLabel: "Nữ kỹ sư công nghệ",
        speakerNotes: "Cảm ơn các em đã theo dõi bài học đầy cảm hứng hôm nay. Bài tập về nhà tuần này là cầu nối dẫn thẳng vào bài học Đạo đức AI cực kỳ sâu sắc ở tiết sau."
      }
    ]
  }
];
