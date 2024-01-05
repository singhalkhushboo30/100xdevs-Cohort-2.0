import App1 from "./App1"

function App() {
 // const [count, setCount] = useState(0)

  return (
   <>
   <App1 />
   <h3>Let us take a deep dive into it!</h3>
   </>
  )
}

export default App


// In the component in a function we do have to return one element only so for that we can mention many elements inside one element
// say it <div></div>. As we have to return one element then we can return the empty emty tags <></> known as "Fragment" in react