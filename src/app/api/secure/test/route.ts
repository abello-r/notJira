import { NextResponse } from 'next/server';

export async function GET() {
	try {
		return NextResponse.json({ message: 'Ping' });
	} catch (error) {
		return NextResponse.error();
	}
}
