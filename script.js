function convert() {

    let value = Number(document.getElementById("value").value);
    let conversion = document.getElementById("conversion").value;
    let result = document.getElementById("result");

    if (isNaN(value)) {
        result.textContent = "Please enter a value.";
        return;
    }

    let answer;

    switch (conversion) {

        case "km-m":
            answer = value * 1000;
            result.textContent = value + " km = " + answer + " m";
            break;

        case "m-km":
            answer = value / 1000;
            result.textContent = value + " m = " + answer + " km";
            break;

        case "kg-g":
            answer = value * 1000;
            result.textContent = value + " kg = " + answer + " g";
            break;

        case "g-kg":
            answer = value / 1000;
            result.textContent = value + " g = " + answer + " kg";
            break;

        case "c-f":
            answer = (value * 9 / 5) + 32;
            result.textContent = value + " °C = " + answer.toFixed(2) + " °F";
            break;

        case "f-c":
            answer = (value - 32) * 5 / 9;
            result.textContent = value + " °F = " + answer.toFixed(2) + " °C";
            break;
    }
}