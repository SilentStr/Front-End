'use strict'
const $arena = document.querySelector('.arenas');
const $randBtn = document.querySelector('.button');

const liukang = {
    player: 1,
    name: 'Liu Kang',
    hp: 100,
    img: 'https://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['Fist', 'Nunchucks'],
    attack: () => {
        console.log(`${liukang.name} fight`)
    }
}
liukang.attack()

const subzero = {
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'https://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Swords', 'Pistol'],
    attack: () => {
        console.log(`${subzero.name} fight`)
    }
}
subzero.attack()

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;

}

function createPlayer(info) {
    const $player = createElement('div', `player${info.player}`)
    const $progress = createElement('div', 'progressbar')
    const $char = createElement('div', 'character')
    const $life = createElement('div', 'life')
    const $name = createElement('div', 'name')
    const $img = createElement('img');

    $life.style.width = `${info.hp}%`;
    $name.innerText = info.name;
    $img.src = info.img;
    $progress.appendChild($life);
    $progress.appendChild($name);
    $char.appendChild($img);
    $player.appendChild($char);
    $player.appendChild($progress);

    return $player;

};

function changeHP(player, attackValue) {
    const $playerLife = document.querySelector(`.player${player.player} .life`);
    player.hp -= attackValue;
    $playerLife.style.width = `${player.hp}%`;
    if(player.hp <= 0) {
        player.hp = 0;
        $playerLife.style.width = `0%`;
        $randBtn.disabled = true;
        (liukang.hp > subzero.hp)? $arena.appendChild(playerWin(liukang.name)) : $arena.appendChild(playerWin(subzero.name))
    } else if (liukang.hp == 0 && subzero.hp == 0) {
        $arena.appendChild(Draw());
    }
}

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = `${name} wins`;

    return $winTitle;
}

function Draw() {
    const $drawTitle = createElement('div', 'loseTitle');
    $drawTitle.innerText = `Draw`;

    return $drawTitle;
}



function playerAttack(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

$randBtn.addEventListener('click', () => {
    changeHP(liukang, playerAttack(1, 20))
    changeHP(subzero, playerAttack(1, 20))
})
$arena.appendChild(createPlayer(liukang));
$arena.appendChild(createPlayer(subzero));

