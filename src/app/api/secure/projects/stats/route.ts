import { NextResponse, NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Project from '@/domain/models/project';

interface ProjectFilter {
	status?: string;
	area?: string;
}

/*
	Example request:
	GET /api/secure/projects/stats -> returns general statistics for all projects.
	GET /api/secure/projects/stats?area=[Marketing | Software | Design | Operations] -> returns statistics filtered by area.
	GET /api/secure/projects/stats?status=[Completed | Pending] -> returns statistics filtered by status.
*/

export async function GET(request: NextRequest) {
	try {
		await connectDB();
		const url = new URL(request.url);
		const queryParams = url.searchParams;
		const areaFilter = queryParams.get('area');

		const filters: ProjectFilter = areaFilter ? { area: areaFilter } : {};
		const totalProjects = await Project.countDocuments(filters);
		const pendingProjects = await Project.countDocuments({ ...filters, status: 'Pending' });
		const completedProjects = await Project.countDocuments({ ...filters, status: 'Completed' });

		const areas = ["Marketing", "Software", "Design", "Operations"];
		const stats: Record<string, { total: number, ongoing: number, completed: number }> = {};

		for (const area of areas) {
			const areaFilters = { area };
			stats[area] = {
				total: await Project.countDocuments(areaFilters),
				ongoing: await Project.countDocuments({ ...areaFilters, status: 'Pending' }),
				completed: await Project.countDocuments({ ...areaFilters, status: 'Completed' }),
			};
		}

		return NextResponse.json({
			totalProjects,
			pendingProjects,
			completedProjects,
			stats,
		});

	} catch (error) {
		console.error('[-] Error retrieving project statistics:', error);
		return NextResponse.error();
	}
}
