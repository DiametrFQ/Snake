import CglobalSettings from "../global/settings.js"
const gameOver = (globalSettings: CglobalSettings, score: number, bestScore: number) => {

    clearTimeout(globalSettings.timer)
    document.onkeydown = null

    score += globalSettings.getPluScore()
    if(globalSettings.getPluScore() > bestScore) bestScore = globalSettings.getPluScore()//plus to best score!

    localStorage.setItem('score', String(score))
    localStorage.setItem('bestscore', String(bestScore))

    clearTimeout(globalSettings.timer)//I don't know why, but it doesn't work without the second clearTimeout

    document.body.innerHTML = '' 
    document.body.insertAdjacentHTML('beforeend', `
        <span id="version-font">Version: </span><span id="version-id">1.3.4.245</span>
        <div id="center">
            <img id="gameover" src="Images/GameOver.png" alt="" />
            <div class="score" id="scoreITG">Your score in this game: ${globalSettings.getPluScore()}</div>
            <div class="score" id="bScore">Best score: ${bestScore}</div>
            <div class="score" id="tScorEv">Total score ever: ${score}</div>
            <img id="restart" src="Images/Restart.png" alt="" />
        </div>
    `)
    const center = document.querySelector<HTMLElement>("#center")!
    center.style.background = "black"
    center.style.height = 600 +"px"
    
    const ImgRestart = document.querySelector<HTMLImageElement>("#restart")!
    ImgRestart.onmousemove = function<HTMLImageElement>(){ this.src = "Images/Restart2.png" }
    ImgRestart.onmouseleave = function<HTMLImageElement>(){ this.src = "Images/Restart.png" }
    ImgRestart.onclick = () => location.reload()
    
}//GameOver//

export default gameOver