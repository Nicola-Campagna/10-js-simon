// GIRONI
const dayEl = document.getElementById("days");
// ORA
const hourEl = document.getElementById("hours");
// MINUTI
const minuteEl = document.getElementById("minutes");
// SECONDI
const secondEl = document.getElementById("seconds");



timer();
const intervalCountdown = setInterval((timer), 1000);



function timer() {
    const now = new Date();
    const tomorrow = new Date("2023-12-24 00:01");


    const [second, minute, hour, day] = countdown(now, tomorrow);


    if (second <= 0 &&
        minute <= 0 &&
        hour <= 0 &&
        day <= 0
    ) {
        clearInterval(intervalCountdown)
    }

    printTime(second, minute, hour, day);
}


function countdown(dateFrom, dateTarget) {

    const msDateFrom = dateFrom.getTime();
    const msDateTarget = dateTarget.getTime();

    const msToDateTarget = msDateTarget - msDateFrom;

    const sToDateTarget = Math.floor(msToDateTarget / 1000);

    const second = sToDateTarget % 60;
    const minute = Math.floor(sToDateTarget / 60) % 60;
    const hour = Math.floor(sToDateTarget / 60 / 60) % 24;
    const day = Math.floor(sToDateTarget / 60 / 60 / 24);

    return [
        second,
        minute,
        hour,
        day
    ]
}

function printTime(second, minute, hour, day) {
    dayEl.innerHTML = (day < 10) ? "0" + day : day;
    hourEl.innerHTML = (hour < 10) ? "0" + hour : hour;
    minuteEl.innerHTML = (minute < 10) ? "0" + minute : minute;
    secondEl.innerHTML = (second < 10) ? "0" + second : second;


}