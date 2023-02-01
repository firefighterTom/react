import * as yup from 'yup';
export const schema = yup.object({
	Name: yup
		.string()
		.required('Required')
		.matches(/^[A-Z][a-z]*$/, 'Incorect name'),
	Email: yup
		.string()
		.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid mail'),
	Password: yup
		.string()
		.notOneOf([yup.ref('Name')], 'It cannot be the same as a Name')
		.required('Required')
		.min(12)
		.max(32),
});
