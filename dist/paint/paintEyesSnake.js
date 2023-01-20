import paintCircle from "../paint/circle.js";
const paintEyesSnake = (globalSettings, ctx, add31, add32, up, rght, down, left) => {
    const firstRight = globalSettings.r[0];
    const firstUp = globalSettings.u[0];
    paintCircle(ctx, firstRight + rght, firstUp + down, 6, 'white');
    paintCircle(ctx, firstRight + rght + add31, firstUp + down + add32, 2.5, '#2965CA');
    paintCircle(ctx, firstRight + up, firstUp + left, 6, 'white');
    paintCircle(ctx, firstRight + up + add31, firstUp + left + add32, 2.5, '#2965CA');
};
export default paintEyesSnake;
//# sourceMappingURL=paintEyesSnake.js.map