import { InteractiveExercise } from '../types';

// Ngan hang "Tro Choi Do Vui Tinh Diem" - moi Tiet co 1 bo cau hoi nhanh rieng,
// giup tang so luong bai tap tuong tac va tao khong khi thi dua trong lop.
export const gameBank: Record<number, InteractiveExercise> = {
  1: {
    id: 'game_p1',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: AI Là Gì?',
    description: 'Trả lời nhanh 5 câu hỏi để củng cố kiến thức về khái niệm và lịch sử Trí tuệ nhân tạo.',
    hint: 'Nhớ lại phép thử Turing và mốc thời gian Dartmouth 1956.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời 5 câu hỏi nhanh trong thời gian giới hạn để giành điểm số cao nhất!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g1_1', question: 'AI là viết tắt của cụm từ nào?', options: ['Artificial Intelligence', 'Automatic Internet', 'Advanced Information', 'Applied Interface'], answerIndex: 0, explanation: 'AI = Artificial Intelligence (Trí tuệ nhân tạo).' },
        { id: 'g1_2', question: 'Ai là người đề xuất phép thử đo lường trí thông minh của máy tính?', options: ['Bill Gates', 'Alan Turing', 'Elon Musk', 'Mark Zuckerberg'], answerIndex: 1, explanation: 'Alan Turing đề xuất phép thử Turing năm 1950.' },
        { id: 'g1_3', question: 'Thuật ngữ "AI" chính thức ra đời tại sự kiện nào?', options: ['Hội thảo Dartmouth 1956', 'Thế vận hội 1980', 'Hội nghị Paris 1920', 'Triển lãm CES 2000'], answerIndex: 0, explanation: 'Hội thảo Dartmouth năm 1956 khai sinh thuật ngữ AI.' },
        { id: 'g1_4', question: 'AI hiện nay có ý thức và cảm xúc như con người không?', options: ['Có, hoàn toàn giống người', 'Không, chỉ mô phỏng qua thuật toán', 'Chỉ có ở một số AI cao cấp', 'Không ai biết chắc'], answerIndex: 1, explanation: 'AI hiện tại xử lý dữ liệu bằng thuật toán, chưa có ý thức thực sự.' },
        { id: 'g1_5', question: 'Sự kiện nào đánh dấu AI đánh bại nhà vô địch cờ vua thế giới?', options: ['AlphaGo 2016', 'Deep Blue 1997', 'ChatGPT 2022', 'Watson 2011'], answerIndex: 1, explanation: 'Deep Blue đánh bại Garry Kasparov năm 1997.' }
      ]
    }
  },
  2: {
    id: 'game_p2',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: Phân Loại AI',
    description: 'Kiểm tra nhanh khả năng phân biệt AI hẹp (Narrow AI) và AI tổng quát (AGI).',
    hint: 'AI hẹp chỉ giỏi một việc cụ thể; AGI (nếu có) sẽ giỏi mọi lĩnh vực như con người.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Phân biệt nhanh các loại AI qua 5 câu hỏi trắc nghiệm!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g2_1', question: 'Siri, Google Assistant thuộc loại AI nào?', options: ['AI hẹp (Narrow AI)', 'AGI', 'Siêu trí tuệ', 'Không phải AI'], answerIndex: 0, explanation: 'Trợ lý ảo chỉ giỏi các tác vụ cụ thể, thuộc AI hẹp.' },
        { id: 'g2_2', question: 'AGI là viết tắt của?', options: ['Artificial General Intelligence', 'Automatic Global Index', 'Applied Graphic Interface', 'Advanced Google Intelligence'], answerIndex: 0, explanation: 'AGI = Artificial General Intelligence (Trí tuệ nhân tạo tổng quát).' },
        { id: 'g2_3', question: 'Đặc điểm của AI hẹp là gì?', options: ['Giỏi mọi lĩnh vực như con người', 'Chỉ giỏi một nhiệm vụ cụ thể', 'Có ý thức độc lập', 'Chưa từng tồn tại'], answerIndex: 1, explanation: 'AI hẹp được huấn luyện để làm tốt một nhiệm vụ chuyên biệt.' },
        { id: 'g2_4', question: 'Hiện nay, AGI đã tồn tại trong thực tế chưa?', options: ['Đã tồn tại phổ biến', 'Chưa, vẫn đang là mục tiêu nghiên cứu', 'Chỉ có ở Việt Nam', 'Đã bị cấm sử dụng'], answerIndex: 1, explanation: 'AGI vẫn là khái niệm lý thuyết, chưa có hệ thống nào đạt được.' },
        { id: 'g2_5', question: 'Xe tự lái là ví dụ của loại AI nào?', options: ['AI hẹp chuyên biệt cho giao thông', 'AGI hoàn chỉnh', 'Siêu trí tuệ', 'Không liên quan đến AI'], answerIndex: 0, explanation: 'Xe tự lái dùng AI hẹp chuyên về nhận diện và điều khiển giao thông.' }
      ]
    }
  },
  3: {
    id: 'game_p3',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: Machine Learning & Mạng Nơ-ron',
    description: 'Thử thách nhanh về cách máy học từ dữ liệu và mạng nơ-ron nhân tạo.',
    hint: 'Mạng nơ-ron lấy cảm hứng từ cấu trúc não bộ con người.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời nhanh 5 câu hỏi về Học máy (Machine Learning)!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g3_1', question: 'Machine Learning là gì?', options: ['Máy tự học từ dữ liệu, không cần lập trình từng quy tắc cụ thể', 'Chỉ là chạy phần mềm bình thường', 'Kỹ thuật sửa máy tính', 'Cách vẽ đồ thị bằng tay'], answerIndex: 0, explanation: 'ML giúp máy tự rút ra quy luật từ dữ liệu thay vì lập trình cứng.' },
        { id: 'g3_2', question: 'Mạng nơ-ron nhân tạo lấy cảm hứng từ đâu?', options: ['Cấu trúc não bộ con người', 'Cấu trúc của máy tính', 'Hệ mặt trời', 'Mạng lưới điện quốc gia'], answerIndex: 0, explanation: 'Mạng nơ-ron mô phỏng cách các nơ-ron thần kinh liên kết và truyền tín hiệu.' },
        { id: 'g3_3', question: 'Dữ liệu huấn luyện đóng vai trò gì trong ML?', options: ['Không quan trọng', 'Giúp mô hình học được các quy luật và cải thiện độ chính xác', 'Chỉ để trang trí', 'Làm chậm máy tính'], answerIndex: 1, explanation: 'Dữ liệu chất lượng cao là yếu tố quyết định độ chính xác của mô hình.' },
        { id: 'g3_4', question: '"Trọng số" (weights) trong mạng nơ-ron dùng để làm gì?', options: ['Đo cân nặng máy chủ', 'Điều chỉnh mức độ ảnh hưởng giữa các nơ-ron khi học', 'Tính giá tiền phần mềm', 'Không có tác dụng gì'], answerIndex: 1, explanation: 'Trọng số được điều chỉnh liên tục trong quá trình học để mô hình chính xác hơn.' },
        { id: 'g3_5', question: 'Quá trình máy tự sửa sai khi dự đoán sai gọi là gì?', options: ['Lỗi hệ thống', 'Quá trình huấn luyện/học (training)', 'Reset máy', 'Xóa dữ liệu'], answerIndex: 1, explanation: 'Trong quá trình huấn luyện, mô hình liên tục điều chỉnh để giảm sai số.' }
      ]
    }
  },
  4: {
    id: 'game_p4',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: Thị Giác Máy Tính',
    description: 'Khám phá cách máy tính "nhìn" và nhận diện hình ảnh qua 5 câu hỏi nhanh.',
    hint: 'Máy tính "nhìn" ảnh dưới dạng ma trận điểm ảnh (pixel).',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời nhanh 5 câu hỏi về Computer Vision (Thị giác máy tính)!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g4_1', question: 'Computer Vision là công nghệ giúp máy tính làm gì?', options: ['Nghe âm thanh', '"Nhìn" và hiểu nội dung hình ảnh, video', 'Tính toán số học', 'Kết nối wifi'], answerIndex: 1, explanation: 'Computer Vision giúp máy nhận diện, phân tích hình ảnh và video.' },
        { id: 'g4_2', question: 'Máy tính "nhìn" một bức ảnh dưới dạng gì?', options: ['Chữ viết tay', 'Ma trận các điểm ảnh (pixel) với giá trị số', 'Âm thanh', 'Không nhìn được gì cả'], answerIndex: 1, explanation: 'Ảnh số được biểu diễn bằng ma trận pixel mà máy tính xử lý được.' },
        { id: 'g4_3', question: 'Ứng dụng nào KHÔNG phải của thị giác máy tính?', options: ['Nhận diện khuôn mặt mở khóa điện thoại', 'Xe tự lái phát hiện vật cản', 'Dịch văn bản sang tiếng Anh', 'Camera an ninh phát hiện người lạ'], answerIndex: 2, explanation: 'Dịch văn bản thuộc xử lý ngôn ngữ tự nhiên (NLP), không phải thị giác máy tính.' },
        { id: 'g4_4', question: 'Vì sao phân biệt chó và mèo lại khó với máy tính hơn con người?', options: ['Máy tính không có mắt sinh học và phải học từ hàng nghìn ảnh mẫu', 'Chó và mèo trông giống hệt nhau', 'Máy tính ghét động vật', 'Không có lý do gì đặc biệt'], answerIndex: 0, explanation: 'Máy cần được huấn luyện với dữ liệu lớn để nhận ra các đặc trưng phân biệt.' },
        { id: 'g4_5', question: 'CNN (Convolutional Neural Network) thường dùng để làm gì?', options: ['Xử lý và nhận diện hình ảnh', 'Gửi email', 'Tính lương nhân viên', 'Sạc pin điện thoại'], answerIndex: 0, explanation: 'CNN là kiến trúc mạng nơ-ron chuyên xử lý dữ liệu hình ảnh.' }
      ]
    }
  },
  5: {
    id: 'game_p5',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: Kỹ Nghệ Viết Prompt',
    description: 'Luyện phản xạ nhanh về cách viết prompt hiệu quả cho ChatGPT, Gemini, Claude.',
    hint: 'Nhớ cấu trúc: Vai trò - Nhiệm vụ - Bối cảnh - Định dạng đầu ra.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời nhanh 5 câu hỏi về kỹ năng viết Prompt cho AI!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g5_1', question: 'Prompt là gì?', options: ['Câu lệnh/yêu cầu người dùng nhập cho AI', 'Tên một phần mềm diệt virus', 'Loại pin sạc', 'Một ngôn ngữ lập trình'], answerIndex: 0, explanation: 'Prompt là câu lệnh hoặc yêu cầu mà người dùng đưa ra để AI xử lý.' },
        { id: 'g5_2', question: 'Yếu tố nào KHÔNG thuộc cấu trúc prompt hiệu quả cơ bản?', options: ['Vai trò (Role)', 'Nhiệm vụ (Task)', 'Bối cảnh (Context)', 'Mật khẩu tài khoản'], answerIndex: 3, explanation: 'Mật khẩu không liên quan và không nên đưa vào prompt.' },
        { id: 'g5_3', question: 'Prompt nào cụ thể và hiệu quả hơn?', options: ['"Viết gì đó về AI"', '"Là giáo viên Sinh học, hãy viết đoạn văn 100 từ giải thích AI cho học sinh lớp 11"', '"AI"', '"Giúp tôi"'], answerIndex: 1, explanation: 'Prompt càng cụ thể về vai trò, nhiệm vụ, bối cảnh thì kết quả càng chính xác.' },
        { id: 'g5_4', question: '"Định dạng đầu ra" trong prompt dùng để làm gì?', options: ['Không có tác dụng', 'Yêu cầu AI trả lời theo dạng bảng, danh sách, đoạn văn...', 'Chọn màu giao diện', 'Đổi ngôn ngữ máy tính'], answerIndex: 1, explanation: 'Định dạng đầu ra giúp kết quả AI trả về đúng hình thức mong muốn (bảng, danh sách...).' },
        { id: 'g5_5', question: 'Vì sao nên kiểm tra lại câu trả lời của AI?', options: ['Vì AI luôn đúng 100%', 'Vì AI có thể trả lời sai hoặc thiếu chính xác (ảo giác dữ liệu)', 'Không cần thiết', 'Vì AI biết nói dối cố ý'], answerIndex: 1, explanation: 'AI có thể mắc lỗi "ảo giác" (hallucination), nên cần kiểm chứng thông tin.' }
      ]
    }
  },
  6: {
    id: 'game_p6',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: AI Trong Học Tập',
    description: 'Ôn nhanh cách dùng AI làm trợ lý học tập hiệu quả và trung thực.',
    hint: 'AI hỗ trợ tư duy, không thay thế việc tự học và trung thực.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời nhanh 5 câu hỏi về sử dụng AI trong học tập!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g6_1', question: 'Sử dụng AI đúng cách trong học tập là?', options: ['Sao chép nguyên văn bài AI viết để nộp bài', 'Dùng AI để gợi ý ý tưởng rồi tự viết lại bằng lời văn của mình', 'Không bao giờ dùng AI', 'Nhờ AI làm bài kiểm tra hộ'], answerIndex: 1, explanation: 'AI nên là công cụ hỗ trợ tư duy, không thay thế việc tự học.' },
        { id: 'g6_2', question: 'Việc nộp bài do AI viết hoàn toàn mà không ghi rõ là vi phạm gì?', options: ['Không vi phạm gì', 'Liêm chính học thuật', 'Luật giao thông', 'Quy định an toàn lao động'], answerIndex: 1, explanation: 'Đây là hành vi vi phạm liêm chính học thuật (gian lận).' },
        { id: 'g6_3', question: 'AI có thể hỗ trợ học sinh việc gì sau đây?', options: ['Giải thích lại kiến thức khó bằng cách khác', 'Làm bài thi thay học sinh', 'Ký tên vào học bạ', 'Đi học thay'], answerIndex: 0, explanation: 'AI là gia sư ảo hữu ích để giải thích lại kiến thức theo cách dễ hiểu hơn.' },
        { id: 'g6_4', question: 'Kỹ năng nào học sinh CẦN giữ vững khi dùng AI hỗ trợ học tập?', options: ['Tư duy độc lập và khả năng tự kiểm chứng', 'Phụ thuộc hoàn toàn vào AI', 'Không cần đọc sách nữa', 'Không cần ghi nhớ gì cả'], answerIndex: 0, explanation: 'Tư duy phản biện và tự kiểm chứng giúp học sinh không bị lệ thuộc vào AI.' },
        { id: 'g6_5', question: 'AI có thể giúp kiểm tra lỗi gì trong bài viết?', options: ['Lỗi ngữ pháp, chính tả và logic lập luận', 'Chữ ký của học sinh', 'Điểm danh lớp học', 'Thời khóa biểu'], answerIndex: 0, explanation: 'AI có thể hỗ trợ rà soát ngữ pháp, chính tả và tính logic của bài viết.' }
      ]
    }
  },
  7: {
    id: 'game_p7',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: AI Trong Khoa Học & Y Học',
    description: 'Khám phá nhanh cách AI đang thay đổi nghiên cứu khoa học và y học.',
    hint: 'AlphaFold giúp giải mã cấu trúc protein nhanh gấp nhiều lần con người.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời nhanh 5 câu hỏi về ứng dụng AI trong khoa học và y học!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g7_1', question: 'AlphaFold là hệ thống AI dùng để làm gì?', options: ['Dự đoán cấu trúc 3D của protein', 'Chơi cờ vua', 'Dịch ngôn ngữ', 'Tạo hình ảnh nghệ thuật'], answerIndex: 0, explanation: 'AlphaFold của DeepMind giúp dự đoán chính xác cấu trúc protein.' },
        { id: 'g7_2', question: 'Việc giải mã cấu trúc protein giúp ích gì cho y học?', options: ['Không có ích gì', 'Rút ngắn thời gian nghiên cứu và phát triển thuốc mới', 'Chỉ để trang trí sách giáo khoa', 'Làm tăng chi phí điều trị'], answerIndex: 1, explanation: 'Hiểu cấu trúc protein giúp các nhà khoa học phát triển thuốc nhanh và chính xác hơn.' },
        { id: 'g7_3', question: 'AI có thể hỗ trợ bác sĩ trong việc gì?', options: ['Phân tích hình ảnh y khoa (X-quang, MRI) để phát hiện bệnh sớm', 'Thay thế hoàn toàn bác sĩ ra quyết định', 'Kê đơn thuốc không cần kiểm tra', 'Không hỗ trợ được gì'], answerIndex: 0, explanation: 'AI hỗ trợ phân tích hình ảnh y khoa nhanh và chính xác, nhưng quyết định cuối vẫn thuộc về bác sĩ.' },
        { id: 'g7_4', question: 'Trước khi có AI, việc giải mã cấu trúc một protein mất thời gian như thế nào?', options: ['Vài giây', 'Có thể mất nhiều năm nghiên cứu', 'Không thể thực hiện được', 'Chỉ mất 1 phút'], answerIndex: 1, explanation: 'Trước AI, giải mã cấu trúc protein bằng thực nghiệm tốn rất nhiều thời gian và chi phí.' },
        { id: 'g7_5', question: 'Ai/tổ chức nào phát triển AlphaFold?', options: ['Google DeepMind', 'Microsoft', 'Facebook', 'Apple'], answerIndex: 0, explanation: 'AlphaFold được phát triển bởi Google DeepMind.' }
      ]
    }
  },
  8: {
    id: 'game_p8',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: AI Sáng Tác Nghệ Thuật',
    description: 'Tìm hiểu nhanh về AI vẽ tranh, sáng tác nhạc và các tranh cãi bản quyền.',
    hint: 'AI tạo sinh học từ hàng triệu tác phẩm có sẵn để tạo ra nội dung mới.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời nhanh 5 câu hỏi về AI sáng tác nghệ thuật!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g8_1', question: 'Diffusion Model thường được dùng để làm gì?', options: ['Tạo hình ảnh từ văn bản mô tả', 'Tính toán số học', 'Gửi tin nhắn', 'Sạc pin nhanh'], answerIndex: 0, explanation: 'Diffusion Model là kỹ thuật AI phổ biến để tạo ảnh từ mô tả văn bản (text-to-image).' },
        { id: 'g8_2', question: 'Vấn đề gây tranh cãi lớn nhất với AI sáng tác nghệ thuật là gì?', options: ['Bản quyền và quyền tác giả', 'Giá điện tăng cao', 'Máy tính bị nóng', 'Không có tranh cãi nào'], answerIndex: 0, explanation: 'Việc AI học từ tác phẩm có sẵn để tạo nội dung mới gây tranh cãi về bản quyền.' },
        { id: 'g8_3', question: 'AI tạo nhạc như Suno hoạt động dựa trên nguyên lý nào?', options: ['Học từ dữ liệu âm nhạc khổng lồ để tạo giai điệu mới', 'Ghi âm trực tiếp từ nhạc sĩ', 'Không dùng dữ liệu gì cả', 'Chỉ phát lại nhạc có sẵn'], answerIndex: 0, explanation: 'AI tạo nhạc học các mẫu hình âm nhạc từ dữ liệu lớn để sinh ra giai điệu mới.' },
        { id: 'g8_4', question: 'Giá trị nào của nghệ sĩ con người mà AI khó thay thế hoàn toàn?', options: ['Trải nghiệm cảm xúc thật và câu chuyện cá nhân đằng sau tác phẩm', 'Tốc độ vẽ nhanh', 'Khả năng copy chính xác', 'Không có giá trị nào cả'], answerIndex: 0, explanation: 'Cảm xúc và câu chuyện cá nhân là điều làm nên giá trị độc đáo của nghệ sĩ con người.' },
        { id: 'g8_5', question: 'Hiện nay, tác phẩm do AI tạo ra hoàn toàn có được cấp bản quyền như con người không?', options: ['Có, giống hệt con người', 'Đây vẫn là vấn đề pháp lý đang tranh luận ở nhiều quốc gia', 'Luôn luôn bị cấm', 'Không liên quan đến pháp luật'], answerIndex: 1, explanation: 'Luật bản quyền cho tác phẩm AI vẫn đang được tranh luận và hoàn thiện ở nhiều nước.' }
      ]
    }
  },
  9: {
    id: 'game_p9',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: Đạo Đức AI',
    description: 'Kiểm tra nhanh hiểu biết về thiên kiến dữ liệu và trách nhiệm khi dùng AI.',
    hint: 'AI không tự sinh ra định kiến, mà phản ánh định kiến có trong dữ liệu.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời nhanh 5 câu hỏi về đạo đức và trách nhiệm AI!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g9_1', question: 'Thiên kiến dữ liệu (Data Bias) trong AI xảy ra khi nào?', options: ['Dữ liệu huấn luyện phản ánh sự thiên lệch hoặc thiếu đại diện', 'Máy tính bị hỏng', 'AI chạy quá nhanh', 'Không có dữ liệu nào cả'], answerIndex: 0, explanation: 'Nếu dữ liệu huấn luyện có sẵn thiên kiến, AI sẽ học và tái tạo lại thiên kiến đó.' },
        { id: 'g9_2', question: 'Ai chịu trách nhiệm chính khi AI đưa ra quyết định sai gây hậu quả?', options: ['AI tự chịu trách nhiệm', 'Con người thiết kế, triển khai và giám sát hệ thống', 'Không ai chịu trách nhiệm', 'Chỉ có khách hàng chịu trách nhiệm'], answerIndex: 1, explanation: 'Con người luôn là bên chịu trách nhiệm cuối cùng khi triển khai và sử dụng AI.' },
        { id: 'g9_3', question: 'Cách nào giúp giảm thiên kiến trong hệ thống AI?', options: ['Dùng dữ liệu huấn luyện đa dạng, cân bằng và kiểm tra kỹ', 'Bỏ qua vấn đề vì không quan trọng', 'Chỉ dùng dữ liệu từ một nhóm người', 'Tăng tốc độ xử lý của máy'], answerIndex: 0, explanation: 'Dữ liệu đa dạng và quy trình kiểm tra công bằng giúp giảm thiên kiến thuật toán.' },
        { id: 'g9_4', question: 'Câu nói "AI không tự sinh ra định kiến" có nghĩa là gì?', options: ['AI hoàn toàn không thể sai', 'Định kiến trong AI đến từ dữ liệu do con người cung cấp', 'AI luôn công bằng tuyệt đối', 'Không liên quan gì đến con người'], answerIndex: 1, explanation: 'AI phản ánh chính dữ liệu và cách con người thiết kế nó.' },
        { id: 'g9_5', question: 'Vì sao cần đạo đức AI trong giáo dục phổ thông?', options: ['Không cần thiết vì học sinh còn nhỏ', 'Giúp học sinh dùng AI có trách nhiệm và nhận biết rủi ro', 'Chỉ dành cho kỹ sư công nghệ', 'Không liên quan đến học sinh'], answerIndex: 1, explanation: 'Hiểu đạo đức AI giúp học sinh sử dụng công nghệ một cách an toàn và có trách nhiệm.' }
      ]
    }
  },
  10: {
    id: 'game_p10',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: Nhận Diện Deepfake',
    description: 'Rèn kỹ năng phát hiện video, hình ảnh giả mạo Deepfake qua 5 câu hỏi nhanh.',
    hint: 'Chú ý các dấu hiệu bất thường ở mắt, miệng và chuyển động khuôn mặt.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời nhanh 5 câu hỏi về nhận diện Deepfake và an toàn mạng!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g10_1', question: 'Deepfake là gì?', options: ['Công nghệ AI tạo video/hình ảnh/giọng nói giả mạo giống người thật', 'Một loại virus máy tính', 'Phần mềm diệt virus', 'Ứng dụng chỉnh sửa ảnh cơ bản'], answerIndex: 0, explanation: 'Deepfake dùng AI để tạo nội dung giả mạo trông như thật.' },
        { id: 'g10_2', question: 'Dấu hiệu nào giúp nhận biết video Deepfake?', options: ['Chuyển động mắt, miệng bất thường hoặc không đồng bộ với giọng nói', 'Video có độ phân giải cao', 'Video có nhiều người xem', 'Không có dấu hiệu nào cả'], answerIndex: 0, explanation: 'Deepfake thường có lỗi nhỏ ở chuyển động mắt, miệng hoặc đồng bộ âm thanh.' },
        { id: 'g10_3', question: 'Khi nhận được cuộc gọi video yêu cầu chuyển tiền gấp, em nên làm gì?', options: ['Chuyển tiền ngay lập tức', 'Xác minh lại qua kênh liên lạc khác trước khi hành động', 'Tắt máy không quan tâm', 'Chia sẻ thông tin cá nhân ngay'], answerIndex: 1, explanation: 'Luôn xác minh qua kênh khác (gọi điện thoại trực tiếp) trước khi thực hiện giao dịch.' },
        { id: 'g10_4', question: 'Deepfake thường bị lợi dụng cho mục đích nào?', options: ['Lừa đảo, giả mạo danh tính hoặc tin giả', 'Chỉ để giải trí lành mạnh', 'Không bao giờ bị lạm dụng', 'Giáo dục học sinh'], answerIndex: 0, explanation: 'Deepfake thường bị kẻ xấu lợi dụng để lừa đảo hoặc lan truyền tin giả.' },
        { id: 'g10_5', question: 'Nguyên tắc bảo vệ dữ liệu cá nhân trên mạng là gì?', options: ['Chia sẻ mọi thông tin công khai', 'Hạn chế chia sẻ thông tin nhạy cảm và kiểm tra nguồn tin trước khi tin', 'Đăng ảnh CCCD lên mạng xã hội', 'Không cần bảo mật gì cả'], answerIndex: 1, explanation: 'Hạn chế chia sẻ thông tin nhạy cảm giúp giảm nguy cơ bị lợi dụng làm Deepfake.' }
      ]
    }
  },
  11: {
    id: 'game_p11',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: Nghề Nghiệp Tương Lai Cùng AI',
    description: 'Khám phá nhanh những kỹ năng và ngành nghề thay đổi trong kỷ nguyên AI.',
    hint: 'Tư duy phản biện, sáng tạo và thấu cảm là những kỹ năng AI khó thay thế.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời nhanh 5 câu hỏi về tương lai nghề nghiệp cùng AI!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g11_1', question: 'Kỹ năng nào AI khó thay thế hoàn toàn ở con người?', options: ['Thấu cảm và kết nối cảm xúc với người khác', 'Tính toán nhanh', 'Ghi nhớ số liệu lớn', 'Lặp lại thao tác giống hệt nhau'], answerIndex: 0, explanation: 'Thấu cảm, sáng tạo và tư duy phản biện là các kỹ năng con người vẫn có ưu thế.' },
        { id: 'g11_2', question: 'Ngành nghề nào có khả năng bị AI ảnh hưởng nhiều nhất?', options: ['Công việc lặp lại, quy trình rõ ràng, ít sáng tạo', 'Công việc đòi hỏi thấu cảm sâu sắc', 'Nghệ thuật đòi hỏi cảm xúc cá nhân', 'Không ngành nào bị ảnh hưởng'], answerIndex: 0, explanation: 'Các công việc lặp đi lặp lại, quy trình hóa cao dễ bị tự động hóa hơn.' },
        { id: 'g11_3', question: '4 kỹ năng cốt lõi giúp học sinh thích nghi thời đại AI gồm nhóm nào?', options: ['Tư duy phản biện, Sáng tạo, Thấu cảm, Kỹ năng số', 'Chỉ cần giỏi Toán', 'Chỉ cần biết lập trình', 'Không cần kỹ năng gì đặc biệt'], answerIndex: 0, explanation: 'Đây là 4 nhóm kỹ năng cốt lõi giúp con người thích nghi và làm chủ AI.' },
        { id: 'g11_4', question: 'AI sẽ thay thế hoàn toàn con người trong công việc hay hỗ trợ con người?', options: ['Thay thế hoàn toàn mọi công việc', 'Phần lớn sẽ là công cụ hỗ trợ, kết hợp cùng con người', 'Không liên quan gì đến công việc', 'Chỉ dùng trong giải trí'], answerIndex: 1, explanation: 'Xu hướng chủ đạo là AI hỗ trợ con người làm việc hiệu quả hơn, không hoàn toàn thay thế.' },
        { id: 'g11_5', question: 'Để sẵn sàng cho tương lai cùng AI, học sinh nên làm gì ngay từ bây giờ?', options: ['Chủ động học kỹ năng số và rèn tư duy phản biện', 'Không cần chuẩn bị gì', 'Chỉ học thuộc lòng kiến thức cũ', 'Tránh xa công nghệ hoàn toàn'], answerIndex: 0, explanation: 'Chủ động trang bị kỹ năng số và tư duy phản biện giúp thích nghi tốt với thay đổi.' }
      ]
    }
  },
  12: {
    id: 'game_p12',
    type: 'speed_game',
    title: 'Trò Chơi Đố Vui: Dự Án AI Giải Quyết Vấn Đề Thực Tế',
    description: 'Ôn nhanh kiến thức tổng hợp qua các ví dụ dự án AI học sinh THPT.',
    hint: 'Một dự án AI tốt cần xác định rõ vấn đề thực tế cần giải quyết trước tiên.',
    suggestedAnswer: 'Xem giải thích chi tiết sau mỗi câu trả lời trong trò chơi.',
    gameData: {
      instruction: 'Trả lời nhanh 5 câu hỏi tổng hợp về dự án ứng dụng AI!',
      timeLimitSeconds: 20,
      questions: [
        { id: 'g12_1', question: 'Bước đầu tiên khi làm một dự án ứng dụng AI là gì?', options: ['Xác định rõ vấn đề thực tế cần giải quyết', 'Viết code ngay lập tức', 'Mua máy tính cấu hình mạnh', 'Không cần bước chuẩn bị nào'], answerIndex: 0, explanation: 'Xác định đúng vấn đề là bước quan trọng nhất trước khi bắt tay xây dựng giải pháp AI.' },
        { id: 'g12_2', question: 'Ví dụ nào là một dự án AI học sinh THPT có thể thực hiện?', options: ['Hệ thống phân loại rác thải bằng nhận diện hình ảnh', 'Xây nhà máy điện hạt nhân', 'Phóng vệ tinh lên vũ trụ', 'Chế tạo máy bay chiến đấu'], answerIndex: 0, explanation: 'Phân loại rác bằng AI là dự án vừa sức, thực tế và có tính ứng dụng cao cho học sinh.' },
        { id: 'g12_3', question: 'Yếu tố nào KHÔNG cần thiết khi xây dựng một dự án AI tốt?', options: ['Dữ liệu mẫu chất lượng', 'Mục tiêu rõ ràng, đo lường được', 'Chi phí cực kỳ đắt đỏ', 'Kiểm thử và đánh giá kết quả'], answerIndex: 2, explanation: 'Một dự án AI học đường tốt không nhất thiết phải tốn nhiều chi phí, mà cần ý tưởng và dữ liệu tốt.' },
        { id: 'g12_4', question: 'Sau khi hoàn thành dự án AI, bước nào quan trọng để cải thiện?', options: ['Thử nghiệm, thu thập phản hồi và điều chỉnh', 'Dừng lại không làm gì thêm', 'Xóa hết dữ liệu đã có', 'Giữ bí mật không cho ai biết'], answerIndex: 0, explanation: 'Thử nghiệm và lấy phản hồi giúp cải thiện độ chính xác và tính hữu ích của dự án.' },
        { id: 'g12_5', question: 'Tinh thần quan trọng nhất khi ứng dụng AI vào đời sống là gì?', options: ['Sáng tạo, có trách nhiệm và vì lợi ích cộng đồng', 'Chỉ để đạt điểm cao', 'Sao chép dự án người khác', 'Không quan tâm đến đạo đức'], answerIndex: 0, explanation: 'Ứng dụng AI có trách nhiệm và hướng đến lợi ích chung là tinh thần cốt lõi của chuyên đề.' }
      ]
    }
  }
};

export function getGameForLesson(period: number): InteractiveExercise | undefined {
  return gameBank[period];
}
