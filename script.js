let score = +localStorage.getItem('score');// Preserve the color of the overall result
let bestScore = +localStorage.getItem('bestscore');//Keeping the color of the Best Score
let bgcolor = localStorage.getItem('bgcolor');//Keeping the color of the background
let snacolor = localStorage.getItem('snacolor');//Keeping the color of the snake
let eacolor = localStorage.getItem('eacolor');//Keeping the color of the food
const colN1 = [colN10 = 0,colN11 = 0,colN12 = 0,colN13 = 0,colN14 = 0,colN15 = 0];
const colN2 = [colN20 = 0,colN21 = 0,colN22 = 0,colN23 = 0,colN24 = 0,colN25 = 0];
const colN3 = [colN30 = 0,colN31 = 0,colN32 = 0,colN33 = 0,colN34 = 0,colN35 = 0];
const newCol = [orange = "orange",blue = "blue",green = "green",white = "white",black = "black",red = "red"];


window.onload = function(){
	if (localStorage.getItem('bgcolor')==null||localStorage.getItem('bgcolor')==null||localStorage.getItem('bgcolor')==null){
		bgcolor = 'green';
		snacolor = 'blue';
		eacolor = 'orange';
		console.log('lS is no')
	}
	document.querySelector(".color1").style.backgroundColor = bgcolor;
	document.querySelector("#c2").style.backgroundColor = bgcolor;

    document.querySelector(".color2").style.backgroundColor = snacolor;
    for(i=0;i<14;i++){
        document.querySelector(`#tails${i}`).style.backgroundColor = snacolor;
    }

	document.querySelector(".color3").style.backgroundColor = eacolor;
	document.querySelector(`#yum`).style.backgroundColor = eacolor;
	console.log('lS is no')

	if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
		document.querySelector("#center").style.marginLeft = -120+"px";
	}//mobile version:Start	
}//Start

function start(){
    for(i=0;i<14;i++){
        document.querySelector("#tail").innerHTML += `<div class="tails" id="tails${i}"></div>`;
    }
    for(i=0;i<5;i++){
        document.querySelector(`#tails${i}`).style.left= 0+"px";
        document.querySelector(`#tails${i}`).style.top = 0+30*i+"px";
    }
    for(i=5;i<12;i++){
        document.querySelector(`#tails${i}`).style.left= 0+30*(i-4)+"px";
        document.querySelector(`#tails${i}`).style.top = 120+"px";
    }
    for(i=11;i<14;i++){
        document.querySelector(`#tails${i}`).style.left= 210+"px";
        document.querySelector(`#tails${i}`).style.top = 120+30*(i-11)+"px";
    }
}//Creates a non-playable snake for example
start();

document.querySelector(".bottom1").onclick = () => { 
    document.querySelector(".colors1").innerHTML = `<span class="colorN10"></span>`;
    for(i=1;i<6;i++){
        document.querySelector(".colors1").innerHTML += `<span class="colorN1${i}"></span>`;
    }
    document.querySelector("#buttom1").innerHTML = `<img class="bottom1" src="Images/Buttom2.png" alt=""></img>`;
    on();
    on1();
}//Choice of colors for Background
document.querySelector(".bottom2").onclick = () => { 
    document.querySelector(".colors2").innerHTML = `<span class="colorN20"></span>`;
    for(i=1;i<6;i++){
        document.querySelector(".colors2").innerHTML += `<span class="colorN2${i}"></span>`;
    }
    document.querySelector("#buttom2").innerHTML = `<img class="bottom1"src="Images/Buttom2.png" alt=""></img>`;
    on();
    on2();
}//Choice of colors for Snake
document.querySelector(".bottom3").onclick = () => {
    document.querySelector(".colors3").innerHTML = `<span class="colorN30"></span>`;
    for(i=1;i<6;i++){
        document.querySelector(".colors3").innerHTML += `<span class="colorN3${i}"></span>`;
    }
    document.querySelector("#buttom3").innerHTML = `<img class="bottom1"src="Images/Buttom2.png" alt=""></img>`;
    on();
    on3();
}//Choice of colors for food

function on(){
    for(i=0;i<6;i++){
        colN1[i] = document.querySelector(`.colorN1${i}`);
        colN2[i] = document.querySelector(`.colorN2${i}`);
        colN3[i] = document.querySelector(`.colorN3${i}`);
    }
}//Color selection buttons

