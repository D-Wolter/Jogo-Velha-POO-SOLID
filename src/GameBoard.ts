export default class GameBoard {
    private _board: string[][];
    public messageError = '';

    constructor() {
        this._board = [
            ["_","_","_"],
            ["_","_","_"],
            ["_","_","_"]
        ]
    }

get board(): Array<string>[] {
    return this._board;
}

public printBoard(): void {
    console.clear();

    this._board.forEach((line) => {
        console.log(`${line[0]}|${line[1]}|${line[2]}`);
    });
    console.log(this.messageError);
    this.messageError = '';
  }

  public printWinInBoard(name: string) {
    console.clear();

    this._board.forEach((line) => {
        console.log(`${line[0]}|${line[1]}|${line[2]}`);
    });

    console.log(`Victory for ${name} Winner!`)
    this.messageError = '';
  }

  public printDrawInBoard() {
    console.clear();

    this._board.forEach((line) => {
        console.log(`${line[0]}|${line[1]}|${line[2]}`);
    });

    console.log(`Game Over`)
    this.messageError = '';
  }

  public setValueInBoard(value: string, y: number, x: number): boolean {
    if (this._board[y][x] == '_') {
        this._board[y][x] = value;
        return true;
    } else {
        return false;
    }
    
  }
}