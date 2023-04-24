
import GameController from "./GameController";

async function main() {
    const gameController = new GameController();
    while(true) {
        gameController.gameBoard.printBoard();

        const response = await gameController.ask("Escolha um numero de (1) a (9): ");
    
        gameController.person.play(response as string);

        gameController.ia.play('O');
    }

}

main();