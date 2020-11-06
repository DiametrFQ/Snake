let score = +localStorage.getItem('score');// Preserve the color of the overall result
let bestScore = +localStorage.getItem('bestscore');//Keeping the color of the Best Score
let bgcolor = localStorage.getItem('bgcolor');//Keeping the color of the background
let snacolor = localStorage.getItem('snacolor');//Keeping the color of the snake
let eacolor = localStorage.getItem('eacolor');//Keeping the color of the food
const newCol = [orange = "rgb(250, 150, 0)",blue = "rgb(0, 0, 255)",green = "'rgb(0, 255, 0)'",white = "white",black = "black",red = "red"];


window.onload = function(){
	if (localStorage.getItem('bgcolor')==null||localStorage.getItem('bgcolor')==null||localStorage.getItem('bgcolor')==null){
		bgcolor = '#00ff00';
		snacolor = '#0000ff';
		eacolor = '#ffb500';
	}
	document.querySelector("#color1").value = bgcolor;
	document.querySelector("#color2").value = snacolor;
	document.querySelector("#color3").value = eacolor;
	document.querySelector("#c2").style.backgroundColor = bgcolor;
	document.querySelector(`#yum`).style.backgroundColor = eacolor;
		
    for(i=0;i<14;i++){
        document.querySelector("#tail").innerHTML += `<div class="tails" id="tails${i}"></div>`;
    }
    for(i=0;i<5;i++){
        document.querySelector(`#tails${i}`).style.left= 0+"px";
        document.querySelector(`#tails${i}`).style.top = 0+30*i+"px";
    }
    for(i=4;i<12;i++){
        document.querySelector(`#tails${i}`).style.left= 0+31*(i-4)+"px";
        document.querySelector(`#tails${i}`).style.top = 120+"px";
    }
    for(i=11;i<14;i++){
        document.querySelector(`#tails${i}`).style.left= 217+"px";
        document.querySelector(`#tails${i}`).style.top = 120+31*(i-11)+"px";
	}//Creates a non-playable snake for example
	for(i=0;i<14;i++){
        document.querySelector(`#tails${i}`).style.backgroundColor = snacolor;
	}

	if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
		document.querySelector("#center").style.marginLeft = -120+"px";
	}//mobile version:Start
}//Start


document.querySelector("#color1").oninput = function(){
	bgcolor = this.value;
	document.querySelector("#c2").style.backgroundColor = bgcolor;
	localStorage.setItem('bgcolor',bgcolor);
}
document.querySelector("#color2").oninput = function(){
	snacolor = this.value;
	localStorage.setItem('snacolor',snacolor);
	for(i=0;i<14;i++){
		document.querySelector(`#tails${i}`).style.backgroundColor = snacolor;
	}
}
document.querySelector("#color3").oninput = function(){
	eacolor = this.value;
	document.querySelector(`#yum`).style.backgroundColor = this.value;
	localStorage.setItem('eacolor',this.value);
}

document.querySelector("#start").onclick = () =>{
	Two();
}
document.onkeydown = function (event) {if(event.key === "Enter")Two();}


