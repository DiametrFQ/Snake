let score :number = Number(localStorage.getItem('score'))// Preserve the color of the overall result
let bestScore :number = Number(localStorage.getItem('bestscore'))//Keeping the color of the Best Score
let bgColor :string|null = localStorage.getItem('bgColor')//Keeping the color of the background
let snakeColor :string|null = localStorage.getItem('snakeColor')//Keeping the color of the snake
let eatColor :string|null = localStorage.getItem('eatColor')//Keeping the color of the food

if( !bgColor ) bgColor = '#00ff00'//green
if( !snakeColor ) snakeColor = '#0000ff'//blue
if( !eatColor) eatColor= '#ffb500'//yellow

const colBg :HTMLInputElement|null = document.querySelector("#colBg")
const colSnake :HTMLInputElement|null = document.querySelector("#colSnake")
const colEat :HTMLInputElement|null = document.querySelector("#colEat")
const canvas2 :HTMLCanvasElement|null = document.querySelector("#canvas2")

const ctx2 :CanvasRenderingContext2D|null|undefined = canvas2?.getContext('2d');

const navUA :string = navigator.userAgent
const size :number = 70

let creatingSquare = (ctx :CanvasRenderingContext2D, color :string, x :number, y :number, length :number) :void => {
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

let circle = (ctx :CanvasRenderingContext2D, x :number, y: number, r :number, color :string) :void => {
	ctx.beginPath()
	ctx.strokeStyle = 'black'
	ctx.fillStyle = color
	ctx.arc(x + 15, y + 15, r, 0, 2*Math.PI, true)
	ctx.stroke() 
	ctx.fill()
}//eye Snake

let startCanvas = () :void => {

	ctx2?.clearRect(0, 0, size*10, size*10)

	if( ctx2 && snakeColor && eatColor ){
		for(let i = 0; i < 5; i++) if( ctx2 ) creatingSquare(ctx2, snakeColor, 0, 31 * i, 30)
		for(let i = 4; i < 12; i++) creatingSquare(ctx2, snakeColor, 31*( i - 4 ), 124, 30)
		for(let i = 11; i < 14; i++) creatingSquare(ctx2 , snakeColor, 217, 124 + 31*( i - 11 ), 30)//Snake on Start
		creatingSquare(ctx2, eatColor, 217, 217, 30)//Eat on Start
	}
}

window.onload = () => {

	if(canvas2 && colBg && bgColor) canvas2.style.backgroundColor = colBg.value = bgColor
	if(colSnake && snakeColor) colSnake.value = snakeColor
	if(colEat && eatColor) colEat.value = eatColor
	startCanvas()
}//Start

if(colBg && canvas2) colBg.oninput = function<HTMLInputElement>() {

	bgColor = canvas2.style.backgroundColor = this.value
	localStorage.setItem('bgColor', bgColor)
}
if(colSnake) colSnake.oninput = function<HTMLInputElement>() {

	snakeColor = this.value
	localStorage.setItem('snakeColor', snakeColor)
	startCanvas()
}
if(colEat) colEat.oninput = function<HTMLInputElement>() {

	eatColor = this.value
	localStorage.setItem('eatColor', eatColor)
	startCanvas()
}

const start :HTMLElement|null = document?.querySelector("#start")

if(start) start.onclick = () => Start()

document.onkeydown = (event :KeyboardEvent) => { if(event.key === "Enter") Start() }

const Start = () :void =>{
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

	const buttonUp :HTMLElement|null = document.querySelector(".arrow-up")
	const buttonDown :HTMLElement|null = document.querySelector(".arrow-down")
	const buttonLeft :HTMLElement|null = document.querySelector(".arrow-left")
	const buttonRight :HTMLElement|null = document.querySelector(".arrow-right")

	const button :(HTMLElement|null)[] = [buttonUp, buttonRight, buttonDown, buttonLeft]

	if(navUA.match('iPhone') || navUA.match('Android') || navUA.match('iPad') || navUA.match('RIM')) {

		for(let i = 0; i < side.length; i++){

			button[i]?.insertAdjacentHTML('beforeend', `
				<div class="arrow-${side[i]}-top"></div>
				<div class="arrow-${side[i]}-bottom"></div>
			`)
		}
	}

	const canvas = document.querySelector<HTMLCanvasElement>('#canvas1')//c1
	if(canvas && bgColor) canvas.style.backgroundColor = bgColor;
	const ctx :CanvasRenderingContext2D|null|undefined = canvas?.getContext('2d');

	let cens :string;//NO left <- -> right NO up <- -> bottom NO
	let cdnt :number = Math.floor( Math.random() * 100 )//random
	let timer :number//timer
	let yum :number = 2//counter
	let r :number[] = [ Math.floor(cdnt / 10) * size ]//right
	let u :number[] = [ cdnt % 10 * size ]//up
	let Svs = {
		YSrch: Math.floor(cdnt / 10),
		XSrch: cdnt % 10,
		sec: 700,
	};

	function gameOver() :void{

		clearTimeout(timer)
		document.onkeydown = null

		let pluScore :number = ((yum - 2) * 10)
		score += pluScore//plus to score
		if(pluScore > bestScore) bestScore = +pluScore//plus to best score!

		localStorage.setItem('score', String(score))
		localStorage.setItem('bestscore', String(bestScore))

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
		const center = document.querySelector<HTMLElement>("#center")

		if(center){
			center.style.background = "black"
			center.style.height = 600 +"px"
		}

		const restart = document.querySelector<HTMLImageElement>("#restart")
		if(restart){
			restart.onmousemove = function<HTMLImageElement>(){ this.src = "Images/Restart2.png" }
			restart.onmouseleave = function<HTMLImageElement>(){ this.src = "Images/Restart.png" }
			restart.onclick = () => location.reload()
		}
	}//GameOver//

	let checkGameOver = () :void => {

		if (r[0] === -size || r[0] === size*10 || u[0] === -size || u[0] === size*10) gameOver()

		for (let i = 4; i < yum; i++) if(r[i] === r[0] && u[i] === u[0]) gameOver()

	}//Game over//

	const plusTail = () :void => {

		for(let i = 100; i > 0; i--) {
			r[i] = r[i-1]
			u[i] = u[i-1]
		}
	}//Snake moves

	const minusEat = () :void => {

		let sSX = size * Svs.XSrch, sSY = size * Svs.YSrch

		if (r[0] === sSX && u[0] === sSY) {
			yum++
			Svs.sec -= 4
			newCrdntEat()
		}
	}//orng is dying

	const finish = () :void => {

		if (yum === 100) {
			document.body.style.background = "yellow"
			alert('Congratulations you won!')
			window.location.reload()
		}
	}//The End(?).

	const newCrdntEat = () :void => {

		cdnt = Math.floor(Math.random() * 100)//random

		Svs.YSrch = Math.floor(cdnt / 10)
		Svs.XSrch = cdnt % 10
		let sSX = size * Svs.XSrch, sSY = size * Svs.YSrch

		for(let i = 0; i < yum; i++) if(r[i] === sSX && u[i] === sSY) newCrdntEat()
	}//rundom number

	const fixEat = () :void => {

		if(ctx && eatColor) 
			creatingSquare(ctx, eatColor, size * Svs.XSrch, size * Svs.YSrch, size)
	}//Spawn orng square

	const makingSnake = () :void => {
		if(ctx && snakeColor) 
			for(let i = 0; i < yum; i++) 
				creatingSquare(ctx, snakeColor, r[i], u[i], size) 
	}

	let sequence = () :void => {

		ctx?.clearRect(0, 0, size*10, size*10)
		checkGameOver()
		plusTail()
		minusEat()
		finish()
		fixEat()
		makingSnake()
	}

	let eyes = (ctx :CanvasRenderingContext2D,add31 :number, add32 :number, up :number, rght :number, down :number, left :number) :void => {

		circle(ctx, r[0] + rght,		 u[0] + down, 6, 'white')
		circle(ctx, r[0] + rght + add31, u[0] + down + add32, 2.5, '#2965CA')
		circle(ctx, r[0] + up,			 u[0] + left, 6, 'white')
		circle(ctx, r[0] + up + add31,	 u[0] + left + add32, 2.5, '#2965CA')
	}

	const makeTurn = (ctx :CanvasRenderingContext2D, uORx :number[], size :number, fCens :string) :void => {

		clearTimeout(timer)
		cens = fCens
		uORx[0] += size
		sequence()
		if(cens === "up")   eyes(ctx, 0, -3, 40,  0,  0, 0 )
		if(cens === "rght")	eyes(ctx, 3,  0, 40, 40,  0, 40)
		if(cens === "down") eyes(ctx, 0,  3,  0, 40, 40, 40)
		if(cens === "left") eyes(ctx, -3, 0,  0,  0,  0, 40)
		
		timer = setTimeout(makeTurn, Svs.sec, uORx, size, fCens)
	}//moving

	document.onkeydown = (event: KeyboardEvent)  => {

		const ek :string = event.key
		const checkEk = (directionKeys :string[], ek :string): boolean => { return directionKeys.includes(ek) }

		if (cens !== "up" && checkEk(['ArrowDown', 'S', 's', 'ы', 'Ы'], ek) && ctx) makeTurn(ctx, u, size, "down")
		if (cens !== "rght" && checkEk(['ArrowLeft', 'A', 'a', 'ф', 'Ф'], ek) && ctx) makeTurn(ctx, r, -size, "left")
		if (cens !== "down" && checkEk(['ArrowUp', 'W', 'w', 'ц','Ц'], ek) && ctx) makeTurn(ctx, u, -size, "up")
		if (cens !== "left" && checkEk(['ArrowRight', 'D', 'd', 'в', 'В'], ek) && ctx) makeTurn(ctx, r, size, "rght")
	}

	if(buttonDown) buttonDown.onclick = () :void => {
		if(cens !== "up" && ctx) makeTurn(ctx, u, size, "down")//click on down
	}

	if(buttonLeft) buttonLeft.onclick = () :void => {
		if(cens !== "rght" && ctx) makeTurn(ctx, r, -size, "left")//click on left
	}

	if(buttonUp) buttonUp.onclick = () :void => {
		if(cens !== "down" && ctx) makeTurn(ctx, u, -size, "up")//click on up
	}

	if(buttonRight) buttonRight.onclick = () :void => {
		if(cens !== "left" && ctx) makeTurn(ctx, r, size, "rght")//click on right
	}
	
	if(ctx && snakeColor) creatingSquare(ctx, snakeColor, r[0], u[0], size)//snakeHead

	if(ctx) eyes(ctx, 0, -3, 40,  0,  0, 0 )// create eyes Snake

	newCrdntEat()
	fixEat()
}//Snake