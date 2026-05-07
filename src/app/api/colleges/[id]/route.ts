import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const college = await prisma.college.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(college);
  } catch (error) {
    return NextResponse.json(
      { error: "College not found" },
      { status: 500 }
    );
  }
}