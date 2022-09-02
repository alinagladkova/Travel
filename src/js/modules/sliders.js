import $ from "jquery";
import "slick-carousel";

$(".feedback-slider").slick({
	centerMode: true,
	centerPadding: '5px',
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '5px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 550,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '5px',
				slidesToShow: 1
			}
		}
	]
});
