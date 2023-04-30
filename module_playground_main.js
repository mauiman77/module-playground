const slider = document.getElementById('slider');
const colours = ['DarkCyan', 'DarkOrchid', 'DarkRed', 'DodgerBlue'];
const rightButton = document.querySelector('button.right');
const leftButton = document.querySelector('button.left');
let imageCount = 0;
let timeout;
let timeMult = 1;
slider.style.backgroundColor = colours[0];

function changeBackground(number) {
  return slider.style.backgroundColor = colour[number];
}

function increment(number, decrement=false) {
  if (!decrement && imageCount + number === 5) {
    return imageCount = 0;
  }
  else if (decrement && imageCount - number === -1) {
    return imageCount = 4;
  }
  else {
    return decrement ? imageCount -= number : imageCount += number;
  }
}

function changeSlider(number) {
	return imageCount += number;
}

rightButton.addEventListener('click', () => {
  changeBackground()
}
);

leftButton.addEventListener('click', () => {
	slider.style.backgroundColor = colours[changeImageCount(leftButton)];
}
);

function autoIncrement() {
	return slider.style.backgroundColor = colours[imageCount += 1];
}

function myFunc(toAdd) {
  timeout = setTimeout(autoIncrement, 5000 * toAdd);
}

for (let t = 0; t < 10; t += 1) {
  myFunc(timeMult);
  timeMult += 1;
}
