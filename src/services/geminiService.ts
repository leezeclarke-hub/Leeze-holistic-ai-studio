import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateChatResponse(messages: { role: 'user' | 'model'; parts: { text: string }[] }[], userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite-preview',
      contents: [
        {
          role: 'user',
          parts: [{
            text: `You are an AI assistant for LEEZE Holistic, a premium holistic coaching service.
You guide women back to balance through structure, awareness, and support. 
LEEZE stands for Listen, Eliminate, Eat, Support (by Founder Coach Zainab), Empower.
Your tone should be elegant, calming, structured, supportive, and professional.

Answer the user's questions about the Leeze Regulation Method, coach Zainab, or Coach Jay (for men). Encourage them to book a free 15-minute consultation. Keep your responses concise, thoughtful, and helpful. Don't speak in overly long paragraphs.`
          }]
        },
        ...messages,
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ]
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini error:", error);
    return "I'm currently unable to assist. Please try again later or contact us on WhatsApp.";
  }
}
