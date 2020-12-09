"use strict";

class NoteList {
  constructor() {
    this.notesArray = [];
  }

  getNotesList() {
    return this.notesArray;
  }

  addNote(note) {
    var newNote = new Note(note);
    this.notesArray.push(newNote);
  }
}