// Set your deadline here
const deadline = new Date("August 10, 2025 18:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = deadline - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "⛔ Voting has ended.";
    document.getElementById("voteForm").style.display = "none";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = 
    `🕒 Voting ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

document.getElementById("voteForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="candidate"]:checked');
  const nameInput = document.querySelector('input[name="from_name"]');
  if (selected && nameInput) {
    const name = selected.value;
    let count = localStorage.getItem(name) || 0;
    count = parseInt(count) + 1;
    localStorage.setItem(name, count);
    window.location.href = "thankyou.html";
  }
});
