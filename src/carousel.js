const swiper = new Swiper(".testimonials-slider", {
		grabCursor: true,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}
})

const swiper_image = new Swiper(".review-photo-slider", {
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	navigation: {
    nextEl: '.swiperNext',
    prevEl: '.swiperPrev',
  },
  breakpoints: {
  	0: {
  		slidesPerView: 1,
  		spaceBetween: 5,
  	},
  	624: {
  		slidesPerView: 2,
  		spaceBetween: 5,
  	}
  }
})