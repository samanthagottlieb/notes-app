"use strict";

function expect(a) {
  return {
    toEqual: function(b) {
      if (a === b) {
        console.log("Pass")
      } else {
        console.log("Fail")
      }
    },
    isTrue: function(assertionToCheck) {
      if (assertionToCheck) {
        console.log("Test passed")
      } else {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    },
  }
};

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
};
