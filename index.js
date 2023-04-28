function calculateBMI() {
  const height = document.getElementById('height').value / 100;
  const weight = document.getElementById('weight').value;

  const bmi = weight / (height * height);

  document.getElementById('bmi-result').value = bmi.toFixed(2);

  if (bmi < 18.5) {
    document.getElementById('weight-condition').innerText = "Under weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('weight-condition').innerText = "Normal weight";
  } else if (bmi > 24.9) {
    document.getElementById('weight-condition').innerText = "Over weight";
  }
}

document.getElementById('btn').addEventListener("click", calculateBMI);
