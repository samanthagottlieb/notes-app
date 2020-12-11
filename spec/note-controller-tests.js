"use strict";

var noteController = new NoteController();

it("creates an instance of the NoteController class", function() {
  expect(noteController.noteList.notesArray.length).toEqual(1)
})