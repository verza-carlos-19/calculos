const fcinversion = document.querySelector("#inversion-fci");
const fcimeses = document.querySelector("#meses-fci");
const fciscreen = document.querySelector("#screenFci");

function enviarFci() {
  console.log("la multiplicacion seria: " + fcinversion.value * fcimeses.value);
  console.log(fcimeses.value);
  console.log(((fcinversion.value * 0.2225) / 100) * 30 * fcimeses.value);
  fciscreen.innerHTML = `
  <p>
  invertiras = $${fcinversion.value}
  <br>
  su inverion se hara en un plazo de ${fcimeses.value} meses
  <br>
  por dia recibirias $${promedioDia(fcimeses.value)}
  <br>
  por mes recibirias $${promedioMes(fcimeses.value)}
  <br>
  por tu cantidad de meses seleccionadas recibiras $${sumComple(fcimeses.value)}
  <br>

  </p>`;
}
function sumComple(j) {
  var sumComplex = parseInt(fcinversion.value);
  for (let i = 0; i <= j * 30; i++) {
    sumComplex += (sumComplex * 0.2225) / 100;
    console.log(sumComplex);
  }
  return sumComplex;
}
function promedioDia(j) {
  var sumCompley = 0;
  for (let i = 0; i <= j * 30; i++) {
    sumCompley += (fcinversion.value * 0.2225) / 100;
    console.log(sumCompley);
  }
  return sumCompley / (j * 30);
}
function promedioMes(j) {
  var sumComplec = 0;
  for (let i = 0; i <= j * 30; i++) {
    sumComplec += (fcinversion.value * 0.2225) / 100;
    console.log(sumComplec);
  }
  return sumComplec / j;
}
