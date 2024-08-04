import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { MongoClient } from 'mongodb';

export async function GET() {
	try {
		const connection = await connectDB();
		if (!connection) {
			return NextResponse.json({ message: 'Failed to connect to database' });
		}
		const client = new MongoClient(process.env.MONGODB_URI as string);
		await client.connect();
		const db = client.db('test');
		const users = db.collection('users');
		const userData = await users.find().toArray();
		await client.close();
		return NextResponse.json(userData);
	} catch (error) {
		console.error('Error fetching items:', error);
		return NextResponse.json({ message: 'Failed to fetch items' }, { status: 500 });
	}
}
