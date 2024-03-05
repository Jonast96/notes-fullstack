import "./App.css";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function onSubmit(e) {
    e.preventDefault();

    // Endpoint where you're sending the POST request
    const endpoint = "http://localhost:3000/api/notes"; // Adjust the port and route as necessary

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notes),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log("Success:", data);
        // Clear the form fields after successful submission
        setNotes({
          title: "",
          content: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
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
