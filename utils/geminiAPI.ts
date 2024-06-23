import { GoogleGenerativeAI } from '@google/generative-ai';

const geminiApiKey = process.env.GEMINI_API_KEY;

if (!geminiApiKey) {
  throw new Error('Gemini API key is missing');
}

const genAI = new GoogleGenerativeAI(geminiApiKey);

export const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
