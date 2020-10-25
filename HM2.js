function mobile(){
	if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
		document.querySelector("#center").style.marginLeft = -220+"px";
		document.querySelector("#center").style.width = 660+"px";
	}	
}
mobile()
const col = [colBack = "green",colSnake = "blue",colYum = "orange"];
const colN1 = [colN10 = 0,colN11 = 0,colN12 = 0,colN13 = 0,colN14 = 0,colN15 = 0];
const colN2 = [colN20 = 0,colN21 = 0,colN22 = 0,colN23 = 0,colN24 = 0,colN25 = 0];
const colN3 = [colN30 = 0,colN31 = 0,colN32 = 0,colN33 = 0,colN34 = 0,colN35 = 0];
const newCol = [orange = "orange",blue = "blue",green = "green",white = "white",black = "black",red = "red"];

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
    for(i=12;i<14;i++){
        document.querySelector(`#tails${i}`).style.left= 210+"px";
        document.querySelector(`#tails${i}`).style.top = 120+30*(i-11)+"px";
    }
        
}
start();

document.querySelector(".bottom1").onclick = () => { 
    document.querySelector(".colors1").innerHTML = `<span class="colorN10"></span>`;
    for(i=1;i<6;i++){
        document.querySelector(".colors1").innerHTML += `<span class="colorN1${i}"></span>`;
    }
    document.querySelector("#buttom1").innerHTML = `<img class="bottom1"src="C:/Users/adm/Desktop/Start/Buttom2.png" alt=""></img>`;
    on();
    on1();
}

document.querySelector(".bottom2").onclick = () => { 
    document.querySelector(".colors2").innerHTML = `<span class="colorN20"></span>`;
    for(i=1;i<6;i++){
        document.querySelector(".colors2").innerHTML += `<span class="colorN2${i}"></span>`;
    }
    document.querySelector("#buttom2").innerHTML = `<img class="bottom1"src="C:/Users/adm/Desktop/Start/Buttom2.png" alt=""></img>`;
    on();
    on2();
}

document.querySelector(".bottom3").onclick = () => {
    document.querySelector(".colors3").innerHTML = `<span class="colorN30"></span>`;
    for(i=1;i<6;i++){
        document.querySelector(".colors3").innerHTML += `<span class="colorN3${i}"></span>`;
    }
    document.querySelector("#buttom3").innerHTML = `<img class="bottom1"src="C:/Users/adm/Desktop/Start/Buttom2.png" alt=""></img>`;
    on();
    on3();
}

function on(){
    for(i=0;i<6;i++){
        colN1[i] = document.querySelector(`.colorN1${i}`);
        colN2[i] = document.querySelector(`.colorN2${i}`);
        colN3[i] = document.querySelector(`.colorN3${i}`);
    }
}

function on1(){
    colN1[0].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[0];
		document.querySelector("#c2").style.backgroundColor = newCol[0];
		colBack = newCol[0];
    }
    colN1[1].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[1];
		document.querySelector("#c2").style.backgroundColor = newCol[1];
		colBack = newCol[1];
    }
    colN1[2].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[2];
		document.querySelector("#c2").style.backgroundColor = newCol[2];
		colBack = newCol[2];
    }
    colN1[3].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[3];
		document.querySelector("#c2").style.backgroundColor = newCol[3];
		colBack = newCol[3];
    }
    colN1[4].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[4];
		document.querySelector("#c2").style.backgroundColor = newCol[4];
		colBack = newCol[4];
    }
    colN1[5].onclick = () => {
        document.querySelector(".color1").style.backgroundColor = newCol[5];
		document.querySelector("#c2").style.backgroundColor = newCol[5];
		colBack = newCol[5];
    }
}

function on2(){
    colN2[0].onclick = () => {
		colSnake = newCol[0];
        document.querySelector(".color2").style.backgroundColor = newCol[0];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[0];
        }
    }
    colN2[1].onclick = () => {
		colSnake = newCol[1];
        document.querySelector(".color2").style.backgroundColor = newCol[1];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[1];
        }
    }
    colN2[2].onclick = () => {
		colSnake = newCol[2];
        document.querySelector(".color2").style.backgroundColor = newCol[2];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[2];
        }
    }
    colN2[3].onclick = () => {
		colSnake = newCol[3];
        document.querySelector(".color2").style.backgroundColor = newCol[3];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[3];
        }
    }
    colN2[4].onclick = () => {
		colSnake = newCol[4];
        document.querySelector(".color2").style.backgroundColor = newCol[4];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[4];
        }
    }
    colN2[5].onclick = () => {
		colSnake = newCol[5];
        document.querySelector(".color2").style.backgroundColor = newCol[5];
        for(i=0;i<14;i++){
            document.querySelector(`#tails${i}`).style.backgroundColor= newCol[5];
        }
    }
}

