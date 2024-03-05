import "./App.css";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    console.log(notes);
    setNotes({
      title: "",
      content: "",
    });
  }
  return (
    <>
      <h1>Note taker</h1>
      <p>Add Note</p>

      <form action="submit">
        <input
          onChange={(e) => {
            setNotes({
              ...notes,
              title: e.target.value,
            });
          }}
          placeholder="Title"
          type="text"
          name="title"
          id="title"
          value={notes.title}
        />
        <input
          onChange={(e) => {
            setNotes({
              ...notes,
              content: e.target.value,
            });
          }}
          placeholder="Content"
          type="text"
          name="content"
          id="content"
          value={notes.content}
        />
        <input type="button" value="Submit" onClick={onSubmit} />
      </form>
    </>
  );
}

export default App;
