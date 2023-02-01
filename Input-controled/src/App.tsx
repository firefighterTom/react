import './App.css';
import { FormEvent, useState } from 'react';
import { FormInput } from './Components/FormInput';


function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorName, setErrorName] = useState({
		error: false,
		errorMsg: 'It has to starts with a capital letter',
	});
	const [errorEmail, setErrorEmail] = useState({
		error: false,
		errorMsg: 'Invalid email',
	});
	const [errorPassword, setErrorPassword] = useState({
		error: false,
		errorMsg:
			'Minimum 12 characters, maximum 32 characters and It cannot be the same as the name',
	});


	const firstLetter = (value: string) => {
		const regex = new RegExp(/^[A-Z][a-z]*$/);

		if (!regex.test(value)) {
			setErrorName({
				...errorName,
				error: true,
			});
		} else {
			setErrorName({
				...errorName,
				error: false,
			});
		}
	};
	const emailValidation = (value: string) => {
		const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
		if (!regex.test(value)) {
			setErrorEmail({
				...errorEmail,
				error: true,
			});
		} else {
			setErrorEmail({
				...errorEmail,
				error: false,
			});
		}
	};
	const passwordValidation = (value: string) => {
		if (value.length < 11 || value.length > 32 || value === name) {
			setErrorPassword({
				...errorPassword,
				error: true,
			});
		} else {
			setErrorPassword({
				...errorPassword,
				error: false,
			});
		}
	};

	

	return (
		<>
			<form>
				<FormInput
					value={name}
					placeholder='Name'
					setName={setName}
					validate={firstLetter}
					error={errorName}
				/>
				<FormInput
					value={email}
					placeholder='Email'
					setName={setEmail}
					validate={emailValidation}
					error={errorEmail}
				/>
				<FormInput
					value={password}
					placeholder='Password'
					setName={setPassword}
					validate={passwordValidation}
					error={errorPassword}
				/>
			</form>
			
		</>
	);
}

export default App;
