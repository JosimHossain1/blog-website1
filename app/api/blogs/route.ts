import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const {Post}:any = prisma

export async function POST(request: NextRequest) {
    const { title, description } = await request.json();

    console.log(title, description)
    await Post.create({data: {title,description}})

    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  }