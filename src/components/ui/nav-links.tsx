'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import styles from "@/app/dashboard/dashboard.module.css";
import {
	HomeIcon,
	FolderIcon,
	UsersIcon,
	Cog6ToothIcon,
	ArrowLeftStartOnRectangleIcon
} from '@heroicons/react/24/outline';

interface NavLinksProps {
	translations: {
		Home: string;
		Projects: string;
		Teams: string;
		Settings: string;
		Logout: string;
	};
}

export default function NavLinks({ translations }: NavLinksProps) {
	const pathname = usePathname();
	const links = [
		{ name: translations.Home, href: "/dashboard", icon: HomeIcon },
		{ name: translations.Projects, href: "/dashboard/projects", icon: FolderIcon },
		{ name: translations.Teams, href: "/dashboard/teams", icon: UsersIcon },
		{ name: translations.Settings, href: "/dashboard/settings#features", icon: Cog6ToothIcon },
	];
	return (
		<>
			<div className={styles.navLinkBox}>
				{links.map(({ name, href, icon }, index) => {
					const LinkIcon = icon;
					return (
						<Link key={index} href={href} className={pathname === href ? `navLinkActive ${styles.navLink}` : styles.navLink}>
							<LinkIcon className='w-5' />
							<p className='hidden md:block'>{name}</p>
						</Link>
					);
				})}
				{/* Logout link with signOut function */}
				<a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						signOut({ callbackUrl: '/' });
					}}
					className={styles.navLink}
				>
					<ArrowLeftStartOnRectangleIcon className='w-5' />
					<p className='hidden md:block'>{translations.Logout}</p>
				</a>
			</div>
		</>
	);
}
