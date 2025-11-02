link rel="stylesheet" href="style.css"
// Tombol Mode Gelap
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkModeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Mode Terang"
    : "🌙 Mode Gelap";
});

// Form Interaktif
const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  responseMsg.textContent = `Terima kasih, ${name}! Pesanmu sudah terkirim ✅`;
  form.reset();

  // Animasi notifikasi
  responseMsg.style.opacity = "1";
  setTimeout(() => (responseMsg.style.opacity = "0"), 4000);
});
