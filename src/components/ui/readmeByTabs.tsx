'use client';

// Dependencies:
import { useState, useEffect } from 'react';

// UI Components:
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Toaster, toast } from 'sonner';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { ArchFileTree } from '@/components/ui/architecture-tree';

type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

interface ReadmeByTabsProps {
	translations: {
		[key: string]: string;
	};
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function ReadmeByTabs({ translations }: ReadmeByTabsProps) {
	const [value, setValue] = useState(0);
	const [position, setPosition] = useState<ToastPosition>('bottom-right');

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		event.preventDefault();
		setValue(newValue);
	};

	const handleToast = () => {
		toast.success(translations.Toast);
	};

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text)
			.then(() => handleToast())
			.catch(err => console.error('Error copying text: ', err));
	};

	useEffect(() => {
		const savedPosition = localStorage.getItem('toastPosition') as ToastPosition | null;
		if (savedPosition) {
			setPosition(savedPosition);
		}
	}, []);

	return (
		<>
			<Toaster position={position} />

			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'var(--border-color)', color: 'var(--text-color)' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
						<Tab label={translations.Tab1} {...a11yProps(0)} className='text' />
						<Tab label={translations.Tab2} {...a11yProps(1)} className='text' />
						<Tab label={translations.Tab3} {...a11yProps(2)} className='text' />
					</Tabs>
				</Box>

				<CustomTabPanel value={value} index={0}>
					<div className='flex flex-col items-left text-left gap-8'>

						<section className='flex flex-col items-left text-left gap-4'> { /* Overview */}
							<h2 className='text-2xl font-bold text-left'>{translations.Overview}</h2>
							<p className='text-lg text flex justify-normal items-center w-[95%]'>
								{translations.OverviewContent}
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Installation */}
							<h2 className='text-2xl font-bold text-left'>{translations.Installation}</h2>
							<p className='text-lg text flex flex-col justify-normal items-left w-[95%]'>
								{translations.InstallationContent}
								<code
									className='text-lg text homeBox w-[50%] mt-4'
									onClick={() => handleCopy('git clone https://github.com/abello-r/notJira')}
								>
									git clone https://github.com/abello-r/notJira
								</code>
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Dependencies */}
							<h2 className='text-2xl font-bold text-left'>{translations.Dependencies}</h2>
							<p className='text-lg text flex flex-col justify-normal items-left w-[95%]'>
								{translations.DependenciesContent}
								<code
									className='text-lg text homeBox w-[15%] mt-4'
									onClick={() => handleCopy('npm install')}
								>
									npm install
								</code>
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Environment */}
							<h2 className='text-2xl font-bold text-left'>{translations.Environment}</h2>
							<p className='text-lg text flex flex-col justify-normal items-left w-[95%]'>
								{translations.EnvironmentContent}
							</p>
							<ul className='mt-4'>
								<li>NEXTAUTH_URL= # http://localhost:3000</li>
								<li>NEXTAUTH_SECRET= # openssl rand -base64 32</li>
								<li>GITHUB_ID= # GitHub OAuth App ID</li>
								<li>GITHUB_SECRET= # GitHub OAuth App Secret</li>
								<li>MONGODB_URI= # MongoDB connection string</li>
							</ul>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Bulk */}
							<h2 className='text-2xl font-bold text-left'>{translations.Bulk}</h2>
							<p className='text-lg text flex flex-col justify-normal items-left w-[95%]'>
								{translations.BulkContent}
								<code
									className='text-lg text homeBox w-[15%] mt-4'
									onClick={() => handleCopy('npm run bulk')}
								>
									npm run bulk
								</code>
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Run */}
							<h2 className='text-2xl font-bold text-left'>{translations.Run}</h2>
							<p className='text-lg text flex flex-col justify-normal items-left w-[95%]'>
								{translations.RunContent}
								<code
									className='text-lg text homeBox w-[15%] mt-4'
									onClick={() => handleCopy('npm run dev')}
								>
									npm run dev
								</code>
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Support */}
							<h2 className='text-2xl font-bold text-left'>{translations.Support}</h2>
							<p className='text-lg text flex flex-col justify-normal items-left w-[95%]'>
								{translations.SupportContent}
							</p>
							<span className='flex flex-row gap-2'>

								<a href='https://github.com/abello-r' target='_blank' rel='noopener noreferrer' className='w-[20%]'>
									<button className='homeBox'>
										<span className='flex flex-row gap-2'>
											{translations.GithubButton}
											<ArrowLongRightIcon className='h-6 w-6 color-white' />
										</span>
									</button>
								</a>

								<a href='https://profile-guard.netlify.app/' target='_blank' rel='noopener noreferrer' className='w-[25%]'>
									<button className='homeBox'>
										<span className='flex flex-row gap-2'>
											{translations.WebButton}
											<ArrowLongRightIcon className='h-6 w-6' />
										</span>

									</button>
								</a>

							</span>
						</section>

					</div>
				</CustomTabPanel>

				<CustomTabPanel value={value} index={1}>
					<div className='flex flex-col items-left text-left gap-8'>

						<section className='flex flex-col items-left text-left gap-4'> { /* Architecture */}
							<h2 className='text-2xl font-bold text-left'>{translations.Explanation}</h2>
							<p className='text-lg text flex justify-normal items-center w-[95%]'>
								{translations.ExplanationContent}
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Architecture */}
							<h2 className='text-2xl font-bold text-left'>{translations.Modules}</h2>
							<p className='text-lg text flex justify-normal items-center w-[95%]'>
								{translations.ModulesContent}
							</p>
							<span className='flex flex-row gap-2 w-[50%]'>
								<ArchFileTree />
							</span>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* App Router */}
							<h2 className='text-2xl font-bold text-left'>{translations.AppRouter}</h2>
							<p className='text-lg text w-[95%]'>
								{translations.AppRouterContent}<b>src/app/api & src/middleware.ts</b>.
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Context */}
							<h2 className='text-2xl font-bold text-left'>{translations.ContextAndProviders}</h2>
							<p className='text-lg text w-[95%]'>
								{translations.ContextAndProvidersContent} <b>src/app/context & src/i18nt.ts</b>.
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Components */}
							<h2 className='text-2xl font-bold text-left'>{translations.Components}</h2>
							<p className='text-lg text w-[95%]'>
								{translations.ComponentsContent}<b>src/components</b>{translations.ComponentsContent2}
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Domain */}
							<h2 className='text-2xl font-bold text-left'>{translations.Domain}</h2>
							<p className='text-lg text w-[95%]'>
								{translations.DomainContent}<b>src/domain</b>{translations.DomainContent2}
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Lib */}
							<h2 className='text-2xl font-bold text-left'>{translations.Lib}</h2>
							<p className='text-lg text w-[95%]'>
								{translations.LibContent}<b>src/lib</b>{translations.LibContent2}
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Layout */}
							<h2 className='text-2xl font-bold text-left'>{translations.Layout}</h2>
							<p className='text-lg text w-[95%]'>
								{translations.LayoutContent}
								<b>src/app/layout</b>
								{translations.LayoutContent2}
								<b>src/app/dashboard</b>
								{translations.LayoutContent3}
							</p>
						</section>

					</div>

				</CustomTabPanel>

				<CustomTabPanel value={value} index={2}>
					<div className='flex flex-col items-left text-left gap-8'>
					
						<section className='flex flex-col items-left text-left gap-4'> { /* Dependencies */}
							<h2 className='text-2xl font-bold text-left'>{translations.Dependencies}</h2>
							<p className='text-lg text w-[95%]'>
								{translations.DependenciesTabDetailsContent}
								<ul className="pl-12 space-y-4 text-gray-800 mt-8">
									<li className="font-semibold text-lg">
										{translations.CategoryOne}
										<ul className="list-disc pl-6 mt-2 space-y-2 font-normal">
											<li>NextAuth.js</li>
											<li>Mongoose</li>
											<li>SWR</li>
										</ul>
									</li>
									<li className="font-semibold text-lg">
										{translations.CategoryTwo}
										<ul className="list-disc pl-6 mt-2 space-y-2 font-normal">
											<li>Heroicons</li>
											<li>Material-UI</li>
											<li>Sonner</li>
											<li>Chart.js</li>
											<li>TailwindCSS</li>
										</ul>
									</li>
									<li className="font-semibold text-lg">
										{translations.CategoryThree}
										<ul className="list-disc pl-6 mt-2 space-y-2 font-normal">
											<li>Jest</li>
											<li>Cypress</li>
										</ul>
									</li>
								</ul>
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Themes */}
							<h2 className='text-2xl font-bold text-left'>{translations.Themes}</h2>
							<p className='text-lg text w-[95%]'>
								{translations.ThemesContent}
							</p>
						</section>

						<section className='flex flex-col items-left text-left gap-4'> { /* Branding */}
							<h2 className='text-2xl font-bold text-left'>{translations.Branding}</h2>
							<p className='text-lg text w-[95%]'>
								{translations.BrandingContent}
							</p>
						</section>

					</div>
				</CustomTabPanel>
			</Box>
		</>
	);
}
