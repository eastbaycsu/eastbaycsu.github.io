const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;

  const bmi = weight / (height * height);

  bmiInputEl.value = bmi.toFixed(2);

  if (bmi < 18.5) {
    weightConditionEl.innerHTML = "Under weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    weightConditionEl.innerHTML = "Normal weight";
  } else if (bmi > 24.9) {
    weightConditionEl.innerHTML = "Over weight";
  }
  weightConditionEl.style.color = "red";

}

btnEl.addEventListener("click", calculateBMI);
