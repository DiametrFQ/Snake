let score = +localStorage.getItem('score');// Preserve the color of the overall result
let bestScore = +localStorage.getItem('bestscore');//Keeping the color of the Best Score
let bgcolor = localStorage.getItem('bgcolor');//Keeping the color of the background
let snacolor = localStorage.getItem('snacolor');//Keeping the color of the snake
let eacolor = localStorage.getItem('eacolor');//Keeping the color of the food
const navUA = navigator.userAgent;
const center = document.querySelector("#center");
window.onload = function(){
	if (bgcolor==null||snacolor==null||eacolor==null){
		bgcolor = '#00ff00';
		snacolor = '#0000ff';
		eacolor = '#ffb500';
	}
	document.querySelector("#color1").value = bgcolor;
	document.querySelector("#color2").value = snacolor;
	document.querySelector("#color3").value = eacolor;
	document.querySelector("#c2").style.backgroundColor = bgcolor;
	document.querySelector(`#yum`).style.backgroundColor = eacolor;
		
	for(i=0;i<14;i++)document.querySelector("#tail").innerHTML += `<div class="tails" id="tails${i}"></div>`;
	
	for(i=0;i<5;i++){
		document.querySelector(`#tails${i}`).style.left = 0 + "px";
		document.querySelector(`#tails${i}`).style.top = 0+30*i+"px";
	}for(i=4;i<12;i++){
        document.querySelector(`#tails${i}`).style.left= 0+31*(i-4)+"px";
		document.querySelector(`#tails${i}`).style.top = 120+"px";
	}
	for(i=11;i<14;i++){
		document.querySelector(`#tails${i}`).style.left= 217+"px";
		document.querySelector(`#tails${i}`).style.top = 120+31*(i-11)+"px";
	}//Creates a non-playable snake for example
	for(i=0;i<14;i++) document.querySelector(`#tails${i}`).style.backgroundColor = snacolor;
}//Start


document.querySelector("#color1").oninput = function(){
	bgcolor = this.value;
	document.querySelector("#c2").style.backgroundColor = bgcolor;
	localStorage.setItem('bgcolor',bgcolor);
}
document.querySelector("#color2").oninput = function(){
	snacolor = this.value;
	localStorage.setItem('snacolor',snacolor);
	for(i=0;i<14;i++)document.querySelector(`#tails${i}`).style.backgroundColor = snacolor;
}
document.querySelector("#color3").oninput = function(){
	eacolor = this.value;
	document.querySelector(`#yum`).style.backgroundColor = this.value;
	localStorage.setItem('eacolor',this.value);
}
document.querySelector("#start").onclick = () => Two();
document.onkeydown = (event)=> {if(event.key === "Enter")Two() }

