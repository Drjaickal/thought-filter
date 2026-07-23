import { prisma } from "../client";

export class UserRepository {
    async findAll() {
        return prisma.user.findMany();
    }

    async findById(id: string) {
        return prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    async findByClerkId(clerkId: string) {
        return prisma.user.findUnique({
            where: {
                clerkId,
            },
        });
    }

    async create(data: {
        clerkId: string;
        email: string;
        name?: string | null;
    }) {
        return prisma.user.create({
            data,
        });
    }

    async updateByClerkId(
        clerkId: string,
        data: {
            email?: string;
            name?: string | null;
        }
    ) {
        return prisma.user.update({
            where: {
                clerkId,
            },
            data,
        });
    }

    async deleteByClerkId(clerkId: string) {
        return prisma.user.delete({
            where: {
                clerkId,
            },
        });
    }

    async delete(id: string) {
        return prisma.user.delete({
            where: {
                id,
            },
        });
    }
}

export const userRepository = new UserRepository();