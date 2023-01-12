import './App.css';
import {useRandomJoke} from './useRandomJokes'

function App() {
  const infoFetch =useRandomJoke("https://jsonplaceholder.typicode.com/todos/sda1");
  console.log(infoFetch)
	return (
		<div className='App'>
     
		</div>
	);
}

export default App;
