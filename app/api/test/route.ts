import { NextResponse } from "next/server";
import { prisma } from "@/services/database/client";

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json({
    success: true,
    users,
  });
}