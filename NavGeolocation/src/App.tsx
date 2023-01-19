import './App.css';
import { UseGeolocation } from './UseGeolocation/UseGeolocation';

function App() {
	const coords = UseGeolocation();
	return (
		<div className='App'>
			{!coords.error ? (
				<>
					<p>latitude: {coords.coords.latitude}</p>
					<p>longitude: {coords.coords.longitude}</p>
				</>
			) : (
				<p>{coords.error.message}</p>
			)}
		</div>
	);
}

export default App;
