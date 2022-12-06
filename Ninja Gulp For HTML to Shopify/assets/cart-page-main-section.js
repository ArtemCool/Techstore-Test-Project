// COUNTER

const counterValue = document.querySelector(".right-part-upper-links-counter-value");
const counterUpArrow = document.querySelector(".right-part-upper-links-counter-item-arrow-up");
const counterDownArrow = document.querySelector(".right-part-upper-links-counter-item-arrow-down");

counterUpArrow.addEventListener("click", () => {
    +counterValue.textContent++;
});

counterDownArrow.addEventListener("click", () => {
    if(+counterValue.textContent <= 1) {
    } else {
        +counterValue.textContent--;
    }
});