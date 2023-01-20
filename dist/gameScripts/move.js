import spawnFood from "./fixedFood.js";
import plusTail from "./plusTail.js";
import minusFood from "./minusFood.js";
import finish from "./finish.js";
import makingSnake from "./makingSnake.js";
import snakeEyesDirection from "./snakeEyesDirection.js";
import checkGameOver from "./checkGameOver.js";
const move = (ctx, foodColor, snakeColor, globalSettings, snakeMove, score, bestScore) => {
    ctx.clearRect(0, 0, globalSettings.size * 10, globalSettings.size * 10);
    checkGameOver(globalSettings, score, bestScore);
    plusTail(globalSettings);
    minusFood(globalSettings);
    finish(globalSettings);
    spawnFood(ctx, foodColor, globalSettings);
    makingSnake(ctx, snakeColor, globalSettings);
    snakeEyesDirection(globalSettings, ctx, snakeMove);
};
export default move;
//# sourceMappingURL=move.js.map