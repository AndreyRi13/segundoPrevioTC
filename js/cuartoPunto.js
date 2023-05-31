class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(child) {
      this.children.push(child);
    }
  
    render() {
      let result = "";
      result += this.value;
  
      if (this.children.length > 0) {
        result += "(";
        for (let i = 0; i < this.children.length; i++) {
          result += this.children[i].render();
          if (i !== this.children.length - 1) {
            result += ", ";
          }
        }
        result += ")";
      }
  
      return result;
    }
  }
  
  function derive() {
    const input = document.getElementById("input-string").value;
    const derivationsElement = document.getElementById("derivations");
    derivationsElement.innerHTML = "";
  
    const derivations = findDerivations(input);
    derivations.forEach((derivation, index) => {
      const tree = createTree(derivation);
      const treeElement = document.createElement("pre");
      treeElement.className = "tree";
      treeElement.innerText = "Derivación " + (index + 1) + ":\n" + tree.render();
      derivationsElement.appendChild(treeElement);
    });
  }
  
  function findDerivations(input) {
    const stack = [];
    const derivations = [];
    let current = "";
    let index = 0;
  
    while (index < input.length) {
      const symbol = input[index];
      current += symbol;
  
      if (symbol === "+" || symbol === "*") {
        stack.push(symbol);
      } else if (symbol === "0" || symbol === "1") {
        stack.push("E");
      } else if (symbol === "(") {
        stack.push(symbol);
      } else if (symbol === ")") {
        let operator = stack.pop();
        while (operator !== "(") {
          current = operator + current + stack.pop();
          operator = stack.pop();
        }
      }
  
      index++;
  
      if (stack.length === 0 && index < input.length) {
        derivations.push(current);
        current = "";
      }
    }
  
    derivations.push(current);
    return derivations;
  }
  
  function createTree(derivation) {
    const root = new Node("S");
    let currentNode = root;
  
    for (let i = 0; i < derivation.length; i++) {
      const symbol = derivation[i];
  
      if (symbol === "+") {
        const newNode = new Node("+");
        newNode.addChild(currentNode);
        currentNode = newNode;
      } else if (symbol === "*") {
        const newNode = new Node("*");
        newNode.addChild(currentNode);
        currentNode = newNode;
      } else if (symbol === "0" || symbol === "1") {
        const newNode = new Node(symbol);
        currentNode.addChild(newNode);
      }
    }
  
    return root;
  }
  