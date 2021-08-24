import React from "react";

const EditNote = (props) => {
  return (
    <div>
      <p>Form here</p>
      <form action ={`/notes/${props.note.id}`} method="post">
        <input type="hidden" name="_method" value = "patch"/>
        <p>Title</p>
        <input defaultValue = {props.note.title} name="note[title]" />
        <p>Description</p>
        <input defaultValue = {props.note.description} name="note[description]" />
        <button type = "submit">Update</button>
      </form>
      <a href="/">Notes</a>
    </div>
  );
};

export default EditNote;