function on3(){
    colN3[0].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[0];
		document.querySelector(`#yum`).style.backgroundColor= newCol[0];
		colYum = newCol[0];
    }
    colN3[1].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[1];
		document.querySelector(`#yum`).style.backgroundColor= newCol[1];
		colYum = newCol[1];
    }
    colN3[2].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[2];
		document.querySelector(`#yum`).style.backgroundColor= newCol[2];
		colYum = newCol[2];
    }
    colN3[3].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[3];
		document.querySelector(`#yum`).style.backgroundColor= newCol[3];
		colYum = newCol[3];
    }
    colN3[4].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[4];
		document.querySelector(`#yum`).style.backgroundColor= newCol[4];
		colYum = newCol[4];
    }
    colN3[5].onclick = () => {
        document.querySelector(".color3").style.backgroundColor = newCol[5];
		document.querySelector(`#yum`).style.backgroundColor= newCol[5];
		colYum = newCol[5];
    }
}
document.querySelector("#start").onclick = () =>{
	Two();
}


function Two(){
	document.querySelector("body").innerHTML = `<span class="version font">Version:</span><span class="version-id"> 1.2.3.428</span><br></br>`
	document.querySelector("body").innerHTML += `<canvas id="c1" width="400" height="400"></canvas>`;
	document.querySelector("#c1").style.backgroundColor = colBack;
	document.querySelector("body").innerHTML += `<div id="buttoms"></div>`;
	document.querySelector("#buttoms").innerHTML += `<div id="up"></div>`;
	document.querySelector("#buttoms").innerHTML += `<span id="left"></span>`;
	document.querySelector("#buttoms").innerHTML += `<span id="right"></span>`;
	document.querySelector("#buttoms").innerHTML += `<div id="down"></div>`;

	function mobile(){
		if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
		document.querySelector("#up").style.marginLeft = 330+'px';
		document.querySelector("#down").style.marginLeft = 335+'px';
		document.querySelector("#right").style.marginLeft = 115+'px';
		document.querySelector("#left").style.marginLeft = 215+'px';
		document.querySelector("#c1").style.marginLeft = 200+'px';

		document.querySelector("#up").innerHTML =`<img src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/up_circle-64.png" alt="">`;
		document.querySelector("#left").innerHTML =`<img src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/left_circle-64.png" alt="">`;
	  	document.querySelector("#right").innerHTML =`<img src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/right_circle-64.png" alt="">`;
		document.querySelector("#down").innerHTML =`<img src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/down_circle-64.png" alt="">`;
		}	
	}
	mobile()

	let bUp = document.querySelector("#up");
	let bLeft = document.querySelector("#left");
	let bDown = document.querySelector("#down");
	let bRight = document.querySelector("#right");
	let canvas = document.getElementById('c1');
	let ctx = canvas.getContext('2d');
	let mb;//Doesnt let you go abroad
	let cens;//NO left <- -> right NO up <- -> bottom NO
	let cdnt;//Coordinates
	let Saves = {
		Y: 0,
		X: 0,
		XSearch: 0,
		YSearch: 0,
		times: 0,
		sec: 1000,
	}
	let t;//timer
	let yum = 2;//yum-yum yummy!//hum
	let u = [0];//up
	let r = [0];//right
	function stop() {
		if (r[0] === -40) {
			r[0] += 40;
			mb = 0;
			alert("Тебе стоит быть по медленнее");
			location.reload();
		}
		else if (r[0] === 400) {
			r[0] -= 40;
			mb = 0;
			alert("Аа,да?");
			location.reload();
		}
		else if (u[0] === -40) {
			u[0] += 40;
			mb = 0;
			alert("Уоу уоу,помедленнее!");
			location.reload();

		}
		else if (u[0] === 400) {
			u[0] -= 40;
			mb = 0;
			alert("Попробуй еще раз");
			location.reload();
		}
		else mb = 1;
	}//You will not pass!
	function move() {
		if (mb === 1) {
			for (let i = 100; i > 0; i--) {
				Saves.times = i - 1;
				r[i] = r[Saves.times];
				u[i] = u[Saves.times];
			}
		}
	}//Snake moves
	function blue() {
		ctx.beginPath();
		ctx.fillStyle = colSnake;
		ctx.moveTo(r[0], u[0]);
		ctx.lineTo(r[0] + 40, u[0]);
		ctx.lineTo(r[0] + 40, u[0] + 40);
		ctx.lineTo(r[0], u[0] + 40);
		ctx.lineTo(r[0], u[0]);
		ctx.stroke();
		ctx.fill();
	}//blue square
	function minus() {
		for (let i = 0; i < 100; i += 10) {
			if (i <= cdnt && cdnt < i + 10) {
				Saves.XSearch = i / 10;
				Saves.YSearch = cdnt - i;
				if (r[0] === 40 * Saves.YSearch && u[0] === 40 * Saves.XSearch) {
					yum++;
					Saves.sec -= 7;
					neW();
				}
			}
		}
	}//orng is dying
	function finish() {
		if (yum === 100) {
			document.querySelector('body').style.background = "yellow";
			alert('Congratulations you won!');
			location.reload();
		}
	}//The End.
	function plus() {
		for (let i = 0; i < yum; i++) {
			ctx.beginPath();
			ctx.fillStyle = colSnake;
			ctx.moveTo(r[i], u[i]);
			ctx.lineTo(r[i] + 40, u[i]);
			ctx.lineTo(r[i] + 40, u[i] + 40);
			ctx.lineTo(r[i], u[i] + 40);
			ctx.lineTo(r[i], u[i]);
			ctx.stroke();
			ctx.fill();
		}
	}//+tail
	function fake() {
		for (let i = 5; i < yum; i++) {
			if (r[i] === r[1] && u[i] === u[1]) {
				alert('Oh shit, here we go again');
				location.reload();
			}
		}
	}//Snake hits itself.REBOOT///
	function fiX() {
		for (let i = 0; i < 100; i += 10) {
			if (i <= cdnt && cdnt < i + 10) {
				Saves.Y = i / 10;
				Saves.X = cdnt - i;
				ctx.beginPath();
				ctx.fillStyle = colYum;
				ctx.moveTo(0 + 40 * Saves.X, 0 + 40 * Saves.Y);
				ctx.lineTo(40 + 40 * Saves.X, 0 + 40 * Saves.Y);
				ctx.lineTo(40 + 40 * Saves.X, 40 + 40 * Saves.Y);
				ctx.lineTo(0 + 40 * Saves.X, 40 + 40 * Saves.Y);
				ctx.lineTo(0 + 40 * Saves.X, 0 + 40 * Saves.Y);
				ctx.stroke();
				ctx.fill();
			}
		}
	}//Spawn orng square
	function neW() {
		cdnt = Math.floor(Math.random() * 100);
		for (let i = 0; i < 100; i += 10) {
			if (i <= cdnt && cdnt < i + 10) {
				Saves.XSearch = i / 10;
				Saves.YSearch = cdnt - i;
				for (let k = 0; k < yum; k++) {
					if (r[k] === 40 * Saves.YSearch && u[k] === 40 * Saves.XSearch) {
						neW();
					}
				}
			}
		}
	}//rundom number

	blue();
	function sequence(){
		ctx.clearRect(0, 0, 400, 400);
		stop();
		move();
		blue();
		minus();
		finish();
		fiX();
		plus();
		fake();
	}	
	function R() {
		r[0] += 40;
		sequence()
		cens = 1;
		t = setTimeout(R, Saves.sec);
	}
	function D() {
		u[0] += 40;
		sequence()
		cens = 2;
		t = setTimeout(D, Saves.sec);
	}
	function L() {
		r[0] -= 40;
		sequence()
		cens = 3;
		t = setTimeout(L, Saves.sec);
	}
	function U() {
		u[0] -= 40;
		sequence()
		cens = 4;		
		t = setTimeout(U, Saves.sec);
	}
	document.onkeydown = function (event) {
		ctx.clearRect(0, 0, 400, 400);
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
	}
	bLeft.onclick = () => {
			if(r !== 0 && cens !== 1) {
				clearTimeout(t)
				L();
			}
	}
	bDown.onclick = () => {
			if (u !== 360 && cens !== 4) {
				clearTimeout(t)
				D();
			}
	}
	bRight.onclick = () => {
			if(r !== 360 && cens !== 3) {
				clearTimeout(t)
				R();
			}
	}
	neW();
	fiX();
}
