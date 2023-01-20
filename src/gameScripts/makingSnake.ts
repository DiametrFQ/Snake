import CglobalSettings from "../global/settings.js"
import paintSquare from "../paint/square.js"

const makingSnake = (ctx: CanvasRenderingContext2D, snakeColor: string, globalSettings: CglobalSettings) => {
    
    if(snakeColor) for(let i = 0; i < globalSettings.tailLenght; i++){
        paintSquare(ctx, snakeColor, globalSettings.r[i], globalSettings.u[i], globalSettings.size) 
    } 
}

export default makingSnake