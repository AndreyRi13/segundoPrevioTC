// Definir la clase de la Máquina de Moore
class MooreMachine {
    constructor() {
      this.state = 'q0'; // Estado inicial
      this.output = '';
    }
  
    // Función para procesar la entrada
    processInput(input) {
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
  
        // Transiciones entre estados
        switch (this.state) {
          case 'q0':
            if (char === '0') {
              this.state = 'q1';
            }
            break;
          case 'q1':
            if (char === '1') {
              this.state = 'q2';
              this.output += 'a'; // Imprimir 'a' cuando se encuentra la secuencia '01'
            } else if (char === '0') {
              this.state = 'q1';
            } else {
              this.state = 'q0';
            }
            break;
          case 'q2':
            if (char === '0') {
              this.state = 'q1';
            } else {
              this.state = 'q0';
            }
            break;
        }
      }
    }
  
    // Obtener la salida
    getOutput() {
      return this.output;
    }
  }
  
  // Función para ejecutar la máquina de Moore
  function runMachine() {
    const input = document.getElementById('input').value;
    const machine = new MooreMachine();
    machine.processInput(input);
    const outputElement = document.getElementById('output');
    outputElement.textContent = machine.getOutput();
  }
  