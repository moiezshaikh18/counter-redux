import React from "react";

const Counter = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          This Is Normal REDUX Base Counter - App
        </h1>
        <input type="text" onChange={props.onChange}></input>
        <button onClick={props.onClick} style={{ margin: "10px" }}>
          INCREMENT
        </button>
        <button onClick={props.onDec}>DECREMENT</button>
        <p>{props.textVal}</p>
        <p>{props.count}</p>
      </div>
    </>
  );
};

export default Counter;
