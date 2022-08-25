import "./App.css";
import { useState, useEffect } from "react";

function printOutput(op1, op2, op, result) {
  let operatorString = "";

  switch (op) {
    case "plus":
      operatorString = "+";
      break;
    case "minus":
      operatorString = "-";
      break;
    case "multiplication":
      operatorString = "*";
      break;
    case "division":
      operatorString = "/";
      break;
  }

  return (
    result ||
    String(typeof op1 === "number" ? op1 : "") +
      operatorString +
      String(typeof op2 === "number" ? op2 : "") ||
    "0"
  );
}

function App() {
  const [op1, setOp1] = useState();
  const [op2, setOp2] = useState();
  const [op, setOp] = useState();
  const [result, setResult] = useState();
  const [isRequestCompleted, setIsRequestCompleted] = useState(false);

  const buttonClick = (event) => {
    const inputStr = event.target.id.split("-")[1];

    if (
      inputStr === "plus" ||
      inputStr === "minus" ||
      inputStr === "multiplication" ||
      inputStr === "division"
    ) {
      // if user enters operation
      if (typeof op1 === "number") {
        setOp(inputStr);
      }
    } else {
      // number
      if (op) {
        setOp2((op2 || 0) * 10 + Number(inputStr));
      } else {
        setOp1((op1 || 0) * 10 + Number(inputStr));
      }
    }
  };

  useEffect(() => {
    if (isRequestCompleted && typeof op2 === "number") {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch("http://3.12.53.217:3001", {
        method: "POST",
        body: JSON.stringify({ op1, op2, op }),
        headers,
      })
        .then((response) => response.text())
        .then((data) => {
          if (data.includes("Infinity")) {
            setResult("Error");
          } else {
            setResult(Number(data));
          }
          setIsRequestCompleted(false);
        });
    }
  }, [op1, op2, op, isRequestCompleted]);

  return (
    <div className="App">
      <div id="display">{printOutput(op1, op2, op, result)}</div>
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
        <button id="b-multiplication" onClick={buttonClick}>
          *
        </button>
      </div>
      <div className="button-line">
        <button id="b-0" onClick={buttonClick}>
          0
        </button>
        <button
          id="b-eq"
          onClick={() => {
            if (typeof op2 === "number") {
              setIsRequestCompleted(true);
            }
          }}
        >
          =
        </button>
        <button
          id="b-clear"
          onClick={() => {
            setOp(undefined);
            setOp1(undefined);
            setOp2(undefined);
            setIsRequestCompleted(false);
            setResult(undefined);
          }}
        >
          C
        </button>
        <button id="b-division" onClick={buttonClick}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
