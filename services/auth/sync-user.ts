import { userRepository } from "../database/repositories/user.repository";

class SyncUserService {
    async handleUserCreated(data: {
        clerkId: string;
        email: string;
        name?: string | null;
    }) {
        const existingUser = await userRepository.findByClerkId(data.clerkId);

        if (existingUser) {
            return existingUser;
        }

        return userRepository.create(data);
    }

    async handleUserUpdated(data: {
        clerkId: string;
        email?: string;
        name?: string | null;
    }) {
        const existingUser = await userRepository.findByClerkId(data.clerkId);

        if (!existingUser) {
            return null;
        }

        return userRepository.updateByClerkId(data.clerkId, {
            ...(data.email !== undefined && { email: data.email }),
            ...(data.name !== undefined && { name: data.name }),
        });
    }

    async handleUserDeleted(clerkId: string) {
        const existingUser = await userRepository.findByClerkId(clerkId);

        if (!existingUser) {
            return;
        }

        return userRepository.deleteByClerkId(clerkId);
    }
}

export const syncUserService = new SyncUserService();