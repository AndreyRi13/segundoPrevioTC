function verificarPalindromo() {
    var cadena = document.getElementById("inputCadena").value;
    var aux = Math.floor(cadena.length / 2);
    var subCadena1 = cadena.substring(0, aux);
    var subCadena2 = cadena.substring(aux, cadena.length);
    var letra1, letra2;
    var size1 = subCadena1.length;
    var size2 = subCadena2.length;
    var condicion = size1 === size2;
  
    console.log("s1 " + subCadena1);
    console.log("s2 " + subCadena2);
  
    for (var i = 0, j = size1 - 1; condicion && i < size1; i++, j--) {
      console.log("i " + subCadena1.charAt(i));
      console.log("j " + subCadena2.charAt(j));
      condicion = subCadena1.charAt(i) === subCadena2.charAt(j);
    }
  
    document.getElementById("resultado").textContent = condicion.toString();
  }
  