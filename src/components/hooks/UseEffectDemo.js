import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- rendered once //Runs only on the first render

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, [count]); // <- rendered once
    //Runs on the first render
  //And any time any dependency value changes
  
  return <h1>I've rendered {count} times!</h1>;
}

export default UseEffectDemo;
/*

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)


*/