import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { NextRequest, NextResponse } from "next/server";

const { User }: any = prisma

export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();
  await User.create({ data: { name, email, password } });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}














export async function GET() {
  const user = await User.findMany();
  return NextResponse.json({ user });
}


export async function DELETE(request: NextRequest) {
   
  await User.delete({
    where: {
      id: request.nextUrl.searchParams.get("id")
    }
  })
  return NextResponse.json({ message: "'User Deleted'" }, { status: 200 })

}