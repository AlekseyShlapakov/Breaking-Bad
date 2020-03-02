$(document).ready(function () {

	/*------ Плавная прокрутка ---------*/
	$("a[href*=#]").on("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 777);
		e.preventDefault();
		return false;
	});

	/*-------- Кнопка навигации ----*/
	const menuToggle = document.querySelector('#menu-togle');
	const mobileNavContainer = document.querySelector('#mobile-nav');

	menuToggle.onclick = function(){
		menuToggle.classList.toggle('menu-icon-active');
		mobileNavContainer.classList.toggle('mobile-nav--active');
	}

});