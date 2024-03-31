
// const countSheep = (numberOfSheep) => {
// let result = '' ;
// for (let i = 1; i <= numberOfSheep; i++) {
//     result += `${i} sheep ...`
//     // pt array:
//     // result.push(`${i} sheep ...`)
// }

// return result;
// };

const listOfColors = ['#AD636C','#009B72', '#6761A8', '#347E8D', '#798186'];
const colorSwitcherButton = document.querySelector('.color-switcher-button');
const colorSwitcherContainer = document.querySelector('.color-switcher-container');
const currentColor = document.querySelector('.color-switcher-text-color');
const colorSwitcherClicks = document.querySelector('.color-switcher-clicks');
const colorSwitcherResetButton = document.querySelector('.color-switcher-reset-button');
const colorSwitcherPreviousButton = document.querySelector('.color-switcher-previous-button');
const colorSwitcherNextButton = document.querySelector('.color-switcher-next-button');

let index = 0;
let numberOfClicks = 0;

const switchColor = () => {
    index++;
    numberOfClicks++;
    if (index === 5) {
        index = 0;
    }
    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
    colorSwitcherClicks.innerText = `Number of clicks - ${numberOfClicks}`;
    currentColor.style.color = listOfColors[index];
    colorSwitcherContainer.style.opacity = '0.7';
    setTimeout (() => {
        colorSwitcherContainer.style.opacity = "1";
    }, 1000);
};


colorSwitcherButton.addEventListener('click', switchColor);

const resetSwitcherColor = () => {
    colorSwitcherContainer.style.backgroundColor = ('#AD636C');
    currentColor.innerText = ('#AD636C');
    currentColor.style.color = 'aquamarine'
};

colorSwitcherResetButton.addEventListener('click', resetSwitcherColor);

const switchPrevious = () => {
    index--;
    if (index < 0) {
        index = 5;
    }
    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
};

colorSwitcherPreviousButton.addEventListener('click', switchPrevious);

const switchNext = () => {
    index++;
    if (index === 5) {
        index = 0;
    }
    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
};

colorSwitcherNextButton.addEventListener('click', switchNext);

