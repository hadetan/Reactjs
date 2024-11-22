import React, { useState } from 'react'
import SingleNote from './SingleNote'

const Note = () => {
    const [notes, setNote] = useState([])
    const [curNote, setCurNote] = useState("123")

    const updateNote = (event) => {
        setCurNote(event.target.value);
    }

    const addNote = () => {
        const newNote = [...notes, curNote];
        setNote(newNote)
    }
  return (
    <div>
        <input type="text" onChange={updateNote}/>
        <button onClick={addNote}>add Note</button>
        <ul>
            {notes.map((note, index) => {
                return <li key={index}><SingleNote note={note}/></li>
            })}
        </ul>
    </div>
  )
}

export default Note