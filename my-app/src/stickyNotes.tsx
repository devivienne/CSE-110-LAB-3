// import './App.css';

// import { ClickCounter, useListFavorite, ToggleTheme } from "./hooksExercise"; // Import ClickCounter

// import { Label, Note } from "./types"; // Import the Label type from the appropriate module
// import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module

// import { useState } from 'react';




// export const StickyNotes = () => {
//     const { favorite, clickFavorite } = useListFavorite();

//     const [darkMode, setDarkMode] = useState(false);
  
//     const toggleDarkMode = () => {
//       const element = document.body;
//       element.classList.toggle("dark-mode");
//       setDarkMode(!darkMode);
//     };
    
  
//     const [notes, setNotes] = useState(dummyNotesList); 
//     const initialNote = {
//       id: -1,
//       title: "",
//       content: "",
//       label: Label.other,
//     };
//     const [createNote, setCreateNote] = useState(initialNote);
  
//     const createNoteHandler = (event: React.FormEvent) => {
//       event.preventDefault();
//       console.log("title: ", createNote.title);
//       console.log("content: ", createNote.content);
//       createNote.id = notes.length + 1;
//       setNotes([createNote, ...notes]);
//       setCreateNote(initialNote);
//     };
  
  
//     const deleteNoteHandler = (noteId: number) => {
//       const newNotes = notes.filter((note) => note.id !== noteId); 
//       setNotes(newNotes); 
//     };
  
//     // const [selectedNote, setSelectedNote] = useState<Note>(initialNote);
  
//     const editNoteHandler = (noteId: number, updatedField: Partial<Note>) => {
//       const newNotes = notes.map(note => {
//         if (note.id == noteId) {
//           return { ...note, ...updatedField };
//         }
//         return note;
//       });
//       setNotes(newNotes);
//     };
  
  
    
//     return (
//       <div className='app-container'>
//         <form className="note-form" onSubmit={createNoteHandler}>
//           <div>
//             <input
//               placeholder="Note Title"
//             value={createNote.title}
//               onChange={(event) =>
//                 setCreateNote({ ...createNote, title: event.target.value })}
//               required>
//             </input>
//           </div>
  
      /*    <div>
            <textarea
            placeholder="Note Content"
            value={createNote.content}
              onChange={(event) =>
                setCreateNote({ ...createNote, content: event.target.value })}
              required>
            </textarea>
          </div>*/
  
//     <div>
//            <select
//           value={createNote.label}
//              onChange={(event) =>
//                setCreateNote({ ...createNote, label: event.target.value as Label })}
//              required>
//              <option value={Label.personal}>Personal</option>
//              <option value={Label.study}>Study</option>
//              <option value={Label.work}>Work</option>
//              <option value={Label.other}>Other</option>
//            </select>
//          </div>
  
//           <div><button type="submit">Create Note</button></div>
//         </form>
  
//       {/* Displaying the list of notes */}
//       <div className="notes-grid">
//           {notes.map((note) => (
//             <div key={note.id} className="note-item">
//               <div className="notes-header">
//                 <button onClick={() => deleteNoteHandler(note.id)}>x</button>
//                 <button onClick={() => clickFavorite(note.title)}>
//                   {favorite.includes(note.title) ? "❤️" : "🤍"}
//                 </button>
//               </div>
  
//               {/* Editing notes */}
//               <h2
//                 contentEditable="true"
//                 suppressContentEditableWarning={true}
//                 onBlur={(e) => editNoteHandler(note.id, { title: e.target.innerText })}
//               >
//                 {note.title}
//               </h2>
//               <div
//                 contentEditable="true"
//                 suppressContentEditableWarning={true}
//                 onBlur={(e) => editNoteHandler(note.id, { content: e.target.innerText })}
//               >
//                 {note.content}
//               </div>
//               <p
//                 contentEditable="true"
//                 suppressContentEditableWarning={true}
//                 onBlur={(e) => editNoteHandler(note.id, { label: e.target.innerText as Label })}
//               >
//                 {note.label}
//               </p>
//             </div>
//           ))}
//         </div>
  
