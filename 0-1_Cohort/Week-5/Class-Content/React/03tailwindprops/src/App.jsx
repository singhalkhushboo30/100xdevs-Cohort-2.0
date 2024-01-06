import Card from './Card'
import './App.css'

function App() {
  

  return (
    <>
      
      <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'>Tailwind</h1>
      <Card username="mahi" btnText="click me" />
      <Card username="isha" />

    </>
  )
}

export default App
