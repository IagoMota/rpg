import keyPressed from "./keyPressed.js"
import walkingTo from "./walkingTo.js"
import animationLoops from "./animationLoops.js"
import player from "./player.js"

function playerControls(evento) {
    let tecla = evento.key;
    if (tecla == 'a') {
        if (keyPressed.a == false) {
            keyPressed.a = true;
            walkingTo.esquerda = true;
            clearInterval(animationLoops.intervaloD)
            walkingTo.direita = false;
            let velhaDistancia = Number(getComputedStyle(player.corpo).left.split("px")[0]);
            let novaDistancia = velhaDistancia - player.velocidadeDeMovimento;
            player.corpo.style.left = novaDistancia + "px";
            player.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            animationLoops.intervaloA = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(player.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia - player.velocidadeDeMovimento;
                player.corpo.style.left = novaDistancia + "px";
                player.olhando = 'esquerda'
            }, 100);
        }
    }
    if (tecla == 'd') {
        if (keyPressed.d == false) {
            keyPressed.d = true;
            walkingTo.d = true;
            clearInterval(animationLoops.intervaloA)
            walkingTo.a = false;
            let velhaDistancia = Number(getComputedStyle(player.corpo).left.split("px")[0]);
            let novaDistancia = velhaDistancia + player.velocidadeDeMovimento;
            player.corpo.style.left = novaDistancia + "px";
            player.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            animationLoops.intervaloD = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(player.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia + player.velocidadeDeMovimento;
                player.corpo.style.left = novaDistancia + "px";
                player.olhando = 'direita'
            }, 100);
        }
    }
    if (tecla == 'w') {
        if (keyPressed.w == false) {
            keyPressed.w = true;
            let velhaDistancia = Number(getComputedStyle(player.corpo).top.split("px")[0]);
            let novaDistancia = velhaDistancia - player.velocidadeDeMovimento;
            player.corpo.style.top = novaDistancia + "px";
            if (player.olhando == 'direita') {
                player.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            } else if (player.olhando == 'esquerda') {
                player.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            }
            animationLoops.intervaloW = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(player.corpo).top.split("px")[0]);
                let novaDistancia = velhaDistancia - player.velocidadeDeMovimento;
                player.corpo.style.top = novaDistancia + "px";
                if (player.olhando == 'direita') {
                    player.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
                } else if (player.olhando == 'esquerda') {
                    player.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
                }
            }, 100);
        }
    }
    if (tecla == 's') {
        if (keyPressed.s == false) {
            keyPressed.s = true;
            let velhaDistancia = Number(getComputedStyle(player.corpo).top.split("px")[0]);
            let novaDistancia = velhaDistancia + player.velocidadeDeMovimento;
            player.corpo.style.top = novaDistancia + "px";
            if (player.olhando == 'direita') {
                player.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            } else if (player.olhando == 'esquerda') {
                player.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            }
            animationLoops.intervaloS = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(player.corpo).top.split("px")[0]);
                let novaDistancia = velhaDistancia + player.velocidadeDeMovimento;
                player.corpo.style.top = novaDistancia + "px";
                if (player.olhando == 'direita') {
                    player.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
                } else if (player.olhando == 'esquerda') {
                    player.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
                }
            }, 100);
        }
    }
}

function playerKeyUps(evento) {
    let tecla = evento.key;
    if (tecla == 'a') {
        if (keyPressed.d == false) {
            player.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
        keyPressed.a = false;
        animationLoops.a = false;
        clearInterval(animationLoops.intervaloA)
        if (keyPressed.d == true && animationLoops.d == false) {
            let velhaDistancia = Number(getComputedStyle(player.corpo).left.split("px")[0]);
            let novaDistancia = velhaDistancia + player.velocidadeDeMovimento;
            player.corpo.style.left = novaDistancia + "px";
            player.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            animationLoops.intervaloD = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(player.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia + player.velocidadeDeMovimento;
                player.corpo.style.left = novaDistancia + "px";
                player.olhando = 'direita'
            }, 100);
        }
    }
    if (tecla == 'd') {
        if (keyPressed.a == false) {
            player.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        }
        keyPressed.d = false;
        animationLoops.d = false;
        clearInterval(animationLoops.intervaloD)
        if (keyPressed.a == true && animationLoops.a == false) {
            let velhaDistancia = Number(getComputedStyle(player.corpo).left.split("px")[0]);
            let novaDistancia = velhaDistancia - player.velocidadeDeMovimento;
            player.corpo.style.left = novaDistancia + "px";
            player.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            animationLoops.intervaloA = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(player.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia - player.velocidadeDeMovimento;
                player.corpo.style.left = novaDistancia + "px";
                player.olhando = 'esquerda'
            }, 100);
        }
    }
    if (tecla == 'w') {
        keyPressed.w = false;
        clearInterval(animationLoops.intervaloW)
        if (player.olhando == 'direita' && animationLoops.d == false) {
            player.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        } else if (player.olhando == 'esquerda' && animationLoops.a == false) {
            player.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
    if (tecla == 's') {
        keyPressed.s = false;
        clearInterval(animationLoops.intervaloS)
        if (player.olhando == 'direita' && animationLoops.d == false) {
            player.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        } else if (player.olhando == 'esquerda' && animationLoops.a == false) {
            player.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
}


export { playerControls, playerKeyUps };