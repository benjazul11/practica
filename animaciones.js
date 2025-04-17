// 🎛️ Elementos del reproductor
const toggleBtn = document.getElementById("toggleBtn");
const vinylDisc = document.getElementById("vinylDisc");
const audio = document.getElementById("audioTrack");

let isPlaying = false;

// ▶️ Control de reproducción (Play / Pause)
toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    vinylDisc.classList.add("spin");           // Añade animación
    audio.play();                              // Reproduce música
    toggleBtn.textContent = "⏸ Pause";         // Cambia texto
    isPlaying = true;
  } else {
    vinylDisc.classList.remove("spin");        // Detiene animación
    audio.pause();                             // Pausa música
    toggleBtn.textContent = "▶ Play";          // Cambia texto
    isPlaying = false;
  }
});

// 🖼️ Generador de collage artístico
function generateCollage() {
  const collage = document.getElementById("collageZone");
  collage.innerHTML = ''; // Limpia el collage anterior

  const covers = [
    "images/abbeyroad.jpg",
    "images/death.jpg",
    "images/blacksabbth.jpg",
  ];

  for (let i = 0; i < 5; i++) {
    const img = document.createElement("img");
    img.src = covers[Math.floor(Math.random() * covers.length)];

    // Estilo visual para simular un collage de portadas
    img.style.position = "absolute";
    img.style.top = Math.random() * 300 + "px";
    img.style.left = Math.random() * 80 + "%";
    img.style.transform = `rotate(${Math.floor(Math.random() * 40 - 20)}deg)`;
    img.style.width = "100px";
    img.style.borderRadius = "12px";
    img.style.border = "2px solid white";
    img.style.boxShadow = "0 0 8px rgba(255, 255, 255, 0.3)";

    collage.appendChild(img);
  }
}
