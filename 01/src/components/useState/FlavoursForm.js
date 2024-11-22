import React, { useState } from 'react';

const FlavoursForm = () => {
	const [flavour, setFlavour] = useState('lime');

	const handleChange = (e) => {
		setFlavour(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		alert(`Your favorite flavour is: ${flavour}`);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='flavour'>
					Pick your favorite fruit:
					<select name='flavour' id='flavour' onChange={handleChange}>
						<option value='mango'>Mango</option>
						<option value='coconut'>Coconut</option>
						<option value='lime'>Lime</option>
						<option value='grapeFruit'>Grape Fruit</option>
					</select>
				</label>
				<input type='submit' value='submit' />
			</form>
		</div>
	);
};

export default FlavoursForm;
