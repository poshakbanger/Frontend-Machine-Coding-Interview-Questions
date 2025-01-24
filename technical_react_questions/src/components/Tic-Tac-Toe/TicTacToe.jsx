import React, { useState } from 'react'
import "./TicTacToe.css";
const TicTacToe = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext,setIsXNext] = useState(true);
    const [winner,setWinner] = useState(null);

    // Function to handle a player's move
    const handleClick = (index) => {
        if (board[index] || winner) return; // Ignore if cell is already filled or there's a winner
        
        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
        checkWinner(newBoard);
    };

    // Function to check for a winner
    const checkWinner = (board) => {
        const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let combination of winningCombinations) {
        const [a,b,c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            setWinner(board[a]);
            return;
        }
    }
    if (!board.includes(null)) {
        setWinner("Draw"); // Set winner to "Draw" if all cells are filled
      }
    };

    // Function to reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className='tic-tac-toe'>
        <h1>Tic Tac Toe</h1>
        {winner ? (
            <h2>{winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}</h2>
        ) : (
            <h2>Player {isXNext ? "X" : "O"}'s turn</h2>
        )}

        <div className='board'>
            {board.map((cell, index) => (
                <div key={index}
                     className={`cell ${cell ? "filled" : ""}`}
                     onClick={() => handleClick(index)}
                >
                    {cell}
                </div>
            ))}
        </div>
        <button className="reset-button" onClick={resetGame}>
        Reset Game
        </button>
    </div>
  )
}

export default TicTacToe