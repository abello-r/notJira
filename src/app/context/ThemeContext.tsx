'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
	theme: string;
	toggleTheme: (newTheme: string) => void;
}

const defaultContextValue: ThemeContextType = {
	theme: 'light',
	toggleTheme: () => { },
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('theme') || 'light';
		}
		return 'light';
	});

	useEffect(() => {
		document.documentElement.classList.remove('light', 'dark', 'abyss');
		document.documentElement.classList.add(theme);

		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', theme);
		}
	}, [theme]);

	const toggleTheme = (newTheme: string) => {
		setTheme(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
