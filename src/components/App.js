import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  function CalculateRelationShip(e) {
    e.preventDefault();
    console.log("hi");
    if (!name1 || !name2) {
      setResult("Enter both valid names");
      return;
    }

    const arr1 = name1.toLowerCase().split("");
    const arr2 = name2.toLowerCase().split("");

    for (let i = 0; i < arr1.length; i++) {
      let index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1[i] = "";
        arr2[index] = "";
      }
    }

    let count = arr1.join("").length + arr2.join("").length;
    let remainder = count % 6;
    console.log(remainder);
    const flamesMap = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
      "": "Please Enter valid input",
    };

    setResult(flamesMap[remainder]);
  }

  const clearFields = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div>
      <form onSubmit={CalculateRelationShip}>
        <div>
          <label htmlFor="name1"></label>
          <input
            type="text"
            id="name1"
            placeholder="Enter first name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name2"></label>
          <input
            type="text"
            id="name2"
            placeholder="Enter second name"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
        <button type="submit">Calculate Relationship Future</button>
      </form>
      <button onClick={clearFields}>Clear</button>
      {result && <h1>{result}</h1>}
    </div>
  );
}

export default App;
