function colorClock() {
var date = new Date ();

var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if (hours < 10) {
    hours = '0' + hours;
};

if (minutes < 10) {
    minutes = '0' + minutes;
};

if (seconds < 10) {
    seconds = '0' + seconds;
};

var clockFace = hours + 'h ' + minutes + 'min ' + seconds + 'sec';

var hexColor = '#' + Math.floor(Math.random()*16777215).toString(16);

console.log(hexColor);

document.getElementById('clock').innerHTML = clockFace;
document.body.style.background = hexColor;


setTimeout(function() {
    colorClock();
}, 1000);

};

colorClock();


