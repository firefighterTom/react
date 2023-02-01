import './App.css';
import { FormEvent, useState } from 'react';
import { UncontroledInput } from './Components/UncontroledInput';
import { useRef } from 'react';

function App() {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
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
		if (
			value.length < 11 ||
			value.length > 32 ||
			value === nameRef.current?.value
		) {
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

	// UncontroledInput
	// Add errorState

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (nameRef.current && emailRef.current && passwordRef.current) {
			console.log(nameRef.current.value);
			firstLetter(nameRef.current.value);
			emailValidation(emailRef.current.value);
			passwordValidation(passwordRef.current.value);
		}
	};

	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<UncontroledInput
					placeholder='Name'
					error={errorName}
					propRef={nameRef}
				/>
				<UncontroledInput
					placeholder='Email'
					error={errorEmail}
					propRef={emailRef}
				/>
				<UncontroledInput
					placeholder='Password'
					error={errorPassword}
					propRef={passwordRef}
				/>
				<button type='submit'>Submit</button>
			</form>
		</>
	);
}

export default App;
