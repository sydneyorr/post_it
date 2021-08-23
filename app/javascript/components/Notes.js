import React from 'react'

const Notes = (props) => {
  return (
    <div>
      <h1>Notes Page</h1>
      {props.notes.map(note=>{
        return <p key={note.id}>{note.name}</p>
      })}
    </div>
  );
};

export default Notes;