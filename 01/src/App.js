import { useState } from 'react';
import './App.css';
import Note from './components/Note';
import Parent from './components/Parent';

function App() {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);

	// const loginOrLogout = () => {
	// 	setIsLoggedIn(!isLoggedIn)
	// }

	// const [name, setName] = useState("");
	// const [age, setAge] = useState(0);

	// const [user, setUser] = useState({name: "", age: 0})

	// const onChangeName = (event) => {
	// 	setUser({...user, name: event.target.value});
	// }
	// const onChangeAge = (event) => {
	// 	setUser({...user, age: event.target.value});
	// }
	return (
		<div className='App'>
			{/* {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please Login!</h1>}
			<button onClick={loginOrLogout}>{isLoggedIn ? "logout" : "Login"}</button> */}

			{/* <input type="text" onChange={onChangeName}/>
			<input type="number" onChange={onChangeAge}/>
			<h1>name: {user.name}, age: {user.age}</h1> */}

			{/* <Note /> */}
			{/* <Parent /> */}
		</div>
	);
}

export default App;
