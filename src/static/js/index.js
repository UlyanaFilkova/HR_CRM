const slider = document.getElementById("resume-info__slider");
const rating = document.getElementById("resume-info__rating");
const decreaseButton = document.getElementById("resume-info__decrease");
const increaseButton = document.getElementById("resume-info__increase");

slider.addEventListener("input", () => {
  const value = slider.value;
  const step = 1; // шаг деления
  const snappedValue = Math.round(value / step) * step;
  slider.value = snappedValue;
  rating.textContent = snappedValue;
});

decreaseButton.addEventListener("click", () => {
  const currentValue = parseInt(slider.value);
  const newValue = Math.max(0, currentValue - 1);
  slider.value = newValue;
  rating.textContent = newValue;
});

increaseButton.addEventListener("click", () => {
  const currentValue = parseInt(slider.value);
  const newValue = Math.min(10, currentValue + 1);
  slider.value = newValue;
  rating.textContent = newValue;
});
