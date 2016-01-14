var puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
]

function sudoku(puzzle) {
  console.log("PUZZLE:\n", puzzle);
  console.log("\n");
  var solvedPuzzle = [];

  for (var i = 0; i <= puzzle.length - 1; i++) {
    var currentRow = puzzle[i];
    var currentGrid = [];

    var attemptedNos = [];

    var currentColumn = [];

    for (var c = i; c < 9; c++) {
      if (c > 0) {
        for (var d = c - 1; d >= 0; d--) {
          currentColumn.push(puzzle[d][i]);
        }
      } else {
        currentColumn.push(puzzle[c][i]);
      }
    }

    console.log("CURRENT COLUMN:", currentColumn);

    for (var j = 0; j <= currentRow.length - 1; j++) {
      if (currentRow[j] == 0) {
        attemptedNos.push(attemptToFill(currentRow, currentColumn, j, attemptedNos));
      }

      if (currentRow[j] > 0) {
        attemptedNos.push(currentRow[j]);
      }
    }
    solvedPuzzle.push(currentRow);
  }
  console.log("SOLVED PUZZLE:\n", solvedPuzzle);
}

function attemptToFill(currentRow, currentColumn, idx, attemptedNos) {
  var i = 1;
  while (i < 10) {
    if (attemptedNos.indexOf(i) > -1 || currentColumn.indexOf(i) > -1) {
      i++;
    } else {
      currentRow[idx] = i;
      return i;
    }
  }
}

sudoku(puzzle);
