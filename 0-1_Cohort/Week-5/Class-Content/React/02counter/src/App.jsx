import './App.css'
import {useState} from "react"

function App() {

  //let counter=5

  const [counter,setCounter]=useState(5)

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    //will not now because all setCounter(counter+1) will be taken in a batch and will be updated once because same changes are being made
   // setCounter(counter+1) 
    //setCounter(counter+1)
    // setCounter will take a callback function
  }


  function removeValue(){
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
