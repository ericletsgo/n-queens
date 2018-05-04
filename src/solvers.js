/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var counter = 0; // if counter reaches n, return true; 
  var board = new Board({n:n});
  
  var check = function(i, j) {
    if (counter === n) {
      return;
    }
    
    board.togglePiece(i, j);
    if (!board.hasAnyRooksConflicts() && i < n && j < n) {
      counter++;
      check(i + 1, j);
    } else if (i < n && j < n) {
      board.togglePiece(i, j);
      check(i, j + 1);
    } else {
      return;
    }
  }
  check(0, 0);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  var board = new Board({n:n});
  
  var check = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
        
      if (!board.hasAnyRooksConflicts()) {
        check(row + 1);
      } 
    board.togglePiece(row, i);
    }
  }
  check(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution;
  var check = function(row) {
    if (row === n) {
      //solution += (board.rows());
      solution = board.rows().slice();
    }
    
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
        
      if (!board.hasAnyQueenConflictsOn(row,i)) {
        check(row + 1);
      } 
    board.togglePiece(row, i);
    }
  }
  // if (n === 0) {
  //   return [[]];
  // }
  check(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
