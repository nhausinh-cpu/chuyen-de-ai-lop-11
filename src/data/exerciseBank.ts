import { InteractiveExercise } from '../types';
import { getGameForLesson } from './gameBank';

export const exerciseBank: Record<number, InteractiveExercise[]> = {
  1: [
    {
      id: 'ex_p1_matching',
      type: 'matching',
      title: 'Bài tập 1: Nối Cặp Cột Mốc Lịch Sử AI',
      description: 'Em hãy ghép nối từng mốc thời gian hoặc sự kiện lịch sử với nhân vật / ý nghĩa tương ứng.',
      hint: 'Hội thảo Dartmouth diễn ra vào năm 1956; Phép thử Turing được đề xuất vào năm 1950.',
      suggestedAnswer: 'Dartmouth (1956) - Khai sinh thuật ngữ AI; Alan Turing (1950) - Phép thử Turing; Deep Blue (1997) - Đánh bại đại kiện tướng cờ vua Garry Kasparov; ChatGPT (2022) - Kỷ nguyên AI tạo sinh đại chúng.',
      matchingData: {
        instruction: 'Nhấp chọn một mục ở cột trái, sau đó nhấp chọn mục tương ứng ở cột phải để nối cặp:',
        pairs: [
          { id: 'm1', concept: 'Hội thảo khoa học Dartmouth (1956)', match: 'Khai sinh chính thức thuật ngữ Trí tuệ nhân tạo (AI)' },
          { id: 'm2', concept: 'Nhà toán học Alan Turing (1950)', match: 'Đề xuất phép thử đo lường trí thông minh của máy tính' },
          { id: 'm3', concept: 'Siêu máy tính Deep Blue (1997)', match: 'Lần đầu tiên đánh bại nhà vô địch cờ vua thế giới Garry Kasparov' },
          { id: 'm4', concept: 'Mô hình ChatGPT ra mắt (2022)', match: 'Mở ra bước ngoặt phổ cập AI tạo sinh đến hàng trăm triệu người' }
        ]
      }
    },
    {
      id: 'ex_p1_tf',
      type: 'true_false',
      title: 'Bài tập 2: Thử Thách Đúng / Sai Về Khái Niệm AI',
      description: 'Đánh giá tính đúng/sai của các nhận định cơ bản về bản chất của Trí tuệ nhân tạo.',
      hint: 'Hãy chú ý xem AI hiện nay đã có ý thức hay chỉ là mô phỏng thuật toán tính toán.',
      suggestedAnswer: '1. Sai (AI chưa có cảm xúc). 2. Đúng (AI dựa vào dữ liệu lớn). 3. Sai (Mùa đông AI xảy ra do hạn chế phần cứng). 4. Đúng (AI giúp tự động hóa nhiều tác vụ).',
      trueFalseData: {
        instruction: 'Em hãy chọn ĐÚNG hoặc SAI cho từng nhận định dưới đây:',
        items: [
          {
            id: 'tf1_1',
            statement: 'AI hiện nay đã phát triển đến mức có cảm xúc hờn giận, tình yêu và ý thức độc lập giống con người.',
            isTrue: false,
            explanation: 'Sai hoàn toàn. AI hiện nay vẫn là AI hẹp (Narrow AI), xử lý thông tin bằng xác suất và phép toán ma trận, chưa hề có ý thức sinh học hay cảm xúc.',
            hint: 'Hãy nhớ lại khái niệm: AI mô phỏng tư duy chứ không có linh hồn hay cảm xúc sinh học.'
          },
          {
            id: 'tf1_2',
            statement: 'Thuật ngữ "Mùa đông AI" (AI Winter) dùng để chỉ giai đoạn nghiên cứu AI bị đình trệ do thiếu kinh phí và kỳ vọng quá mức.',
            isTrue: true,
            explanation: 'Chính xác! Đã có 2 giai đoạn mùa đông AI vào thập niên 1970 và cuối 1980 khi phần cứng máy tính không đáp ứng được tham vọng lý thuyết.',
            hint: 'Từ "Winter" tượng trưng cho sự ảm đạm, bị cắt giảm ngân sách đầu tư.'
          },
          {
            id: 'tf1_3',
            statement: 'Phép thử Turing xem một cỗ máy là thông minh nếu người kiểm tra không thể phân biệt được câu trả lời của máy và người.',
            isTrue: true,
            explanation: 'Đúng. Alan Turing đặt ra nguyên lý hành vi ngôn ngữ: nếu máy giao tiếp thuyết phục như con người thì được coi là biểu hiện trí tuệ.',
            hint: 'Turing tập trung vào khả năng đàm thoại qua văn bản.'
          }
        ]
      }
    }
  ],

  2: [
    {
      id: 'ex_p2_matching',
      type: 'matching',
      title: 'Bài tập 1: Nối 4 Trụ Cột Hệ Thống AI',
      description: 'Ghép nối từng thành phần cốt lõi của AI với vai trò then chốt của nó.',
      hint: 'Dữ liệu ví như nhiên liệu, thuật toán ví như bản thiết kế động cơ, GPU là buồng đốt.',
      suggestedAnswer: 'Dữ liệu lớn = Nguồn nhiên liệu để máy học; Thuật toán = Bộ quy tắc tính toán suy luận; Hạ tầng tính toán = Sức mạnh xử lý của chip bán dẫn; Con người = Đóng vai trò định hướng và giám sát.',
      matchingData: {
        instruction: 'Ghép cặp thành phần hệ thống AI với vai trò tương ứng:',
        pairs: [
          { id: 'p2_1', concept: 'Dữ liệu lớn (Big Data)', match: 'Nguồn nhiên liệu, nguyên liệu thô để thuật toán trích xuất tri thức' },
          { id: 'p2_2', concept: 'Thuật toán học máy (Algorithm)', match: 'Mô hình toán học hướng dẫn máy tính cách tối ưu hóa hàm mục tiêu' },
          { id: 'p2_3', concept: 'Hạ tầng tính toán (GPU / TPU / Cloud)', match: 'Phần cứng cung cấp khả năng tính toán hàng tỷ phép nhân ma trận mỗi giây' },
          { id: 'p2_4', concept: 'Chuyên gia con người (Human in the loop)', match: 'Thiết kế mục tiêu, gán nhãn dữ liệu và giám sát tính an toàn đạo đức' }
        ]
      }
    },
    {
      id: 'ex_p2_dilemma',
      type: 'ethical_dilemma',
      title: 'Bài tập 2: Tình Huống Tranh Biện - Thu Thập Dữ Liệu Học Đường',
      description: 'Trường học dự định lắp camera AI nhận diện cảm xúc khuôn mặt của học sinh trong từng tiết học để chấm điểm chuyên cần.',
      hint: 'Cần cân nhắc giữa lợi ích quản lý kỷ luật và quyền riêng tư cá nhân của học sinh.',
      suggestedAnswer: 'Đa số các chuyên gia giáo dục khuyến cáo không nên dùng camera AI nhận diện cảm xúc vì: cảm xúc con người rất đa dạng, việc bị theo dõi liên tục tạo áp lực tâm lý tiêu cực và nguy cơ rò rỉ dữ liệu sinh trắc học.',
      dilemmaData: {
        scenario: 'Một trường THPT muốn ứng dụng AI nhận diện khuôn mặt và quét ánh mắt để tự động báo cáo học sinh nào đang mất tập trung, gửi thông báo ngay cho phụ huynh.',
        question: 'Nếu là thành viên Hội đồng học sinh, em sẽ bỏ phiếu ủng hộ hay phản đối đề xuất này?',
        options: [
          {
            id: 'opt_pro',
            text: 'Ủng hộ: Giúp lớp học trật tự hơn, thầy cô biết ai lơ là để kịp thời nhắc nhở nâng cao điểm số.',
            standpoint: 'Góc nhìn Quản trị & Hiệu quả',
            votesPercent: 28
          },
          {
            id: 'opt_con',
            text: 'Phản đối: Xâm phạm nghiêm trọng quyền riêng tư, tạo áp lực giả tạo biểu cảm, dữ liệu khuôn mặt có thể bị lạm dụng.',
            standpoint: 'Góc nhìn Quyền riêng tư & Tâm lý học đường',
            votesPercent: 72
          }
        ],
        suggestedDebatePoints: [
          'Học sinh có quyền đồng ý hoặc từ chối chia sẻ dữ liệu sinh trắc học cá nhân không?',
          'Liệu một học sinh đang trầm ngâm suy nghĩ bài khó có bị AI chấm nhầm là "mất tập trung"?',
          'Biện pháp thay thế: Giáo viên tương tác trực tiếp bằng câu hỏi gợi mở thay vì phụ thuộc camera giám sát.'
        ]
      }
    }
  ],

  5: [
    {
      id: 'ex_p5_matching',
      type: 'matching',
      title: 'Bài tập 1: Nối Các Nhánh Học Máy (Machine Learning)',
      description: 'Phân biệt 3 trường phái học máy chính dựa trên cách cung cấp dữ liệu.',
      hint: 'Học có giám sát có đáp án sẵn; Học không giám sát tự tìm cụm; Học tăng cường nhận thưởng/phạt.',
      suggestedAnswer: 'Học có giám sát: Dữ liệu kèm nhãn đáp án; Học không giám sát: Dữ liệu không nhãn tự tìm quy luật; Học tăng cường: Thử sai nhận điểm thưởng phạt.',
      matchingData: {
        instruction: 'Ghép cặp trường phái học máy với đặc điểm dữ liệu và ví dụ:',
        pairs: [
          { id: 'ml_1', concept: 'Học có giám sát (Supervised Learning)', match: 'Dữ liệu đầu vào đã có sẵn nhãn (Ví dụ: Ảnh có gắn nhãn Chó / Mèo)' },
          { id: 'ml_2', concept: 'Học không giám sát (Unsupervised Learning)', match: 'Dữ liệu thô không nhãn, AI tự gom nhóm các khách hàng có chung sở thích' },
          { id: 'ml_3', concept: 'Học tăng cường (Reinforcement Learning)', match: 'Tác tử tự hành lang thang thử sai trong môi trường để tối đa hóa điểm thưởng' }
        ]
      }
    }
  ],

  6: [
    {
      id: 'ex_p6_prompt',
      type: 'prompt_builder',
      title: 'Bài tập Thực Hành: Lắp Ghép Câu Lệnh Vàng R-T-C-O',
      description: 'Em hãy chọn đúng 4 mảnh ghép theo công thức vàng R-T-C-O (Role - Task - Context - Output) để tạo prompt xin gia sư môn Tin học.',
      hint: 'Role: Vai trò chuyên gia; Task: Việc cần làm cụ thể; Context: Đối tượng và hoàn cảnh; Output: Định dạng kết quả mong muốn.',
      suggestedAnswer: 'R: Đóng vai gia sư Tin học kiên nhẫn; T: Hướng dẫn thuật toán tìm kiếm nhị phân; C: Học sinh lớp 11 chưa rành lập trình; O: 3 phần có ví dụ trực quan và code Python chú thích.',
      promptData: {
        goal: 'Tạo một câu lệnh Prompt chuẩn mực để nhờ AI dạy học sinh lớp 11 hiểu thuật toán Tìm kiếm nhị phân.',
        roleOptions: [
          'Bạn là một siêu máy tính vô cảm chỉ xuất mã nhị phân 0 và 1.',
          'Hãy đóng vai là một gia sư Tin học THPT giàu kinh nghiệm, giảng dạy dễ hiểu và kiên nhẫn.',
          'Hãy nói chuyện như một người bạn cùng lớp không biết gì về lập trình.'
        ],
        taskOptions: [
          'Giải bài toán này cho tôi để nộp bài ngày mai.',
          'Giải thích cặn kẽ thuật toán Tìm kiếm nhị phân (Binary Search) qua ví dụ trò chơi đoán số 1-100.',
          'Viết một bài luận dài 2000 chữ về lịch sử máy vi tính.'
        ],
        contextOptions: [
          'Tôi là giáo sư đại học chuyên ngành lý thuyết số học.',
          'Tôi là học sinh lớp 11, mới làm quen với lập trình Python và hay bị rối khi chia đôi khoảng tìm kiếm.',
          'Không cần thông tin bối cảnh gì cả.'
        ],
        outputOptions: [
          'Chỉ in ra một con số duy nhất.',
          'Trình bày có cấu trúc: (1) Ý tưởng trực quan, (2) Mô phỏng từng bước lặp, (3) Đoạn mã Python mẫu có chú thích tiếng Việt dễ hiểu.',
          'Viết thành một đoạn văn xuôi liền mạch không xuống dòng.'
        ],
        correctRole: 'Hãy đóng vai là một gia sư Tin học THPT giàu kinh nghiệm, giảng dạy dễ hiểu và kiên nhẫn.',
        correctTask: 'Giải thích cặn kẽ thuật toán Tìm kiếm nhị phân (Binary Search) qua ví dụ trò chơi đoán số 1-100.',
        correctContext: 'Tôi là học sinh lớp 11, mới làm quen với lập trình Python và hay bị rối khi chia đôi khoảng tìm kiếm.',
        correctOutput: 'Trình bày có cấu trúc: (1) Ý tưởng trực quan, (2) Mô phỏng từng bước lặp, (3) Đoạn mã Python mẫu có chú thích tiếng Việt dễ hiểu.',
        samplePrompt: 'Hãy đóng vai là một gia sư Tin học THPT giàu kinh nghiệm, giảng dạy dễ hiểu và kiên nhẫn. Nhiệm vụ của bạn là giải thích cặn kẽ thuật toán Tìm kiếm nhị phân (Binary Search) qua ví dụ trò chơi đoán số 1-100. Bối cảnh: Tôi là học sinh lớp 11, mới làm quen với lập trình Python và hay bị rối khi chia đôi khoảng tìm kiếm. Định dạng đầu ra: Trình bày có cấu trúc: (1) Ý tưởng trực quan, (2) Mô phỏng từng bước lặp, (3) Đoạn mã Python mẫu có chú thích tiếng Việt dễ hiểu.',
        evaluationTip: 'Khi cung cấp đủ 4 thành phần R-T-C-O, AI sẽ tránh hiện tượng trả lời chung chung và tạo ra lời giảng sát với năng lực học sinh nhất!'
      }
    }
  ],

  10: [
    {
      id: 'ex_p10_dilemma',
      type: 'ethical_dilemma',
      title: 'Bài tập Tranh Biện Đạo Đức AI: Bản Quyền Tác Phẩm Nghệ Thuật',
      description: 'Họa sĩ minh họa phát hiện một mô hình AI vẽ tranh sinh lời đã thu thập hàng nghìn bức tranh của cô ấy để huấn luyện mà không xin phép hay trả phí.',
      hint: 'Pháp luật hiện nay đang tranh cãi giữa khái niệm Sử dụng hợp lý (Fair Use) và Xâm phạm quyền tác giả.',
      suggestedAnswer: 'Cần có cơ chế minh bạch: công ty AI phải công bố tập dữ liệu huấn luyện, xin phép và có quỹ chia sẻ doanh thu cho nghệ sĩ, hoặc người dùng được quyền từ chối (opt-out) đưa tác phẩm vào kho học máy.',
      dilemmaData: {
        scenario: 'Một bức tranh do phần mềm AI Midjourney tạo ra vừa đoạt giải Nhất tại một cuộc thi mỹ thuật cấp bang, vượt qua hàng trăm họa sĩ vẽ tay truyền thống. Các họa sĩ phản đối kịch liệt đòi thu hồi giải thưởng.',
        question: 'Theo quan điểm của em, Ban giám khảo có nên thu hồi giải Nhất của bức tranh AI không?',
        options: [
          {
            id: 'opt_revoke',
            text: 'NÊN thu hồi: AI chỉ học lỏm từ phong cách của các nghệ sĩ khác, người nhập câu lệnh không thực sự cầm cọ sáng tạo.',
            standpoint: 'Bảo vệ giá trị lao động nghệ thuật truyền thống',
            votesPercent: 61
          },
          {
            id: 'opt_keep',
            text: 'KHÔNG thu hồi: AI chỉ là một công cụ mới giống như máy ảnh ngày xưa, nghệ sĩ đã mất hàng tuần tinh chỉnh prompt và tư duy nghệ thuật.',
            standpoint: 'Thừa nhận công nghệ mới trong nghệ thuật đương đại',
            votesPercent: 39
          }
        ],
        suggestedDebatePoints: [
          'Khi máy ảnh mới ra đời thế kỷ 19, các họa sĩ cũng từng coi đó không phải nghệ thuật. AI có tương tự?',
          'Nếu người sáng tạo prompt chỉ gõ 5 từ và bấm Enter, liệu họ có xứng đáng gọi là tác giả?',
          'Hướng giải quyết: Cuộc thi nên mở riêng hạng mục "Nghệ thuật số tạo sinh bằng AI" để đảm bảo công bằng.'
        ]
      }
    },
    {
      id: 'ex_p10_tf',
      type: 'true_false',
      title: 'Bài tập 2: Thử Thách Đúng / Sai Về An Toàn Deepfake & Dữ Liệu',
      description: 'Nhận biết các hành vi vi phạm đạo đức và pháp luật khi sử dụng AI.',
      hint: 'Mọi hành vi giả mạo danh tính hoặc bôi nhọ người khác bằng AI đều vi phạm pháp luật an ninh mạng.',
      suggestedAnswer: '1. Đúng (Deepfake mạo danh là vi phạm pháp luật). 2. Sai (Cần kiểm chứng nguồn tin). 3. Đúng (Thiên kiến dữ liệu).',
      trueFalseData: {
        instruction: 'Chọn ĐÚNG hoặc SAI cho mỗi khẳng định an toàn mạng sau:',
        items: [
          {
            id: 'tf10_1',
            statement: 'Sử dụng ảnh chân dung của bạn học cùng lớp để ghép video deepfake hài hước trêu đùa trên mạng xã hội là vô hại.',
            isTrue: false,
            explanation: 'Sai nghiêm trọng! Sử dụng hình ảnh người khác mà không có sự đồng ý để tạo video giả mạo vi phạm Luật An ninh mạng và quyền nhân thân, có thể bị xử phạt hành chính hoặc hình sự.',
            hint: 'Hình ảnh khuôn mặt là dữ liệu cá nhân nhạy cảm.'
          },
          {
            id: 'tf10_2',
            statement: 'Hiện tượng "Ảo giác AI" (AI Hallucination) là khi mô hình ngôn ngữ tự bịa ra thông tin sai lệch nhưng diễn đạt với giọng văn rất tự tin và trôi chảy.',
            isTrue: true,
            explanation: 'Đúng. AI dự đoán từ tiếp theo theo xác suất thống kê nên hoàn toàn có thể bịa đặt số liệu hoặc sự kiện lịch sử nếu không được kiểm chứng.',
            hint: 'Nhớ nguyên tắc: Luôn kiểm chứng chéo (Fact-check) thông tin quan trọng.'
          }
        ]
      }
    }
  ]
};

