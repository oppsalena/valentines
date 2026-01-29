const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

const phrases = [
  "Wrong button ❌",
  "Are you sure? 🤔",
  "But what if… 🫣",
  "You're breaking my heart 💔",
  "Pwetty please 🥺👉👈",
  "You almost had it 😂",
  "Try again 😈",
];

let phraseIndex = 0;

function moveButton() {
  const x = Math.random() * 70;
  const y = Math.random() * 60;

  noButton.style.position = "absolute";
  noButton.style.left = x + "%";
  noButton.style.top = y + "%";

  noButton.textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

function nextPage() {
  fetch("https://ntfy.sh/alena-valentines", {
    method: "POST",
    body: "💖 SHE SAID YES! 💖",
  });

  document.body.innerHTML = `
    <div class="bg-image overlay d-flex justify-content-center align-items-center text-white text-center">
      <div>
        <h1 class="display-4">YAYYY 💖</h1>
        <p class="lead">I love you so much ❤️</p>
        <img src="https://raw.githubusercontent.com/oppsalena/valentines/refs/heads/main/images/jinji.png" alt="jinji" class="img-fluid rounded" />
      </div>
    </div>
  `;
}
