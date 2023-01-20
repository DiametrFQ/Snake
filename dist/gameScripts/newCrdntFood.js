const newCrdntFood = (globalSettings) => {
    globalSettings.crdnt = Math.floor(Math.random() * 100);
    globalSettings.YSrch = Math.floor(globalSettings.crdnt / 10);
    globalSettings.XSrch = globalSettings.crdnt % 10;
    let sSX = globalSettings.size * globalSettings.XSrch, sSY = globalSettings.size * globalSettings.YSrch;
    for (let i = 0; i < globalSettings.tailLenght; i++)
        if (globalSettings.r[i] === sSX && globalSettings.u[i] === sSY)
            newCrdntFood(globalSettings);
};
export default newCrdntFood;
//# sourceMappingURL=newCrdntFood.js.map