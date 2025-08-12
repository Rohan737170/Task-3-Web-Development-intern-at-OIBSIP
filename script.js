function convertTemp() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let from = document.getElementById("unitFrom").value;
    let result = "";

    if (isNaN(temp)) {
        document.getElementById("result").innerHTML = "❌ Please enter a valid number.";
        return;
    }

    if (from === "C") {
        result = `
            ${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F<br>
            ${temp}°C = ${(temp + 273.15).toFixed(2)}K
        `;
    }
    else if (from === "F") {
        result = `
            ${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C<br>
            ${temp}°F = ${((temp - 32) * 5/9 + 273.15).toFixed(2)}K
        `;
    }
    else if (from === "K") {
        result = `
            ${temp}K = ${(temp - 273.15).toFixed(2)}°C<br>
            ${temp}K = ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F
        `;
    }

    document.getElementById("result").innerHTML = result;
}
