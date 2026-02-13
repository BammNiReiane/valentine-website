let currentSlide = 1;
let pin = "";

window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2000);

  createHearts();
};

function pressKey(num) {
  if (pin.length < 4) {
    pin += num;
    document.getElementById("pinDisplay").value = pin;
  }
}

function clearPin() {
  pin = "";
  document.getElementById("pinDisplay").value = "";
}

function checkPin() {
  const msg = document.getElementById("pinMessage");
  if (pin === "0407") {
    msg.textContent = "Welcome my love 💖";
    setTimeout(nextSlide, 1500);
  } else {
    msg.textContent = "Are you my baby or someone else? 💔🥺";
    clearPin();
  }
}

function nextSlide() {
  document.getElementById(`slide${currentSlide}`).classList.remove("active");
  currentSlide++;
  document.getElementById(`slide${currentSlide}`).classList.add("active");
}

function prevSlide() {
  document.getElementById(`slide${currentSlide}`).classList.remove("active");
  currentSlide--;
  document.getElementById(`slide${currentSlide}`).classList.add("active");
}

function showMessage() {
  document.getElementById("messageBox").style.display = "block";
}

function reveal(card) {
  card.classList.toggle("active");
}

function showFinal() {
  document.getElementById("finalMessage").textContent =
    "No matter what happens, I choose you today and always. Happy Valentine’s Day, my forever love 💍❤️";
}

// floating hearts
function createHearts() {
  const container = document.querySelector(".hearts-bg");
  setInterval(() => {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 400);
}

// music toggle
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
let playing = false;

btn.onclick = () => {
  if (!playing) {
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🎵";
  }
  playing = !playing;
};

// cursor hearts
document.addEventListener("mousemove", e => {
  const heart = document.createElement("div");
  heart.textContent = "💗";
  heart.style.position = "absolute";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.style.pointerEvents = "none";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 500);
});