const Notes = ({ userData, newNote, setNewNote,handleNotes,handleDelete }) => {

  const notes = userData?.notes ?? [];

    return (
      <div className='noted'  >
        <h2>{"Stay on Track with Fitness Journaling"} </h2>
        <br></br>
        <label htmlFor='notes'>Notes</label>
        <input
          type='text'
          value={newNote}
          placeholder='Add a new note'
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button type='button' onClick={(e)=>handleNotes(e)}>
          Submit
        </button>
  
        {notes.map((note, index) => (
          <div key={note._id}>
            <p>{`${index + 1}. ${note.content}`}</p>
            <button type='button' onClick={() => handleDelete(note._id)} style={{ background: "#e74c3cb" }} >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Notes;
  