//         {/* Favorite Note List Display */}
//         <div className="favorites-list">
//           <h2>Favorite Notes</h2>
//           <ul>
//             {favorite.map((favoriteTitle) => {
//               const favoriteList = notes.find(note => note.title === favoriteTitle);
//               return favoriteList ? <li key={favoriteTitle}>{favoriteList.title}</li> : null;
//             })}
//           </ul>
//         </div>
  
        
  
//         {/* Toggle button for switching to light or dark mode */}
//         <button 
//           onClick={toggleDarkMode}
//           className="darkmode-toggle"
//         >
//           Switch to {darkMode ? "light mode" : "dark mode"}
//         </button>
  
//         {/* <ToggleTheme /> */}
  
  
//         <ClickCounter />
//       </div>
//     );
//     }


// import './App.css';

// import { ClickCounter, useListFavorite, ToggleTheme } from "./hooksExercise";
// import { Label, Note } from "./types";
// import { dummyNotesList } from "./constants";

// import { useState } from 'react';

// export const StickyNotes = () => {
//   const { favorite, clickFavorite } = useListFavorite();
//   const [darkMode, setDarkMode] = useState(false);
  
//   const toggleDarkMode = () => {
//     const element = document.body;
//     element.classList.toggle("dark-mode");
//     setDarkMode(!darkMode);
//   };
  
//   const [notes, setNotes] = useState(dummyNotesList);
//   const initialNote = {
//     id: -1,
//     title: "",
//     content: "",
//     label: Label.other,
//   };
//   const [createNote, setCreateNote] = useState(initialNote);

//   const createNoteHandler = (event: React.FormEvent) => {
//     event.preventDefault();
//     createNote.id = notes.length + 1;
//     setNotes([createNote, ...notes]);
//     setCreateNote(initialNote);
//   };

//   const deleteNoteHandler = (noteId: number) => {
//     const newNotes = notes.filter((note) => note.id !== noteId);
//     setNotes(newNotes);
//   };

//   const editNoteHandler = (noteId: number, updatedField: Partial<Note>) => {
//     const newNotes = notes.map(note => {
//       if (note.id === noteId) {
//         return { ...note, ...updatedField };
//       }
//       return note;
//     });
//     setNotes(newNotes);
//   };

//   return (
//     <div className='app-container'>
//       <form className="note-form" onSubmit={createNoteHandler}>
//         <div>
//           <input
//             placeholder="Note Title"
//             value={createNote.title}
//             onChange={(event) =>
//               setCreateNote({ ...createNote, title: event.target.value })}
//             required
//           />
//         </div>

//         <div>
//           <textarea
//             placeholder="Note Content" // Add this placeholder to match the test
//             value={createNote.content}
//             onChange={(event) =>
//               setCreateNote({ ...createNote, content: event.target.value })}
//             required
//           />
//         </div>

//         <div>
//           <select
//             value={createNote.label}
//             onChange={(event) =>
//               setCreateNote({ ...createNote, label: event.target.value as Label })}
//             required
//           >
//             <option value={Label.personal}>Personal</option>
//             <option value={Label.study}>Study</option>
//             <option value={Label.work}>Work</option>
//             <option value={Label.other}>Other</option>
//           </select>
//         </div>

//         <div>
//           <button type="submit">Create Note</button>
//         </div>
//       </form>

//       {/* Displaying the list of notes */}
//       <div className="notes-grid" data-testid="notes-grid">
//         {notes.map((note) => (
//           <div key={note.id} className="note-item">
//             <div className="notes-header">
//               <button onClick={() => deleteNoteHandler(note.id)}data-testid={`delete-note-${note.id}`}>x</button>
//               <button onClick={() => clickFavorite(note.title)}>
//                 {favorite.includes(note.title) ? "❤️" : "🤍"}
//               </button>
//             </div>

//             {/* Editing notes */}
//             <h2
//               contentEditable="true"
//               suppressContentEditableWarning={true}
//               onBlur={(e) => editNoteHandler(note.id, { title: e.target.innerText })}
//             >
//               {note.title}
//             </h2>
//             <div
//               contentEditable="true"
//               suppressContentEditableWarning={true}
//               onBlur={(e) => editNoteHandler(note.id, { content: e.target.innerText })}
//             >
//               {note.content}
//             </div>
//             <p
//               contentEditable="true"
//               suppressContentEditableWarning={true}
//               onBlur={(e) => editNoteHandler(note.id, { label: e.target.innerText as Label })}
//             >
//               {note.label}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Favorite Note List Display */}
//       <div className="favorites-list">
//         <h2>Favorite Notes</h2>
//         <ul>
//           {favorite.map((favoriteTitle) => {
//             const favoriteList = notes.find(note => note.title === favoriteTitle);
//             return favoriteList ? <li key={favoriteTitle}>{favoriteList.title}</li> : null;
//           })}
//         </ul>
//       </div>

