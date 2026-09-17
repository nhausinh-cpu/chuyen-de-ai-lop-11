import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with custom user agent for telemetry
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Server-side API route for slide customization
app.post("/api/gemini/customize", async (req, res) => {
  try {
    const { slideTitle, currentContent, userInstruction } = req.body;
    if (!slideTitle || !currentContent) {
      return res.status(400).json({ error: "Missing slide title or content" });
    }

    const prompt = `
Bạn là chuyên gia giáo dục AI dành cho học sinh THPT.
Hãy điều chỉnh nội dung của trang slide dưới đây theo yêu cầu cụ thể của giáo viên.

Tên trang Slide: "${slideTitle}"
Nội dung hiện tại:
${currentContent.map((item: string, i: number) => `${i + 1}. ${item}`).join("\n")}

Yêu cầu điều chỉnh của giáo viên: "${userInstruction || "Hãy làm phong phú, chi tiết hơn và lấy thêm ví dụ thực tế cho học sinh THPT dễ hiểu"}"

Hãy trả về kết quả dưới dạng một đối tượng JSON duy nhất có định dạng chuẩn như sau (không kèm ký tự markdown ngoài JSON):
{
  "title": "Tiêu đề mới (hoặc giữ nguyên nếu phù hợp)",
  "content": [
    "Ý chính thứ nhất (ngắn gọn, xúc tích, tối đa 30 từ)",
    "Ý chính thứ hai",
    "Ý chính thứ ba",
    "Ý chính thứ tư (tối đa 5 ý chính)"
  ],
  "speakerNotes": "Lời thoại hướng dẫn chi tiết dành cho giáo viên khi thuyết trình slide này (khoảng 100-150 từ, tiếng Việt, gần gũi, sinh động)"
}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text || "{}";
    const result = JSON.parse(text);
    return res.json(result);
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: error.message || "Failed to generate content" });
  }
});

// Vite middleware configuration for serving React app
async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

initServer().catch((err) => {
  console.error("Error starting server:", err);
});
