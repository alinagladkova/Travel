$(document).ready(function () {
	$('.description-block__text').click(function (event) {
		if ($('.description-block__spoiler').hasClass('one')) {
			$('.description-block__text').not($(this)).removeClass('active');
			$('.description-block__dropdown').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});