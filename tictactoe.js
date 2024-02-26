// Define constants for players
const PLAYER_X = 'X';
const PLAYER_O = 'O';

// Initialize game state
let currentPlayer = PLAYER_X;
let board = ['', '', '', '', '', '', '', '', ''];

// Function to check if the current player wins
function checkWinner(player) {
    // Define winning combinations
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    // Check each winning combination
    for (let combination of winCombinations) {
        if (combination.every(index => board[index] === player)) {
            return true; // Player wins
        }
    }
    return false; // No winner yet
}

// Function to handle player move
function handleMove(cellIndex) {
    // Check if cell is empty and game is not over
    if (board[cellIndex] === '' && !isGameOver()) {
        // Update board and check for winner
        board[cellIndex] = currentPlayer;
        renderBoard();
        if (checkWinner(currentPlayer)) {
            announceWinner(currentPlayer);
        } else if (isBoardFull()) {
            announceDraw();
        } else {
            currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        }
    }
}

// Function to render game board
function renderBoard() {
    for (let i = 0; i < board.length; i++) {
        document.getElementById(`cell${i}`).textContent = board[i];
    }
}

// Function to check if the board is full
function isBoardFull() {
    return board.every(cell => cell !== '');
}

// Function to check if the game is over (win or draw)
function isGameOver() {
    return checkWinner(PLAYER_X) || checkWinner(PLAYER_O) || isBoardFull();
}

// Function to announce the winner
function announceWinner(player) {
    alert(`Player ${player} wins!`);
    resetGame();
}

// Function to announce a draw
function announceDraw() {
    alert('It\'s a draw!');
    resetGame();
}

// Function to reset the game
function resetGame() {
    currentPlayer = PLAYER_X;
    board = ['', '', '', '', '', '', '', '', ''];
    renderBoard();
}
