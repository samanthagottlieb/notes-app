"use strict";

it('returns a string of HTML representing an empty note list', function() {
  var noteList = new NoteList();
  noteList.addNote("")
  var emptyListView = new NoteListView(noteList);
  
  expect(emptyListView.displayHTML()).toEqual("<ul><li><div></div></li></ul>")
});

it('returns a string of HTML representing a single note list', function() {
  var noteList = new NoteList();
  noteList.addNote("One lonesome note")
  var singleNoteListView = new NoteListView(noteList);

  expect(singleNoteListView.displayHTML()).toEqual("<ul><li><div>One lonesome note</div></li></ul>");
});

it('returns a string of HTML representing a multiple notes list', function() {
  var noteList = new NoteList();
  noteList.addNote("One lonesome note")
  noteList.addNote("Second note for company")
  var multipleNoteListView = new NoteListView(noteList);

  expect(multipleNoteListView.displayHTML()).toEqual("<ul><li><div>One lonesome note</div></li><li><div>Second note for company</div></li></ul>");
});