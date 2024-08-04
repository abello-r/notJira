import 'dotenv/config';
import mongoose from "mongoose";
import { faker } from '@faker-js/faker';
import { connectDB } from '../src/lib/mongodb';
import User from '../src/app/models/user';

const NUMBER_OF_DOCUMENTS = 1000; // Define here the number of documents to insert

type TeamRoleMap = {
	[key: string]: string[];
};

const teamsWithRoles: TeamRoleMap = {
	Software: ["Backend Developer", "Frontend Developer", "Software Developer", "QA Engineer", "DevOps Engineer", "Data Scientist"],
	Design: ["UX/UI Designer", "Graphic Designer", "Interaction Designer", "Visual Designer", "Product Designer"],
	Operations: ["Product Manager", "Operations Manager", "Project Coordinator", "Business Analyst", "Scrum Master"],
	Marketing: ["Marketing Specialist", "Content Strategist", "SEO Specialist", "Social Media Manager", "Brand Manager"]
};

interface TeamMember {
	id: number;
	firstName: string;
	lastName: string;
	team: string;
	role: string;
	onDoingProjects: number;
	completedProjects: number;
}

const getRandomElement = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

const _bulkInsert = async (count: number): Promise<void> => {
	try {
		await connectDB();

		const countDocuments = await User.countDocuments();
		if (countDocuments > 0) {
			console.log('[-] Bulk insert canceled: collection is not empty.');
			return;
		}

		const data: TeamMember[] = [];
		const teams = Object.keys(teamsWithRoles);

		console.log('[+] Generating data...');
		for (let i = 0; i < count; i++) {
			const team = getRandomElement(teams);
			const roles = teamsWithRoles[team];
			const role = getRandomElement(roles);

			data.push({
				id: i + 1,
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				team: team,
				role: role,
				onDoingProjects: faker.number.int({ min: 0, max: 10 }),
				completedProjects: faker.number.int({ min: 0, max: 20 }),
			});
		}

		console.log('[+] Inserting data...');
		await User.insertMany(data);
		console.log('[+] Data inserted successfully.');
	} catch (error) {
		console.error('[-] Error inserting data:', error);
	} finally {
		mongoose.connection.close();
	}
}

_bulkInsert(NUMBER_OF_DOCUMENTS);
