const paintCircle = (ctx :CanvasRenderingContext2D, x :number, y: number, r :number, color :string) :void => {
	ctx.beginPath()
	ctx.strokeStyle = 'black'
	ctx.fillStyle = color
	ctx.arc(x + 15, y + 15, r, 0, 2*Math.PI, true)
	ctx.stroke() 
	ctx.fill()
}

export default paintCircle