// Translations:
import { useTranslations } from 'next-intl';

// UI Components:
import {
	LanguageIcon,
	SparklesIcon,
	LifebuoyIcon,
	ArrowPathIcon,
	BellAlertIcon,
} from '@heroicons/react/24/outline';
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import LangSwitcher from "@/components/ui/lang-switcher";
import NotifySwitcher from "@/components/ui/notify-switcher";

// Styles:
import styles from "@/app/dashboard/dashboard.module.css";

export default function Settings() {
	const t = useTranslations('Settings');
	const features = [
		{
			Icon: LifebuoyIcon,
			name: t('Accessibility'),
			description: t('AccessibilityDescription'),
			href: "#",
			cta: t('ComingSoon'),
			background: <div className="absolute -right-20 -top-20 opacity-60" />,
			className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
		},
		{
			Icon: SparklesIcon,
			name: t('CustomizeTheme'),
			description: t('CustomizeThemeDescription'),
			href: "#customizeTheme",
			cta: t('Customize'),
			background: <div className="absolute -right-20 -top-20 opacity-60" />,
			className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
		},
		{
			Icon: LanguageIcon,
			name: t('SelectLanguage'),
			description: t('SelectLanguageDescription'),
			href: "#selectLang",
			cta: t('Select'),
			background: <div className="absolute -right-20 -top-20 opacity-60" />,
			className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
		},
		{
			Icon: ArrowPathIcon,
			name: t('RestartWorkspace'),
			description: t('RestartWorkspaceDescription'),
			href: "#",
			cta: t('Restart'),
			background: <div className="absolute -right-20 -top-20 opacity-60" />,
			className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
		},
		{
			Icon: BellAlertIcon,
			name: t('Notifications'),
			description: t('NotificationsDescription'),
			href: "#manageNotification",
			cta: t('Manage'),
			background: <div className="absolute -right-20 -top-20 opacity-60" />,
			className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
		},
	];

	const themeTranslations = {
		LightDescription: t('LightDescription'),
		DarkDescription: t('DarkDescription'),
		AbyssDescription: t('AbyssDescription'),
	};

	const langTranslations = {
		Spanish: t('Spanish'),
		English: t('English'),
		French: t('French'),
		Italian: t('Italian'),
		Japanese: t('Japanese'),
	};

	const notifyTranslations = {
		"Topleft": t('Topleft'),
		"Topright": t('Topright'),
		"Bottomleft": t('Bottomleft'),
		"Bottomright": t('Bottomright'),
		"Position": t('Position'),
	};

	return (
		<>
			<div className={styles.outerContainer}>
				<div className={styles.container} id="features">
					<BentoGrid className="lg:grid-rows-3 overflow-scroll p-4">
						{features.map((feature) => (
							<BentoCard key={feature.name} {...feature} />
						))}
					</BentoGrid>
				</div>
				<div className={`flex flex-col space-y-4 ${styles.container}`} id="customizeTheme">
					<h1 className="text-3xl mb-4 font-bold">{t('Theme')}</h1>
					<ThemeSwitcher translations={themeTranslations} />
				</div>
				<div className={`flex flex-col space-y-4 ${styles.container}`} id="selectLang">
					<h1 className="text-3xl mb-4 font-bold">{t('Lang')}</h1>
					<LangSwitcher translations={langTranslations} />
				</div>
				<div className={`flex flex-col space-y-4 ${styles.container}`} id="manageNotification">
					<h1 className="text-3xl mb-4 font-bold">{t('Notification')}</h1>
					<NotifySwitcher translations={notifyTranslations} />
				</div>
			</div>
		</>
	);
}
