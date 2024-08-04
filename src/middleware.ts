import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
	const protectedPaths = ['/dashboard', '/api/secure'];
	const isProtectedPath = protectedPaths.some((path) =>
		req.nextUrl.pathname.startsWith(path)
	);

	if (isProtectedPath && !token) {
		if (req.nextUrl.pathname.startsWith('/api/secure')) { // Case: API route
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}
		return NextResponse.redirect(new URL('/', req.url)); // Case: Page route
	}
	return NextResponse.next();
}
