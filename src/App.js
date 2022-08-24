import "./App.css";

function buttonClick(event) {
  const inputStr = event.target.id.split("-")[1];

  if (
    inputStr === "plus" ||
    inputStr === "minus" ||
    inputStr === "multiply" ||
    inputStr === "divide"
  ) {
    // if user enters operation
    if (typeof op1 === "number") {
      op = inputStr;
    }
  } else if (inputStr === "eq") {
    if (typeof op2 === "number") {
      switch (op) {
        case "plus":
          result = op1 + op2;
          break;
        case "minus":
          result = op1 - op2;
          break;
        case "multiply":
          result = op1 * op2;
          break;
        case "divide":
          result = op1 / op2;
          break;
      }
    }
  } else {
    // number
    if (op) {
      op2 = (op2 || 0) * 10 + Number(inputStr);
    } else {
      op1 = (op1 || 0) * 10 + Number(inputStr);
    }
  }

  console.log("op1: " + op1);
  console.log("op2: " + op2);
  console.log("op: " + op);
  console.log("result: " + result);
}

let op1;
let op2;
let op;
let result;

function App() {
  return (
    <div className="App">
      <input disabled></input>
      <div className="button-line">
        <button id="b-7" onClick={buttonClick}>
          7
        </button>
        <button id="b-8" onClick={buttonClick}>
          8
        </button>
        <button id="b-9" onClick={buttonClick}>
          9
        </button>
        <button id="b-plus" onClick={buttonClick}>
          +
        </button>
      </div>
      <div className="button-line">
        <button id="b-4" onClick={buttonClick}>
          4
        </button>
        <button id="b-5" onClick={buttonClick}>
          5
        </button>
        <button id="b-6" onClick={buttonClick}>
          6
        </button>
        <button id="b-minus" onClick={buttonClick}>
          -
        </button>
      </div>
      <div className="button-line">
        <button id="b-1" onClick={buttonClick}>
          1
        </button>
        <button id="b-2" onClick={buttonClick}>
          2
        </button>
        <button id="b-3" onClick={buttonClick}>
          3
        </button>
        <button id="b-multiply" onClick={buttonClick}>
          *
        </button>
      </div>
      <div className="button-line">
        <button id="b-0" onClick={buttonClick}>
          0
        </button>
        <button id="b-eq" onClick={buttonClick}>
          =
        </button>
        <button id="b-divide" onClick={buttonClick}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
