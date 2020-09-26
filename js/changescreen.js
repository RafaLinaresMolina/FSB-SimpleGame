
const cambiaPantalla = (valor) => {
    console.log(valor)
    let screen = "screen" + valor;
    let arrayFases = ["screen1", "screen2", "screen3", "screen4", "screen5"];
    arrayFases = arrayFases.filter((val) => !screen.includes(val));
    
    document.getElementById(screen).style.display = "block";
    for (let pantalla of arrayFases) {
      document.getElementById(pantalla).style.display = "none";
    }
  };