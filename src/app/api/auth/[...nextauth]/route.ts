import NextAuth from "next-auth";
import { type NextAuthOptions } from 'next-auth';
import GithubProvider from "next-auth/providers/github";

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
	throw new Error("Missing GITHUB_ID or GITHUB_SECRET environment variables");
}

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
