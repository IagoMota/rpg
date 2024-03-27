function combat(player) {
    const inimigos = Array.from(document.querySelectorAll(".inimigo"));
    const yPlayer = getComputedStyle(player.corpo).top;
    const xPlayer = getComputedStyle(player.corpo).left;


    function verificarOsVivosEMortos(inimigo) {
        const yInimigo = getComputedStyle(inimigo).top;
        const xInimigo = getComputedStyle(inimigo).left;

        console.log(xPlayer)
        console.log(xInimigo)
    }

    setInterval(() => {
        inimigos.forEach(verificarOsVivosEMortos)
    }, 50);

}

export default combat;