import paintSquare from "../../paint/square";
const makingSnake = (ctx, snakeColor, globalSettings) => {
    if (snakeColor)
        for (let i = 0; i < globalSettings.tailLenght; i++)
            paintSquare(ctx, snakeColor, globalSettings.r[i], globalSettings.u[i], globalSettings.size);
};
export default makingSnake;
//# sourceMappingURL=makingSnake.js.map