function Two(){
	const size = 70;
	document.body.innerHTML = `<span id="version-font">Version:</span><span id="version-id"> 1.3.3.312</span><br />`;
	document.body.innerHTML += `<canvas id="c1" width="${size * 10}" height="${size * 10}"></canvas>`;
	document.body.innerHTML += `<div id="buttoms"></div>`;
	document.querySelector("#c1").style.backgroundColor = bgcolor;
	const canvas = document.querySelector('#c1');
	const buttoms = document.querySelector("#buttoms");
	buttoms.innerHTML += `<div class="arrow-up"></div>`;
	buttoms.innerHTML += `<div class="arrow-down"></div>`;
	buttoms.innerHTML += `<div class="arrow-left"></div>`;
	buttoms.innerHTML += `<div class="arrow-right"></div>`;
	const bUp = document.querySelector(".arrow-up");
	const bLeft = document.querySelector(".arrow-left");
	const bDown = document.querySelector(".arrow-down");
	const bRight = document.querySelector(".arrow-right");

	if(navUA.match('iPhone') || navUA.match('Android') || navUA.match('iPad') || navUA.match('RIM')) {
		bUp.innerHTML +=`<div class="arrow-up-top"></div>`;
		bUp.innerHTML +=`<div class="arrow-up-bottom"></div>`;
		bDown.innerHTML +=`<div class="arrow-down-top"></div>`;
		bDown.innerHTML +=`<div class="arrow-down-bottom"></div>`;
		bLeft.innerHTML +=`<div class="arrow-left-top"></div>`;
		bLeft.innerHTML +=`<div class="arrow-left-bottom"></div>`;
		bRight.innerHTML +=`<div class="arrow-right-top"></div>`;
		bRight.innerHTML +=`<div class="arrow-right-bottom"></div>`;
	}
	const ctx = canvas.getContext('2d');
	let mb;/*Doesnt let you go abroad*/ 
	let cens;//NO left <- -> right NO up <- -> bottom NO
	let cdnt = Math.floor(Math.random() * 100);//random
	let t;//timer
	let yum = 2;//yum-yum yummy!//hum
	let r = [Math.floor(cdnt / 10) * size];//right
	let u = [cdnt % 10 * size];//up
	let Saves = {
		YSearch: Math.floor(cdnt / 10),
		XSearch: cdnt % 10,
		sec: 700,
	};
	let pluScore;

	function scoreF(){
		clearTimeout(t);
		document.onkeydown = null;
		pluScore = +((yum - 2) * 10);
		score += pluScore;
		localStorage.setItem('score', +score);
		if(pluScore > bestScore)bestScore = +pluScore;
		localStorage.setItem('bestscore', bestScore);
		thend();
	}//plus to score and best score!//

	function thend(){
		clearTimeout(t);
		document.body.innerHTML = `<span id="version-font">Version:</span><span id="version-id"> 1.3.3.312</span>`;
		document.body.innerHTML += `<div id="center"></div>`;
		const center = document.querySelector("#center");
		center.innerHTML = `<img id="gameover" src="Images/GameOver.png" alt=""></img>`;
		center.innerHTML += `<div class="score" id="scoreITG">Your score in this game: ${pluScore}<div>`;
		center.innerHTML += `<div class="score" id="bScore">Best score: ${bestScore}<divn>`;
		center.innerHTML += `<div class="score" id="tScorEv">Total score ever: ${score}<div>`;
		center.innerHTML += `<img id="restart" src="Images/Restart.png" alt=""></img>`;
		center.style.background = "black";
		center.style.height = 600+"px";
		const restart = document.querySelector("#restart");
		restart.onmousemove = function() { this.src = "Images/Restart2.png" }
		restart.onmouseleave = function() { this.src = "Images/Restart.png" }
		restart.onclick =()=> { location.reload() }
	}//GameOver//

	function stop() {
		if (r[0] === -size) scoreF();
		else if (r[0] === size*10) scoreF();
		else if (u[0] === -size) scoreF();
		else if (u[0] === size*10) scoreF();
		else mb = 1;
		for (i = 5; i < yum; i++) if(r[i] === r[0] && u[i] === u[0]) scoreF();
	}//Game over//

	function move(){if(mb === 1) for(i = 100;i > 0; i--) r[i]=r[i-1], u[i]=u[i-1];}//Snake moves

	function square(color,x, y) {
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.moveTo(x, y);
		ctx.lineTo(size + x, y);
		ctx.lineTo(size + x, y + size);
		ctx.lineTo(x, y + size);
		ctx.lineTo(x, y);
		ctx.stroke();
		ctx.fill();
	}

	function blue(){square(snacolor,r[0], u[0])}//blue square//

	function minus() {
		let sSX = size * Saves.XSearch, sSY = size * Saves.YSearch;
		if (r[0] === sSX && u[0] === sSY) {
			yum++;
			Saves.sec -= 4;
			neW();
		}
	}//orng is dying

	function finish() {
		if (yum === 100) {
			document.body.style.background = "yellow";
			alert('Congratulations you won!');
			location.reload();
		}
	}//The End(?).

	function neW() {
		cdnt = Math.floor(Math.random() * 100);//random

		Saves.YSearch = Math.floor(cdnt / 10);
		Saves.XSearch = cdnt % 10;

		let sSX = size * Saves.XSearch, sSY = size * Saves.YSearch;
		for(i = 0; i < yum; i++)if(r[i] === sSX && u[i] === sSY) neW();
	}//rundom number

	function fiX() {square(eacolor, size * Saves.XSearch, size * Saves.YSearch)}//Spawn orng square//

	function plus() {for(i = 0; i < yum; i++)square(snacolor, r[i], u[i])}//+tail

	function sequence(){
		ctx.clearRect(0, 0, size*10, size*10);
		stop();
		move();
		blue();
		minus();
		finish();
		fiX();
		plus();
	}//sequence

	const makeTurn = (uORx, one, censNum) => {
		clearTimeout(t);
		uORx[0] += one*size;
		sequence();
		cens = censNum;		
		t = setTimeout(makeTurn, Saves.sec, uORx, one, censNum);
	}//moving

	blue()

	document.onkeydown = (event) => {
		const ek = event.key
		const checkEk = (directionKeys, ek) => {return directionKeys.includes(ek);}

		if (cens !== 1 && checkEk(['ArrowLeft', 'A', 'a', 'ф', 'Ф'], ek)) makeTurn(r, -1, 3);
		if (cens !== 2 && checkEk(['ArrowUp', 'W', 'w', 'ц','Ц'], ek)) makeTurn(u, -1, 4);
		if (cens !== 3 && checkEk(['ArrowRight', 'D', 'd', 'в', 'В'], ek)) makeTurn(r, 1, 1);
		if (cens !== 4 && checkEk(['ArrowDown', 'S', 's', 'ы', 'Ы'], ek)) makeTurn(u, 1, 2);
	}
	bLeft.onclick = () => {if(cens !== 1) makeTurn(r, -1, 3)}//click on left
	bUp.onclick = () => {if(cens !== 2) makeTurn(u, -1, 4)}//click on up
	bRight.onclick = () => {if(cens !== 3) makeTurn(r, 1, 1)}//click on right
	bDown.onclick = () => {if(cens !== 4) makeTurn(u, 1, 2)}//click on down

	neW();
	fiX();
}//Snake
