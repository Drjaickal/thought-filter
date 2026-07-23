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

    async create(data: {
        email: string;
        name?: string;
    }) {
        return prisma.user.create({
            data,
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