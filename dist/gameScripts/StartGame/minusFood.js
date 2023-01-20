import newCrdntFood from "../newCrdntFood";
const minusFood = (globalSettings) => {
    const sSX = globalSettings.size * globalSettings.XSrch;
    const sSY = globalSettings.size * globalSettings.YSrch;
    if (globalSettings.r[0] === sSX && globalSettings.u[0] === sSY) {
        globalSettings.tailLenght++;
        globalSettings.sec -= 4;
        newCrdntFood(globalSettings);
    }
};
export default minusFood;
//# sourceMappingURL=minusFood.js.map