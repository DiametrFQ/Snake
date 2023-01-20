import move from "./move.js";
const makeTurn = (ctx, globalSettings, uORx, size, snakeMove, foodColor, snakeColor, score, bestScore) => {
    clearTimeout(globalSettings.timer);
    uORx[0] += size;
    globalSettings.lastMove = snakeMove;
    move(ctx, foodColor, snakeColor, globalSettings, snakeMove, score, bestScore);
    globalSettings.timer = setTimeout(makeTurn, globalSettings.sec, ctx, globalSettings, uORx, size, snakeMove, foodColor, snakeColor, score, bestScore);
};
export default makeTurn;
//# sourceMappingURL=makeTurn.js.map