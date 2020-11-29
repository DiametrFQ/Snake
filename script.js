let score = +localStorage.getItem('score');// Preserve the color of the overall result
let bestScore = +localStorage.getItem('bestscore');//Keeping the color of the Best Score
let bgcolor = localStorage.getItem('bgcolor');//Keeping the color of the background
let snacolor = localStorage.getItem('snacolor');//Keeping the color of the snake
let eacolor = localStorage.getItem('eacolor');//Keeping the color of the food
let navUA = navigator.userAgent;
let center = document.querySelector("#center");
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

	if (navUA.match('iPhone') || navUA.match('Android') || navUA.match('iPad') || navUA.match('RIM')) {center.style.marginLeft = -120+"px";}//mobile version:Start
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
document.onkeydown =(event)=> {if(event.key === "Enter")Two()}

function Two(){
	const size = 70;
	document.body.innerHTML = `<span id="version-font">Version:</span><span id="version-id"> 1.3.3.312</span><br />`;
	document.body.innerHTML += `<canvas id="c1" width="${size * 10}" height="${size * 10}"></canvas>`;
	document.body.innerHTML += `<div id="buttoms"></div>`;
	document.querySelector("#c1").style.backgroundColor = bgcolor;
	let canvas = document.getElementById('c1');
	let buttoms = document.querySelector("#buttoms");
	buttoms.innerHTML += `<div class="arrow-up"></div>`;
	buttoms.innerHTML += `<div class="arrow-down"></div>`;
	buttoms.innerHTML += `<div class="arrow-left"></div>`;
	buttoms.innerHTML += `<div class="arrow-right"></div>`;
	let bUp = document.querySelector(".arrow-up");
	let bLeft = document.querySelector(".arrow-left");
	let bDown = document.querySelector(".arrow-down");
	let bRight = document.querySelector(".arrow-right");

	if(navUA.match('iPhone') || navUA.match('Android') || navUA.match('iPad') || navUA.match('RIM')) {
		document.querySelector("#c1").style.marginLeft = 100+'px';

		bUp.innerHTML +=`<div class="arrow-up-top"></div>`;
		bUp.innerHTML +=`<div class="arrow-up-bottom"></div>`;
		bDown.innerHTML +=`<div class="arrow-down-top"></div>`;
		bDown.innerHTML +=`<div class="arrow-down-bottom"></div>`;
		bLeft.innerHTML +=`<div class="arrow-left-top"></div>`;
		bLeft.innerHTML +=`<div class="arrow-left-bottom"></div>`;
		bRight.innerHTML +=`<div class="arrow-right-top"></div>`;
		bRight.innerHTML +=`<div class="arrow-right-bottom"></div>`;
	}
	let ctx = canvas.getContext('2d');
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
		pluScore = +((yum - 2) * 10);
		score += pluScore;
		localStorage.setItem('score',+score);
		if(pluScore > bestScore) bestScore = +pluScore;
		localStorage.setItem('bestscore',bestScore);
		thend();
	}//plus to score and best score!//

	function thend(){
		clearTimeout(t);
		document.body.innerHTML = `<span id="version-font">Version:</span><span id="version-id"> 1.3.3.312</span>`;
		document.body.innerHTML += `<div id="center"></div>`;
		let center = document.querySelector("#center");
		center.innerHTML = `<img id="gameover" src="Images/GameOver.png" alt=""></img>`;
		center.innerHTML += `<div class="score" id="scoreITG">Your score in this game: ${pluScore}<div>`;
		center.innerHTML += `<div class="score" id="bScore">Best score: ${bestScore}<divn>`;
		center.innerHTML += `<span class="score" id="tScorEv">Total score ever: ${score}<span>`;
		center.innerHTML += `<img id="restart" src="Images/Restart.png" alt=""></img>`;
		center.style.background = "black";
		center.style.top = 100+"px";
		center.style.height = 600+"px";
		if (navUA.match('iPhone') || navUA.match('Android') || navUA.match('iPad') || navUA.match('RIM')) {
			center.style.marginLeft = -130+'px';
		}//mobile version:GameOver
		let restart = document.querySelector("#restart");
		restart.onmousemove = function() { this.src = "Images/Restart2.png" }
		restart.onmouseleave = function() { this.src = "Images/Restart.png" }
		restart.onclick =()=> { location.reload() }
	}//GameOver//

	function stop() {
		if (r[0] === -1*size) scoreF();
		else if (r[0] === size*10) scoreF();
		else if (u[0] === -1*size) scoreF();
		else if (u[0] === size*10) scoreF();
		else mb = 1;
		for (let i = 5; i < yum; i++) if (r[i] === r[0] && u[i] === u[0]) scoreF();
	}//Game over//

	function move() {
		if (mb === 1) {
			for (let i = 100;i > 0; i--) {
				r[i] = r[i-1];
				u[i] = u[i-1];
			}
		}
	}//Snake moves//

	function blue() {
		ctx.beginPath();
		ctx.fillStyle = snacolor;
		ctx.moveTo(r[0], u[0]);
		ctx.lineTo(r[0] + size, u[0]);
		ctx.lineTo(r[0] + size, u[0] + size);
		ctx.lineTo(r[0], u[0] + size);
		ctx.lineTo(r[0], u[0]);
		ctx.stroke();
		ctx.fill();
	}//blue square//

	function minus() {
		if (r[0] === size*Saves.XSearch && u[0] === size*Saves.YSearch) {
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
		for(i = 0; i < yum - 2; i++)if(r[i] === size*Saves.XSearch && u[i] === size*Saves.YSearch)neW();
	}//rundom number

	function fiX() {
		ctx.beginPath();
		ctx.fillStyle = eacolor;
		ctx.moveTo(size * Saves.XSearch, size * Saves.YSearch);
		ctx.lineTo(size + size * Saves.XSearch, size * Saves.YSearch);
		ctx.lineTo(size + size * Saves.XSearch, size + size * Saves.YSearch);
		ctx.lineTo(size * Saves.XSearch, size + size * Saves.YSearch);
		ctx.lineTo(size * Saves.XSearch, size * Saves.YSearch);
		ctx.stroke();
		ctx.fill();
	}//Spawn orng square//

	function plus() {
		for (let i = 0; i < yum; i++) {
			ctx.beginPath();
			ctx.fillStyle = snacolor;
			ctx.moveTo(r[i], u[i]);
			ctx.lineTo(r[i] + size, u[i]);
			ctx.lineTo(r[i] + size, u[i] + size);
			ctx.lineTo(r[i], u[i] + size);
			ctx.lineTo(r[i], u[i]);
			ctx.stroke();
			ctx.fill();
		}
	}//+tail

	function sequence(){
		ctx.clearRect(0, 0, size*10, size*10);
		stop();
		move();
		stop();
		blue();
		minus();
		finish();
		fiX();
		plus();
	}//sequence

	function R() {
		r[0] += size;
		sequence()
		cens = 1;
		t = setTimeout(R, Saves.sec);
	}//moving to the right

	function D() {
		u[0] += size;
		sequence()
		cens = 2;
		t = setTimeout(D, Saves.sec);
	}//moving to the down

	function L() {
		r[0] -= size;
		sequence()
		cens = 3;
		t = setTimeout(L, Saves.sec);
	}//moving to the left

	function U() {
		u[0] -= size;
		sequence()
		cens = 4;		
		t = setTimeout(U, Saves.sec);
	}//moving to the up
	blue();
	document.onkeydown =(event)=>{
		ctx.clearRect(0, 0, size*10, size*10);
		blue();
		fiX();
		clearTimeout(t);
		let ek = event.key
		if (cens !== 3 && ek ==='ArrowRight'|| ek ==='D'||ek ==='d'||ek ==='в'||ek ==='В'){
			clearTimeout(t);
			R();
		}
		if (cens !== 4 && ek ==='ArrowDown'||ek ==='S'||ek ==='s'||ek ==='ы'||ek ==='Ы'){
			clearTimeout(t);
			D();
		}
		if (cens !== 1 && ek ==='ArrowLeft'||ek ==='A'||ek ==='a'||ek ==='ф'||ek ==='Ф'){
			clearTimeout(t);
			L();
		}
		if (cens !== 2 && ek ==='ArrowUp'||ek ==='W'||ek ==='w'||ek ==='ц'||ek ==='Ц'){
			clearTimeout(t);
			U();
		}
	}
	bUp.onclick = () => {
			if(cens !== 2) {
				clearTimeout(t)
				U();
			}
	}//click on up
	bLeft.onclick = () => {
			if(cens !== 1) {
				clearTimeout(t)
				L();
			}
	}//click on left
	bDown.onclick = () => {
			if (cens !== 4) {
				clearTimeout(t)
				D();
			}
	}//click on down
	bRight.onclick = () => {
			if(cens !== 3) {
				clearTimeout(t)
				R();
			}
	}//click on right
	neW();
	fiX();
}//Snake
