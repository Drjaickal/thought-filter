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

    async createUser(data: {
        email: string;
        name?: string;
    }) {
        const existingUser = await userRepository.findByEmail(data.email);

        if (existingUser) {
            throw new Error("User already exists");
        }

        return userRepository.create(data);
    }
}

export const userService = new UserService();