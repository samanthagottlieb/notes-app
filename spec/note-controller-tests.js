"use strict";

class NoteDoubleThree {
  constructor(text) {
    this.text = text;
  }
  getText() {
    return this.text;
  }
};

class NoteListDoubleTwo {
  constructor() {
    this.notesArray = [];
  }

  getNotesList() {
    return this.notesArray;
  }

  addNote(note, noteClass = NoteDoubleThree) {
    var newNote = new noteClass(note);
    this.notesArray.push(newNote);
  }
};

class NoteListViewDouble {
  constructor(noteList) {
    this.noteList = noteList;
  }

  displayHTML() {
  return "<ul><li><div>Favourite drink: sparkling water</div></li></ul>"
  }
};

it("creates an instance of the NoteController class", function() {
  var noteController = new NoteController(NoteListDouble);

  expect(noteController.noteList.notesArray.length).toEqual(1)
});

it("contains <ul><li><div>Favourite drink: sparkling water</div></li></ul> as the app element innerHTML property", function() {
  var noteController = new NoteController(NoteListDoubleTwo, NoteListViewDouble);
  noteController.insertHTML();

  expect(document.getElementById("app").innerHTML).toEqual("<ul><li><div>Favourite drink: sparkling water</div></li></ul>")
})
