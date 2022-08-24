import logo from "./logo.svg";
import "./App.css";

function buttonClick(event, pOP1, pOP2, pOP) {
  var input_ = null;

  switch (event.target.id) {
    case "b-1":
      input_ = 1;
      break;
    case "b-2":
      input_ = 2;
      break;
    case "b-3":
      input_ = 3;
      break;
    case "b-4":
      input_ = 4;
      break;
    case "b-5":
      input_ = 5;
      break;
    case "b-6":
      input_ = 6;
      break;
    case "b-7":
      input_ = 7;
      break;
    case "b-8":
      input_ = 8;
      break;
    case "b-9":
      input_ = 9;
      break;
    case "b-0":
      input_ = 0;
      break;
    case "b-plus":
      input_ = "plus";
      break;
    case "b-minus":
      input_ = "minus";
      break;
    case "b-multiply":
      input_ = "multiply";
      break;
    case "b-divide":
      input_ = "divide";
      break;
  }

  if (
    input_ == "plus" ||
    input_ == "minus" ||
    input_ == "multiply" ||
    input_ == "divide"
  ) {
    // if user enters operation
    if (pOP1.length != 0) {
      pOP = input_;
    }
  } else {
    // number
    if (pOP1.length == 0) {
      pOP1.push(input_);
    } else {
      pOP2.push(input_);
    }
  }
}

function App() {
  var op1 = [];
  var op1 = [];
  var op = null;

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
        <button id="b-eq" className="b-eq" onClick={buttonClick}>
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
