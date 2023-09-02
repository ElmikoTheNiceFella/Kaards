import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/db";


const loginHandler: NextAuthOptions = NextAuth({
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "User" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        if (!credentials?.username || !credentials.password) return null;

        const user = await db.users.findUnique({
          where: { username: credentials.username }, // Username check
        });

        if (!user) return null; // Return null if the username doesn't exist

        const passwordCheck = compare(credentials.password, user.password); // Password Check

        if (!passwordCheck) return null; // Return null if the password doesn't match

        return {
          id: user.id,
          email: user.email,
          username: user.username,
        };
      },
    }),
  ],
});

export { loginHandler as GET, loginHandler as POST };
