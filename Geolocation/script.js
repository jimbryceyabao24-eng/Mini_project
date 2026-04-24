const compassNeedle = document.getElementById('compassNeedle');
const speedDisplay = document.getElementById('speedDisplay');

function setDirection(degrees) {
    compassNeedle.style.transform = `rotate(${degrees}deg)`;
}

function setSpeed(speed) {
    const speedKmh = Math.round(speed * 3.6);
    speedDisplay.textContent = `${speedKmh} KM/H`;
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const heading = position.coords.heading;
            const speed = position.coords.speed;

            if (heading !== null) {
                setDirection(heading);
            }

            if (speed !== null) {
                setSpeed(speed);
            } else {
                setSpeed(0);
            }
        },
        (error) => {
            console.error("Error getting location:", error);
            alert("Please allow location access to use the compass.");
        },
        { enableHighAccuracy: true }
    );
} else {
    alert("Geolocation is not supported by your browser.");
}