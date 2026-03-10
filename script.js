const bmiOutputEl = document.getElementById("bmi-result");
const btnEl = document.getElementById('btn');
const weightConditionEl = document.getElementById('weight-condition');

console.log(weightConditionEl);

function calucateBMI() {
  // BMI = weight / (height * height)
  // bmi < 18.5 --> under
  // bmi between 18.5 and 24.9 --> normal
  // bmi > 24.9 --> over

  let height = document.getElementById('height').value / 100;
  let weight = document.getElementById('weight').value;

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);
  bmiOutputEl.value = bmi;

  console.log(weight);
  console.log(bmi);

  let condition;
  if (bmi < 18.5) {
    condition = "Under weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    condition = "Normal weight";
  } else {
    condition = "Overweight";
  }
  weightConditionEl.innerText = condition;

}

btnEl.addEventListener("click", calucateBMI);
