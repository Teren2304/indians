$('.slider--big').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: '.slider--min'
});
$('.slider--min').slick({
	slidesToScroll: 1,
	asNavFor: '.slider--big',
	dots: false,
	arrows: true,
	centerMode: true,
	focusOnSelect: true,
	variableWidth: true
});