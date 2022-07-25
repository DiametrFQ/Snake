"use strict";
let score = Number(localStorage.getItem('score'));
let bestScore = Number(localStorage.getItem('bestscore'));
let bgColor = localStorage.getItem('bgColor');
let snakeColor = localStorage.getItem('snakeColor');
let eatColor = localStorage.getItem('eatColor');
if (!bgColor)
    bgColor = '#00ff00';
if (!snakeColor)
    snakeColor = '#0000ff';
if (!eatColor)
    eatColor = '#ffb500';
const colBg = document.querySelector("#colBg");
const colSnake = document.querySelector("#colSnake");
const colEat = document.querySelector("#colEat");
const canvas2 = document.querySelector("#canvas2");
const ctx2 = canvas2.getContext('2d');
const navUA = navigator.userAgent;
const size = 70;
let creatingSquare = (ctx, color, x, y, length) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(length + x, y);
    ctx.lineTo(length + x, y + length);
    ctx.lineTo(x, y + length);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fill();
};
let circle = (ctx, x, y, r, color) => {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = color;
    ctx.arc(x + 15, y + 15, r, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();
};
let startCanvas = () => {
    ctx2.clearRect(0, 0, size * 10, size * 10);
    if (snakeColor && eatColor) {
        for (let i = 0; i < 5; i++)
            creatingSquare(ctx2, snakeColor, 0, 31 * i, 30);
        for (let i = 4; i < 12; i++)
            creatingSquare(ctx2, snakeColor, 31 * (i - 4), 124, 30);
        for (let i = 11; i < 14; i++)
            creatingSquare(ctx2, snakeColor, 217, 124 + 31 * (i - 11), 30);
        creatingSquare(ctx2, eatColor, 217, 217, 30);
    }
};
window.onload = () => {
    if (bgColor)
        canvas2.style.backgroundColor = colBg.value = bgColor;
    if (snakeColor)
        colSnake.value = snakeColor;
    if (eatColor)
        colEat.value = eatColor;
    startCanvas();
};
colBg.oninput = function () {
    bgColor = canvas2.style.backgroundColor = this.value;
    localStorage.setItem('bgColor', bgColor);
};
colSnake.oninput = function () {
    snakeColor = this.value;
    localStorage.setItem('snakeColor', snakeColor);
    startCanvas();
};
colEat.oninput = function () {
    eatColor = this.value;
    localStorage.setItem('eatColor', eatColor);
    startCanvas();
};
const start = document.querySelector("#start");
start.onclick = () => Start();
document.onkeydown = (event) => { if (event.key === "Enter")
    Start(); };
const Start = () => {
    const side = ['up', 'right', 'down', 'left'];
    document.body.innerHTML = '';
    document.body.insertAdjacentHTML('beforeend', `
		<div id="version-font">Version:</span><span id="version-id"> 1.3.4.245</div>
		<canvas id="canvas1" width="${size * 10}" height="${size * 10}"></canvas>
		<div id="buttons">
			<div class="arrow-up"></div>
			<div class="arrow-down"></div>
			<div class="arrow-left"></div>
			<div class="arrow-right"></div>
		</div>
	`);
    const buttonUp = document.querySelector(".arrow-up");
    const buttonDown = document.querySelector(".arrow-down");
    const buttonLeft = document.querySelector(".arrow-left");
    const buttonRight = document.querySelector(".arrow-right");
    const buttons = [buttonUp, buttonRight, buttonDown, buttonLeft];
    if (navUA.match('iPhone') || navUA.match('Android') || navUA.match('iPad') || navUA.match('RIM'))
        for (let i = 0; i < side.length; i++)
            buttons[i].insertAdjacentHTML('beforeend', `
				<div class="arrow-${side[i]}-top"></div>
				<div class="arrow-${side[i]}-bottom"></div>
			`);
    const canvas = document.querySelector('#canvas1');
    if (bgColor)
        canvas.style.backgroundColor = bgColor;
    const ctx = canvas.getContext('2d');
    let cens;
    let timer;
    let yum = 2;
    let cdnt = Math.floor(Math.random() * 100);
    let r = [Math.floor(cdnt / 10) * size];
    let u = [cdnt % 10 * size];
    let Svs = {
        YSrch: Math.floor(cdnt / 10),
        XSrch: cdnt % 10,
        sec: 700,
    };
    function gameOver() {
        clearTimeout(timer);
        document.onkeydown = null;
        let pluScore = ((yum - 2) * 10);
        score += pluScore;
        if (pluScore > bestScore)
            bestScore = +pluScore;
        localStorage.setItem('score', String(score));
        localStorage.setItem('bestscore', String(bestScore));
        clearTimeout(timer);
        document.body.innerHTML = '';
        document.body.insertAdjacentHTML('beforeend', `
			<span id="version-font">Version: </span><span id="version-id">1.3.4.245</span>
			<div id="center">
				<img id="gameover" src="Images/GameOver.png" alt="" />
				<div class="score" id="scoreITG">Your score in this game: ${pluScore}</div>
				<div class="score" id="bScore">Best score: ${bestScore}</div>
				<div class="score" id="tScorEv">Total score ever: ${score}</div>
				<img id="restart" src="Images/Restart.png" alt="" />
			</div>
		`);
        const center = document.querySelector("#center");
        center.style.background = "black";
        center.style.height = 600 + "px";
        const restart = document.querySelector("#restart");
        restart.onmousemove = function () { this.src = "Images/Restart2.png"; };
        restart.onmouseleave = function () { this.src = "Images/Restart.png"; };
        restart.onclick = () => location.reload();
    }
    let checkGameOver = () => {
        if (r[0] === -size || r[0] === size * 10 || u[0] === -size || u[0] === size * 10)
            gameOver();
        for (let i = 4; i < yum; i++)
            if (r[i] === r[0] && u[i] === u[0])
                gameOver();
    };
    const plusTail = () => {
        for (let i = 100; i > 0; i--) {
            r[i] = r[i - 1];
            u[i] = u[i - 1];
        }
    };
    const minusEat = () => {
        let sSX = size * Svs.XSrch, sSY = size * Svs.YSrch;
        if (r[0] === sSX && u[0] === sSY) {
            yum++;
            Svs.sec -= 4;
            newCrdntEat();
        }
    };
    const finish = () => {
        if (yum === 100) {
            document.body.style.background = "yellow";
            alert('Congratulations you won!');
            window.location.reload();
        }
    };
    const newCrdntEat = () => {
        cdnt = Math.floor(Math.random() * 100);
        Svs.YSrch = Math.floor(cdnt / 10);
        Svs.XSrch = cdnt % 10;
        let sSX = size * Svs.XSrch, sSY = size * Svs.YSrch;
        for (let i = 0; i < yum; i++)
            if (r[i] === sSX && u[i] === sSY)
                newCrdntEat();
    };
    const fixEat = () => {
        if (eatColor)
            creatingSquare(ctx, eatColor, size * Svs.XSrch, size * Svs.YSrch, size);
    };
    const makingSnake = () => {
        if (snakeColor)
            for (let i = 0; i < yum; i++)
                creatingSquare(ctx, snakeColor, r[i], u[i], size);
    };
    let sequence = () => {
        ctx.clearRect(0, 0, size * 10, size * 10);
        checkGameOver();
        plusTail();
        minusEat();
        finish();
        fixEat();
        makingSnake();
    };
    let eyes = (ctx, add31, add32, up, rght, down, left) => {
        circle(ctx, r[0] + rght, u[0] + down, 6, 'white');
        circle(ctx, r[0] + rght + add31, u[0] + down + add32, 2.5, '#2965CA');
        circle(ctx, r[0] + up, u[0] + left, 6, 'white');
        circle(ctx, r[0] + up + add31, u[0] + left + add32, 2.5, '#2965CA');
    };
    const makeTurn = (ctx, uORx, size, fCens) => {
        clearTimeout(timer);
        cens = fCens;
        uORx[0] += size;
        sequence();
        if (cens === "up")
            eyes(ctx, 0, -3, 40, 0, 0, 0);
        if (cens === "rght")
            eyes(ctx, 3, 0, 40, 40, 0, 40);
        if (cens === "down")
            eyes(ctx, 0, 3, 0, 40, 40, 40);
        if (cens === "left")
            eyes(ctx, -3, 0, 0, 0, 0, 40);
        timer = setTimeout(makeTurn, Svs.sec, uORx, size, fCens);
    };
    document.onkeydown = (event) => {
        const ek = event.key;
        const checkEk = (directionKeys, ek) => { return directionKeys.includes(ek); };
        if (cens !== "up" && checkEk(['ArrowDown', 'S', 's', 'ы', 'Ы'], ek) && ctx)
            makeTurn(ctx, u, size, "down");
        if (cens !== "rght" && checkEk(['ArrowLeft', 'A', 'a', 'ф', 'Ф'], ek) && ctx)
            makeTurn(ctx, r, -size, "left");
        if (cens !== "down" && checkEk(['ArrowUp', 'W', 'w', 'ц', 'Ц'], ek) && ctx)
            makeTurn(ctx, u, -size, "up");
        if (cens !== "left" && checkEk(['ArrowRight', 'D', 'd', 'в', 'В'], ek) && ctx)
            makeTurn(ctx, r, size, "rght");
    };
    buttonDown.onclick = () => {
        if (cens !== "up")
            makeTurn(ctx, u, size, "down");
    };
    buttonLeft.onclick = () => {
        if (cens !== "rght")
            makeTurn(ctx, r, -size, "left");
    };
    buttonUp.onclick = () => {
        if (cens !== "down")
            makeTurn(ctx, u, -size, "up");
    };
    buttonRight.onclick = () => {
        if (cens !== "left")
            makeTurn(ctx, r, size, "rght");
    };
    if (snakeColor)
        creatingSquare(ctx, snakeColor, r[0], u[0], size);
    eyes(ctx, 0, -3, 40, 0, 0, 0);
    newCrdntEat();
    fixEat();
};
//# sourceMappingURL=script.js.map