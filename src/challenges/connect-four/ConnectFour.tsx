export default function ConnectFour() {
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
        </>
    )
}