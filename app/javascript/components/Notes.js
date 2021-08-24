import React from "react";

const Notes = (props) => {
  return (
    <div>
      <h1>Notes Page</h1>
      <a href="/notes/new">Create a new note</a>
      {props.notes.map((note) => {
        return (
          <div style = {{margin:"20px", border:"1px solid" }} key={note.id}>
            <p>ID:{note.id}</p>
            <p>{note.title}</p>
            <p>{note.description}</p>
            <div>
              <a href={`/notes/${note.id}`}>Show Note</a>
              <p></p>
              <a href={`/notes/${note.id}/edit`}>Edit Note</a>
              <p></p>
              <a href={`/notes/${note.id}`} data-method="delete">Delete Note</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;