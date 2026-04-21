window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector(".words");
const status = document.getElementById("status");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let p = document.createElement("p");
words.appendChild(p);

startBtn.addEventListener("click", () => {
  recognition.start();
  status.textContent = "Status: Listening...";
});

stopBtn.addEventListener("click", () => {
  recognition.stop();
  status.textContent = "Status: Stopped";
});

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0].transcript)
    .join("");

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
    words.scrollTop = words.scrollHeight; // auto scroll
  }

  if (transcript.toLowerCase().includes("unicorn")) {
    console.log("HAHAHAHA unicorn detected!");
  }
});

recognition.addEventListener("start", () => {
  status.textContent = "Status: Listening...";
});

recognition.addEventListener("end", () => {
  status.textContent = "Status: Idle";
});