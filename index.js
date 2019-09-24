import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [counter,setCounter] = useState(0);
  const increamentcounter = (e)=>{
    setCounter(counter + 1);
  }
  useEffect(()=>{
    console.log("Working");
  });
  return (
    <React.Fragment>
    <h1>Hello {counter} </h1>
    <input type="button" onClick={increamentcounter} value="Click"/>
    </React.Fragment>
    );
};
export default App;
render(<App />, document.getElementById('root'));
