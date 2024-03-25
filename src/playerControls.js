import keyPressed from "./keyPressed.js"
import walkingTo from "./walkingTo.js"

function playerControls(evento) {
    let tecla = evento.key;
    if (tecla == 'a') {
        if (keyPressed.a == false) {
            keyPressed.a = true;
            walkingTo.esquerda = true;
            clearInterval(loopDeAnimacao.intervaloD)
            walkingTo.direita = false;
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
            let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
            jogador.corpo.style.left = novaDistancia + "px";
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            loopDeAnimacao.intervaloA = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.olhando = 'esquerda'
            }, 100);
        }
    }
    if (tecla == 'd') {
        if (keyPressed.d == false) {
            keyPressed.d = true;
            walkingTo.d = true;
            clearInterval(loopDeAnimacao.intervaloA)
            walkingTo.a = false;
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
            let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
            jogador.corpo.style.left = novaDistancia + "px";
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            loopDeAnimacao.intervaloD = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.olhando = 'direita'
            }, 100);
        }
    }
    if (tecla == 'w') {
        if (keyPressed.w == false) {
            keyPressed.w = true;
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0]);
            let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
            jogador.corpo.style.top = novaDistancia + "px";
            if (jogador.olhando == 'direita') {
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            } else if (jogador.olhando == 'esquerda') {
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            }
            loopDeAnimacao.intervaloW = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0]);
                let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
                jogador.corpo.style.top = novaDistancia + "px";
                if (jogador.olhando == 'direita') {
                    jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
                } else if (jogador.olhando == 'esquerda') {
                    jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
                }
            }, 100);
        }
    }
    if (tecla == 's') {
        if (keyPressed.s == false) {
            keyPressed.s = true;
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0]);
            let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
            jogador.corpo.style.top = novaDistancia + "px";
            if (jogador.olhando == 'direita') {
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            } else if (jogador.olhando == 'esquerda') {
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            }
            loopDeAnimacao.intervaloS = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0]);
                let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
                jogador.corpo.style.top = novaDistancia + "px";
                if (jogador.olhando == 'direita') {
                    jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
                } else if (jogador.olhando == 'esquerda') {
                    jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
                }
            }, 100);
        }
    }
}

export default playerControls;