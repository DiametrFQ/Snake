const finish = (globalSettings) => {
    if (globalSettings.tailLenght === 100) {
        document.body.style.background = "yellow";
        alert('Congratulations you won!');
        window.location.reload();
    }
};
export default finish;
//# sourceMappingURL=finish.js.map