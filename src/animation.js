const distance = window.innerWidth < 768 ? '30px' : '100px'

ScrollReveal().reveal('.card, .features', {
  origin: 'bottom',
  duration: 1000,
  interval: 300,
  distance: '70px',
});

ScrollReveal().reveal('.burger-features, .hero-img', {
  origin: 'right',
  duration: 1000,
  distance,
});

ScrollReveal().reveal('.logo, .btn-play, nav', {
  origin: 'top',
  duration: 1000,
  distance: '70px',
});

ScrollReveal().reveal('.burger-explain, .book-online, .hero-content, .explain-card, .social-media, .burger-share', {
  origin: 'left',
  duration: 1000,
  distance,
});
ScrollReveal().reveal('.social-media', {
  interval: 300,
});