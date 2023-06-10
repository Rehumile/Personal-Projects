const htmlData = {
    clear: document.querySelector('[data-clear]'),
    remove: document.querySelector('[data-remove]'),
    comma: document.querySelector('[data-comma]'),
    division: document.querySelector('[data-division]'),
    seven: document.querySelector('[data-seven]'),
    eight: document.querySelector('[data-eight]'),
    nine: document.querySelector('[data-nine]'),
    multiply: document.querySelector('[data-multiple]'),
    four: document.querySelector('[data-four]'),
    five: document.querySelector('[data-five]'),
    six: document.querySelector('[data-six]'),
    minus: document.querySelector('[data-minus]'),
    one: document.querySelector('[data-one]'),
    two: document.querySelector('[data-two]'),
    three: document.querySelector('[data-three]'),
    addition: document.querySelector('[data-addition]'),
    doubleZero: document.querySelector('[data-double-zero]'),
    zero: document.querySelector('[data-zero]'),
    equal: document.querySelector('[data-equal]'),
};
/**
 * This function will handle the display of the number when
 * a user clicks on the button
 * @param {String} number 
 */
const displayNumberHandler = (number) => {
    document.querySelector(".display").value += number
    console.log('hello 7')
}

htmlData.seven.addEventListener('click', () => {
    document.querySelector(".display").value = "7"
})