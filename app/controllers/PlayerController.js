import { AppState } from "../AppState.js";
import { playerService } from "../services/PlayerService.js";

export class PlayerController {
    constructor() {
        console.log(AppState.players)
        this.draw()
    }

    scorePoint(playerName) {
        playerService.addScore(playerName)
        this.draw()
    }

    minusPoint(playerName) {
        playerService.minusScore(playerName)
        this.draw()
    }

    addPlayer() {
        let playerName = 'temp'
        playerService.addPlayer(playerName)
        this.draw()
    }

    draw() {
        let content = ''
        AppState.players.forEach(player => {
            content += player.PlayerTemplateCard
        })
        document.getElementById('players').innerHTML = content
    }
}