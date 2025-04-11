let button = document.getElementById('btn');
let output = document.getElementById('bmi-result');
let condition = document.getElementById('weight-condition');

function compute_bmi() {
  let height = document.getElementById('height').value / 100;
  let weight = document.getElementById('weight').value;

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  output.value = bmi;
  let text = ""
  if (bmi < 18.5) {
    text = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    text = "Normal weight";
  } else {
    text = "Overweight";
  }

  condition.innerHTML = condition.innerHTML + " " + text;
}

button.addEventListener("click", compute_bmi);
