function calcularDiasAusencia() {
      fecActual = new Date()
      hasta = new Date(fecActual.getFullYear(), 11, 25);

      var diff = Math.ceil((hasta.getTime() - fecActual.getTime() ) / (1000*60*60*24));


      console.log(diff + " dias")

}

calcularDiasAusencia()

