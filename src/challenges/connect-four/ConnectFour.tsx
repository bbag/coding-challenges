import { useEffect, useState } from 'react'
import styles from './_ConnectFour.module.css'

type Board = (1 | 2 | null)[][]

// Global constants for the game board
const COLS = 7
const ROWS = 6

export default function ConnectFour() {
    const [board, setBoard] = useState<Board>([])

    // Create a blank game board array
    useEffect(() => {
        setBlankBoard()
    }, [])

    // Starts a fresh, empty new board
    function setBlankBoard() {
        let arr: Board = []
        for (let i = 0; i < ROWS; i++) {
            arr.push([])
            for (let j = 0; j < COLS; j++) {
                arr[i][j] = null
            }
        }
        setBoard(arr)
    }

    // Handle adding a piece to the board when a column button is clicked
    function addPiece(index: number) {

        let lowestRowWithEmptySpace = -1

        // Check each row to see if `index` has a piece on it already
        for (let r = 0; r < ROWS; r++) {
            if (board[r][index] === null) {
                
            }
        }




        setBoard((prevBoard) => {
            // Clone the outer board array (i.e. the array of rows)
            const newBoardArr = [...prevBoard]

            // Clone the inner array that needs to be updated
            const newRowArr = [...newBoardArr[index]]

            newRowArr

            return newBoardArr
        })
    }

    return (
        <>
            <h1>Connect Four</h1>
            <h2>Instructions</h2>
            <ol>
                <li>Create a Connect Four game (with a grid of 7 columns and 6 rows), where players take turns selecting a column to drop their piece into.</li>
                <li>
                    If a player creates an unbroken line of four of their pieces (horizontally, diagonally, or vertically), then the game should:
                    <ul>
                        <li>Mark them as the winner.</li>
                        <li>Highlight the pieces.</li>
                        <li>Add their score to the scoreboard.</li>
                        <li>Display a button to start a new game.</li>
                    </ul>
                </li>
            </ol>
            <hr />
            {/* Add solution here */}
            <div className={styles['connect-four']}>
                <div className={styles['board']}>
                    <div className={styles['top-buttons']}>
                        {/* {Array.from(COLS).map((buttonCol, buttonColIndex) => (
                            
                        ))} */}
                        {Array.from(Array(COLS)).map((buttonCol, buttonColIndex) => (
                            <button key={buttonColIndex} onClick={() => addPiece(buttonColIndex)}>Cool</button>
                        ))}
                    </div>
                    {board.map((row, rowIndex) => (
                        <div className={styles['board-row']} key={rowIndex}>
                            {row.map((col, colIndex) => (
                                <div className={styles['board-col']} key={colIndex}>
                                    <div className={styles['board-dot']}>
                                        {col}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}