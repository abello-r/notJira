import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth/next";

/*
	Example request:
	GET /api/auth -> returns all available providers
	GET /api/auth/signin/github -> redirects to GitHub for authentication
	GET /api/auth/callback/github -> handles the callback from GitHub
	GET /api/auth/signout -> signs out the user
*/

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
