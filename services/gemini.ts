
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateMarketingIdea(serviceName: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `بصفتك خبير تسويق رقمي، قم بإنشاء فكرة إعلان قصيرة وجذابة لخدمة "${serviceName}" في سوريا. ركز على الجودة العالية والدفع عبر شام كاش.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING, description: "عنوان جذاب للإعلان" },
            body: { type: Type.STRING, description: "نص الإعلان المقترح" },
            cta: { type: Type.STRING, description: "عبارة الحث على اتخاذ إجراء" }
          },
          required: ["headline", "body", "cta"]
        }
      }
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text);
    }
  } catch (error) {
    console.error("Gemini Text Error:", error);
    return null;
  }
}

export async function generateAdImage(serviceName: string, adText: string) {
  try {
    const prompt = `Professional high-end digital marketing story advertisement for a service called "Halabi Services" (حلبي للخدمات). 
    The specific service is "${serviceName}". 
    The ad should look modern, luxurious, with a dark aesthetic, gold accents, and high-quality visuals. 
    Arabic text in the image: "${adText}". 
    The style should be a mix of neon and gold, suitable for Instagram/TikTok stories. 
    Professional photography/graphic design.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "9:16"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Error:", error);
    return null;
  }
}

export async function analyzeDesign(base64Image: string, mimeType: string) {
  try {
    const systemPrompt = `أنت الخبير الإبداعي لموقع 'حلبي للخدمات الرقمية'. حلل التصميم المرفق في الصورة بأسلوب ملهم واحترافي. 
    استخدم التفكير العميق لتحليل العناصر البصرية: (الألوان، التكوين، الإضاءة، والرسالة الإبداعية).
    ركز على تقديم نصائح عملية للتحسين، ثم اربط هذه النصائح بذكاء بخدمات 'حلبي للخدمات' (مثل تعديل الصور الاحترافي، المونتاج السينمائي، أو الهوية البصرية).
    اجعل الرد باللغة العربية بلهجة مهنية وجذابة.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: {
        parts: [
          { text: systemPrompt },
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
            // Note: mediaResolution property might vary based on SDK version, 
            // but we follow the user's request for high-quality analysis.
          } as any
        ],
      },
      config: {
        thinkingConfig: { thinkingBudget: 32768 },
        maxOutputTokens: 35000, // Large enough for response + thinking
        temperature: 1.0,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Design Analysis Error:", error);
    return "عذراً، حدث خطأ أثناء تحليل الصورة. يرجى المحاولة مرة أخرى.";
  }
}
