import paintSquare from "./paint/square.js";
import paintSnakeOnCanvasForEdit from "./paint/snakeOnCanvasForEdit.js";
import CglobalSettings from "./global/settings.js";
import start from "./gameScripts/start.js";

const globalSettings = new CglobalSettings()

let score = Number(localStorage.getItem('score'))// Preserve the color of the overall result
let bestScore = Number(localStorage.getItem('bestscore'))//Keeping the color of the Best Score
let bgColor = localStorage.getItem('bgColor') ?? '#00ff00'//Keeping the color of the background
let foodColor = localStorage.getItem('foodColor') ?? '#ffb500'//Keeping the color of the food
let snakeColor = localStorage.getItem('snakeColor') ?? '#0000ff'//Keeping the color of the snake

const CanvasForEditColors :HTMLCanvasElement = document.querySelector("#canvas2")!
const CtxForEdit = CanvasForEditColors.getContext('2d')!
const InputColorBg :HTMLInputElement = document.querySelector("#inputColorBg")!
const InputColorSnake :HTMLInputElement = document.querySelector("#inputColorSnake")!
const InputColorFood :HTMLInputElement = document.querySelector("#inputColorColor")!

InputColorBg.oninput = function<HTMLInputElement>() 
{
	bgColor = this.value
	localStorage.setItem('bgColor', this.value)
	CanvasForEditColors.style.backgroundColor = this.value
}
InputColorSnake.oninput = function<HTMLInputElement>() 
{
	snakeColor = this.value
	localStorage.setItem('snakeColor', this.value)
	paintSnakeOnCanvasForEdit(CtxForEdit, snakeColor)
}
InputColorFood.oninput = function<HTMLInputElement>() 
{
	foodColor = this.value
	localStorage.setItem('foodColor', this.value)
	paintSquare(CtxForEdit, foodColor, 217, 217, 30)
}

const Start :HTMLElement = document.querySelector("#start")!
Start.onclick = () => start(globalSettings, score, bestScore, bgColor, foodColor, snakeColor)

document.onkeydown = (event :KeyboardEvent) => { if(event.key === "Enter") start(globalSettings, score, bestScore, bgColor, foodColor, snakeColor) }

window.onload = () => {
	CanvasForEditColors.style.backgroundColor = bgColor

	InputColorSnake.value = snakeColor
	InputColorFood.value = foodColor
	InputColorBg.value = bgColor

	paintSnakeOnCanvasForEdit(CtxForEdit, snakeColor)
	paintSquare(CtxForEdit, foodColor, 217, 217, 30)//Eat on Start
}//Start