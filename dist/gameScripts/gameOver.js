const gameOver = (globalSettings, score, bestScore) => {
    clearTimeout(globalSettings.timer);
    document.onkeydown = null;
    score += globalSettings.getPluScore();
    if (globalSettings.getPluScore() > bestScore)
        bestScore = globalSettings.getPluScore();
    localStorage.setItem('score', String(score));
    localStorage.setItem('bestscore', String(bestScore));
    clearTimeout(globalSettings.timer);
    document.body.innerHTML = '';
    document.body.insertAdjacentHTML('beforeend', `
        <span id="version-font">Version: </span><span id="version-id">1.3.4.245</span>
        <div id="center">
            <img id="gameover" src="Images/GameOver.png" alt="" />
            <div class="score" id="scoreITG">Your score in this game: ${globalSettings.getPluScore()}</div>
            <div class="score" id="bScore">Best score: ${bestScore}</div>
            <div class="score" id="tScorEv">Total score ever: ${score}</div>
            <img id="restart" src="Images/Restart.png" alt="" />
        </div>
    `);
    const center = document.querySelector("#center");
    center.style.background = "black";
    center.style.height = 600 + "px";
    const ImgRestart = document.querySelector("#restart");
    ImgRestart.onmousemove = function () { this.src = "Images/Restart2.png"; };
    ImgRestart.onmouseleave = function () { this.src = "Images/Restart.png"; };
    ImgRestart.onclick = () => location.reload();
};
export default gameOver;
//# sourceMappingURL=gameOver.js.map