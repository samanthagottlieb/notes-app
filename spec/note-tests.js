"use strict";

var note = new Note("test note");

it("stores text in text property", function() {
  expect(note.text).toEqual("test note");
});

it("returns note text", function() {
  expect(note.getText()).toEqual("test note")
});
