import { NextResponse } from "next/server";
import { db } from "@/db";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    // Getting Data
    const body = await req.json();
    // Assigning Data to variables
    const { username, email, password } = body;
    // Checking if the username already exists
    const usernameAlreadyExists = await db.users.findUnique({
      where: { username },
    });
    // Checking if the email already exists
    const emailAlreadyExists = await db.users.findUnique({
      where: { email },
    });
    // Actions regarding conflicts
    if (usernameAlreadyExists) {
      return NextResponse.json(
        { user: null, message: "Username already exists" },
        { status: 409 }
      );
    } else if (emailAlreadyExists) {
      return NextResponse.json(
        { user: null, message: "An account with this email already exists" },
        { status: 409 }
      );
    }
    // Hashing password
    const hashedPassword = await hash(password, 10);
    // Creating a new user
    const newUser = await db.users.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(
      { user: newUser, message: "Account created successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { user: null, message: "Server Error" },
      { status: 500 }
    );
  }
}
