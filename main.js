// GIRONI
const dayEl = document.getElementById("days");
// ORA
const hourEl = document.getElementById("hours");
// MINUTI
const minuteEl = document.getElementById("minutes");
// SECONDI
const secondEl = document.getElementById("seconds");


setInterval(timer, 1000);



function timer() {

    const now = new Date();
    const tomorrow = new Date("2023-05-23 14:12");

    const msNow = now.getTime();
    const msTomorrow = tomorrow.getTime();

    const msToTomorrow = msTomorrow - msNow;

    const sToTomorrow = Math.floor(msToTomorrow / 1000);

    const second = sToTomorrow % 60;
    const minute = Math.floor(sToTomorrow / 60) % 60;
    const hour = Math.floor(sToTomorrow / 60 / 60) % 24;
    const day = Math.floor(sToTomorrow / 60 / 60 / 24);




    dayEl.innerHTML = (day < 10) ? "0" + day : day;
    hourEl.innerHTML = (hour < 10) ? "0" + hour : hour;
    minuteEl.innerHTML = (minute < 10) ? "0" + minute : minute;
    secondEl.innerHTML = (second < 10) ? "0" + second : second;


}
