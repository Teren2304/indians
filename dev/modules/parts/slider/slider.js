$('.slider').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				slidesToShow: 1
			}
		}
	]
});