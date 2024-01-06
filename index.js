"use strict";

(function() {

  /**
 * Add a function that will be called when the window is loaded.
 */
  window.addEventListener("load", init);
  // Static variables for names and ticket counts for leads
  const leadNamesTickets = [
    { name: 'Amelia', tickets: 88 },
    { name: 'Davis', tickets: 165 },
    { name: 'Casey', tickets: 25 },
    { name: 'Eli Reeb', tickets: 47 },
    { name: 'Abhay', tickets: 77 },
    { name: 'Lucas', tickets: 658 },
    { name: 'Oliver Huang', tickets: 5 },
    { name: 'Linda', tickets: 10 },
    { name: 'Lucia', tickets: 10 },
    { name: 'Alli', tickets: 5 }
  ];
  const temp1 = [...leadNamesTickets];

  // Static variables for names and ticket counts for nonleads
  const genNamesTickets = [
    { name: 'Eddie', tickets: 10 },
    { name: 'Ken Pham', tickets: 22 },
    { name: 'Quinn Pfiefer', tickets: 2 },
    { name: 'Prithvi', tickets: 5 }
  ];
  const temp2 = [...genNamesTickets];

  let slots = 5;

  /**
 * CHANGE: Describe what your init function does here.
 */
  function init() {
    console.log("hello");
    // THIS IS THE CODE THAT WILL BE EXECUTED ONCE THE WEBPAGE LOADS
    id("select-name").addEventListener("click", selectRandomName);
    id("stats").addEventListener("click", stopAnimation);
    populateNominees();
  }

  /**
 * Make sure to always add a descriptive comment above
 * every function detailing what it's purpose is
 * Use JSDoc format with @param and @return.
 */

// Function to select a random name and display it
// differetiates slots for lead and nonlead members
function selectRandomName() {
  if (slots > 2) {
    const totalTickets = temp1.reduce((acc, { tickets }) => acc + tickets, 0);

    if (totalTickets === 0) {
        alert('No tickets to select from.');
        return;
    }

    let randomNumber = Math.floor(Math.random() * totalTickets) + 1;
    let selectedName = '';

    for (const { name, tickets } of temp1) {
        randomNumber -= tickets;
        if (randomNumber <= 0) {
            selectedName = name;
            break;
        }
    }

    id('result').innerText = selectedName;
    populateSlot(selectedName);
    removeName(selectedName);
  } else {
    const totalTickets = temp2.reduce((acc, { tickets }) => acc + tickets, 0);

    if (totalTickets === 0) {
        alert('No tickets to select from.');
        return;
    }

    let randomNumber = Math.floor(Math.random() * totalTickets) + 1;
    let selectedName = '';

    for (const { name, tickets } of temp2) {
        randomNumber -= tickets;
        if (randomNumber <= 0) {
            selectedName = name;
            break;
        }
    }

    id('result').innerText = selectedName;
    populateSlot(selectedName);
    removeName(selectedName);
  }
}

// loads and displays the name and number of entries of all nominees to the page
function populateNominees() {
  let leadbucket = id("leads");
  for (let i = 0; i < leadNamesTickets.length; i++) {
    let nomineeInfo = gen("p");
    let nominee = leadNamesTickets[i].name;
    let ticket = leadNamesTickets[i].tickets;

    nomineeInfo.id = leadNamesTickets[i].name;
    nomineeInfo.innerText = nominee + " with " + ticket + " entries.";

    leadbucket.appendChild(nomineeInfo);
  }

  let genbucket = id("general");
  for (let i = 0; i < genNamesTickets.length; i++) {
    let nomineeInfo = gen("p");
    let nominee = genNamesTickets[i].name;
    let ticket = genNamesTickets[i].tickets;

    nomineeInfo.id = genNamesTickets[i].name;
    nomineeInfo.innerText = nominee + " with " + ticket + " entries.";

    genbucket.appendChild(nomineeInfo);
  }
}

// fills the slot with selected name and subtracts count
function populateSlot(selectedName) {
  if (slots == 0) {
    alert("5 names have been chosen! Refresh page to start again.");
    return;
  }
  let currSlotID = "n" + slots;
  id(currSlotID).innerText = selectedName;
  slots--;
}

// removes the name of selected nominee from possible choices after they have been chosen and displayed
function removeName(selectedName) {
  // Find the index of the selected name in the temporary array
  if (slots > 2) {
    const indexToRemove = temp1.findIndex(item => item.name === selectedName);

    if (indexToRemove !== -1) {
      // Remove the selected name from the temporary array
      temp1.splice(indexToRemove, 1);
    }
  } else {
    const indexToRemove = temp2.findIndex(item => item.name === selectedName);

    if (indexToRemove !== -1) {
      // Remove the selected name from the temporary array
      temp2.splice(indexToRemove, 1);
    }
  }
}

 // stops the blinking animation of the overall statistics
  function stopAnimation() {
    id("stats").style.animation = 'none';
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