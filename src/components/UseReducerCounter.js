import React, { useReducer, useState } from "react";
import { Helmet } from "react-helmet";

const UseReducerCounter = () => {
  const reducer = (state, action) => {
    // if (state < 20 && action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (state > 0 && action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // return state;

    // Switch Case through

    switch (action.type) {
      case "INCREMENT":
        return state < 20 ? state + 1 : state;
      case "DECREMENT":
        return state > 0 ? state - 1 : state;
      default:
        return state;
    }
  };
  const initialState = 10;
  const [currentState, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <>
      <Helmet title="UseReducer Counter" />

      <div className="counter-container">
        <button className="counter-button" onClick={increment}>
          Increment
        </button>
        <h3 className="counter-value">{currentState}</h3>
        <button className="counter-button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseReducerCounter;
