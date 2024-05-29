var grandParent = document.querySelector('.grandparent');
var parent = document.querySelector('.parent');
var button = document.querySelector('#click-me');

grandParent.addEventListener('click', function () {
    console.log('Grandparent');
    console.log(event)
});

parent.addEventListener('click', function () {
    console.log('Parent');
    console.log(event)
});

button.addEventListener('click', function () {
    console.log('Button');
    console.log(event)
    console.log(event.parentNode); // returns undefined because parent node isn't on the event
    console.log(event.target.parentNode) // parent node
    console.log(event.target.parentNode.parentNode) // grandparent node
    console.log(event.target.parentNode.parentNode.parentNode) // contatiner node
    console.log(event.target.parentNode.parentNode.parentNode.parentNode) // body node
    console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode) // html node
    console.log(event.target.childNodes)
});

/**
 * ## Order of operation

blanket term to describe all phases:

- event propogation

first phase, what happens:

- capturing!
- when an event occurs on the Dom
- looks from highest most parent down to where event occurs

second phase:

- targeting
- looking through the tree to see where the event occurred
- finding the Dom node!
- in this example the button

phase 3:

- after the targeting phase we traverse parent elements to see what happens next
    - do we only want to do a thing for the button
    - or do we want to do something at each parent level

    ### Pair Practice

Modify your code from earlier so that instead of logging a 
description of each element where an event was triggered,
 log the `event` object.

 - What other properties on the event object look particularly useful or interesting?
    - x and y location
    - pressure for touch screen options
- Dig into the event’s `target` property. Look for the following properties: 
className, classList, id
    - Look for the target’s `parentNode` property. Look for that parent’s parentNode.
     Look for *that* parent’s parentNode. How far up the DOM tree can you dig into
      the parent’s parents?
    - Look for the target’s `childNodes` property and `children` property. 
    How far down the DOM tree can you dig into the children’s children?
- Now update your `console.log` to log `event.target`. Click the grandparent, 
parent, and then button. What do you notice about the target? Do you see any 
similarities with the diagram we drew out earlier?
 */