
import GameController from "./GameController";

async function main() {
    const gameController = new GameController();
    while(gameController.inGame) {
        gameController.gameBoard.printBoard();

        const response = await gameController.ask("Insert Position Number (1-9): ");
    
        gameController.person.play(response as string);
        gameController.inGame = !gameController.checkWin();

        if (gameController.inGame) {
            gameController.ia.play('O');
            gameController.inGame = !gameController.checkWin();
        }

    }

}

main();