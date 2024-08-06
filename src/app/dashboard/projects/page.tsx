'use client';

// Translations:
import { useTranslations } from 'next-intl';

// Styles:
import styles from "@/app/dashboard/dashboard.module.css";
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

// UI Components:
import NumberTicker from "@/components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import DoughnutGraph from '@/components/ui/doughnut-graph';
import Image from 'next/image'

// Fetching and caching:
import useFetch from '@/app/hooks/useFetch';
import useProjectCompletionRate from '@/app/hooks/useProjectCompletionRate';

interface ProjectsStats {
	totalProjects: number;
	pendingProjects: number;
	completedProjects: number;
	stats: Record<string, {
		total: number;
		ongoing: number;
		completed: number;
	}>;
}

export default function Projects() {
	const t = useTranslations('Projects');

	const { data, error } = useFetch<ProjectsStats>('/api/secure/projects/stats');
	const completionRates = useProjectCompletionRate(data?.stats || {});
	const onDoingProjects = data?.pendingProjects || 0;
	const completedProjects = data?.completedProjects || 0;

	if (error) {
		return <p>Error: 503 Failed to fetch</p>
	}

	const doughnutGraphData = {
		ProjectCompletationRatePerTeam: completionRates,
		ProjectsOnGoingPerTeam: {
			"Marketing": data?.stats["Marketing"]?.ongoing || 0,
			"Development": data?.stats["Software"]?.ongoing || 0,
			"Design": data?.stats["Design"]?.ongoing || 0,
			"Operations": data?.stats["Operations"]?.ongoing || 0,
		},
		ProjectsCompletedPerTeam: {
			"Marketing": data?.stats["Marketing"]?.completed || 0,
			"Development": data?.stats["Software"]?.completed || 0,
			"Design": data?.stats["Design"]?.completed || 0,
			"Operations": data?.stats["Operations"]?.completed || 0,
		}
	};

	const doughnutGraphTranslations = {
		"Marketing": t('Marketing'),
		"Development": t('Development'),
		"Design": t('Design'),
		"Operations": t('Operations')
	};

	return (
		<div className={`flex flex-col justify-start items-center ${styles.outerContainer}`}>

			<section className={styles.projectInnerTopContainer}>
				<div className="h-full w-[100%] sm:w-[80%] flex flex-col justify-center items-center sm:items-start">
					<BoxReveal boxColor={"var(--accent-color)"} duration={0.5}>
						<p className="text-[2rem] sm:text-[3.5rem] font-semibold text-center sm:text-left">
							{t('Title')}<span className="text-[var(--accent-color)]">.</span>
						</p>
					</BoxReveal>

					<BoxReveal boxColor={"var(--accent-color)"} duration={0.5}>
						<h2 className="mt-[.5rem] text-[1rem] text-center sm:text-left">
							{t('Subtitle')}{" "}
							<span className="text-[var(--accent-color)] font-bold">{t('SubtitleColorVariant')}</span>.
						</h2>
					</BoxReveal>

					<BoxReveal boxColor={"var(--accent-color)"} duration={0.5}>
						<div className="mt-[1.5rem] text-center sm:text-left">
							<span className="gap-4 hidden sm:flex sm:flex-row">
								<ArrowLongRightIcon className="h-[1.5rem] w-[1.5rem] hidden sm:inline-block" />
								<span>
									{t('Feature1')}
									<span className="text-[var(--accent-color)] font-bold"> {t('Feature1ColorVariant')}</span>.
								</span>
							</span>
							<span className="flex flex-row gap-4 text-[.9rem] sm:text-[1rem]">
								<ArrowLongRightIcon className="h-[1.5rem] w-[1.5rem] hidden sm:inline-block" />
								<span>
									{t('Feature2')}
									<span className="text-[var(--accent-color)] font-bold"> {t('Feature2ColorVariant')}</span>.
								</span>
							</span>
							<span className="flex flex-row gap-4 text-[.9rem] sm:text-[1rem]">
								<ArrowLongRightIcon className="h-[1.5rem] w-[1.5rem] hidden sm:inline-block" />
								<span>
									{t('Feature3')}
									<span className="text-[var(--accent-color)] font-bold"> {t('Feature3ColorVariant')}</span>.
								</span>
							</span>
						</div>
					</BoxReveal>

					<BoxReveal boxColor={"var(--accent-color)"} duration={0.5}>
						<Button variant="outline" className="mt-[0.5rem] sm:mt-[1.6rem] bg-[var(--accent-color)] rounded-[8px] text-white gap-2">
							{t('Premium')}
						</Button>
					</BoxReveal>
				</div>

				<div className="h-full w-[20%] items-center justify-center hidden md:block">
					<Image 
						src="/svg/notnot.svg" 
						alt="NotJira Logo" 
						id="logo" 
						width={0} 
						height={0}
						className="w-[100%] h-[100%] mt-8 rotate-[12deg] select-none" 
					/>
				</div>
			</section> { /* End of projectInnerTopContainer */}

			<section className={`${styles.projectInnerBottomContainer} flex-col sm:flex-row-reverse gap-4 sm:gap-0`}>
				<div className="w-[20%] h-full flex flex-col sm:flex-row">
					<span className='flex flex-col gap-4 justify-center items-center mt-4'>
						<span>
							<h3 className='text-[1.2rem] font-medium flex items-center justify-center w-[50vw] sm:w-auto'>{t('OnProjects')}</h3>
							<NumberTicker
								className='text-[2.5rem] sm:text-[3.5rem] font-semibold flex items-center justify-center text'
								value={onDoingProjects}>
							</NumberTicker>
						</span>
						<span>
							<h3 className='text-[1.2rem] font-medium flex items-center justify-center w-[50vw] sm:w-auto'>{t('EndProjects')}</h3>
							<NumberTicker
								className='text-[2.5rem] sm:text-[3.5rem] font-semibold flex items-center justify-center text'
								value={completedProjects}>
							</NumberTicker>
						</span>
					</span>
				</div>
				<span>
					<p className='text-[1rem] font-medium flex items-center justify-center'>{t('Pcr')}</p>
					<DoughnutGraph translations={doughnutGraphTranslations} data={doughnutGraphData.ProjectCompletationRatePerTeam} />
				</span>
				<span>
					<p className='text-[1rem] font-medium flex items-center justify-center'>{t('Pcompleted')}</p>
					<DoughnutGraph translations={doughnutGraphTranslations} data={doughnutGraphData.ProjectsCompletedPerTeam} />
				</span>
				<span>
					<p className='text-[1rem] font-medium flex items-center justify-center'>{t('Pongoing')}</p>
					<DoughnutGraph translations={doughnutGraphTranslations} data={doughnutGraphData.ProjectsOnGoingPerTeam} />
				</span>
			</section> { /* End of projectInnerBottomContainer */}
		</div>
	);
}
