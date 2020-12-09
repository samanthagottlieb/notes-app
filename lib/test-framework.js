"use strict";

function expect(a) {
  return {
    toEqual: function(b) {
      if (a === b) {
        console.log("\x1b[32m%s\x1b[0m", "🎉 " + "Pass");
      } else {
        console.log("\x1b[31m%s\x1b[0m", "💀 " + "Fail");
      }
    }
  }
}

function it(label, callback) {
  console.log(`Test: ${label}`);
  callback();
}

function double() {
  Object.entries(arguments[1]).forEach(([key, val]) => arguments[1][key] = function() {
      return val;
  });

  return arguments[1];
}
