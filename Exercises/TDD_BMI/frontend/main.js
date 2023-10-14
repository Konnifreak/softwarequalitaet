Array.from(document.getElementsByTagName('input')).forEach(element => {
    element.addEventListener('change', updateUI);
});

function updateUI() {
    // Logik zur Aktualisierung des UI hier
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = calculateBMI(weight, height);
    //render the bmi to the bmi div
    document.getElementById('bmi').textContent = bmi;
    console.log("weight: %s, height: %s, bmi: %s", weight, height, bmi);
}

function calculateBMI(weight, height) {
    const bmi_temp = (weight / (height * height))*10000;
    const bmi = bmi_temp.toFixed(2);
    return bmi;
}

updateUI();