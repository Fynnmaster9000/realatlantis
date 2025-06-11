// Load AOS
AOS.init({ duration: 1000, once: true });

// Load particles.js with config directly
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.4, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.3,
      width: 1,
    },
    move: { enable: true, speed: 2 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
  },
  retina_detect: true,
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Discord button
document.getElementById("discordBtn").addEventListener("click", () => {
  window.open("https://dsc.gg/getatlantisv6", "_blank");
});

// Download button
document.getElementById("downloadBtn").addEventListener("click", () => {
  window.open("https://atlantisv6.vercel.app/Atlantis%20Bootstrapper.exe", "_blank"); // 🔁 Replace with real file URL
});
