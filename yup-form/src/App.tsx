import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './SchemaRegisterForm';
import './App.css';
import * as yup from 'yup';
type FormData = yup.InferType<typeof schema>;
function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: yupResolver(schema) });

	console.log(errors);
	return (
		<div className='App'>
			<form
				onSubmit={handleSubmit((data:FormData) => {
					console.log(data);
				})}>
				<input {...register('Name')} placeholder='Name' type='text' />
				<p>{errors.Name?.message}</p>
				<input {...register('Email')} placeholder='Email' type='text' />
				<p>{errors.Email?.message}</p>
				<input {...register('Password')} placeholder='Password' type='text' />
				<p>{errors.Password?.message}</p>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default App;
