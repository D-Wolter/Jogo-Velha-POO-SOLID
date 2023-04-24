import { resolve } from 'path';
import * as readline from 'readline';
import GameBoard from './GameBoard';
import Person from './Person';
import IA from './IA';

export default class GameController {

    private _gameBoard: GameBoard;
    private _person: Person;
    private _ia: Person;

    constructor() {
        this._gameBoard = new GameBoard();
        this._person = new Person(this._gameBoard);
        this._ia = new IA(this._gameBoard);
    }

    get gameBoard() {
        return this._gameBoard;
    }

    get person() {
        return this._person;
    }

    get ia() {
        return this._ia;
    }

    public ask(query: string) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
      }));
    }
}