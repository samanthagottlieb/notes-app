"use strict";

class NoteList {
  constructor() {
    this.notesArray = [];
  }

  getNotesList() {
    return this.notesArray;
  }

  addNote(note, noteClass = Note) {
    var newNote = new noteClass(note);
    this.notesArray.push(newNote);
  }
}