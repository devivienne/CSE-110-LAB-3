import './App.css';

import { ClickCounter, useListFavorite, ToggleTheme } from "./hooksExercise"; // Import ClickCounter

import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module

import { useState } from 'react';

function App() {

  const { favorite, clickFavorite } = useListFavorite();

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const element = document.body;
    element.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };
  

  const [notes, setNotes] = useState(dummyNotesList); 
  const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
  };
  const [createNote, setCreateNote] = useState(initialNote);

  const createNoteHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("title: ", createNote.title);
    console.log("content: ", createNote.content);
    createNote.id = notes.length + 1;
    setNotes([createNote, ...notes]);
    setCreateNote(initialNote);
  };


  const deleteNoteHandler = (noteId: number) => {
    const newNotes = notes.filter((note) => note.id !== noteId); 
    setNotes(newNotes); 
  };


  
  return (
    <div className='app-container'>
  	<form className="note-form" onSubmit={createNoteHandler}>
    	<div>
      	<input
        	placeholder="Note Title"
        	onChange={(event) =>
          	setCreateNote({ ...createNote, title: event.target.value })}
        	required>
      	</input>
    	</div>

    	<div>
      	<textarea
        	onChange={(event) =>
          	setCreateNote({ ...createNote, content: event.target.value })}
        	required>
      	</textarea>
    	</div>

  <div>
     	<select
       	onChange={(event) =>
         	setCreateNote({ ...createNote, label: event.target.value as Label })}
       	required>
       	<option value={Label.personal}>Personal</option>
       	<option value={Label.study}>Study</option>
       	<option value={Label.work}>Work</option>
       	<option value={Label.other}>Other</option>
     	</select>
   	</div>

    	<div><button type="submit">Create Note</button></div>
  	</form>


      {/* Displaying the list of notes */}
      <div className="notes-grid">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note-item">
            <div className="notes-header">
            <button onClick={() => deleteNoteHandler(note.id)}>x</button>
              <button onClick={() => clickFavorite(note.title)}>
                {favorite.includes(note.title) ? "❤️" : "🤍"}
              </button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p>{note.label}</p>
          </div>
        ))}
      </div>

       {/* Favorite Note List Display */}
       <div className="favorites-list">
        <h2>Favorite Notes</h2>
        <ul>
          {/* favorite is an array */}
          {favorite.map((favoriteTitle) => {
            const favoriteList = dummyNotesList.find(note => note.title === favoriteTitle);
            return favoriteList ? <li key={favoriteTitle}>{favoriteList.title}</li> : null;
          })}
        </ul>
      </div>

      {/* Toggle button for switching to light or dark mode */}
      <button 
        onClick={toggleDarkMode}
        className="darkmode-toggle"
      >
        Switch to {darkMode ? "light mode" : "dark mode"}
      </button>

      {/* <ToggleTheme /> */}


      <ClickCounter />
    </div>
  );
}

export default App;

