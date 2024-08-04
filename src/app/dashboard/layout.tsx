// UI:
import TopBar from "@/components/ui/top-bar";
import SideBar from "@/components/ui/side-bar";

// Style and translations:
import type { Metadata } from "next";
import {useTranslations} from 'next-intl';
import { ThemeProvider } from '@/app/context/ThemeContext';
import styles from "@/app/dashboard/dashboard.module.css";

export const metadata: Metadata = {
	title: "Not Jira | Dashboard",
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	const tDashboard = useTranslations('Dashboard');
	const dashboardTranslations = {
		Home: tDashboard('Home'),
		Projects: tDashboard('Projects'),
		Teams: tDashboard('Teams'),
		Settings: tDashboard('Settings'),
		Logout: tDashboard('Logout'),
		Greetings: tDashboard('Greetings'),
    };

	return (
		<ThemeProvider>
			<div className="flex flex-col h-screen">
				<TopBar translations={dashboardTranslations} />
				<section className="flex flex-row h-full">
					<SideBar translations={dashboardTranslations} />
					<div className={styles.childrenBox}>
						{children}
					</div>
				</section>
			</div>
		</ThemeProvider>
	);	
}