function on1(){
    colN1[0].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[0];
		document.querySelector("#c2").style.backgroundColor = newCol[0];
		bgcolor = newCol[0];
		localStorage.setItem('bgcolor',newCol[0]);
    }
    colN1[1].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[1];
		document.querySelector("#c2").style.backgroundColor = newCol[1];
		bgcolor = newCol[1];
		localStorage.setItem('bgcolor',newCol[1]);
    }
    colN1[2].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[2];
		document.querySelector("#c2").style.backgroundColor = newCol[2];
		bgcolor = newCol[2];
		localStorage.setItem('bgcolor',newCol[2]);
    }
    colN1[3].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[3];
		document.querySelector("#c2").style.backgroundColor = newCol[3];
		bgcolor = newCol[3];
		localStorage.setItem('bgcolor',newCol[3]);
    }
    colN1[4].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[4];
		document.querySelector("#c2").style.backgroundColor = newCol[4];
		bgcolor = newCol[4];
		localStorage.setItem('bgcolor',newCol[4]);
    }
    colN1[5].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[5];
		document.querySelector("#c2").style.backgroundColor = newCol[5];
		bgcolor = newCol[5];
		localStorage.setItem('bgcolor',newCol[5]);
    }
}//Background selection

function on2(){
    colN2[0].onclick = () => {
		localStorage.setItem('snacolor',newCol[0]);
		snacolor = newCol[0];
        document.querySelector(".color2").style.backgroundColor = newCol[0];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[0];
        }
    }
    colN2[1].onclick = () => {
		localStorage.setItem('snacolor',newCol[1]);
		snacolor = newCol[1];
        document.querySelector(".color2").style.backgroundColor = newCol[1];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[1];
        }
    }
    colN2[2].onclick = () => {
		localStorage.setItem('snacolor',newCol[2]);
		snacolor = newCol[2];
        document.querySelector(".color2").style.backgroundColor = newCol[2];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[2];
        }
    }
    colN2[3].onclick = () => {
		localStorage.setItem('snacolor',newCol[3]);
		snacolor = newCol[3];
        document.querySelector(".color2").style.backgroundColor = newCol[3];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[3];
        }
    }
    colN2[4].onclick = () => {
		localStorage.setItem('snacolor',newCol[4]);
		snacolor = newCol[4];
        document.querySelector(".color2").style.backgroundColor = newCol[4];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[4];
        }
    }
    colN2[5].onclick = () => {
		localStorage.setItem('snacolor',newCol[5]);
		snacolor = newCol[5];
        document.querySelector(".color2").style.backgroundColor = newCol[5];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[5];
        }
    }
}//Snake selection

function on3(){
    colN3[0].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[0];
		document.querySelector(`#yum`).style.backgroundColor= newCol[0];
		localStorage.setItem('eacolor',newCol[0]);
		eacolor = newCol[0];
    }
    colN3[1].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[1];
		document.querySelector(`#yum`).style.backgroundColor= newCol[1];
		localStorage.setItem('eacolor',newCol[1]);
		eacolor = newCol[1];
    }
    colN3[2].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[2];
		document.querySelector(`#yum`).style.backgroundColor= newCol[2];
		localStorage.setItem('eacolor',newCol[2]);
		eacolor = newCol[2];
    }
    colN3[3].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[3];
		document.querySelector(`#yum`).style.backgroundColor= newCol[3];
		localStorage.setItem('eacolor',newCol[3]);
		eacolor = newCol[3];
    }
    colN3[4].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[4];
		document.querySelector(`#yum`).style.backgroundColor= newCol[4];
		localStorage.setItem('eacolor',newCol[4]);
		eacolor = newCol[4];
    }
    colN3[5].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[5];
		document.querySelector(`#yum`).style.backgroundColor= newCol[5];
		localStorage.setItem('eacolor',newCol[5]);
		eacolor = newCol[5];
    }
}//Food selection

document.querySelector("#start").onclick = () =>{
	Two();
}
document.onkeydown = function (event) {if(event.key === "Enter")Two();}


function Two(){
	let size = 70;
	document.body.innerHTML = `<span class="version font">Version:</span><span class="version-id"> 1.2.11.501</span><br />`;
	document.body.innerHTML += `<canvas id="c1" width="${size * 10}" height="${size * 10}"></canvas>`;
	document.body.innerHTML += `<div id="buttoms"></div>`;
	document.querySelector("#c1").style.backgroundColor = bgcolor;
	document.querySelector("#buttoms").innerHTML += `<div id="up"></div>`;
	document.querySelector("#buttoms").innerHTML += `<span id="left"></span>`;
	document.querySelector("#buttoms").innerHTML += `<span id="right"></span>`;
	document.querySelector("#buttoms").innerHTML += `<div id="down"></div>`;

	function mobile(){
		if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
		document.querySelector("#up").style.marginLeft = 50*size/10+'px';
		document.querySelector("#down").style.marginLeft = 50*size/10+'px';
		document.querySelector("#left").style.marginLeft = 25*size/10+'px';
		document.querySelector("#right").style.marginLeft = 25*size/10+'px';
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
		document.body.innerHTML = `<span class="version font">Version:</span><span class="version-id"> 1.2.11.501</span>`;
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
