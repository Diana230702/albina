import React, { createContext, useReducer } from "react";

export const counterContext = createContext();

const INIT_STATE = {
  counter: 0,
  name: "salamat",
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: action.payload };
    case "DECREMENT":
      return { ...state, counter: action.payload };
    case "PLUS_TEN":
      return { ...state, counter: state.counter + 10 };

    case "CHANGE_NAME":
      return { ...state, name: action.payload };

    default:
      return state;
  }
}

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function increment() {
    dispatch({ type: "INCREMENT", payload: state.counter + 1 });
  }

  function decrement() {
    dispatch({ type: "DECREMENT", payload: state.counter - 1 });
  }

  function plus10() {
    dispatch({ type: "PLUS_TEN" });
  }

  function changeName(newName) {
    dispatch({ type: "CHANGE_NAME", payload: newName });
  }

  const values = {
    increment,
    counter: state.counter,
    decrement,
    plus10,
    name: state.name,
    changeName,
  };
  console.log(state);
  return (
    <counterContext.Provider value={values}>{children}</counterContext.Provider>
  );
};

export default CounterContextProvider;
