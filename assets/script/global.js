const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

burger.addEventListener('click', () => {
	navLinks.classList.toggle('active');
	overlay.classList.toggle('active');
	burger.classList.toggle('toggle');
});

overlay.addEventListener('click', () => {
	navLinks.classList.remove('active');
	overlay.classList.remove('active');
	burger.classList.remove('toggle');
});
