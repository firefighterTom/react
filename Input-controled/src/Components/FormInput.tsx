import { Dispatch, SetStateAction } from 'react';

type Props = {
	value: string;
	placeholder: string;
	setName: any;
	validate: Function;
	error: { error: boolean; errorMsg: string };
};

export function FormInput(props:Props) {
	return (
		<>
			<input
				placeholder={props.placeholder}
				value={props.value}
				onChange={(e) => {
					props.setName(e.target.value, props.validate(e.target.value));
				}}
			/>
			{props.error.error && <p>{props.error.errorMsg}</p>}
		</>
	);
}
// export function FormInput() {
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
//     const [error,setError]=useState('')
// 	console.log(email);
//     const handleError=()=>{

//     }
// 	return (
// 		<form onClick={handleError}>
// 			<label>Email</label>
// 			<input
// 				type='text'
// 				value={email}
// 				onChange={(e) => setEmail(e.currentTarget.value)}
// 			/>
// 			<label>Hasło</label>
// 			<input
// 				type='text'
// 				value={password}
// 				onChange={(e) => setPassword(e.currentTarget.value)}
// 			/>
// 		</form>
// 	);
// }
