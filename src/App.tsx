import React, { useState } from "react";

import styled from "styled-components";

const HorizontalContainer = styled.div`
  flex-direction: row;
  display: flexbox;
  flex: 1;
`;

const Element = styled.h1`
  flex-direction: row;
  border-color: #121212;
  border-style: dashed;
  border-width: 1px;
  flex-wrap: wrap;
  padding: 8px;
  margin: 2px;
`;

const PrimaryButton = styled.button``;

const getRandonArray = (n: number): Array<number> => {
  const arr = Array<number>(n);
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
};

function App() {
  console.log("Component re-render");

  const [counter, setCounter] = useState(0);

  const [array, setArray] = useState(getRandonArray(8));

  const foo = async () => {
    for (let i = 0; i < array.length; i++) {
      console.log("Running outer loop");
      let isSwapOccured = false;
      for (let j = 0; j < array.length - 1; j++) {
        console.log("Running innner loop");
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;

          isSwapOccured = true;
          console.log("Running swapping elements");
        }

        setArray((a) => array.slice());
        setCounter(counter + 1);
        await sleep(10);
      }
      if (!isSwapOccured) break;
    }
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div className="App">
      <h1 onClick={() => setCounter(counter + 1)}> counter {counter}</h1>

      <PrimaryButton onClick={foo}>Foo</PrimaryButton>

      <HorizontalContainer>
        {array.map((element) => (
          <Element key={element}>{element}</Element>
        ))}
      </HorizontalContainer>
    </div>
  );
}

export default App;
