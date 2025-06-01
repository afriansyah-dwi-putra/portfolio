// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop= document.querySelector( '#to-top' );

    if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
} else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
    }
};

// Hamburger
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// klik di luar hamburger
window.addEventListener('click',function(e) {
   if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
    }
});

// Send Message
   function sendToWhatsApp(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Mohon isi semua field!');
      return;
    }

    const phone = '628989083634';
    const text = encodeURIComponent(
      `Halo, saya ingin menghubungi Anda.\n\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`
    );

    const waUrl = `https://wa.me/${phone}?text=${text}`;
    const newWindow = window.open(waUrl, '_blank');

    if (newWindow) {
      newWindow.focus();
      form.reset();
    } else {
      alert('Mohon izinkan popup agar bisa membuka WhatsApp.');
    }
  };

  //Darkmode toggle
  const toggle = document.querySelector('#dark-toggle');
  const html = document.documentElement;

  // Inisialisasi tema saat halaman dimuat
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    toggle.checked = true;
    html.setAttribute('data-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });