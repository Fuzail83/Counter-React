import React, { useState } from "react";
import "../components/MainStyle.css";
import { Helmet } from "react-helmet";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Helmet title="Counter" />
      <div className="counter-container">
        <button className="counter-button" onClick={increment}>
          Increment
        </button>
        <h3 className="counter-value">{count}</h3>
        <button className="counter-button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
