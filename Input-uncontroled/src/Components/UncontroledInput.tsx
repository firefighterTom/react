import { RefObject } from 'react';

type Props = {
	placeholder: string;
	propRef: RefObject<HTMLInputElement>;
	error: { error: boolean; errorMsg: string };
};

export function UncontroledInput(props: Props) {
	return (
		<>
			<input placeholder={props.placeholder} ref={props.propRef} />
			{props.error.error && <p>{props.error.errorMsg}</p>}
		</>
	);
}
