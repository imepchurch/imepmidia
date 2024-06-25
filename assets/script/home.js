let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function showSlide(index) {
	if (index >= slides.length) {
		currentIndex = 0;
	} else if (index < 0) {
		currentIndex = slides.length - 1;
	} else {
		currentIndex = index;
	}
	const offset = -currentIndex * 100;
	document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
	showSlide(currentIndex + 1);
}

function prevSlide() {
	showSlide(currentIndex - 1);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

showSlide(currentIndex);