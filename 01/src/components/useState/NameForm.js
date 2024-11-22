import React, { useState } from 'react';

const NameForm = () => {
	const [name, setName] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

        alert("Your name is " + name);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
                    Name:
					<input type='text' value={name} onChange={handleNameChange} />
				</label>
				<input type='submit' />
			</form>
		</div>
	);
};

export default NameForm;
