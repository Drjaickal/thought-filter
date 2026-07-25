import { Prisma, Rewrite } from "@prisma/client";
import { prisma } from "../client";

class RewriteRepository {
    async create(
        data: Prisma.RewriteUncheckedCreateInput
    ): Promise<Rewrite> {
        return prisma.rewrite.create({
            data,
        });
    }

    async findById(id: string): Promise<Rewrite | null> {
        return prisma.rewrite.findUnique({
            where: {
                id,
            },
        });
    }

    async findByThought(thoughtId: string): Promise<Rewrite[]> {
        return prisma.rewrite.findMany({
            where: {
                thoughtId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async delete(id: string): Promise<Rewrite> {
        return prisma.rewrite.delete({
            where: {
                id,
            },
        });
    }
}

export const rewriteRepository = new RewriteRepository();