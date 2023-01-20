class CglobalSettings{
	public timer :ReturnType<typeof setTimeout>//timer
	public lastMove :string//NO left <- -> right NO up <- -> bottom NO

	public size = 70
	public sec = 700
	public tailLenght = 2
	public crdnt :number = Math.floor( Math.random() * 100 )

	public YSrch :number = Math.floor(this.crdnt / 10)
	public XSrch :number = this.crdnt % 10

	public r :number[] = [ Math.floor(this.crdnt / 10) * this.size ]//right
	public u :number[] = [ this.crdnt % 10 * this.size ]

	getPluScore = () => 10*(this.tailLenght - 2)
};

export default CglobalSettings