const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard = initialGameBoard;
    turns.forEach(turn => {
        gameBoard[turn.square.row][turn.square.col] = turn.player;
        return gameBoard;
    });

    return <ol id={"game-board"}>
        {
            gameBoard.map(
                (row, rowIndex) =>
                    (<li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) =>
                                (<li key={colIndex}>
                                    <button
                                        onClick={() => onSelectSquare(rowIndex, colIndex)}>
                                        {playerSymbol}
                                    </button>
                                </li>))}
                        </ol>
                    </li>)
            )
        }
    </ol>
}