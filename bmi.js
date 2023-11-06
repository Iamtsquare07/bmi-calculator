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

    if (height > 1 && weight > 1) {
        // Display the result
        outputText.innerHTML = `Your BMI is ${bmi.toFixed(1)}.`;

        // Add additional information about the result
        if (bmi < 18.5) {
            outputText.innerHTML += ' You are underweight, you need to eat more.';
        } else if (bmi < 25) {
            outputText.innerHTML += " It looks like you're really taking care of yourself. Excellent weight. Keep it up!";
        } else if (bmi < 30) {
            outputText.innerHTML += ' You are overweight. You can excersice more to improve your BMI.';
        } else {
            outputText.innerHTML += ' You are obese, you may excercise more to start reducing your weight.';
        }
    } else {
        heightInput.focus();
        outputText.innerHTML += ' Please enter a valid height and weight';
    }

});