function Two(){
	let size = 70;
	document.body.innerHTML = `<span id="version-font">Version:</span><span id="version-id"> 1.2.3.500</span><br />`;
	document.body.innerHTML += `<canvas id="c1" width="${size * 10}" height="${size * 10}"></canvas>`;
	document.body.innerHTML += `<div id="buttoms"></div>`;
	document.querySelector("#c1").style.backgroundColor = bgcolor;
	document.querySelector("#buttoms").innerHTML += `<div id="up"></div>`;
	document.querySelector("#buttoms").innerHTML += `<span id="left"></span>`;
	document.querySelector("#buttoms").innerHTML += `<span id="right"></span>`;
	document.querySelector("#buttoms").innerHTML += `<div id="down"></div>`;

	function mobile(){
		if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
		document.querySelector("#up").style.marginLeft = 350+'px';
		document.querySelector("#down").style.marginLeft = 350+'px';
		document.querySelector("#left").style.marginLeft = 175+'px';
		document.querySelector("#right").style.marginLeft = 175+'px';
		document.querySelector("#c1").style.marginLeft = 100+'px';

		document.querySelector("#up").innerHTML =`<img src="Images/up_circle-128.png" alt="">`;
		document.querySelector("#left").innerHTML =`<img src="Images/left_circle-128.png" alt="">`;
	  	document.querySelector("#right").innerHTML =`<img src="Images/right_circle-128.png" alt="">`;
		document.querySelector("#down").innerHTML =`<img src="Images/down_circle-128.png" alt="">`;
		}	
	}
	mobile()//mobile version: Snake


	let bUp = document.querySelector("#up");
	let bLeft = document.querySelector("#left");
	let bDown = document.querySelector("#down");
	let bRight = document.querySelector("#right");
	let canvas = document.getElementById('c1');
	let ctx = canvas.getContext('2d');
	let mb;/*Doesnt let you go abroad*/ 
	let cens;//NO left <- -> right NO up <- -> bottom NO
	let cdnt;//Coordinates
	let t;//timer
	let yum = 2;//yum-yum yummy!//hum

	cdnt = Math.floor(Math.random() * 100);//random
	let r = [Math.floor(cdnt / 10) * size];//right
	let u = [cdnt % 10 * size];//up
	let Saves = {
		times: 0,
		YSearch: Math.floor(cdnt / 10),
		XSearch: cdnt % 10,
		sec: 700,
	}

	let pluScore;

	function scoreF(){
		clearTimeout(t);
		pluScore = +((yum - 2) * 10)
		score += pluScore;
		localStorage.setItem('score',+score);
		if(pluScore > bestScore){
			bestScore = +pluScore;
		}
		localStorage.setItem('bestscore',bestScore);
		thend();
	}//plus to score and best score!

	function thend(){
		document.body.innerHTML = `<span id="version-font">Version:</span><span id="version-id"> 1.2.3.500</span>`;
		document.body.innerHTML += `<div id="center"></div>`;
		document.querySelector("#center").style.background = "black";
		document.querySelector("#center").style.top = 100+"px";
		document.querySelector("#center").style.height = 600+"px";
		if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
			document.querySelector("#center").style.marginLeft = -130+'px';
		}//mobile version:GameOver
		document.querySelector("#center").innerHTML = `<img id="gameover" src="Images/GameOver.png" alt=""></img>`;
		
		document.querySelector("#center").innerHTML += `<div class="score" id="scoreITG">Your score in this game: ${pluScore}<div>`;
		document.querySelector("#center").innerHTML += `<div class="score" id="bScore">Best score: ${bestScore}<divn>`;
		document.querySelector("#center").innerHTML += `<span class="score" id="tScorEv">Total score ever: ${score}<span>`;
		
		document.querySelector("#center").innerHTML += `<img id="restart" src="Images/Restart.png" alt=""></img>`;
		document.querySelector("#restart").onmousemove = function() {
			this.src = src="Images/Restart2.png";
		}
		document.querySelector("#restart").onmouseleave = function() {
			this.src = src="Images/Restart.png";
		}
		document.querySelector("#restart").onclick = function() {
			location.reload();
		}
	}//GameOver


	function stop() {
		if (r[0] === -1*size) {
			scoreF();
		}
		else if (r[0] === size*10) {
			scoreF();
		}
		else if (u[0] === -1*size) {
			scoreF();
		}
		else if (u[0] === size*10) {
			scoreF();
		}
		else mb = 1;
		for (let i = 4; i < yum; i++) {
			if (r[i] === r[0] && u[i] === u[0]) {
				scoreF();
			}
		}
	}//Game over

	function move() {
		if (mb === 1) {
			for (let i = 100;i > 0; i--) {
				Saves.times = i - 1;
				r[i] = r[Saves.times];
				u[i] = u[Saves.times];
			}
		}
	}//Snake moves

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
	}//blue square

	function minus() {
		if (r[0] === size * Saves.XSearch && u[0] === size * Saves.YSearch) {
			yum++;
			Saves.sec -= 4;
			neW();
		}
	}//orng is dying

	function finish() {
		if (yum === 100) {
			document.querySelector('body').style.background = "yellow";
			alert('Congratulations you won!');
			location.reload();
		}
	}//The End.

	function neW() {
		cdnt = Math.floor(Math.random() * 100);
		Saves.YSearch = Math.floor(cdnt / 10);
		Saves.XSearch = cdnt % 10;
		for (let k = 0; k < yum; k++) {
			if (r[k] === size * Saves.XSearch && u[k] === size * Saves.YSearch) {
				neW();
			}
		}
	}//rundom number

	function fiX() {
		ctx.beginPath();
		ctx.fillStyle = eacolor;
		ctx.moveTo(0 + size * Saves.XSearch, 0 + size * Saves.YSearch);
		ctx.lineTo(size + size * Saves.XSearch, 0 + size * Saves.YSearch);
		ctx.lineTo(size + size * Saves.XSearch, size + size * Saves.YSearch);
		ctx.lineTo(0 + size * Saves.XSearch, size + size * Saves.YSearch);
		ctx.lineTo(0 + size * Saves.XSearch, 0 + size * Saves.YSearch);
		ctx.stroke();
		ctx.fill();
	}//Spawn orng square

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


	blue();
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

	document.onkeydown = function (event) {
		ctx.clearRect(0, 0, size*10, size*10);
		blue();
		fiX();
		if (event.key === 'ArrowRight' | event.key === 'D' | event.key === 'd' | event.key === 'в' | event.key === 'В' && r !== 360 && cens !== 3) {
			clearTimeout(t)
			R();
		}
		if (event.key === 'ArrowDown' | event.key === 'S' | event.key === 's' | event.key === 'ы' | event.key === 'Ы' && u !== 360 && cens !== 4) {
			clearTimeout(t)
			D();
		}
		if (event.key === 'ArrowLeft' | event.key === 'A' | event.key === 'a' | event.key === 'ф' | event.key === 'Ф' && r !== 0 && cens !== 1) {
			clearTimeout(t)
			L();
		}
		if (event.key === 'ArrowUp' | event.key === 'W' | event.key === 'w' | event.key === 'ц' | event.key === 'Ц' && u !== 0 && cens !== 2) {
			clearTimeout(t)
			U();
		}
	}

	bUp.onclick = () => {
			if(u !== 0 && cens !== 2) {
				clearTimeout(t)
				U();
			}
	}//click on up
	bLeft.onclick = () => {
			if(r !== 0 && cens !== 1) {
				clearTimeout(t)
				L();
			}
	}//click on left
	bDown.onclick = () => {
			if (u !== 9*size && cens !== 4) {
				clearTimeout(t)
				D();
			}
	}//click on down
	bRight.onclick = () => {
			if(r !== 9*size && cens !== 3) {
				clearTimeout(t)
				R();
			}
	}//click on right

	neW();
	fiX();
}//Snake