//       {/* Toggle button for switching to light or dark mode */}
//       <button 
//         onClick={toggleDarkMode}
//         className="darkmode-toggle"
//       >
//         Switch to {darkMode ? "light mode" : "dark mode"}
//       </button>

//       <ClickCounter />
//     </div>
//   );
// };


import './App.css';
import { ClickCounter, useListFavorite, ToggleTheme } from "./hooksExercise";
import { Label, Note } from "./types";
import { dummyNotesList } from "./constants";
import { useState } from 'react';

export const StickyNotes = () => {
  const { favorite, clickFavorite } = useListFavorite();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const element = document.body;
    element.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  const [notes, setNotes] = useState<Note[]>(dummyNotesList);

  const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
  };
  const [createNote, setCreateNote] = useState<Note>(initialNote);

  const createNoteHandler = (event: React.FormEvent) => {
    event.preventDefault();
    createNote.id = notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1; 
    setNotes([createNote, ...notes]);
    setCreateNote(initialNote);
  };

  const deleteNoteHandler = (noteId: number) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };

  const editNoteHandler = (noteId: number, updatedField: Partial<Note>) => {
    const newNotes = notes.map(note => {
      if (note.id === noteId) {
        return { ...note, ...updatedField };
      }
      return note;
    });
    setNotes(newNotes);
  };

  return (
    <div className='app-container'>
      <form className="note-form" onSubmit={createNoteHandler}>
        <div>
          <input
            placeholder="Note Title"
            value={createNote.title}
            onChange={(event) =>
              setCreateNote({ ...createNote, title: event.target.value })}
            required
          />
        </div>

        <div>
          <textarea
            placeholder="Note Content"
            value={createNote.content}
            onChange={(event) =>
              setCreateNote({ ...createNote, content: event.target.value })}
            required
          />
        </div>

        <div>
          <select
            value={createNote.label}
            onChange={(event) =>
              setCreateNote({ ...createNote, label: event.target.value as Label })}
            required
          >
            <option value={Label.personal}>Personal</option>
            <option value={Label.study}>Study</option>
            <option value={Label.work}>Work</option>
            <option value={Label.other}>Other</option>
          </select>
        </div>

        <div>
          <button type="submit">Create Note</button>
        </div>
      </form>

      <div className="notes-grid" data-testid="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <div className="notes-header">
              <button
                onClick={() => deleteNoteHandler(note.id)}
                data-testid={`delete-note-${note.id}`}
              >
                x
              </button>
              <button onClick={() => clickFavorite(note.title)}>
                {favorite.includes(note.title) ? "❤️" : "🤍"}
              </button>
            </div>
            <h2
              contentEditable="true"
              suppressContentEditableWarning={true}
              onBlur={(e) => editNoteHandler(note.id, { title: e.target.innerText })}
            >
              {note.title}
            </h2>
            <div
              contentEditable="true"
              suppressContentEditableWarning={true}
              onBlur={(e) => editNoteHandler(note.id, { content: e.target.innerText })}
            >
              {note.content}
            </div>
            <p
              contentEditable="true"
              suppressContentEditableWarning={true}
              onBlur={(e) => editNoteHandler(note.id, { label: e.target.innerText as Label })}
            >
              {note.label}
            </p>
          </div>
        ))}
      </div>

      <div className="favorites-list">
        <h2>Favorite Notes</h2>
        <ul>
          {favorite.map((favoriteTitle) => {
            const favoriteList = notes.find(note => note.title === favoriteTitle);
            return favoriteList ? <li key={favoriteTitle}>{favoriteList.title}</li> : null;
          })}
        </ul>
      </div>

      <button onClick={toggleDarkMode} className="darkmode-toggle">
        Switch to {darkMode ? "light mode" : "dark mode"}
      </button>

      <ClickCounter />
    </div>
  );
};