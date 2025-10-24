// Parallax scroll effect
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  document.querySelector(".stars").style.transform = `translateY(${y * 0.2}px)`;
  document.querySelector(".nebula").style.transform = `translateY(${y * 0.4}px)`;
  document.querySelector(".glow").style.transform = `translateY(${y * 0.1}px)`;
});

// Glow pulse for hero title
const title = document.querySelector(".neon");
setInterval(() => {
  title.style.textShadow = `0 0 ${Math.random()*25+10}px #00fff0`;
}, 800);
