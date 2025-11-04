
import { GoogleGenAI, Type } from "@google/genai";
import { Sale } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateSalesData = async (): Promise<Sale[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a dataset of 100 realistic sales records for the last 12 months for a fictional company named 'Dilopsan'. Follow the provided JSON schema precisely.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING, description: 'A unique identifier for the sale, like a UUID.' },
              date: { type: Type.STRING, description: 'The date of the sale in YYYY-MM-DD format.' },
              productCategory: { type: Type.STRING, enum: ['Electronics', 'Home Goods', 'Apparel', 'Books'] },
              productName: { type: Type.STRING, description: 'A realistic product name within the category.' },
              unitsSold: { type: Type.INTEGER, description: 'Number of units sold, between 1 and 20.' },
              unitPrice: { type: Type.NUMBER, description: 'Price per unit, realistic for the category.' },
              salesRep: { type: Type.STRING, description: 'Full name of the sales representative from a pool of 10 names.' },
              region: { type: Type.STRING, enum: ['North America', 'Europe', 'Asia', 'South America'] },
            },
            required: ['id', 'date', 'productCategory', 'productName', 'unitsSold', 'unitPrice', 'salesRep', 'region'],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const salesData: Sale[] = JSON.parse(jsonText);
    return salesData;

  } catch (error) {
    console.error("Error generating sales data from Gemini:", error);
    throw new Error("Failed to fetch sales data from Gemini API. The response may have been blocked or the API key is invalid.");
  }
};
