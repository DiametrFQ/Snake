let score = +localStorage.getItem('score')// Preserve the color of the overall result
let bestScore = +localStorage.getItem('bestscore')//Keeping the color of the Best Score
let bgColor = localStorage.getItem('bgColor')//Keeping the color of the background
let snakeColor = localStorage.getItem('snakeColor')//Keeping the color of the snake
let eatColor = localStorage.getItem('eatColor')//Keeping the color of the food

if(bgColor === null||bgColor === 'undefined') bgColor = '#00ff00'//green
if(snakeColor === null||snakeColor === 'undefined') snakeColor = '#0000ff'//blue
if(eatColor === null||eatColor === 'undefined') eatColor= '#ffb500'//yellow

const colBg = document.querySelector("#colBg")
const colSnake = document.querySelector("#colSnake")
const colEat = document.querySelector("#colEat")
const canvas2 = document.querySelector("#canvas2")
const ctx2 = canvas2.getContext('2d');

const navUA = navigator.userAgent
const size = 70

creatingSquare = (ctx, color, x, y, length) => {
	ctx.beginPath()
	ctx.fillStyle = color
	ctx.moveTo(x, y)
	ctx.lineTo(length + x, y)
	ctx.lineTo(length + x, y + length)
	ctx.lineTo(x, y + length)
	ctx.lineTo(x, y)
	ctx.stroke()
	ctx.fill()
}

circle = (ctx, x, y, r, color) => {
	ctx.beginPath()
	ctx.strokeStyle = 'black'
	ctx.fillStyle = color
	ctx.arc(x + 15, y + 15, r, 0, 2*Math.PI, true)
	ctx.stroke()
	ctx.fill()
}//eye Snake

startCanvas = () => {
	ctx2.clearRect(0, 0, size*10, size*10)
	for(let i = 0; i < 5; i++) creatingSquare(ctx2, snakeColor, 0, 31 * i, 30)
	for(let i = 4; i < 12; i++) creatingSquare(ctx2, snakeColor, 31*( i - 4 ), 124, 30)
	for(let i = 11; i < 14; i++) creatingSquare(ctx2, snakeColor, 217, 124 + 31*( i - 11 ), 30)//Snake on Start
	creatingSquare(ctx2, eatColor, 217, 217, 30)//Eat on Start
}

window.onload = () => {
	canvas2.style.backgroundColor = colBg.value = bgColor
	colSnake.value = snakeColor
	colEat.value = eatColor
	startCanvas()
}//Start

colBg.oninput = function() {
	bgColor = canvas2.style.backgroundColor = this.value
	localStorage.setItem('bgColor', this.value)
}
colSnake.oninput = function() {
	snakeColor = this.value
	localStorage.setItem('snakeColor', this.value)
	startCanvas()
}
colEat.oninput = function() {
	eatColor = this.value
	localStorage.setItem('eatColor', this.value)
	startCanvas()
}

document.querySelector("#start").onclick = () => Start()

document.onkeydown = event => { if(event.key === "Enter") Start() }

