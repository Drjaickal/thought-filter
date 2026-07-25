import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { RewriteTone } from "@prisma/client";

import { thoughtService } from "@/services/thought/thought.service";
import { userRepository } from "@/services/database/repositories/user.repository";

const MAX_TEXT_LENGTH = 2000;

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
        console.error("GET /api/thoughts:", error);

        return NextResponse.json(
            {
                error: "Failed to fetch thoughts.",
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

        const originalText =
            typeof body.originalText === "string"
                ? body.originalText.trim()
                : "";

        const tone = body.tone as RewriteTone;

        if (!originalText) {
            return NextResponse.json(
                {
                    error: "Thought cannot be empty.",
                },
                {
                    status: 400,
                }
            );
        }

        if (originalText.length > MAX_TEXT_LENGTH) {
            return NextResponse.json(
                {
                    error: `Thought cannot exceed ${MAX_TEXT_LENGTH} characters.`,
                },
                {
                    status: 400,
                }
            );
        }

        if (!Object.values(RewriteTone).includes(tone)) {
            return NextResponse.json(
                {
                    error: "Invalid rewrite tone.",
                },
                {
                    status: 400,
                }
            );
        }

        const result = await thoughtService.processThought({
            originalText,
            tone,
            userId: user.id,
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error("POST /api/thoughts:", error);

        return NextResponse.json(
            {
                error: "Failed to process thought.",
            },
            {
                status: 500,
            }
        );
    }
}