import React, { useContext, useState } from "react";
import { counterContext } from "../CounterContextProvider";

const Counter = () => {
  const { increment, counter, decrement, plus10, name, changeName } =
    useContext(counterContext);

  const [inpVal, setInpVal] = useState("");
  console.log(inpVal);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>MINUS</button>
      <button onClick={increment}>PLUS</button>
      <button onClick={plus10}>plus10</button>
      <h1>hello, {name}</h1>
      <input
        type="text"
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
      />
      <button onClick={() => changeName(inpVal)}>change name</button>
    </div>
  );
};

export default Counter;
