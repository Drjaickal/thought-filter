import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { thoughtService } from "@/services/thought/thought.service";
import { userRepository } from "@/services/database/repositories/user.repository";

export async function GET() {
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

        const thoughts = await thoughtService.getUserThoughts(user.id);

        return NextResponse.json(thoughts);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                error: "Failed to fetch thoughts",
            },
            {
                status: 500,
            }
        );
    }
}

export async function POST(request: NextRequest) {
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

        const body = await request.json();

        const result = await thoughtService.processThought({
            originalText: body.originalText,
            tone: body.tone,
            userId: user.id,
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                error: "Failed to process thought",
            },
            {
                status: 500,
            }
        );
    }
}