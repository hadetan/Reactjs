import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import ListNotes from './components/ListNotes';
import Notes from './components/Notes';

function App() {
	return (
		<div className='App'>
			{/* <Child1 />
			<Child2 /> */}
			<Notes />
			<ListNotes />
		</div>
	);
}

export default App;
