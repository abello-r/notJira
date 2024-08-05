// UI Components:
import ReadmeByTabs from "@/components/ui/readmeByTabs";

// Styles:
import styles from "@/app/dashboard/dashboard.module.css";

// Translations:
import { useTranslations } from 'next-intl';

export default function Dashboard() {
	const t = useTranslations('Home');
	const homeTranslations = {

		// Tabs:
		"Toast": t('Toast'),
		"Tab1": t('Tab1'),
		"Tab2": t('Tab2'),
		"Tab3": t('Tab3'),

		// Tab Overview:
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

		// Tab Architecture:
		"Explanation": t('Explanation'),
		"ExplanationContent": t('ExplanationContent'),
		"Modules": t('Modules'),
		"ModulesContent": t('ModulesContent'),
		"AppRouter": t('AppRouter'),
		"AppRouterContent": t('AppRouterContent'),
		"ContextAndProviders": t('ContextAndProviders'),
		"ContextAndProvidersContent": t('ContextAndProvidersContent'),
		"Components": t('Components'),
		"ComponentsContent": t('ComponentsContent'),
		"ComponentsContent2": t('ComponentsContent2'),
		"Domain": t('Domain'),
		"DomainContent": t('DomainContent'),
		"DomainContent2": t('DomainContent'),
		"Lib": t('Lib'),
		"LibContent": t('LibContent'),
		"LibContent2": t('LibContent2'),
		"Layout": t('Layout'),
		"LayoutContent": t('LayoutContent'),
		"LayoutContent2": t('LayoutContent2'),
		"LayoutContent3": t('LayoutContent3'),
	};

	return (
		<div className={`flex flex-col mt-2 ${styles.outerContainer}`}>
			<ReadmeByTabs translations={homeTranslations} />
		</div>
	);
}
