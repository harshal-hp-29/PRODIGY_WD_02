window.onload = function () {
  let minutes = 0;
  let seconds = 0;
  let tens = 0;
  let appendMinutes = document.querySelector("#minutes");
  let appendTens = document.querySelector("#tens");
  let appendSeconds = document.querySelector("#seconds");
  let startBtn = document.querySelector("#start");
  let stopBtn = document.querySelector("#stop");
  let resetBtn = document.querySelector("#reset");
  let lapBtn = document.querySelector("#lap");
  let lapList = document.querySelector("#lapList");
  let Interval;

  const startTimer = () => {
    tens++;
    if (tens <= 9) appendTens.innerHTML = "0" + tens;
    else appendTens.innerHTML = tens;

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
      tens = 0;
      appendTens.innerHTML = "00";
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = minutes <= 9 ? "0" + minutes : minutes;
      seconds = 0;
      appendSeconds.innerHTML = "00";
    }
  };

  startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  stopBtn.onclick = () => clearInterval(Interval);

  resetBtn.onclick = () => {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
    lapList.innerHTML = ""; // Clear laps
    lapCount = 1; // Reset lap number
  };

  let lapCount = 1;

  lapBtn.onclick = () => {
    let lapTime =
      (minutes <= 9 ? "0" + minutes : minutes) +
      ":" +
      (seconds <= 9 ? "0" + seconds : seconds) +
      ":" +
      (tens <= 9 ? "0" + tens : tens);

    let li = document.createElement("li");
    li.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(li);
    lapCount++;
  };
};
