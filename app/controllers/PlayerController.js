import { AppState } from "../AppState.js";

export class PlayerController {
    constructor() {
        console.log(AppState.players)
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