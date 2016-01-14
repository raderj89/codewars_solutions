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
var board = '003020600900305001001806400008102900700000008006708200002609500800203009005010300';

function Sudoku(board) {
  this.board = board;
  this.rows = [];
  this.columns = [];
  this.boxes = [];

  _prepareRowsColumnsAndBoxes().bind(this);

  function _prepareRowsColumnsAndBoxes() {
    console.log(this);
    for (var i = 1; i <= 9; i++) {
      this.rows.push([]);
      this.columns.push([]);
      this.boxes.push([]);
    }

    this.board.forEach(function(el, idx) {
      if (el !== "0") {
        this.rows[_rowFor(idx)].push(el);
        this.columns[_columnFor(idx)].push(el);
        this.boxes[_boxFor(idx)].push(el);
      }
    })
  }

  function _rowFor(idx) {
    return idx / 9;
  }

  function _columnFor(idx) {
    return idx % 9;
  }

  function _boxFor(idx) {
    return ((_columnFor(idx) / 3) + (_rowFor(idx) / 3) * 3)
  }

}

Sudoku.prototype.solve = function() {
  if (!_valid()) return true;
  if (_solved()) return true;

  nextEmptyIdx = this.board.indexOf("0");

  [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function(attempt, _) {
    this.board[nextEmptyIdx] = attempt;
    var solution = new Sudoku(this.board.join())
    return solution.solve();
  })

  return false;

  function _valid() {
    noDuplicates(this.rows) && noDuplicates(this.columns) && noDuplicates(this.boxes)
  }

  function _noDuplicates(set) {
    set.forEach(function(subset, _) {
      if (_uniq(subset).length !== subset.length) return false;
    })

    return true;
  }

  function _uniq(array) {
    return array.reduce(function(p, c) {
      if (p.indexOf(c) < 0) p.push(c);
      return p;
    }, []);
  }

  function _solved() {
    var zeros = this.board.filter(function(el) {
      return value === "0";
    });

    return zeroes.length === 0;
  }
}

var game = new Sudoku(board);
console.log(game.solve());
