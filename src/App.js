import logo from './logo.svg';
import {useState} from 'react';

  function Counter() {

    const [counter,setCounter] = useState(0);
    const increment =() =>{
   
     setCounter(counter+1)
   
    }
   
    
   
    const decrement =() =>{
   
     setCounter(counter-1)
   
    }
    const Reset=()=>{
      setCounter(0)
      console.log("Reset", Counter)
    }
  return (
    <center>

   
    <div className="App">

     <button onClick={increment}>+</button>

     <span className='result' style={{"margin":"25px"} }>{counter} </span>

     <button onClick={decrement}>-</button>
    <div className='Reset'>

      <button onClick={Reset}>
        <sanp>Reset</sanp>
      </button>
    </div>
     </div>
     </center>
  );
}

export default Counter;
