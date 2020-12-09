"use strict";

class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }

  displayHTML() {
    var noteListArray = this.noteList.getNotesList()
    var notesListHTML = "<ul>" + noteListArray.map(func).join("") + "</ul>"

    function func(note) {
      return "<li><div>" + note.getText() + "</div></li>"
    }

    return notesListHTML
  }
}