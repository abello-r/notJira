import { NextResponse } from 'next/server';


/*
	Example request:
	POST /api/lang -> sets the locale cookie
*/

export async function POST(request: Request) {
	try {
		const { locale } = await request.json();
		if (!locale || !['en', 'es', 'fr', 'it', 'ja'].includes(locale)) {
			console.log('Invalid locale:', locale);
			return NextResponse.json({ success: false, message: 'Invalid locale' }, { status: 400 });
		}
		const response = NextResponse.json({ success: true });
		response.cookies.set('locale', locale, { path: '/' });
		return response;
	} catch (error) {
		return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
	}
}
