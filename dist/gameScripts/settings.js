class CglobalSettings {
    constructor() {
        this.size = 70;
        this.sec = 700;
        this.tailLenght = 2;
        this.crdnt = Math.floor(Math.random() * 100);
        this.YSrch = Math.floor(this.crdnt / 10);
        this.XSrch = this.crdnt % 10;
        this.r = [Math.floor(this.crdnt / 10) * this.size];
        this.u = [this.crdnt % 10 * this.size];
        this.getPluScore = () => 10 * (this.tailLenght - 2);
    }
}
;
export default CglobalSettings;
//# sourceMappingURL=settings.js.map