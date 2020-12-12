"use strict";

class NoteDouble {
  constructor(text) {
    this.text = text;
  }
  getText() {
    return this.text;
  }
};

it("stores an array of note models", function() {
  var noteList = new NoteList();
  noteList.addNote("test note");

  expect(noteList.notesArray[0].getText()).toEqual("test note");
});

it("adds a note to notes array", function() {
  var noteList = new NoteList();
  noteList.addNote("fake note", NoteDouble)
  
  expect(noteList.getNotesList()[0].getText()).toEqual("fake note");
});
