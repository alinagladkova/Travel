$('.wrapper').addClass('loaded');

//IBG JS
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

//Проверяем ввод email
const mainForm = document.forms.main;
const mainFormInput = mainForm.email;

mainForm.addEventListener("submit", function (event) {
	if (emailTest(mainFormInput)) {
		mainFormInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="input-block__error">
				Enter email
			</div>`
		);
		event.preventDefault();
	}
});

mainFormInput.addEventListener("focus", function (event) {
	if (mainFormInput.nextElementSibling) {
		mainFormInput.nextElementSibling.remove();
	}
});

//Функция теста email
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

//Scroll
let cords = ['scrollX', 'scrollY'];
// сохраняем позицию скролла в localStorage
window.addEventListener('unload', e => cords.forEach(cord => localStorage[cord] = window[cord]));
// вешаем событие на загрузку (ресурсов) страницы
window.addEventListener('load', e => {
	// если в localStorage имеются данные
	if (localStorage[cords[0]]) {
		// скроллим к сохраненным координатам
		window.scroll(...cords.map(cord => localStorage[cord]));
		// удаляем данные с localStorage
		cords.forEach(cord => localStorage.removeItem(cord));
	}
});

document.querySelectorAll('.__button').forEach(el => {
	el.addEventListener('click', () => {
		cords.forEach(cord => localStorage[cord] = window[cord]);
	});
});