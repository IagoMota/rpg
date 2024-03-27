import { playerControls, playerKeyUps } from "./src/playerControls.js"
import player from "./src/player.js"
import combat from "./src/combat.js"
import walkingTo from "./src/walkingTo.js"


window.addEventListener("keydown", playerControls)
window.addEventListener("keyup", playerKeyUps)

// combat(player)