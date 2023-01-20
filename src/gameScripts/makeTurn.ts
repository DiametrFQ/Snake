import CglobalSettings from "../global/settings.js"	
import move from "./move.js"

const makeTurn = (
	ctx: CanvasRenderingContext2D, 
	globalSettings: CglobalSettings, 
	uORx :number[], 
	size :number, 
	snakeMove :string,
	foodColor: string, 
	snakeColor: string,
	score: number, 
	bestScore: number,
	) => {

	clearTimeout(globalSettings.timer)
	
	uORx[0] += size
	globalSettings.lastMove = snakeMove
	move(ctx, foodColor, snakeColor, globalSettings, snakeMove, score, bestScore)

	globalSettings.timer = setTimeout
	(
		makeTurn, 
		globalSettings.sec, 
		ctx, globalSettings, uORx, size, snakeMove,	foodColor, snakeColor,score, bestScore
	) 
}
export default makeTurn