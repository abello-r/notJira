import NextAuth from "next-auth";
import { type NextAuthOptions } from 'next-auth';
import GithubProvider from "next-auth/providers/github";

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
	throw new Error("Missing GITHUB_ID or GITHUB_SECRET environment variables");
}

/*
	Example request:
	GET /api/auth -> returns all available providers
	GET /api/auth/signin/github -> redirects to GitHub for authentication
	GET /api/auth/callback/github -> handles the callback from GitHub
	GET /api/auth/signout -> signs out the user
*/

export const authOptions: NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET || '',
	session: {
		strategy: 'jwt',
	},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
