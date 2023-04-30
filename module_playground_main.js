const slider = document.getElementById('slider');
const colours = ['DarkCyan', 'DarkOrchid', 'DarkRed', 'DodgerBlue'];
const rightButton = document.querySelector('button.right');
const leftButton = document.querySelector('button.left');
let imageCount = 0;
slider.style.backgroundColor = colours[0];

function changeImageCount(button) {
	if (button === rightButton) {
		return imageCount > colours.length-2 ? imageCount : imageCount += 1;
	}
	else {
		return imageCount < 1 ? imageCount : imageCount -= 1;
	}
}

function changeSlider(number) {
	return imageCount += number;
}

rightButton.addEventListener('click', () => {
	slider.style.backgroundColor = colours[changeImageCount(rightButton)];
	console.log(imageCount);
}
);

leftButton.addEventListener('click', () => {
	slider.style.backgroundColor = colours[changeImageCount(leftButton)];
}
);

function autoIncrement() {
	return slider.style.backgroundColor = colours[imageCount += 1];
}

function autoSlide() {
	setInterval(changeSlider(1), 5000);
}

autoSlide();
