import paintEyesSnake from "../paint/paintEyesSnake.js";
const snakeEyesDirection = (globalSettings, ctx, snakeMove) => {
    if (snakeMove === "up")
        paintEyesSnake(globalSettings, ctx, 0, -3, 40, 0, 0, 0);
    if (snakeMove === "rght")
        paintEyesSnake(globalSettings, ctx, 3, 0, 40, 40, 0, 40);
    if (snakeMove === "down")
        paintEyesSnake(globalSettings, ctx, 0, 3, 0, 40, 40, 40);
    if (snakeMove === "left")
        paintEyesSnake(globalSettings, ctx, -3, 0, 0, 0, 0, 40);
    globalSettings.lastMove = snakeMove;
};
export default snakeEyesDirection;
//# sourceMappingURL=snakeEyesDirection.js.map