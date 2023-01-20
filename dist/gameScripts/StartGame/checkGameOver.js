import gameOver from "../gameOver";
const checkGameOver = (globalSettings, score, bestScore) => {
    if (globalSettings.r[0] === -globalSettings.size ||
        globalSettings.r[0] === globalSettings.size * 10 ||
        globalSettings.u[0] === -globalSettings.size ||
        globalSettings.u[0] === globalSettings.size * 10)
        gameOver(globalSettings, score, bestScore);
    for (let i = 4; i < globalSettings.tailLenght; i++)
        if (globalSettings.r[i] === globalSettings.r[0] &&
            globalSettings.u[i] === globalSettings.u[0])
            gameOver(globalSettings, score, bestScore);
};
export default checkGameOver;
//# sourceMappingURL=checkGameOver.js.map