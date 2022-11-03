import { useState } from "react";
import CounterChild from "./CounterChild";

function Counter() {
  const [count, setCount] = useState(42);
  console.log(count, setCount);
  const clicked = (e) => {
    console.log("clicked");
    setCount((oldState) => oldState + 1);
  };
  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={clicked}>Click me</button>
      <CounterChild parentCount={count} />
      <CounterChild parentCount={count} />
      <CounterChild parentCount={count} />
      <CounterChild parentCount={count} />
      <CounterChild parentCount={count} />
    </>
  );
}

export default Counter;
