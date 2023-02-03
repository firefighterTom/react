import { useEffect, useState } from 'react';

import './App.css';
type countryApiType = {
	cca2: string;
	name: {
		official: string;
	};
	flags: {
		svg: string;
	};
}[];
function App() {
	const [countryApi, setCountryApi] = useState<countryApiType | []>([]);
	const [inputValue, setInputValue] = useState<string | undefined>(undefined);
	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then((response) => response.json())
			.then((data) => setCountryApi(data));
	}, []);
	const listCountries = countryApi.map((country) => {
		if (inputValue === undefined || inputValue === '') {
			return (
				<li key={country.cca2}>
					<p key={country.name.official}>{country.name.official}</p>
					<img
						key={country.flags.svg}
						style={{ width: 100, height: 100 }}
						src={country.flags.svg}
						alt='flag'
					/>
				</li>
			);
		}
		if (
			inputValue &&
			country.name.official.toLowerCase().includes(inputValue)
		) {
			return (
				<li key={country.cca2}>
					<p key={country.name.official}>{country.name.official}</p>
					<img
						key={country.flags.svg}
						style={{ width: 100, height: 100 }}
						src={country.flags.svg}
						alt='flag'
					/>
				</li>
			);
		}
	});

	return (
		<div className='App'>
			<input
				type='text'
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					setInputValue(e.currentTarget.value.toLowerCase());
				}}
			/>
			<ul>{listCountries}</ul>
		</div>
	);
}

export default App;
