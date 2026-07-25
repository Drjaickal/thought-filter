import { RewriteTone } from "@prisma/client";

import { rewriteText } from "../ai/rewrite";
import { rewriteRepository } from "../database/repositories/rewrite.repository";
import { thoughtRepository } from "../database/repositories/thought.repository";

class ThoughtService {
    async createThought(data: {
        originalText: string;
        userId: string;
    }) {
        return thoughtRepository.create(data);
    }

    async getThought(id: string) {
        return thoughtRepository.findById(id);
    }

    async getUserThoughts(userId: string) {
        return thoughtRepository.findByUser(userId);
    }

    async deleteThought(id: string) {
        return thoughtRepository.delete(id);
    }

    async processThought(data: {
        originalText: string;
        userId: string;
        tone: RewriteTone;
    }) {
        // Get AI response first
        const aiResponse = await rewriteText({
            text: data.originalText,
            tone: data.tone,
        });

        // Save thought only if AI succeeds
        const thought = await thoughtRepository.create({
            originalText: data.originalText,
            userId: data.userId,
        });

        const rewrite = await rewriteRepository.create({
            rewrittenText: aiResponse.rewrittenText,
            tone: data.tone,
            intent: aiResponse.intent,
            emotion: aiResponse.emotion,
            toxicity: aiResponse.toxicity,
            audience: aiResponse.audience,
            model: aiResponse.model,
            promptVersion: aiResponse.promptVersion,
            thoughtId: thought.id,
        });

        return {
            thought,
            rewrite,
        };
    }
}

export const thoughtService = new ThoughtService();