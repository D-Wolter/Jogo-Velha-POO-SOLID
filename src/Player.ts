import GameBoard from "./GameBoard";

export default abstract class Player {
    private _gameBoard: GameBoard;
    constructor(gameBoard: GameBoard) {
        this._gameBoard = gameBoard;
    }

    get gameBoard(): GameBoard {
        return this._gameBoard;
    }

    public abstract play(value: string): void;
}