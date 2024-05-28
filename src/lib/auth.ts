import NextAuth from "next-auth"
import { prisma } from "./prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";

export const {auth, handlers } = NextAuth({
adapter: PrismaAdapter(prisma),
providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID || '',
      clientSecret: process.env.AUTH_GITHUB_SECRET|| '',
    })
  ]})