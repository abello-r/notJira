import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { MongoClient } from 'mongodb';

/*
	Example request:
	GET /api/secure/projects -> returns all projects
*/

export async function GET() {
	try {
		const connection = await connectDB();
		if (!connection) {
			return NextResponse.json({ message: 'Failed to connect to database' });
		}
		const client = new MongoClient(process.env.MONGODB_URI as string);
		await client.connect();
		const db = client.db('test');
		const projects = db.collection('projects');
		const projectsData = await projects.find().toArray();
		await client.close();
		return NextResponse.json(projectsData);
	} catch (error) {
		console.error('Error fetching items:', error);
		return NextResponse.json({ message: 'Failed to fetch items' }, { status: 500 });
	}
}
