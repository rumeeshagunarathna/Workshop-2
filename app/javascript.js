window.onload = function () {
  if (true) {
    let x = 1000;
    console.log(x);
  }
  console.log(x);
};

document.addEventListener('DOMContentLoaded', function() {
  // Get elements by their IDs
  var nameInput = document.getElementById('name');
  var sayHelloButton = document.getElementById('sayHello');
  var resultParagraph = document.getElementById('sayHello_result');

  // Event listener for the button click
  sayHelloButton.addEventListener('click', function() {
    // Get the value from the name input
    var name = nameInput.value;

    // Display a cheerful message with the entered name
    resultParagraph.textContent = "Hello, " + name + "! Have a great day!";
  });
});