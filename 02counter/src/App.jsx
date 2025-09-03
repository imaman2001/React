import { useState } from 'react';

import './App.css'

function App() {

  const [count, setCounter] = useState(15)
  // let count = 10;
  const addValue = () => {
    if(count < 20){
      setCounter(count + 1); 
     }
     return;
  }

  const removeVal = () => {
    if(count >= 1){
      setCounter(count - 1);
      console.log(count)
    }
    return;
  }

  return (
    <>
      <h1>Custom Counter</h1>
      <h1>Counter value : {count}</h1>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeVal} >Remove value</button>

    </>
  )
}

export default App
