// create var in button reset
let res = document.getElementById("res");
// create var in button increment
let inc = document.getElementById("inc");
// create var in button decrement
let dec = document.getElementById("dec");

// create var in counter
let counter = document.getElementById("counter");

// create var sum
let sum = 0;

res.addEventListener("click", () => {
  if (!sum) return;
  counter.textContent = sum = 0;
});
inc.addEventListener("click", () => {
  counter.textContent = sum += 1;
});
dec.addEventListener("click", () => {
  counter.textContent = sum -= 1;
});
