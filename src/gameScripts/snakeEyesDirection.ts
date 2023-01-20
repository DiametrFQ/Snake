import paintEyesSnake from "../paint/paintEyesSnake.js"
import CglobalSettings from "../global/settings.js"

const snakeEyesDirection = (globalSettings: CglobalSettings, ctx: CanvasRenderingContext2D, snakeMove: string) => {

    if (snakeMove === "up")   paintEyesSnake(globalSettings, ctx, 0, -3, 40,  0,  0,  0)
    if (snakeMove === "rght") paintEyesSnake(globalSettings, ctx, 3,  0, 40, 40,  0, 40)
    if (snakeMove === "down") paintEyesSnake(globalSettings, ctx, 0,  3,  0, 40, 40, 40)
    if (snakeMove === "left") paintEyesSnake(globalSettings, ctx, -3, 0,  0,  0,  0, 40)

    globalSettings.lastMove = snakeMove
}

export default snakeEyesDirection