import { NextResponse, NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Project from '@/app/models/project';

interface ProjectFilter {
	status?: string;
	area?: string;
}

/*
	Example request:
	GET /api/secure/projects/stats -> returns all projects statistics
	GET /api/secure/projects/stats?area=[Design | Software | Operations | Marketing]
	GET /api/secure/projects/stats?status=[Completed | Pending]
*/

export async function GET(request: NextRequest) {
	try {

		await connectDB();
		const url = new URL(request.url);
		const queryParams = url.searchParams;

		const statusFilter = queryParams.get('status');
		const areaFilter = queryParams.get('area');
		const filter: ProjectFilter = {};

		if (statusFilter) {
			filter.status = statusFilter;
		}
		if (areaFilter) {
			filter.area = areaFilter;
		}

		const totalProjects = await Project.countDocuments(filter);
		const pendingProjects = await Project.countDocuments({ ...filter, status: 'Pending' });
		const completedProjects = await Project.countDocuments({ ...filter, status: 'Completed' });

		return NextResponse.json({
			totalProjects,
			pendingProjects,
			completedProjects,
		});

	} catch (error) {
		console.error('[-] Error retrieving project statistics:', error);
		return NextResponse.error();
	}
}
