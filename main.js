import player from "./src/player.js"

import { playerControls, playerKeyUps } from "./src/playerControls.js"
import walkingTo from "./src/walkingTo.js"


window.addEventListener("keydown", playerControls)
window.addEventListener("keyup", playerKeyUps)