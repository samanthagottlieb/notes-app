var newGreeting = "Hi there"

function changeElem(newElem) {
  var elem = document.getElementById("app")
  elem.replaceWith(newElem)
};

changeElem(newGreeting);