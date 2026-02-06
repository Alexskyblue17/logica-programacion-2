function convertir() {
  let celsius = document.getElementById("celsius").value;
  celsius = Number(celsius);

  let resultado = document.getElementById("resultado");

  if (isNaN(celsius)) {
    resultado.textContent = "❌ Error: Ingresa un número válido.";
    return;
  }

  let fahrenheit = (celsius * 9 / 5) + 32;
  let kelvin = celsius + 273.15;

  resultado.innerHTML = `
    Celsius: ${celsius}°C <br>
    Fahrenheit: ${fahrenheit}°F <br>
    Kelvin: ${kelvin} K
  `;
}
