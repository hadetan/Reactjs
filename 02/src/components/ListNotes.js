import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../store/slices/NoteSlice';

const ListNotes = () => {
    const notes = useSelector(state => state.NoteReducer.note);

    const dispatch = useDispatch();
  return (
    <div>
        {notes.map((note) => {
            return <div>
                <p>{note.id}</p>
                <h1>{note.title}</h1>
                <p>{note.desc}</p>
                <button onClick={() => dispatch(deleteNote(note.id))}>Delete note</button>
            </div>
        })}
    </div>
  )
}

export default ListNotes