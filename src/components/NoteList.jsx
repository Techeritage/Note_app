import React, { useState } from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, editNote, deleteNote }) => {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-medium text-blue-500">notes</h1>
      <div>
        {notes.length === 0 ? (
          <div className="h-[70vh] flex items-center justify-center">
            <p className="max-sm:text-sm">
              No note available. Create a new note today!
            </p>
          </div>
        ) : (
          <div className="grid gap-3 mt-4">
            {notes.map((note, index) => (
              <NoteCard
                key={note.title}
                data={note}
                index={index}
                editNote={editNote}
                deleteNote={deleteNote}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NoteList;
