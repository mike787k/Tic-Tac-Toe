## Problem 1
## Tic-Tac-Toe!

---

## Instructions

In this assignment, you will be working with adding DOM events to the provided elements. The goal is to make a functioning tic-tac-toe game where users can use the mouse to left/right click to mark the provided squares with X's and O's. You **DO NOT** need to create a check for win/lose condition (seeing if there's any 3 in a row), however there is a "reset" button that you must implement to clear the board/squares.

---

## Requirements


- Code your solution into the provided `solution.js`.
- **DO NOT** modify anything inside `index.html`
- Although styling will not be graded, feel free to modify styling in `index.css`


### Adding X's
```text
As a USER playing this tic-tac-toe game
WHEN I hover my mouse over any of squares
AND the square is empty or has an O in it
AND I left-click on the square
I SHOULD see an X show up on the square's inner text content
```

### Adding O's
```text
As a USER playing this tic-tac-toe game
WHEN I hover my mouse over any of squares
AND the square has an X in it
AND I left-click on the square
I SHOULD see an O show up on the square's inner text content
```


### Resetting 
```text
As a USER playing this tic-tac-toe game
WHEN I click the RESET button on the page (either left or right click)
I SHOULD see the board clear out
AND I should not see any inner text content on any of the squares
```