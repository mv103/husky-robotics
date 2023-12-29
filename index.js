"use strict";

(function() {

  /**
 * Add a function that will be called when the window is loaded.
 */
  window.addEventListener("load", init);
  // Static variables for names and ticket counts
  const namesAndTickets = [
    { name: 'Mary', tickets: 500 },
    { name: 'John', tickets: 100 },
    { name: 'Kira', tickets: 80 },
    { name: 'Olive', tickets: 50 },
    { name: 'Bob', tickets: 77 }
  ];

  /**
 * CHANGE: Describe what your init function does here.
 */
  function init() {
    console.log("hello");
    // THIS IS THE CODE THAT WILL BE EXECUTED ONCE THE WEBPAGE LOADS
    id("select-name").addEventListener("click", selectRandomName);
  }

  /**
 * Make sure to always add a descriptive comment above
 * every function detailing what it's purpose is
 * Use JSDoc format with @param and @return.
 */

// Function to select a random name and display it
function selectRandomName() {
  const totalTickets = namesAndTickets.reduce((acc, { tickets }) => acc + tickets, 0);

  if (totalTickets === 0) {
      alert('No tickets to select from.');
      return;
  }

  let randomNumber = Math.floor(Math.random() * totalTickets) + 1;
  let selectedName = '';

  for (const { name, tickets } of namesAndTickets) {
      randomNumber -= tickets;
      if (randomNumber <= 0) {
          selectedName = name;
          break;
      }
  }

  document.getElementById('result').innerText = selectedName;
}

  /**
 * Make sure to always add a descriptive comment above
 * every function detailing what it's purpose is
 * @param {variabletype} someVariable This is a description of someVariable, including, perhaps, preconditions.
 * @returns {returntype} A description of what this function is actually returning
 */
  function exampleFunction2(someVariable) {
    /* SOME CODE */
    return something;
  }

  /** ------------------------------ Helper Functions  ------------------------------ */
  /**
 * Note: You may use these in your code, but remember that your code should not have
 * unused functions. Remove this comment in your own code.
 */

  /**
 * Returns the element that has the ID attribute with the specified value.
 * @param {string} idName - element ID
 * @returns {object} DOM object associated with id.
 */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
 * Returns the first element that matches the given CSS selector.
 * @param {string} selector - CSS query selector.
 * @returns {object} The first DOM object matching the query.
 */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
 * Returns the array of elements that match the given CSS selector.
 * @param {string} selector - CSS query selector
 * @returns {object[]} array of DOM objects matching the query.
 */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
 * Returns a new element with the given tag name.
 * @param {string} tagName - HTML tag name for new DOM element.
 * @returns {object} New DOM object for given HTML tag.
 */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();