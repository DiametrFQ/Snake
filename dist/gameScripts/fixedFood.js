import paintSquare from "../paint/square.js";
const spawnFood = (ctx, foodColor, globalSettings) => {
    paintSquare(ctx, foodColor, globalSettings.size * globalSettings.XSrch, globalSettings.size * globalSettings.YSrch, globalSettings.size);
};
export default spawnFood;
//# sourceMappingURL=fixedFood.js.map