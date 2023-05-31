function validateParentheses() {
    const input = document.getElementById("input-string").value;
    const result = document.getElementById("result");
  
    if (checkParentheses(input)) {
      result.innerText = "La cadena es válida";
    } else {
      result.innerText = "La cadena no es válida";
    }
  }
  
  function checkParentheses(input) {
    const stack = [];
    const openingSymbols = ["(", "["];
    const closingSymbols = [")", "]"];
  
    for (let i = 0; i < input.length; i++) {
      const symbol = input[i];
  
      if (openingSymbols.includes(symbol)) {
        stack.push(symbol);
      } else if (closingSymbols.includes(symbol)) {
        if (stack.length === 0) {
          return false;
        }
  
        const topSymbol = stack.pop();
        const correspondingOpeningSymbol = openingSymbols[closingSymbols.indexOf(symbol)];
  
        if (topSymbol !== correspondingOpeningSymbol) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  