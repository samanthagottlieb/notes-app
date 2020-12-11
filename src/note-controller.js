"use strict";

class NoteController {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList;
    noteList.addNote("Favourite drink: sparkling water")
    this.noteListView = new NoteListView(noteList);
  }

  insertHTML() {
    document.getElementById("app").innerHTML = this.noteListView.displayHTML();
  }
}

var controller = new NoteController();
controller.insertHTML();
