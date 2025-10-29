function computeBMI() {
    let heightEl = document.getElementById("height");
    let weightEl = document.getElementById("weight");

    let height = heightEl.value;
    let weight = weightEl.value;

    let bmi = weight / (height/100 * height/100);
    bmi = bmi.toFixed(2);

    console.log(height, weight, bmi);

    let outputBoxEl = document.getElementById("bmi-result");
    outputBoxEl.value = bmi;

    let msgEl = document.getElementById("msg");
    let condition;
    if (bmi < 18.5) {
      condition = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 25) {
      condition = "Normal weight";
    } else {
      condition = "Overweight";
    }
    msgEl.innerText = condition;
}

// bmi = weight / (height * height) --> height in meters
// bmi < 18.5 --> underweight
// bmi between 18.5 and 25 --> normal
// otherwise --> overweight

let btnEl = document.getElementById("btn");
btnEl.addEventListener("click", computeBMI);
