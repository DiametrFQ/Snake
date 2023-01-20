import CglobalSettings from "../global/settings.js"
import gameOver from "./gameOver.js"
const checkGameOver = (globalSettings: CglobalSettings, score: number, bestScore: number) => {

    if (
        globalSettings.r[0] === -globalSettings.size || 
        globalSettings.r[0] === globalSettings.size * 10 || 
        globalSettings.u[0] === -globalSettings.size || 
        globalSettings.u[0] === globalSettings.size * 10

    ) gameOver(globalSettings, score, bestScore)

    for (let i = 4; i < globalSettings.tailLenght; i++) 
        if(
            globalSettings.r[i] === globalSettings.r[0] && 
            globalSettings.u[i] === globalSettings.u[0]

        ) gameOver(globalSettings, score, bestScore)

}//Game over//

export default checkGameOver