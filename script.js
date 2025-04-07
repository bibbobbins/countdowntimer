const targetDate = new Date("2025-06-01T00:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("timer").innerHTML = days > 0
    ? `${days} day${days !== 1 ? 's' : ''} to go`
    : "🎬 Launched!";

  if (distance < 0) {
    clearInterval(timer);
  }
}, 1000);
