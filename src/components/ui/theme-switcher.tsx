'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/app/context/ThemeContext';
import { SunIcon, MoonIcon, StarIcon } from '@heroicons/react/24/outline';

interface ThemeSwitcherProps {
	translations: {
		[key: string]: string;
	};
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ translations }) => {
	const { theme, toggleTheme } = useTheme();
	const [clientTheme, setClientTheme] = useState<string | null>(null);

	useEffect(() => {
		setClientTheme(theme);
	}, [theme]);

	if (clientTheme === null) {
		return <div>Loading...</div>;
	}

	const isLightOrAbyss = clientTheme === 'light' || clientTheme === 'abyss';

	return (
		<div className="p-4 w-full h-full flex flex-col space-y-4 justify-center items-center">
			<div className="flex sm:space-x-4 w-full h-full flex-col sm:flex-row justify-center items-center gap-4">
				<div className="w-full sm:w-1/4 h-[30%] sm:h-[30%] relative">
					<button
						className={`w-full h-full rounded-xl shadow-md transition-colors font-medium text-lg flex items-center justify-center ${isLightOrAbyss ? 'lightBox' : 'darkBox'
							} hover:bg-black/[.03] hover:dark:bg-neutral-800/10`}
						onClick={() => toggleTheme('light')}
					>
						<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
							<SunIcon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 absolute top-1 right-1" />
							<h3 className="text-xl text font-medium text-left">
								Light
							</h3>
							<p className="max-w-lg text-neutral-400 font-normal text-left">
								{translations.LightDescription}
							</p>
						</div>
					</button>
				</div>

				<div className="w-full sm:w-1/4 h-[30%] sm:h-[50%] relative">
					<button
						className={`w-full h-full rounded-xl shadow-md transition-colors font-medium text-lg flex items-center justify-center ${isLightOrAbyss ? 'lightBox' : 'darkBox'
							} hover:bg-black/[.03] hover:dark:bg-neutral-800/10`}
						onClick={() => toggleTheme('dark')}
					>
						<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
							<MoonIcon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 absolute top-1 right-1" />
							<h3 className="text-xl text font-medium text-left">
								Dark
							</h3>
							<p className="max-w-lg text-neutral-400 font-normal text-left">
								{translations.DarkDescription}
							</p>
						</div>
					</button>
				</div>

				<div className="w-full sm:w-1/4 h-[30%] sm:h-[70%] relative">
					<button
						className={`w-full h-full rounded-xl shadow-md transition-colors font-medium text-lg flex items-center justify-center ${isLightOrAbyss ? 'lightBox' : 'darkBox'
							} hover:bg-black/[.03] hover:dark:bg-neutral-800/10`}
						onClick={() => toggleTheme('abyss')}
					>
						<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
							<StarIcon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 absolute top-1 right-1" />
							<h3 className="text-xl font-medium text-left text">
								Abyss
							</h3>
							<p className="max-w-lg text-neutral-400 font-normal text-left">
								{translations.AbyssDescription}
							</p>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ThemeSwitcher;
