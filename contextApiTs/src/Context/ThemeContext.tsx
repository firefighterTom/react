import { createContext } from 'react';

type ThemeContext = {
	themeLight: { backgroundColor: string };
	themeDark: { backgroundColor: string };
	isDarkMode: boolean;
};
export const ThemeContext = createContext<ThemeContext | undefined>(undefined);
