import CglobalSettings  from "../global/settings.js";
import newCrdntFood from "./newCrdntFood.js"

const minusFood = (globalSettings: CglobalSettings) => {
    const sSX = globalSettings.size * globalSettings.XSrch
    const sSY = globalSettings.size * globalSettings.YSrch

    if (globalSettings.r[0] === sSX && globalSettings.u[0] === sSY) {
        globalSettings.tailLenght++
        globalSettings.sec -= 4
        newCrdntFood(globalSettings)
    }
}//orng is dying
export default minusFood