import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayerService {

    addScore(playerName) {
        let character = AppState.players.find(player => player.name == playerName)
        character.score++
        console.log(character)
    }

    minusScore(playerName) {
        let player = AppState.players.find(player => player.name == playerName)
        if (player.score > 0) {
            player.score--
        }
        console.log(player)
    }

    addPlayer(playerName) {
        AppState.players.push(new Player(`${playerName}`))
    }
}

export const playerService = new PlayerService()