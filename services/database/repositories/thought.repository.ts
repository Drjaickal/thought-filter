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
                rewrites: {
                    orderBy: {
                        createdAt: "desc",
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async findById(id: string) {
        return prisma.thought.findUnique({
            where: {
                id,
            },
            include: {
                rewrites: {
                    orderBy: {
                        createdAt: "desc",
                    },
                },
            },
        });
    }

    async findByUser(userId: string) {
        return prisma.thought.findMany({
            where: {
                userId,
            },
            include: {
                rewrites: {
                    orderBy: {
                        createdAt: "desc",
                    },
                },
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