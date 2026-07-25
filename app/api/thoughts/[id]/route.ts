import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { thoughtService } from "@/services/thought/thought.service";
import { userRepository } from "@/services/database/repositories/user.repository";

type RouteContext = {
    params: Promise<{
        id: string;
    }>;
};

export async function DELETE(
    request: Request,
    { params }: RouteContext
) {
    try {
        const { userId: clerkId } = await auth();

        if (!clerkId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const user = await userRepository.findByClerkId(clerkId);

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        const { id } = await params;

        const thought = await thoughtService.getThought(id);

        if (!thought) {
            return NextResponse.json(
                { error: "Thought not found" },
                { status: 404 }
            );
        }

        if (thought.userId !== user.id) {
            return NextResponse.json(
                { error: "Forbidden" },
                { status: 403 }
            );
        }

        await thoughtService.deleteThought(id);

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                error: "Failed to delete thought",
            },
            {
                status: 500,
            }
        );
    }
}