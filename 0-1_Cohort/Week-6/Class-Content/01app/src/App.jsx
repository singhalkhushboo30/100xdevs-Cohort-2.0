// import React from "react"
import {useState} from "react"
import './App.css'

function App() {
  const [todos,setTodos]=useState(
    [{
      id:1,title:"go to gym",
      description:"go to gym today"
    }
  ,
  {
    id:2,
    title:"eat food",
    description:"eat food"
  },
  {
    id:3,
    title:"go to class",
    description:"go to class today"
  }
]
  )

  function addTodo(){
   setTodos([...todos,{
    id:4,
    title:Math.random(),
    description:Math.random()
   }])
  }
  
  return (
    <>
    <button onClick={addTodo}>Add a Todo</button>
  {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)} 

    </>
  )
}

// eslint-disable-next-line react/prop-types
function Todo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>

}

export default App


// React.memo - let us to skip  re-rendering a component if the props are unchanged