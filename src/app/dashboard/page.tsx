// UI Components:
import ReadmeByTabs from "@/components/ui/readmeByTabs";

// Styles:
import styles from "@/app/dashboard/dashboard.module.css";

// Translations:
import { useTranslations } from 'next-intl';

export default function Dashboard() {
	const t = useTranslations('Home');
	const homeTranslations = {
		"Toast": t('Toast'),
		"Tab1": t('Tab1'),
		"Tab2": t('Tab2'),
		"Tab3": t('Tab3'),
		"Overview": t('Overview'),
		"OverviewContent": t('OverviewContent'),
		"Installation": t('Installation'),
		"InstallationContent": t('InstallationContent'),
		"Dependencies": t('Dependencies'),
		"DependenciesContent": t('DependenciesContent'),
		"Environment": t('Environment'),
		"EnvironmentContent": t('EnvironmentContent'),
		"Bulk": t('Bulk'),
		"BulkContent": t('BulkContent'),
		"Run": t('Run'),
		"RunContent": t('RunContent'),
		"Support": t('Support'),
		"SupportContent": t('SupportContent'),
		"GithubButton": t('GithubButton'),
		"WebButton": t('WebButton'),
	};

	return (
		<div className={`flex flex-col mt-2 ${styles.outerContainer}`}>
			<ReadmeByTabs translations={homeTranslations} />
		</div>
	);
}
