var _a, _b, _c;
import paintSquare from "./paint/square.js";
import paintSnakeOnCanvasForEdit from "./paint/snakeOnCanvasForEdit.js";
import CglobalSettings from "./global/settings.js";
import start from "./gameScripts/start.js";
const globalSettings = new CglobalSettings();
let score = Number(localStorage.getItem('score'));
let bestScore = Number(localStorage.getItem('bestscore'));
let bgColor = (_a = localStorage.getItem('bgColor')) !== null && _a !== void 0 ? _a : '#00ff00';
let foodColor = (_b = localStorage.getItem('foodColor')) !== null && _b !== void 0 ? _b : '#ffb500';
let snakeColor = (_c = localStorage.getItem('snakeColor')) !== null && _c !== void 0 ? _c : '#0000ff';
const CanvasForEditColors = document.querySelector("#canvas2");
const CtxForEdit = CanvasForEditColors.getContext('2d');
const InputColorBg = document.querySelector("#inputColorBg");
const InputColorSnake = document.querySelector("#inputColorSnake");
const InputColorFood = document.querySelector("#inputColorColor");
InputColorBg.oninput = function () {
    bgColor = this.value;
    localStorage.setItem('bgColor', this.value);
    CanvasForEditColors.style.backgroundColor = this.value;
};
InputColorSnake.oninput = function () {
    snakeColor = this.value;
    localStorage.setItem('snakeColor', this.value);
    paintSnakeOnCanvasForEdit(CtxForEdit, snakeColor);
};
InputColorFood.oninput = function () {
    foodColor = this.value;
    localStorage.setItem('foodColor', this.value);
    paintSquare(CtxForEdit, foodColor, 217, 217, 30);
};
const Start = document.querySelector("#start");
Start.onclick = () => start(globalSettings, score, bestScore, bgColor, foodColor, snakeColor);
document.onkeydown = (event) => { if (event.key === "Enter")
    start(globalSettings, score, bestScore, bgColor, foodColor, snakeColor); };
window.onload = () => {
    CanvasForEditColors.style.backgroundColor = bgColor;
    InputColorSnake.value = snakeColor;
    InputColorFood.value = foodColor;
    InputColorBg.value = bgColor;
    paintSnakeOnCanvasForEdit(CtxForEdit, snakeColor);
    paintSquare(CtxForEdit, foodColor, 217, 217, 30);
};
//# sourceMappingURL=script.js.map