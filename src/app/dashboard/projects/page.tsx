'use client';

// Translations:
import { useTranslations } from 'next-intl';

// Styles:
import styles from "@/app/dashboard/dashboard.module.css";
import {
	ArrowLongRightIcon
} from '@heroicons/react/24/outline';

// UI Components:
import NumberTicker from "@/components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import DoughnutGraph from '@/components/ui/doughnut-graph';

// Fetching and caching:
import useFetch from '@/app/hooks/useFetch';

interface ProjectsStats {
	totalProjects: number;
	pendingProjects: number;
	completedProjects: number;
}

export default function Projects() {

	const t = useTranslations('Projects');

	// NumberTicker data:
	const { data, error } = useFetch<ProjectsStats>('/api/secure/projects/stats');
	if (error) return <p>Error loading projects statistics...</p>;
	const onDoingProjects = data?.pendingProjects || 0;
	const completedProjects = data?.completedProjects || 0;

	return (
		<div className={`flex flex-col justify-start items-center ${styles.outerContainer}`}>

			<section className={styles.projectInnerTopContainer}>
				<div className="h-full w-[80%] items-center justify-center overflow-hidden pt-8">
					<BoxReveal boxColor={"var(--accent-color)"} duration={0.5}>
						<p className="text-[3.5rem] font-semibold">
							{t('Title')}<span className="text-[var(--accent-color)]">.</span>
						</p>
					</BoxReveal>

					<BoxReveal boxColor={"var(--accent-color)"} duration={0.5}>
						<h2 className="mt-[.5rem] text-[1rem]">
							{t('Subtitle')}{" "}
							<span className="text-[var(--accent-color)] font-bold">{t('SubtitleColorVariant')}</span>.
						</h2>
					</BoxReveal>

					<BoxReveal boxColor={"var(--accent-color)"} duration={0.5}>
						<div className="mt-[1.5rem]">
							<span className="flex flex-row gap-4">
								<ArrowLongRightIcon className="h-[1.5rem] w-[1.5rem] inline-block" />
								<span>
									{t('Feature1')}
									<span className="text-[var(--accent-color)] font-bold"> {t('Feature1ColorVariant')}</span>.
								</span>
							</span>
							<span className="flex flex-row gap-4">
								<ArrowLongRightIcon className="h-[1.5rem] w-[1.5rem] inline-block" />
								<span>
									{t('Feature2')}
									<span className="text-[var(--accent-color)] font-bold"> {t('Feature2ColorVariant')}</span>.
								</span>
							</span>
							<span className="flex flex-row gap-4">
								<ArrowLongRightIcon className="h-[1.5rem] w-[1.5rem] inline-block" />
								<span>
									{t('Feature3')}
									<span className="text-[var(--accent-color)] font-bold"> {t('Feature3ColorVariant')}</span>.
								</span>
							</span>
						</div>
					</BoxReveal>

					<BoxReveal boxColor={"var(--accent-color)"} duration={0.5}>
						<Button variant="outline" className="mt-[1.6rem] bg-[var(--accent-color)] rounded-[8px] text-white gap-2">
							{t('Premium')}
						</Button>
					</BoxReveal>
				</div>

				<div className="h-full w-[20%] items-center justify-center">
					<img src="/svg/notnot.svg" alt="NotJira Logo" className="w-[100%] h-[100%] mt-8 rotate-[12deg] select-none" id="logo" />
				</div>
			</section> { /* End of projectInnerTopContainer */}

			<section className={styles.projectInnerBottomContainer}>
				<div className="w-[20%] h-full flex flex-row">
					<span className='flex flex-col gap-4 justify-center items-center'>
						<span>
							<h3 className='text-[1.2rem] font-medium flex items-center justify-center'>{t('OnProjects')}</h3>
							<NumberTicker
								className='text-[3.5rem] font-semibold flex items-center justify-center text'
								value={onDoingProjects}>
							</NumberTicker>
						</span>
						<span>
							<h3 className='text-[1.2rem] font-medium flex items-center justify-center'>{t('EndProjects')}</h3>
							<NumberTicker
								className='text-[3.5rem] font-semibold flex items-center justify-center text'
								value={completedProjects}>
							</NumberTicker>
						</span>
					</span>
				</div>
				<span>
					<p className='text-[1rem] font-medium flex items-center justify-center'>Project completion rate</p>
					<DoughnutGraph />
				</span>
				<span>
					<p className='text-[1rem] font-medium flex items-center justify-center'>Completed Projects</p>
					<DoughnutGraph />
				</span>
				<span>
					<p className='text-[1rem] font-medium flex items-center justify-center'>Ongoing Projects</p>
					<DoughnutGraph />
				</span>
			</section> { /* End of projectInnerBottomContainer */}

		</div>
	);
}
