$('.bonsai__list').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true
});

$('.money__list').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true
});

$('.product__btn').on('click', function () {
	$('.product__img').removeClass('none');
});

