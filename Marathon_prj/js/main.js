'use strict'

const liukang = {
    name: 'Liu Kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['Fist', 'Nunchucks'],
    attack: () => {
        console.log(`${liukang.name} fight`)
    }
}
liukang.attack()

const subzero = {
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Swords', 'Pistol'],
    attack: () => {
        console.log(`${subzero.name} fight`)
    }
}
subzero.attack()

function createPlayer(player, info) {
    const $arena = document.querySelector('.arenas');

    const $player1 = document.createElement('div');
    $player1.classList.add(player);
    $arena.appendChild($player1);
    
    const $prog = document.createElement('div');
    $prog.classList.add('progressbar');
    $player1.appendChild($prog)
    
    const $char = document.createElement('div');
    $char.classList.add('character');
    $player1.appendChild($char);
    
    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${info.hp}%`;
    $prog.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = info.name;
    $prog.appendChild($name);

    const $img = document.createElement('img');
    $img.src = info.img;
    $char.appendChild($img);
};
createPlayer('player1', liukang)
createPlayer('player2', subzero)