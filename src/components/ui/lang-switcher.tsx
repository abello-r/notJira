'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LangSwitcherProps {
	translations: {
		Spanish: string;
		English: string;
		French: string;
		Italian: string;
		Japanese: string;
	};
}

const LanguageSwitcher = ({ translations }: LangSwitcherProps) => {
	const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

	selectedLanguage;
	const languages = ['en', 'es', 'fr', 'it', 'ja'];
	const languageNames: { [key: string]: string } = {
		en: translations.English,
		es: translations.Spanish,
		fr: translations.French,
		it: translations.Italian,
		ja: translations.Japanese,
	};

	useEffect(() => {
		const locale = document.cookie.replace(/(?:(?:^|.*;\s*)locale\s*=\s*([^;]*).*$)|^.*$/, "$1") || 'en';
		setSelectedLanguage(locale);
	}, []);

	const handleLanguageChange = async (language: string) => {
		setSelectedLanguage(language);
		await fetch('/api/lang', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ locale: language }),
		});
		window.location.href = '/dashboard/settings/#selectLang';
	};

	return (
		<div className="p-4 w-full h-[80%] flex flex-col space-y-4 justify-center items-center">
			<div className="flex sm:space-x-4 w-full h-full flex-row justify-center items-center gap-4 flex-wrap">
				{languages.map((lang) => (
					<div key={lang} className="w-1/3 sm:w-1/4 h-[25%] relative">
						<button
							className={`w-full h-full rounded-xl shadow-md flex items-center justify-center p-4 lightBox hover:bg-black/[.03] hover:dark:bg-neutral-800/10`}
							onClick={() => handleLanguageChange(lang)}
						>
							<Image 
								src={`/svg/${lang}.svg`} 
								alt={lang} 
								width={0} 
								height={0}
								className='w-10 h-10'
							/>
							<p className={`text-lg font-medium mt-2`}>
								{languageNames[lang]}
							</p>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default LanguageSwitcher;
