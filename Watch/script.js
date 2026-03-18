const second = document.getElementById('second');
const minutes = document.getElementById('minutes');
const hour = document.getElementById('hour');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secondDegrees}deg)`;

    const min = now.getMinutes();
    const minsDegrees = ((min / 60) * 360) + 90;
    minutes.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((min / 12) * 360) + 90;
    hour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);