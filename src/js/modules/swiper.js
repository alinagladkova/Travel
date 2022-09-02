import Swiper from 'swiper/bundle';

//const slider = document.querySelector('.swiper-container2');
//const slider1 = document.querySelector('.swiper-container2');
//let swiper = new Swiper(slider, {}
//let swiper = new Swiper(slider, {

const swiper = new Swiper('.places-slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	slidesPerView: 1,
	spaceBetween: 10,
	slidesPerGroup: 1,

	//управление колесом мыши
	mousewheel: {
		//Чувствительность колеса мыши
		sensitivity: 1,
		//Класс объекта, на котором
		//будет срабатывать прокрутка мышью
		eventsTarget: '.places-slider'
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
		nextEl: '.swiper-button-next',
		/*prevEl: '.swiper-button-prev',*/
	},

	// And if we need scrollbar
	/*scrollbar: {
		el: '.swiper-scrollbar',
	},*/
});


