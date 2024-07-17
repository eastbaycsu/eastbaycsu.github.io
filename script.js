const btnEl = document.getElementById("btn");
const textEl = document.getElementById('weight-cond');

function calculateBMI() {
  const height = document.getElementById('height').value / 100;
  const weight = document.getElementById('weight').value;

  const bmi  = weight / (height * height);

  document.getElementById('bmi-result').value = bmi.toFixed(2);

  if (bmi < 18.5) {
    textEl.innerHTML = "Under Weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    textEl.innerHTML = "Normal Weight";
  } else {
    textEl.innerHTML = "Over Weight";
  }

}

btnEl.addEventListener("click", calculateBMI);
