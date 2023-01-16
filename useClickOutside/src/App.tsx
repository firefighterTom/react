import { useClickOutside } from './useClickOutside';
import { useRef } from 'react';
import './App.css';

function App() {
	const divElement = useRef(null);
	function cb(msg:string) {
		console.log(msg);
	}
	useClickOutside(divElement, () => {
		cb('close modal');
	});
	return (
		<div>
			<div
				id='clickMe'
				ref={divElement}
				style={{ backgroundColor: 'white', width: 100, height: 100 }}></div>
		</div>
	);
}

export default App;
