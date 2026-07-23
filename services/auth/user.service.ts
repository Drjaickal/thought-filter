import { userRepository } from "@/services/database/repositories/user.repository";

export class UserService {
    async getAllUsers() {
        return userRepository.findAll();
    }

    async getUserById(id: string) {
        return userRepository.findById(id);
    }

    async getUserByEmail(email: string) {
        return userRepository.findByEmail(email);
    }

    async getUserByClerkId(clerkId: string) {
        return userRepository.findByClerkId(clerkId);
    }

    async createUser(data: {
        clerkId: string;
        email: string;
        name?: string | null;
    }) {
        const existingUser = await userRepository.findByClerkId(data.clerkId);

        if (existingUser) {
            throw new Error("User already exists");
        }

        return userRepository.create(data);
    }
}

export const userService = new UserService();