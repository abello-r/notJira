import { NextResponse } from 'next/server';


/*
	Example request:
	GET /api/secure/test -> returns a simple message
*/

export async function GET() {
	try {
		return NextResponse.json({ message: 'Ping' });
	} catch (error) {
		return NextResponse.error();
	}
}
