
function calculateBMI() {
  let heightInput = document.getElementById("height").value;
  let weightInput = document.getElementById("weight").value;
  let bmiInputEl = document.getElementById("bmi-result");

  let height = heightInput / 100;
  let weight = weightInput;

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  bmiInputEl.value = bmi;

  let condition = ""
  if (bmi < 18.5) {
    condition = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    condition = "Normal weight";
  } else {
    condition = "Overweight";
  }

  let weightConditionEl = document.getElementById("weight-condition");
  weightConditionEl.innerText = condition;

}

let btnEl = document.getElementById("btn");
btnEl.addEventListener("click", calculateBMI);
