import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const { User }: any = prisma


export async function PUT(request: NextRequest, { params }: any) {


    const {  name, email, password }: any = await request.json()
    const {id} = params

    const updateUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          email: email,
          password: password
        },
      })

    return NextResponse.json({message: "Data Updated"})

}

export async function GET(request: NextRequest, { params }: any) {

    const singleUser = await User.findUnique({
        where: {
            id: params.id
        }
    })

    return NextResponse.json({ singleUser })
}