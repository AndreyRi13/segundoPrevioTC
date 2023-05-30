function verificarCadena() {
    var entrada = document.getElementById("entrada").value;
  var resultado = document.getElementById("resultado");
  
  var cont = 0, cont2 = 0;
  var n;
  var condicion = false;

  for (var i = 0; i < entrada.length - 1; i++) {
    n = entrada.charAt(i);
    
    if (n === '0' && entrada.charAt(i + 1) === '1') {
      condicion = true;
      break;
    }
  }
    
    document.getElementById("resultado").innerHTML = "Condición: " + condicion;
  }
  