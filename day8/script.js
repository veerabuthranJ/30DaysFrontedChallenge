function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero if less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = currentTime;
}

// Update clock immediately and every 1 second
updateClock();
setInterval(updateClock, 1000);
