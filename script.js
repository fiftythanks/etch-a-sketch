/* 
1. Create a webpage with a 16x16 grid of square divs.

• Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
• It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.
• Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!
• Be careful with borders and margins, as they can adjust the size of the squares!
• “OMG, why isn’t my grid being created???”
    • Did you link your CSS stylesheet?
    • Open your browser’s developer tools.
    • Check if there are any errors in the JavaScript console.
    • Check your “elements” panel to see if the elements have actually shown up but are somehow hidden.
    • Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded. 

2. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
*/

const grid = document.querySelector("#grid");
for(let i = 1; i <= 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 1; j <= 16; j++) {
    const el = document.createElement("div");
    row.appendChild(el);
  }
  grid.appendChild(row);
}

document.querySelector("button").addEventListener("click", resetGrid);

function resetGrid() {
  let cols;
  let rows;
  function resetColumns() {
    cols = parseInt(prompt("How many columns do you want the grid to have? Type in a positive integer number that is less than or equal to 100."));

    if (!(Number.isInteger(cols) && cols > 0 && cols <= 100)) {
      alert("The number has to be a positive integer less than or equal to 100!");
      return resetColumns();
    } else {
      return cols;
    }
  }
  resetColumns();

  function resetRows() {
    rows = parseInt(prompt("How many rows do you want the grid to have? Type in a positive integer number that is less than or equal to 100."));

    if (!(Number.isInteger(rows) && rows > 0 && rows <= 100)) {
      alert("The number has to be a positive integer less than or equal to 100!");
      return resetColumns();
    } else {
      return rows;
    }
  }
  resetRows();

  Array.from(grid.children).forEach((child) => {
    child.remove();
  });

  for(let i = 1; i <= rows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= cols; j++) {
      const el = document.createElement("div");
      row.appendChild(el);
    }
    grid.appendChild(row);
  }
}