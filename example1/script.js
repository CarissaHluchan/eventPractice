/**
 * ### Your Turn

You should see three buttons labeled “Click me!” as well as a button for 
adding new buttons to the page.

1. Spend some time reading through the code in script.js. 
You might want to add some of your own pseudocode.
2. After you’ve read every line, ask yourself:
    - Which elements are we selecting with `querySelector`’s?
        - addNewButton(.add-new), parent(.parent), all Buttons(.parent .click-me)
    - Which elements are we adding `eventListeners` to?
        - addNewButton(.add-new)
    - What happens when the user clicks the `addNewButton`?
        - a new button is created as a child at the end of the list in the parent tag
3. In the browser, click each of the “Click me!” buttons and 
verify that each one fires an `alert` notifying you that the button has in fact been clicked.
4. Add an additional button using the “Add a new button below.” button.
5. Click on your new button and observe the results.
    - nothing happens when the new button is clicked

    ### What did you notice?

*The event listeners are only bound to the buttons that were present 
when the page code was first loaded.*

The buttons we added later (using the `createButton` function)
 were not around when we added the listeners. Even though the newly created
  buttons are given the same class name that we are targeting with the `eventListener`,
   they didn’t exist at the time the listeners were attached, so they aren’t able
    to listen for those clicks, and thus they can’t call any functions at all.

Could we modify the function that adds new buttons so that it
 adds an event listener to the element before it appends to 
 the page? Yes we can, but unfortunately this isn’t preferred
  for reasons below.
 */


var addNewButton = document.querySelector('.add-new');
var parent = document.querySelector('.parent');
var allButtons = document.querySelectorAll('.parent .click-me');

addNewButton.addEventListener('click', createButton);
// add new button also has a listener

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', showAlert);
}
//adding listeners to all buttons -> presently in the parent

function showAlert() {
  alert('You clicked me!');
}

function createButton() {
  var newButton = document.createElement('button');
  newButton.className = 'click-me';
  newButton.innerText = "New click me button!";
  parent.appendChild(newButton);
}
