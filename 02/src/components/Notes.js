import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../store/slices/NoteSlice';
import { nanoid } from 'nanoid';

const Notes = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(
			createNote({
				title,
				desc,
				id: nanoid(10),
			})
		);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor=''>
					Title:
					<input
						type='text'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<label htmlFor=''>
					Description:
					<input
						type='text'
						onChange={(e) => setDesc(e.target.value)}
					/>
				</label>
				<input type='submit' onClick={handleSubmit} />
			</form>
		</div>
	);
};

export default Notes;
