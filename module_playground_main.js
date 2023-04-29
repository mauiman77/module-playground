const main = document.getElementById('main');
const buttonMain = document.createElement('button');
buttonMain.classList.add('mobile', 'activate');
buttonMain.textContent = 'O';
main.appendChild(buttonMain);

let count;
let incrementMargin = 0;
let addCurve = 1.05;

for (count = 0; count < 7; count += 1) {
  incrementMargin += 30;
  console.log(incrementMargin);
  const buttonOption = document.createElement('button');
  buttonOption.classList.add('mobile', 'option');
  buttonOption.textContent = '!';
  buttonOption.style.marginRight = `${incrementMargin * addCurve}px`;
  buttonOption.style.marginBottom = `${incrementMargin * 1.8}px`;
  addCurve *= 1.1;
  main.appendChild(buttonOption);
}
