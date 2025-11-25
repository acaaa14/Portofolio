// Tombol CTA scroll ke bagian project
document.getElementById("cta").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

const aboutText = [
  "Saya merupakan mahasiswa semester 5 Program Studi Sistem Informasi Universitas Esa Unggul.",
  "Memiliki ketertarikan pada bidang pengembangan sistem informasi dan manajemen proyek.",
  "Aktif mengikuti kegiatan akademik dan organisasi yang berkaitan dengan penerapan teknologi informasi."
];

let line = 0;
let charIndex = 0;

function typeEffect() {
  const textContainer = document.getElementById("typing-text");
  if (!textContainer) return; // kalau elemen belum ketemu, stop

  if (line < aboutText.length) {
    if (charIndex < aboutText[line].length) {
      textContainer.innerHTML += aboutText[line].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 40); // kecepatan mengetik (ms)
    } else {
      textContainer.innerHTML += "<br>";
      line++;
      charIndex = 0;
      setTimeout(typeEffect, 400); // jeda antar baris
    }
  }
}



window.addEventListener("load", typeEffect);



function moveHighlight(direction) {
  const ball = document.getElementById("highlight");
  if (direction === "left") {
    ball.style.left = "25%";
  } else {
    ball.style.left = "75%";
  }
}


document.getElementById('cta').addEventListener('click', function() {
  document.getElementById('work').scrollIntoView({
    behavior: 'smooth'
  });
});


  const sliders = document.querySelectorAll(".work-slider");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    let currentIndex = 0;

    setInterval(() => {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }, 3000);
  });
