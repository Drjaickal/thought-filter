import { prisma } from "../client";

export class ThoughtRepository {
    async create(data: {
        originalText: string;
        userId: string;
    }) {
        return prisma.thought.create({
            data,
        });
    }

    async findAll() {
        return prisma.thought.findMany({
            include: {
                rewrites: true,
            },
        });
    }

    async findById(id: string) {
        return prisma.thought.findUnique({
            where: {
                id,
            },
            include: {
                rewrites: true,
            },
        });
    }

    async findByUser(userId: string) {
        return prisma.thought.findMany({
            where: {
                userId,
            },
            include: {
                rewrites: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async delete(id: string) {
        return prisma.thought.delete({
            where: {
                id,
            },
        });
    }
}

export const thoughtRepository = new ThoughtRepository();