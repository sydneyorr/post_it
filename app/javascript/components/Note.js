import React from 'react'

const Note = (props) => {
  return (
  <div>
    <h1>{props.note.title}</h1>
    <h1>{props.note.description}</h1>
    <a href="/">Notes</a>
  </div>
  );
};

export default Note;