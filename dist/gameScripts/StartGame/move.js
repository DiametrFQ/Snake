import spawnFood from "./fixedFood";
import plusTail from "../plusTail";
import minusFood from "./minusFood";
import finish from "./finish";
import makingSnake from "./makingSnake";
import snakeEyesDirection from "../snakeEyesDirection";
import checkGameOver from "../checkGameOver";
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