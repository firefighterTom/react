import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export function RandomComponents() {
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext);
	return (
		<div
			style={{
				width: 50,
				height: 50,
				backgroundColor: isDarkMode
					? themeLight.backgroundColor
					: themeDark.backgroundColor,
			}}></div>
	);
}
