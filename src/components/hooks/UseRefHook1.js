import React, {Fragment, useRef} from 'react'; 

function UseRefHook1() { 

// Creating a ref object using useRef hook 
const focusPoint = useRef(0); 
const onClickHandler = () => { 
	focusPoint.current.value = 
	"The quick brown fox jumps over the lazy dog"; 
	focusPoint.current.focus(); 
}; 
return ( 
	<div> 
	<div> 
		<button onClick={onClickHandler}> 
		ACTION 
		</button> 
	</div> 
	<label> 
	Click on the action button to 
	focus and populate the text. 
	</label><br/> 
	<textarea ref={focusPoint} /> 
	</div> 
); 
}; 

export default UseRefHook1;

/*
Since useRef hooks preserve value across various re-renders and do not cause re-renders whenever a value is changed they make the application faster and helps in caching and storing previous values
In React, we often wish to track the frequent changes in a component without triggering re-renders. Even though the useState and useReducer hooks help control a component's local state, making too many calls may cause the component to be re-rendered.However, we have a React useRef hook to resolve these problems.
*/