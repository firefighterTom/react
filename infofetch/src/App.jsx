import './App.css';
import {useInfoFetch} from './useInfoFetch'

function App() {
  const infoFetch =useInfoFetch("https://jsonplaceholder.typicode.com/todos/sda1");
  console.log(infoFetch)
	return (
		<div className='App'>
     
		</div>
	);
}

export default App;
