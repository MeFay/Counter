let counter = 0;

const incrementBtn = document.getElementById("increment-btn");
const counterValue = document.getElementById("counter-display");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.querySelector("#reset");

incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.innerHTML = counter;
});

decrementBtn.addEventListener("click", () => {
  counter--;
  counterValue.innerHTML = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterValue.innerHTML = counter;
});
