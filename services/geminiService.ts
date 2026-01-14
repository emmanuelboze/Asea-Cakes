
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCakeRecommendation = async (occasion: string, preferences: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are Asea, the AI Cake Consultant for Asea Cakes. A customer is looking for a cake recommendation.
      Occasion: ${occasion}
      Preferences: ${preferences}
      
      Suggest the perfect cake type and flavor combination. Do not mention pricing or custom message ideas. 
      Keep it brief, warm, and professional. Return in JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestion: { type: Type.STRING },
            flavors: { type: Type.STRING },
            why: { type: Type.STRING }
          },
          required: ["suggestion", "flavors", "why"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
