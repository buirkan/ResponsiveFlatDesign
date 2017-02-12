var slideIndex = 1;

showSlides(slideIndex);

function changeSlide(n) {
	showSlides(slideIndex += n);
}

function currSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName('slide-cart');
	let dots = document.getElementsByClassName('dot');

	if (n > slides.length)
		slideIndex = 1;

	if (n < 1)
		slideIndex = slides.length;

	for (let i = 0; i < slides.length; i++) { /*atribui display none para todos os slides*/
		slides[i].style.display = 'none';
	}

	for (let i=0; i < dots.length; i++) { 
		dots[i].className = dots[i].className.replace(' active', '');
	}

	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].className += ' active';
}

(function runSlides() {
	setInterval(function () {
		changeSlide(1);
	}, 14000);
})();
