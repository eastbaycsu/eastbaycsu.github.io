let button = document.getElementById('btn');

let output = document.getElementById('bmi-result');
let text = document.getElementById('text');

function calculate_bmi() {

  let height = document.getElementById('height').value / 100;
  let weight = document.getElementById('weight').value;

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  output.value = bmi;

  // bmi < 18.5 --> under weight
  // bmi >= 18.5 and bmi <= 24.9 --> normal weight
  // otherwise --> over weight

  let new_text;

  if (bmi < 18.5) {
    new_text = "Under Weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    new_text = "Normal Weight";
  } else {
    new_text = "Over Weight";
  }

  text.innerHTML = "Weight Condition: " + new_text;

}


button.addEventListener("click", calculate_bmi);
