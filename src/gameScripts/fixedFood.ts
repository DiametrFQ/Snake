import paintSquare from "../paint/square.js"
import CglobalSettings from "../global/settings.js"

const spawnFood = (
    ctx :CanvasRenderingContext2D, 
    foodColor: string, 
    globalSettings: CglobalSettings
) => {
    paintSquare
    (
        ctx, 
        foodColor, 
        globalSettings.size * globalSettings.XSrch, 
        globalSettings.size * globalSettings.YSrch, 
        globalSettings.size
    )
}

export default spawnFood