function Start(){
	const side = ['up', 'right', 'down', 'left']

	document.body.innerHTML = ''
	document.body.insertAdjacentHTML('beforeend', `
		<div id="version-font">Version:</span><span id="version-id"> 1.3.4.245</div>
		<canvas id="canvas1" width="${size * 10}" height="${size * 10}"></canvas>
		<div id="buttons">
			<div class="arrow-up"></div>
			<div class="arrow-down"></div>
			<div class="arrow-left"></div>
			<div class="arrow-right"></div>
		</div>
	`)
	const buttonUp = document.querySelector(".arrow-up")
	const buttonDown = document.querySelector(".arrow-down")
	const buttonLeft = document.querySelector(".arrow-left")
	const buttonRight = document.querySelector(".arrow-right")

	const button = [buttonUp, buttonRight, buttonDown, buttonLeft]

	if(navUA.match('iPhone') || navUA.match('Android') || navUA.match('iPad') || navUA.match('RIM')) {
		for(i=0; i<side.length; i++){
			button[i].insertAdjacentHTML('beforeend', `
				<div class="arrow-${side[i]}-top"></div>
				<div class="arrow-${side[i]}-bottom"></div>
			`)
		}
	}
	const canvas = document.querySelector('#canvas1')//c1
	canvas.style.backgroundColor = bgColor
	const ctx = canvas.getContext('2d');

	let cens;//NO left <- -> right NO up <- -> bottom NO
	let cdnt = Math.floor(Math.random() * 100)//random
	let timer//timer
	let yum = 2//yum-yum yummy!
	let r = [Math.floor(cdnt / 10) * size]//right
	let u = [cdnt % 10 * size]//up
	let Svs = {
		YSrch: Math.floor(cdnt / 10),
		XSrch: cdnt % 10,
		sec: 700,
	};
	let pluScore;

	function gameOver(){
		clearTimeout(timer)
		document.onkeydown = null

		pluScore = ((+yum - 2) * 10)
		score += pluScore//plus to score
		if(pluScore > bestScore) bestScore = +pluScore//plus to best score!

		localStorage.setItem('score', +score)
		localStorage.setItem('bestscore', bestScore)

		clearTimeout(timer)//I don't know why, but it doesn't work without the second clearTimeout
		document.body.innerHTML = '' 
		document.body.insertAdjacentHTML('beforeend', `
			<span id="version-font">Version: </span><span id="version-id">1.3.4.245</span>
			<div id="center">
				<img id="gameover" src="Images/GameOver.png" alt="" />
				<div class="score" id="scoreITG">Your score in this game: ${pluScore}</div>
				<div class="score" id="bScore">Best score: ${bestScore}</div>
				<div class="score" id="tScorEv">Total score ever: ${score}</div>
				<img id="restart" src="Images/Restart.png" alt="" />
			</div>
		`)
		const center = document.querySelector("#center")
		center.style.background = "black"
		center.style.height = 600 +"px"

		const restart = document.querySelector("#restart")
		restart.onmousemove = () => { this.src = "Images/Restart2.png" }
		restart.onmouseleave = () => { this.src = "Images/Restart.png" }
		restart.onclick = () => location.reload()
	}//GameOver//

	checkGameOver = () => {
		if (r[0] === -size || r[0] === size*10 || u[0] === -size || u[0] === size*10) gameOver()

		for (let i = 4; i < yum; i++) if(r[i] === r[0] && u[i] === u[0]) gameOver()
	}//Game over//

	const plusTail = () => {
		for(let i = 100; i > 0; i--) {
			r[i] = r[i-1]
			u[i] = u[i-1]
		}
	}//Snake moves

	function minusEat() {
		let sSX = size * Svs.XSrch, sSY = size * Svs.YSrch

		if (r[0] === sSX && u[0] === sSY) {
			yum++
			Svs.sec -= 4
			newCrdntEat()
		}
	}//orng is dying

	finish = () => {
		if (yum === 100) {
			document.body.style.background = "yellow"
			alert('Congratulations you won!')
			window.location.reload()
		}
	}//The End(?).

	newCrdntEat = () => {
		cdnt = Math.floor(Math.random() * 100)//random

		Svs.YSrch = Math.floor(cdnt / 10)
		Svs.XSrch = cdnt % 10
		let sSX = size * Svs.XSrch, sSY = size * Svs.YSrch

		for(let i = 0; i < yum; i++) if(r[i] === sSX && u[i] === sSY) newCrdntEat()
	}//rundom number

	const fixEat = () => creatingSquare(ctx, eatColor, size * Svs.XSrch, size * Svs.YSrch, size)//Spawn orng square

	const makingSnake = () => { 
		for(let i = 0; i < yum; i++) creatingSquare(ctx, snakeColor, r[i], u[i], size) 
	}

	sequence = () => {
		ctx.clearRect(0, 0, size*10, size*10)
		checkGameOver()
		plusTail()
		minusEat()
		finish()
		fixEat()
		makingSnake()
	}

	eyes = (add31, add32, up, rght, down, left) => {
		circle(ctx, r[0] + rght,		u[0] + down, 6, 'white')
		circle(ctx, r[0] + rght + add31,u[0] + down + add32, 2.5, '#2965CA')
		circle(ctx, r[0] + up,			u[0] + left, 6, 'white')
		circle(ctx, r[0] + up + add31,	u[0] + left + add32, 2.5, '#2965CA')
	}

	const makeTurn = (uORx, size, fCens) => {
		clearTimeout(timer)
		cens = fCens
		uORx[0] += size
		sequence()
		if(cens === "up")   eyes(0, -3, 40,  0,  0, 0 )
		if(cens === "rght")	eyes(3,  0, 40, 40,  0, 40)
		if(cens === "down") eyes(0,  3,  0, 40, 40, 40)
		if(cens === "left") eyes(-3, 0,  0,  0,  0, 40)
		
		timer = setTimeout(makeTurn, Svs.sec, uORx, size, fCens)
	}//moving

	document.onkeydown = event => {
		const ek = event.key
		const checkEk = (directionKeys, ek) => { return directionKeys.includes(ek) }

		if (cens !== "up" && checkEk(['ArrowDown', 'S', 's', 'ы', 'Ы'], ek)) makeTurn(u, size, "down")
		if (cens !== "rght" && checkEk(['ArrowLeft', 'A', 'a', 'ф', 'Ф'], ek)) makeTurn(r, -size, "left")
		if (cens !== "down" && checkEk(['ArrowUp', 'W', 'w', 'ц','Ц'], ek)) makeTurn(u, -size, "up")
		if (cens !== "left" && checkEk(['ArrowRight', 'D', 'd', 'в', 'В'], ek)) makeTurn(r, size, "rght")
	}
	buttonDown.onclick = () => {
		if(cens !== "up") makeTurn(u, size, "down")//click on down
	}
	buttonLeft.onclick = () => {
		if(cens !== "rght") makeTurn(r, -size, "left")//click on left
	}
	buttonUp.onclick = () => {
		if(cens !== "down") makeTurn(u, -size, "up")//click on up
	}
	buttonRight.onclick = () => {
		if(cens !== "left") makeTurn(r, size, "rght")//click on right
	}

	creatingSquare(ctx, snakeColor, r[0], u[0], size)//snakeHead

	eyes(0, -3, 40,  0,  0, 0 )// create eyes Snake

	newCrdntEat()
	fixEat()
}//Snake