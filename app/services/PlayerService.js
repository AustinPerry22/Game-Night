import { AppState } from "../AppState.js";

class PlayerService {

    addScore(playerName) {
        let character = AppState.players.find(player => player.name == playerName)
        character.score++
        console.log(character)
    }

    minusScore(playerName) {
        let character = AppState.players.find(player => player.name == playerName)
        if (character.score > 0) {
            character.score--
        }
        console.log(character)
    }
}

export const playerService = new PlayerService()