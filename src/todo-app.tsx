import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [name, setName] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  const addTodo = () => {
    name.trim();
    let arr = [...todos, name]
    console.log(arr)
    setTodos(arr)
    setName('')
  }
 
  return (
    <div className="App">
       <h3>todo list</h3>
       <input name='todo' value={name} onChange={evt=>setName(evt.target.value) } />
       <input type={"button"} value="add" onClick={() => addTodo()}/>
       <div className='list-container'>
         {todos.map((todo, i)=> <li key={String(i)} >{todo}</li> )}
       </div>
    </div>
  )
}


export default App
