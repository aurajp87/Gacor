// script.js

// Saat halaman selesai dimuat
window.addEventListener('DOMContentLoaded', () => {
  alert('Selamat datang di KALAPI110, situs slot online terpopuler di Indonesia!');
});

// Ambil semua tombol dengan kelas .btn dan .btn-menu-daftar
const buttons = document.querySelectorAll('.btn, .btn-menu-daftar');

// Buat audio klik (bisa ganti url suara)
const clickSound = new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3');

// Fungsi animasi klik tombol
function animateButton(e) {
  e.preventDefault();
  const btn = e.currentTarget;

  // Mainkan suara klik
  clickSound.currentTime = 0;
  clickSound.play().catch(() => { /* abaikan error autoplay */ });

  btn.style.transform = 'scale(0.95)';
  btn.style.transition = 'transform 0.1s ease';

  setTimeout(() => {
    btn.style.transform = 'scale(1)';
  }, 100);

  const btnText = btn.textContent.trim().toUpperCase();

  // Konfirmasi sebelum redirect jika tombol daftar
  if (btnText === 'DAFTAR SEKARANG') {
    const confirmDaftar = confirm('Yakin mau daftar sekarang?');
    if (confirmDaftar) {
      window.location.href = btn.href;
    }
  } else {
    // Redirect langsung untuk tombol lain
    window.location.href = btn.href;
  }
}

// Pasang event listener klik ke semua tombol
buttons.forEach(btn => {
  btn.addEventListener('click', animateButton);
});
