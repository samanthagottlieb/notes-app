"use strict";

class NoteController {
  constructor(noteListClass = NoteList, noteListViewClass = NoteListView) {
    this.noteList = new noteListClass();
    this.noteList.addNote("Favourite drink: sparkling water");
    this.noteListView = new noteListViewClass(this.noteList);
  }

  insertHTML() {
    document.getElementById("app").innerHTML = this.noteListView.displayHTML();
  }
}

var controller = new NoteController();
controller.insertHTML();
