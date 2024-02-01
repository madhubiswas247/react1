import React, { useRef } from 'react'

const UseRefHook = () => {

    let count = useRef(0);
    const increment=()=>{
       count.current = count.current + 1;
       console.log(count.current);
       alert(count.current);
     
    }
  return (
    <div>
        <h1>UseRefHook Demo</h1>
        <button onClick={increment}>Increment counter</button>
        <div>Count Value not triggered a re-render:  {count.current}</div>
   
    </div>
    
  )
}

export default UseRefHook

/*
useRef is a React Hook that lets you reference a value that’s not needed for rendering.
useRef returns a ref object with a single current property initially set to the initial value you provided.

On the next renders, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference.

Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component.

To update the value inside the ref, you need to manually change its current property:
By using a ref, you ensure that:

You can store information between re-renders (unlike regular variables, which reset on every render).
Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
The information is local to each copy of your component (unlike the variables outside, which are shared).
Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to display on the screen. Use state for that instead. 

Note: that it’s okay to use a ref instead of state here because the click count is only read and written in an event handler.


*/