let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinar() {
  let intento = Number(document.getElementById('intento').value);
  intentos++;

  if (intento < 1 || intento > 100) {
    document.getElementById('mensaje').textContent = 'Por favor ingresa un número entre 1 y 100.';
  } else if (intento < numeroSecreto) {
    document.getElementById('mensaje').textContent = 'Demasiado bajo.';
  } else if (intento > numeroSecreto) {
    document.getElementById('mensaje').textContent = 'Demasiado alto.';
  } else {
    document.getElementById('mensaje').textContent = `¡Correcto! Lo adivinaste en ${intentos} intentos.`;
  }

  document.getElementById('contador').textContent = intentos;
  document.getElementById('intento').value = '';
}
