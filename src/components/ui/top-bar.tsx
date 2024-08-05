'use client';

import { useState, useEffect } from "react";

// Styles:
import { UserCircleIcon } from '@heroicons/react/24/outline';
import styles from "@/app/dashboard/dashboard.module.css";

// Next-auth:
import { signIn, useSession } from "next-auth/react";

interface topBarProps {
	translations?: {
		[key: string]: string;
	};
}

export default function TopBar({ translations }: topBarProps) {
	const { data: session, status } = useSession();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (status === "loading") {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [status]);

	return (
		<>
			<div className={styles.topBar}>
				<section className="flex items-center justify-between py-2 w-2/3">
					<img src="/svg/logo-no-background.svg" alt="Logo" className="w-44 h-auto" id="logo" />
				</section>
				<section className="flex items-center justify-end py-2 w-1/3">
					{isLoading ? (
						<div className="flex items-center gap-4">
							<div className="bg-gray-300 h-6 w-24 rounded animate-pulse"></div>
							<div className="bg-gray-300 h-10 w-10 rounded-full animate-pulse"></div>
						</div>
					) : session ? (
						<span className="flex items-center justify-between gap-4">
							<p className="text font-semibold">{translations?.Greetings} {session.user?.name}</p>
							<button className="flex items-center justify-center h-10 w-10 bg-[#e1e4e8] rounded-full">
								{session.user?.image ? (
									<img
										src={session.user.image}
										alt="User image"
										className="w-8 h-8 rounded-full"
									/>
								) : (
									<UserCircleIcon className="w-8 h-8 text-[#0052cc]" />
								)}
							</button>
						</span>
					) : (
						<button
							className="flex items-center justify-center h-10 w-30 text-[#0052cc] font-semibold hover:bg-[#f1f1f1] rounded-[6px] p-4"
							onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
						>
							Iniciar sesión
						</button>
					)}
				</section>
			</div>
		</>
	);
}
