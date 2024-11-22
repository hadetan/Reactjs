import { useState } from 'react';
import './App.css';
import Note from './components/useState/Note';
import Parent from './components/useState/Parent';
import NameForm from './components/useState/NameForm';
import EssayForm from './components/useState/EssayForm';
import FlavoursForm from './components/useState/FlavoursForm';
import UncontrolledForm from './components/useState/UncontrolledForm';
import MyComponent from './components/useEffect/MyComponent';
import FocusInput from './components/useEffect/FocusInput';
import Timer from './components/useEffect/Timer';
import StopWatch from './components/useEffect/StopWatch';

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
			{/* <NameForm /> */}
			{/* <EssayForm /> */}
			{/* <FlavoursForm /> */}
			{/* <UncontrolledForm /> */}
			{/* <MyComponent /> */}
			{/* <FocusInput /> */}
			{/* <Timer /> */}
			<StopWatch />
		</div>
	);
}

export default App;
