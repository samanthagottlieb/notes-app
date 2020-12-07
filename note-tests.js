"use strict";

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

  function storesTextInTextProperty() {
    var note = new Note("test note");
    
    console.log("Test: storesTextInTextProperty");
    assert.isTrue(note.text === "test note");
  };
  
  storesTextInTextProperty();
