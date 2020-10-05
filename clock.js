const sc = document.getElementById('second');
const mn = document.getElementById('minute');
const hr = document.getElementById('hour');

setInterval(currentTime, 1000);

function currentTime() {

	let date = new Date();
	let second = date.getSeconds() / 60;
	let minute = (date.getMinutes() + second) / 60;
	let hour = (date.getHours() + minute) / 12;

	sc.style.transform = "rotate(" + (second * 360) + "deg)";
	mn.style.transform = "rotate(" + (minute * 360) + "deg)";
	hr.style.transform = "rotate(" + (hour * 360) + "deg)";
}


