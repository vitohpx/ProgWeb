let gg = 0;
while(true){

    const options = {
        1: "Papel",
        2: "Pedra",
        3: "Tesoura"
    };

    console.log('Escolha sua jogada: ');

    for (let prop in options) {
        console.log(prop +" - "+ options[prop]);
    }

    var x = parseInt(prompt('Escolha sua jogada: ')); 

    const player = x;
    const cpu = Math.round(Math.random() * 2) + 1;

    console.log("O computador jogou " + options[cpu]);

    if (player === 1 && cpu === 3) {
    console.log('Você ganhou!'); gg++;
    } else if (player === 1 && cpu === 2) {
    break;
    } else if (player === 1 && cpu === 1) {
    console.log('A rodada empatou!');
    }

    if (player === 2 && cpu === 1) {
    console.log('Você ganhou!'); gg++;
    } else if (player === 2 && cpu === 3) {
    break;
    } else if (player === 2 && cpu === 2) {
    console.log('A rodada empatou!');
    }

    if (player === 3 && cpu === 2) {
    console.log('Você ganhou!'); gg++;
    } else if (player === 3 && cpu === 1) {
    break;
    } else if (player === 3 && cpu === 3) {
    console.log('A rodada empatou!')
    }
}
console.log('Você perdeu! A sua pontuação foi de '+ gg);