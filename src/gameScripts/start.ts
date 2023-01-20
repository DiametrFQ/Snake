import CglobalSettings from "../global/settings.js"
import makeTurn from "./makeTurn.js"
import paintSquare from "../paint/square.js"
import paintEyesSnake from "../paint/paintEyesSnake.js"
import spawnFood from "./fixedFood.js"
import newCrdntFood from "./newCrdntFood.js"

const start = (globalSettings: CglobalSettings, score:number, bestScore: number, bgColor: string, foodColor: string, snakeColor: string) =>{

	document.body.innerHTML = ''
	document.body.insertAdjacentHTML('beforeend', `
		<div id="version-font">Version:</span><span id="version-id"> 1.3.4.245</div>
		<canvas id="CanvasForPlay" width="${globalSettings.size * 10}" height="${globalSettings.size * 10}"></canvas>
		<div id="buttons">
			<div class="arrow-up"></div>
			<div class="arrow-down"></div>
			<div class="arrow-left"></div>
			<div class="arrow-right"></div>
		</div>
	`)

	const ButtonUp :HTMLElement = document.querySelector(".arrow-up")!
	const ButtonDown :HTMLElement = document.querySelector(".arrow-down")!
	const ButtonLeft :HTMLElement = document.querySelector(".arrow-left")!
	const ButtonRight :HTMLElement = document.querySelector(".arrow-right")!

	const buttons = [ButtonUp, ButtonRight, ButtonDown, ButtonLeft]
	const side = ['up', 'right', 'down', 'left']

	const navUA :string = navigator.userAgent;
	if(navUA.match('iPhone') || navUA.match('Android') || navUA.match('iPad') || navUA.match('RIM')){
		for(let i = 0; i < side.length; i++){

			buttons[i].insertAdjacentHTML('beforeend', `
				<div class="arrow-${side[i]}-top"></div>
				<div class="arrow-${side[i]}-bottom"></div>
			`)
		}
	}

	const CanvasForPlay = document.querySelector<HTMLCanvasElement>('#CanvasForPlay')!//c1
	CanvasForPlay.style.backgroundColor = bgColor;

	const ctx :CanvasRenderingContext2D = CanvasForPlay.getContext('2d')!;

	// const makeTurn = (ctx: CanvasRenderingContext2D, globalSettings: CglobalSettings, uORx :number[], size :number, snakeMove :string) => {

	// 	clearTimeout(globalSettings.timer)
		
	// 	uORx[0] += size
	// 	globalSettings.lastMove = snakeMove
	// 	move(ctx, foodColor, snakeColor, globalSettings, snakeMove, score, bestScore)

	// 	globalSettings.timer = setTimeout(makeTurn, globalSettings.sec, ctx, globalSettings, uORx, size, snakeMove) 
	// }

	document.onkeydown = (event: KeyboardEvent)  => {

		const checkEk = (directionKeys :string[]): boolean => directionKeys.includes(event.key)

		if (globalSettings.lastMove !== "up" && checkEk(['ArrowDown', 'S', 's', 'ы', 'Ы']) && ctx) 
			makeTurn(ctx, globalSettings, globalSettings.u, globalSettings.size, "down", foodColor, snakeColor,score, bestScore)
		if (globalSettings.lastMove !== "rght" && checkEk(['ArrowLeft', 'A', 'a', 'ф', 'Ф']) && ctx) 
			makeTurn(ctx, globalSettings, globalSettings.r, -globalSettings.size, "left", foodColor, snakeColor,score, bestScore)
		if (globalSettings.lastMove !== "down" && checkEk(['ArrowUp', 'W', 'w', 'ц','Ц']) && ctx) 
			makeTurn(ctx, globalSettings, globalSettings.u, -globalSettings.size, "up", foodColor, snakeColor,score, bestScore)
		if (globalSettings.lastMove !== "left" && checkEk(['ArrowRight', 'D', 'd', 'в', 'В']) && ctx) 
			makeTurn(ctx, globalSettings, globalSettings.r, globalSettings.size, "rght", foodColor, snakeColor,score, bestScore)
	}

	ButtonDown.onclick = () => {
		if(globalSettings.lastMove !== "up") makeTurn(ctx, globalSettings, globalSettings.u, globalSettings.size, "down",
		foodColor, 
		snakeColor,
		score, 
		bestScore)
	}

	ButtonLeft.onclick = () => {
		if(globalSettings.lastMove !== "rght") makeTurn(ctx, globalSettings, globalSettings.r, -globalSettings.size, "left",
		foodColor, 
		snakeColor,
		score, 
		bestScore)
	}

	ButtonUp.onclick = () => {
		if(globalSettings.lastMove !== "down") makeTurn(ctx, globalSettings, globalSettings.u, -globalSettings.size, "up",
		foodColor, 
		snakeColor,
		score, 
		bestScore)
	}

	ButtonRight.onclick = () => {
		if(globalSettings.lastMove !== "left") makeTurn(ctx, globalSettings, globalSettings.r, globalSettings.size, "rght",
		foodColor, 
		snakeColor,
		score, 
		bestScore)
	}
	
	paintSquare(ctx, snakeColor, globalSettings.r[0], globalSettings.u[0], globalSettings.size)//snakeHead
	paintEyesSnake(globalSettings, ctx, 0, -3, 40,  0,  0, 0 )

	newCrdntFood(globalSettings)
	spawnFood(ctx, foodColor, globalSettings)
}

export default start