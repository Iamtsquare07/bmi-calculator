// JavaScript for the app
const heightInput = document.querySelector('#input-height-bmi-calculator');
const weightInput = document.querySelector('#input-weight-bmi-calculator');
const calculateButton = document.querySelector('#calculate-button-bmi-calculator');
const outputText = document.querySelector('#output-text-bmi-calculator');

calculateButton.addEventListener('click', () => {
  // Get the height and weight inputs
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  // Calculate the BMI
  const bmi = weight / (height / 100) ** 2;

  if(height > 1 && weight > 1) {
    // Display the result
    outputText.innerHTML = `Your BMI is ${bmi.toFixed(1)}.`;

      // Add additional information about the result
      if (bmi < 18.5) {
        outputText.innerHTML += ' You are underweight.';
      } else if (bmi < 25) {
        outputText.innerHTML += ' You are at a very healthy weight. Keep it up';
      } else if (bmi < 30) {
        outputText.innerHTML += ' You are overweight.';
      } else {
        outputText.innerHTML += ' You are obese.';
      }
  }else {
    heightInput.focus()
    outputText.innerHTML += ' Please enter a valid height and weight';
  }
  
});
