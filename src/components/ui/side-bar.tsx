import NavLinks from "./nav-links";
import styles from "@/app/dashboard/dashboard.module.css";

interface SideBarProps {
	translations: {
		Home: string;
		Projects: string;
		Teams: string;
		Settings: string;
		Logout: string;
	};
}

export default function SideBar({ translations }: SideBarProps) {
	return (
		<>
			<div className={styles.sideBar}>
				<NavLinks translations={translations} />
			</div>
		</>
	);
}
