const paintSquare = (ctx, color, x, y, length) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(length + x, y);
    ctx.lineTo(length + x, y + length);
    ctx.lineTo(x, y + length);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fill();
};
export default paintSquare;
//# sourceMappingURL=square.js.map