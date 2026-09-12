function convertTemperature() {

    const input = document.getElementById("temperature");
    const unit = document.getElementById("unit").value;
    const error = document.getElementById("error");

    const celsiusDisplay = document.getElementById("celsius");
    const fahrenheitDisplay = document.getElementById("fahrenheit");
    const kelvinDisplay = document.getElementById("kelvin");


    const temperature = input.value.trim();

 
    if (temperature === "" || isNaN(temperature)) {
        error.textContent = "Please enter a valid numeric temperature.";
        return;
    }

    let value = Number(temperature);
    let celsius;

    
    if (unit === "C") {
        celsius = value;
    }
    else if (unit === "F") {
        celsius = (value - 32) * 5 / 9;
    }
    else if (unit === "K") {
        celsius = value - 273.15;
    }

    if (celsius < -273.15) {
        error.textContent =
            "Temperature cannot be below absolute zero (-273.15 °C).";
        return;
    }

    error.textContent = "";

    
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    
    celsiusDisplay.textContent = celsius.toFixed(2) + " °C";
    fahrenheitDisplay.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinDisplay.textContent = kelvin.toFixed(2) + " K";
}