// Helper to get exercises for any lesson, falling back to rich generic activities
export function getExercisesForLesson(period: number): InteractiveExercise[] {
  const game = getGameForLesson(period);

  if (exerciseBank[period] && exerciseBank[period].length > 0) {
    return game ? [...exerciseBank[period], game] : exerciseBank[period];
  }

  // Fallback rich exercises for other periods
  const fallback: InteractiveExercise[] = [
    {
      id: `ex_p${period}_quiz_challenge`,
      type: 'quiz',
      title: `Thử Thách Tương Tác Tiết ${period}: Phân Tích & Tư Duy`,
      description: 'Lựa chọn phương án chính xác nhất để khẳng định năng lực vận dụng kiến thức chuyên đề AI.',
      hint: 'Hãy chú ý đến các từ khóa then chốt được nhấn mạnh trong phần lý thuyết.',
      suggestedAnswer: 'Phương án đúng là phương án phản ánh đúng bản chất khoa học của thuật toán và nguyên tắc an toàn, đạo đức AI.',
      quizData: {
        question: `Trong nội dung Tiết ${period}, yếu tố nào đóng vai trò quyết định giúp mô hình AI đạt hiệu suất tối ưu và hạn chế sai số?`,
        options: [
          'Chỉ cần máy tính có cấu hình mạnh nhất mà không cần dữ liệu',
          'Sự kết hợp đồng bộ giữa dữ liệu chất lượng cao, thuật toán phù hợp và sự giám sát của con người',
          'Để AI tự quyết định hoàn toàn mà không cần bất kỳ nguyên tắc an toàn nào',
          'Sao chép nguyên văn mã nguồn từ Internet mà không cần kiểm thử'
        ],
        answerIndex: 1,
        explanation: 'AI là hệ thống tổng hòa giữa dữ liệu sạch, mô hình toán học tối ưu và trách nhiệm giám sát của con người.'
      }
    },
    {
      id: `ex_p${period}_tf_challenge`,
      type: 'true_false',
      title: `Thử Thách Đúng / Sai Tương Tác: Khám Phá Kiến Thức Tiết ${period}`,
      description: 'Kiểm tra nhanh mức độ tiếp thu kiến thức của cả lớp thông qua biểu quyết trực tiếp.',
      hint: 'Nhớ lại các ví dụ thực tế giáo viên đã phân tích trên slide.',
      suggestedAnswer: '1. Đúng (Công nghệ mang tính hỗ trợ con người). 2. Sai (Cần tuân thủ quy chuẩn đạo đức và bảo mật dữ liệu).',
      trueFalseData: {
        instruction: 'Em hãy xác định tính ĐÚNG / SAI của từng mệnh đề dưới đây:',
        items: [
          {
            id: `tf_p${period}_1`,
            statement: 'Mục tiêu tối thượng của việc học AI ở trường phổ thông là để học sinh biết cách làm chủ công nghệ, dùng AI như một trợ thủ đắc lực thay vì bị công nghệ phụ thuộc.',
            isTrue: true,
            explanation: 'Chính xác. GDPT 2018 hướng tới hình thành năng lực số, tư duy phản biện và năng lực sáng tạo có trách nhiệm ở học sinh.',
            hint: 'AI là công cụ nâng tầm con người, không phải người thay thế hoàn toàn tư duy độc lập.'
          },
          {
            id: `tf_p${period}_2`,
            statement: 'Học sinh được phép sao chép nguyên văn bài viết do AI tạo ra để nộp làm bài kiểm tra chính thức mà không cần trích dẫn hay kiểm tra lại.',
            isTrue: false,
            explanation: 'Sai! Đây là hành vi vi phạm liêm chính học thuật. Học sinh chỉ nên dùng AI để gợi ý dàn ý, tìm ý tưởng và phải tự viết lại bằng lời văn của mình.',
            hint: 'Liêm chính học thuật đòi hỏi tính trung thực và trách nhiệm với sản phẩm học tập.'
          }
        ]
      }
    }
  ];

  return game ? [...fallback, game] : fallback;
}
