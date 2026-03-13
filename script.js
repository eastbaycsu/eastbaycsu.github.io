function calculateBMI() {
  let bmiOutputEl = document.getElementById('bmi-result');
  let weightConditionEl = document.getElementById('weight-condition');

  let height = document.getElementById('height').value / 100;
  let weight = document.getElementById('weight').value;

  // BMI = weight / height^2
  // weight --> kg, height --> m
  // under weight: bmi < 18.5
  // normal: bmi >= 18.5 and bmi <= 24.9
  // overweight: bmi > 24.9

  let bmi = weight / (height ** 2);

  bmi = bmi.toFixed(2);
  bmiOutputEl.value = bmi;

  let feedback;
  if (bmi < 18.5) {
    feedback = "Under Weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    feedback = "Normal Weight";
  } else {
    feedback = "Overweight";
  }

  weightConditionEl.innerText = feedback;

}

let btnEl = document.getElementById('btn');
btn.addEventListener("click", calculateBMI);
