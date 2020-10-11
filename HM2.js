function mobile(){
		if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
		document.querySelector("#buttoms").style.marginLeft = 250+'px';
		document.querySelector("#c1").style.marginLeft = 200+'px';
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
	ctx.fillStyle = "blue";
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
		ctx.fillStyle = "blue";
		ctx.moveTo(r[i], u[i]);
		ctx.lineTo(r[i] + 40, u[i]);
		ctx.lineTo(r[i] + 40, u[i] + 40);
		ctx.lineTo(r[i], u[i] + 40);
		ctx.lineTo(r[i], u[i]);
		ctx.stroke();
		ctx.fill();
	}
}//+tail
function Fake() {
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
			ctx.fillStyle = "orange";
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
document.onkeydown = function (event) {
	ctx.clearRect(0, 0, 400, 400);
	blue();
	fiX();
	if (event.key === 'ArrowRight' | event.key === 'D' | event.key === 'd' | event.key === 'в' | event.key === 'В' && r !== 360 && cens !== 3) {
		clearTimeout(t)
		function R() {
			ctx.clearRect(0, 0, 400, 400);
			r[0] += 40;
			stop();
			move();
			blue();
			minus();
			finish();
			fiX();
			plus();
			Fake();
			cens = 1;
			t = setTimeout(R, 500);
		}
		R();
	}
	if (event.key === 'ArrowDown' | event.key === 'S' | event.key === 's' | event.key === 'ы' | event.key === 'Ы' && u !== 360 && cens !== 4) {
		clearTimeout(t)
		function D() {
			ctx.clearRect(0, 0, 400, 400);
			u[0] += 40;
			stop();
			move();
			blue();
			minus();
			finish()
			plus();
			Fake();
			fiX();
			cens = 2;
			t = setTimeout(D, 500);
		}
		D();
	}
	if (event.key === 'ArrowLeft' | event.key === 'A' | event.key === 'a' | event.key === 'ф' | event.key === 'Ф' && r !== 0 && cens !== 1) {
		clearTimeout(t)
		function L() {
			ctx.clearRect(0, 0, 400, 400);
			r[0] -= 40;
			stop();
			move();
			blue();
			minus();
			finish()
			plus();
			Fake();
			fiX();
			cens = 3;
			t = setTimeout(L, 500);
		}
		L();
	}
	if (event.key === 'ArrowUp' | event.key === 'W' | event.key === 'w' | event.key === 'ц' | event.key === 'Ц' && u !== 0 && cens !== 2) {
		clearTimeout(t)
		function U() {
			ctx.clearRect(0, 0, 400, 400);
			u[0] -= 40;
			stop();
			move();
			blue();
			minus();
			finish()
			plus();
			Fake();
			fiX();
			cens = 4;
			t = setTimeout(U, 500);
		}
		U();
	}
}
bUp.onclick = () => {
	if(u !== 0 && cens !== 2) {
		clearTimeout(t)
		function U() {
			ctx.clearRect(0, 0, 400, 400);
			u[0] -= 40;
			stop();
			move();
			blue();
			minus();
			finish()
			plus();
			Fake();
			fiX();
			cens = 4;
			t = setTimeout(U, 500);
		}
		U();
	}
}
bLeft.onclick = () => {
	if(r !== 0 && cens !== 1) {
		function L() {
			clearTimeout(t)
			ctx.clearRect(0, 0, 400, 400);
			r[0] -= 40;
			stop();
			move();
			blue();
			minus();
			finish()
			plus();
			Fake();
			fiX();
			cens = 3;
			t = setTimeout(L, 500);
		}
		L();
	}
}
bDown.onclick = () => {
	if (u !== 360 && cens !== 4) {
		clearTimeout(t)
		function D() {
			ctx.clearRect(0, 0, 400, 400);
			u[0] += 40;
			stop();
			move();
			blue();
			minus();
			finish()
			plus();
			Fake();
			fiX();
			cens = 2;
			t = setTimeout(D, 500);
		}
		D();
	}
}
bRight.onclick = () => {
	if(r !== 360 && cens !== 3) {
		clearTimeout(t)
		function R() {
			ctx.clearRect(0, 0, 400, 400);
			r[0] += 40;
			stop();
			move();
			blue();
			minus();
			finish();
			fiX();
			plus();
			Fake();
			cens = 1;
			t = setTimeout(R, 500);
		}
		R();
	}
}
neW();
fiX();
