"use strict";

let noteList = new NoteList();

it("stores an array of note models", function() {
  noteList.addNote("test note");
  expect(noteList.getNotesList()[0].getText()).toEqual("test note");
});