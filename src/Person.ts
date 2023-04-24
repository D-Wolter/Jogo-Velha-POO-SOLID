import GameBoard from "./GameBoard";
import Player from "./Player";

export default class Person extends Player {
  constructor(gameBoard: GameBoard) {
    super(gameBoard);
  }

  public play(value: string): void {
    switch (value) {
      case "1":
        if(!this.gameBoard.setValueInBoard("X", 0, 0)) {
            this.gameBoard.messageError = 'position already occupied'
        }
        break;
      case "2":
        if(!this.gameBoard.setValueInBoard("X", 0, 1)) {
            this.gameBoard.messageError = 'position already occupied'
        }
        break;
      case "3":
        if(!this.gameBoard.setValueInBoard("X", 0, 2)) {
            this.gameBoard.messageError = 'position already occupied'
        }
        break;
      case "4":
        if(!this.gameBoard.setValueInBoard("X", 1, 0)) {
            this.gameBoard.messageError = 'position already occupied'
        }
        break;
      case "5":
        if(!this.gameBoard.setValueInBoard("X", 1, 1)) {
            this.gameBoard.messageError = 'position already occupied'
        }
        break;
      case "6":
        if(!this.gameBoard.setValueInBoard("X", 1, 2)) {
            this.gameBoard.messageError = 'position already occupied'
        }
        break;
      case "7":
        if(!this.gameBoard.setValueInBoard("X", 2, 0)) {
            this.gameBoard.messageError = 'position already occupied'
        }
        break;
      case "8":
        if(!this.gameBoard.setValueInBoard("X", 2, 1)) {
            this.gameBoard.messageError = 'position already occupied'
        }
        break;
      case "9":
        if(!this.gameBoard.setValueInBoard("X", 2, 2)) {
            this.gameBoard.messageError = 'position already occupied'
        }
        break;
      default:
        this.gameBoard.messageError = 'Invalid Number!'
        break;
    }
  }
}
