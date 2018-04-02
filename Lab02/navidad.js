function calcularDiasAusencia(fechaIni, fechaFin) {
  var diaEnMils = 1000 * 60 * 60 * 24,
      desde = new Date(get.FullYear()+'-'+getMonth()+'-'+getDate()),
      hasta = new Date('2018-12-25'),
      diff = hasta.getTime() - desde.getTime() + diaEnMils;// +1 incluir el dia de ini
  return diff / diaEnMils;
}

document.getElementById('calcular').addEventListener('click', function() {
  document.getElementById('dias').innerText = calcularDiasAusencia(
    document.getElementById('fechaIni').value,
    document.getElementById('fechaFin').value
  );
});