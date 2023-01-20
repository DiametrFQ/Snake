const plusTail = (globalSettings) => {
    for (let i = 100; i > 0; i--) {
        globalSettings.r[i] = globalSettings.r[i - 1];
        globalSettings.u[i] = globalSettings.u[i - 1];
    }
};
export default plusTail;
//# sourceMappingURL=plusTail.js.map