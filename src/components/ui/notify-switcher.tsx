'use client';

import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import {
	ArrowUpLeftIcon,
	ArrowDownLeftIcon,
	ArrowUpRightIcon,
	ArrowDownRightIcon,
} from '@heroicons/react/24/outline';

interface notifySwitcherProps {
	translations: {
		[key: string]: string;
	};
}

type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  
export default function NotifySwitcher({ translations }: notifySwitcherProps) {
	const [position, setPosition] = useState<ToastPosition>('bottom-right');

	const positions: { value: ToastPosition; label: string }[] = [
		{ value: 'top-left', label: translations.Topleft },
		{ value: 'top-right', label: translations.Topright },
		{ value: 'bottom-left', label: translations.Bottomleft },
		{ value: 'bottom-right', label: translations.Bottomright },
	];

	const getIconForPosition = (pos: ToastPosition) => {
		switch (pos) {
			case 'top-left':
				return <ArrowUpLeftIcon className="h-8 w-8" />;
			case 'top-right':
				return <ArrowUpRightIcon className="h-8 w-8" />;
			case 'bottom-left':
				return <ArrowDownLeftIcon className="h-8 w-8" />;
			case 'bottom-right':
				return <ArrowDownRightIcon className="h-8 w-8" />;
			default:
				return null;
		}
	};

	useEffect(() => {
		const savedPosition = localStorage.getItem('toastPosition') as ToastPosition | null;
		if (savedPosition) {
			setPosition(savedPosition);
		}
	}, []);

	const handlePositionChange = (newPosition: ToastPosition) => {
		toast.success(translations.Position);
		setPosition(newPosition);
		localStorage.setItem('toastPosition', newPosition);
	};

	return (
		<>
			<Toaster position={position} />
			<div className="p-4 w-full h-[80%] flex flex-col space-y-4 justify-center items-center">
				<div className="flex flex-wrap gap-4 w-full h-full justify-center">
					{positions.map(({ value, label }) => (
						<div key={value} className="w-1/2 max-w-[calc(40%-1rem)] h-[25%] relative">
							<button
								className={`w-full h-full rounded-xl shadow-md flex items-center justify-center p-4 lightBox hover:bg-black/[.03] hover:dark:bg-neutral-800/10`}
								onClick={() => handlePositionChange(value)}
							>
								{getIconForPosition(value)}
								<p className="text-lg font-medium mt-2">{label}</p>
							</button>
						</div>
					))}
				</div>
			</div>
		</>

	);
}
