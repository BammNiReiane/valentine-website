let currentSlide = 1;
let pin = "";

window.onload = () => {
  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },2000);
  createHearts();
  createSparkles();
};

function pressKey(num){
  if(pin.length<4){
    pin+=num;
    pinDisplay.value=pin;
  }
}

function clearPin(){
  pin="";
  pinDisplay.value="";
}

function checkPin(){
  const msg=document.getElementById("pinMessage");
  if(pin==="0407"){
    msg.textContent="Nice bbyy ko, May Kiss ka sakin 💖";
    setTimeout(nextSlide,1500);
  }else{
    msg.textContent="Are you my baby or someone else? 💔🥺";
    clearPin();
  }
}

function nextSlide(){
  document.getElementById(`slide${currentSlide}`).classList.remove("active");
  currentSlide++;
  document.getElementById(`slide${currentSlide}`).classList.add("active");
}

function prevSlide(){
  document.getElementById(`slide${currentSlide}`).classList.remove("active");
  currentSlide--;
  document.getElementById(`slide${currentSlide}`).classList.add("active");
}

function showMessage(){
  document.getElementById("messageBox").style.display="block";
}

function reveal(card){
  card.classList.toggle("active");
}

// Proposal box
function openBox(){
  document.querySelector(".box-lid").style.display="none";
  document.querySelector(".ring").classList.remove("hidden");
  document.getElementById("finalMessage").innerHTML=
  "My love, I don’t just want you as my Valentine…<br><br>I want you as my forever. 💍❤️<br><br>I am ready to spend my whole life loving you, choosing you, and growing with you. Will you be not just my Valentine, but my wife someday? 💞";
}

// floating hearts
function createHearts(){
  const c=document.querySelector(".hearts-bg");
  setInterval(()=>{
    let h=document.createElement("span");
    h.textContent="💖";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(Math.random()*3+5)+"s";
    c.appendChild(h);
    setTimeout(()=>h.remove(),8000);
  },400);
}

// sparkles
function createSparkles(){
  const c=document.querySelector(".sparkles-bg");
  setInterval(()=>{
    let s=document.createElement("span");
    s.textContent="✨";
    s.style.left=Math.random()*100+"vw";
    s.style.animationDuration=(Math.random()*3+5)+"s";
    c.appendChild(s);
    setTimeout(()=>s.remove(),8000);
  },600);
}

// music
const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicBtn");
let playing=false;

btn.onclick=()=>{
  if(!playing){
    music.play();
    btn.textContent="🔊";
  }else{
    music.pause();
    btn.textContent="🎵";
  }
  playing=!playing;
};