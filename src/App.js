import { useState } from 'react';
import './App.css';


function App() {
const[count, setCount] = useState(0);
function  decreseHandler(){
  setCount(count-1);
}
function increseHandler(){
  setCount(count+1);

}

function resetHandler(){
  setCount(0);
}

  return (
   
    <div className="App">
      <h2 className='heading'>Increment & Decrement</h2>
<div className='box'>

 <button  onClick={decreseHandler} className='minusbutton'>-</button>  
     <div className='text'>  {count}    </div>
 <button   onClick={increseHandler} className='plusbutton'>+</button> 

</div>
<button   onClick={resetHandler} className='reset'>Reset</button>
    </div>
  );
}


export default App;

