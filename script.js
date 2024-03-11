function funcaoJogador(evento) {
    let tecla = evento.key;
    if (tecla == 'a') {
        if (pressionado.a == false) {
            pressionado.a = true;
            andandoPara.esquerda = true;
            clearInterval(loopDeAnimacao.intervaloD)
            andandoPara.direita = false;
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
        if (pressionado.d == false) {
            pressionado.d = true;
            andandoPara.d = true;
            clearInterval(loopDeAnimacao.intervaloA)
            andandoPara.a = false;
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
        if (pressionado.w == false) {
            pressionado.w = true;
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
        if (pressionado.s == false) {
            pressionado.s = true;
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
function disfuncaoJogador(evento) {
    let tecla = evento.key;
    if (tecla == 'a') {
        if (pressionado.d == false) {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
        pressionado.a = false;
        loopDeAnimacao.a = false;
        clearInterval(loopDeAnimacao.intervaloA)
        if (pressionado.d == true && loopDeAnimacao.d == false) {
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
    if (tecla == 'd') {
        if (pressionado.a == false) {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        }
        pressionado.d = false;
        loopDeAnimacao.d = false;
        clearInterval(loopDeAnimacao.intervaloD)
        if (pressionado.a == true && loopDeAnimacao.a == false) {
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
    if (tecla == 'w') {
        pressionado.w = false;
        clearInterval(loopDeAnimacao.intervaloW)
        if (jogador.olhando == 'direita' && loopDeAnimacao.d == false) {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        } else if (jogador.olhando == 'esquerda' && loopDeAnimacao.a == false) {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
    if (tecla == 's') {
        pressionado.s = false;
        clearInterval(loopDeAnimacao.intervaloS)
        if (jogador.olhando == 'direita' && loopDeAnimacao.d == false) {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        } else if (jogador.olhando == 'esquerda' && loopDeAnimacao.a == false) {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
}

window.addEventListener('keydown', funcaoJogador)
window.addEventListener('keyup', disfuncaoJogador)

