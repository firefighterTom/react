import { themeDark, themeLight } from './Style';
import { ThemeContext } from './Context/ThemeContext';
import './App.css';
import { RandomComponents } from './Components/RandomComponents';
import { useState } from 'react';

function App() {
	const [isDarkMode, setIsDarkMode] = useState(true);

	return (
		<ThemeContext.Provider value={{ themeLight, themeDark, isDarkMode }}>
			<div className='App'>
				<RandomComponents></RandomComponents>
				<button
					onClick={() => {
						setIsDarkMode(!isDarkMode);
					}}>
					Toggle mode
				</button>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
