const main = document.getElementById('main');
const buttonMain = document.createElement('button');
buttonMain.classList.add('mobile', 'activate');
buttonMain.textContent = 'O';
main.appendChild(buttonMain);

let count;
const curveAdd = 1;
const marginStart = 60;
const marginRightAdd = 10;

function giveMobileButtonColour(number) {
  return `var(--mobile-button-${number})`;
}

function blurred(element) {
  return element.classList.toggle('blurred');
}

function checkExistance() {
	return main.querySelector('.activate > button');
}

function makeMobile() {
  main.classList.add('mobile');
}

function createButtons() {
	if (checkExistance()) {
		buttonMain.innerHTML = '';
		return
	}
  for (count = 0; count < 6; count += 1) {
    const buttonOption = document.createElement('button');
    buttonOption.classList.add('mobile', 'option');
    buttonOption.textContent = '!';
    buttonOption.style.marginBottom = `${(count * 60) + marginStart}px`;
    buttonOption.style.backgroundColor = giveMobileButtonColour(count + 1);
    buttonMain.appendChild(buttonOption);
  }
}

buttonMain.addEventListener('click', createButtons);
makeMobile();
