const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;

  const bmi = weight / (height * height);

  bmiInputEl.value = bmi.toFixed(2);

  if (bmi < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmi >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else if (bmi >= 30) {
    weightConditionEl.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
