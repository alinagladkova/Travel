import Swiper from 'swiper/bundle';

//const slider1 = document.querySelector('.feedback-slider');
//const swiper1 = new Swiper('.swiper-container2', {

const swiper1 = new Swiper('.feedback-slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	slidesPerView: 3,
	spaceBetween: 50,
	slidesPerGroup: 1,

	//управление колесом мыши
	mousewheel: {
		//Чувствительность колеса мыши
		sensitivity: 1,
		//Класс объекта, на котором
		//будет срабатывать прокрутка мышью
		eventsTarget: ".feedback-slider"
	},

	//Управление клавиатурой
	keyboard: {
		//Включить/выключить
		enabled: true,
		//Включить/выключить
		//только когда слайдер
		//в пределах вьюпорта
		onlyInViewport: true,
		//Включить/выключить
		//управление клавишами
		//pageUP, pageDown
		pageUpDown: true,
	},

	//перетаскивания на ПК
	simulateTouch: true,
	//Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: true,

	// If we need pagination
	/*pagination: {
		el: '.swiper-pagination',
	},*/

	// Navigation arrows
	navigation: {
		nextEl: '.next1',
		prevEl: '.prev1',
	},

	// And if we need scrollbar
	/*scrollbar: {
		el: '.swiper-scrollbar',
	},*/
});