import React, { useState } from 'react';

const EssayForm = () => {
	const [essay, setEssay] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleChange = (event) => {
		setEssay(event.target.value);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='paragraph'>
					Essay:
					<textarea
                        value={essay}
                        placeholder='Enter your favorite food'
						name='paragraph'
						id='paragraph'
						onChange={handleChange}
                        cols={25}
                        rows={10}
					/>
				</label>
                <input type="submit" value="submit"/>
                <p>Your essay was: {essay}</p>
			</form>
		</div>
	);
};

export default EssayForm;
