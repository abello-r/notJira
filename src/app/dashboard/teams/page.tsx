'use client';

// Translations:
import { useTranslations } from 'next-intl';

// UI Components:
import DataTable from '@/components/ui/data-table';
import AvatarCircles from "@/components/magicui/avatar-circles";

// Styles:
import styles from "@/app/dashboard/dashboard.module.css";

// Fetching and caching:
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

interface User {
	id: number;
	firstName: string;
	lastName: string;
	team: string;
	role: string;
	onDoingProjects: number;
	completedProjects: number;
}

// Const:
const avatarUrls = [
	"https://github.com/nmontiel42.png",
	"https://github.com/ignaciopro.png",
	"https://github.com/torvalds.png",
	"https://github.com/pruiz-ca.png",
];

export default function Teams() {

	const t = useTranslations('Teams');
	const dataTableTranslations = {
		FirstName: t('FirstName'),
		LastName: t('LastName'),
		Team: t('Team'),
		Role: t('Role'),
		OnProjects: t('OnProjects'),
		EndProjects: t('EndProjects'),
	};

	const { data, error } = useSWR<User[]>('/api/secure/users', fetcher);
	if (error) {
		return <div>Failed to fetch teams</div>;
	}

	return (
		<div className={`flex flex-col justify-start items-center ${styles.outerContainer}`}>
			<section className={styles.innerTopContainer}>
				<h1 className="text-4xl font-bold">{t('Title')}</h1>
				<AvatarCircles
					numPeople={99}
					avatarUrls={avatarUrls}
				/>
			</section>
			<section className={styles.innerBottomContainer}>
				<DataTable users={data} translations={dataTableTranslations} />
				<span className="w-full h-100% flex justify-center items-center flex-row gap-8">
					{/* TO DO: Add some graphs or stats? */}
				</span>
			</section>
		</div>
	);
}
