import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import axios from 'axios'


function App() {
  const [notes, setNotes] = useState([])

  function fetchNotes() {
    axios.get('https://cohort-6pfq.onrender.com/api/notes')
      .then((res) => {
        setNotes(res.data.notes)
      }, [])
  }

  function handleDeleteNote(noteId) {
    axios.delete(`https://cohort-6pfq.onrender.com/api/notes/${noteId}`)
    .then((res)=>{
      console.log(res.data)
      fetchNotes()
    })
    
  }

  function handleSubmit(e) {
    e.preventDefault()
    const {title, description} = e.target.elements

    axios.post('https://cohort-6pfq.onrender.com/api/notes', {
      title: title.value,
      description: description.value
    })
    .then((res)=>{
      console.log(res.data)
      fetchNotes()
    })
  }

  useEffect(() => {
    fetchNotes();
  }, [])

  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Enter Title'/>
        <input name='description' type="text" placeholder='Enter Description' />
        <button type="submit">Create Note</button>
      </form>
      <div className="notes">
        {
          notes.map((note) => {
            return <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button className="note-delete-button" onClick={() => { handleDeleteNote(note._id) }}>Delete</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
