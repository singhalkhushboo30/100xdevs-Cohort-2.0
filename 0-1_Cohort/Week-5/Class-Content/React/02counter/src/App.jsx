import './App.css'
import {useState} from "react"

function App() {

  //let counter=5

  const [counter,setCounter]=useState(5)

  const addValue=()=>{
      setCounter(counter+1)  
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    return 
   
  }
  return (
    <>
      <h1>React Learning</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value </button>
      <br></br>
      <button onClick={removeValue}>remove value </button>
    </>
  )
}

export default App
