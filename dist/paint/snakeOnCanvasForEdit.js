import paintSquare from './square.js';
const paintSnakeOnCanvasForEdit = (ctx, snakeColor) => {
    for (let i = 0; i < 5; i++)
        paintSquare(ctx, snakeColor, 0, 31 * i, 30);
    for (let i = 4; i < 12; i++)
        paintSquare(ctx, snakeColor, 31 * (i - 4), 124, 30);
    for (let i = 11; i < 14; i++)
        paintSquare(ctx, snakeColor, 217, 124 + 31 * (i - 11), 30);
};
export default paintSnakeOnCanvasForEdit;
//# sourceMappingURL=snakeOnCanvasForEdit.js.map