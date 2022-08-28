import React, { } from 'react'
import './App.css'

type ChildProp = {
  children: React.ReactNode
}  
type CatProps = {
  animal_name: string
}

const Cat:React.FC<CatProps> = ({animal_name}) => <div>{animal_name}</div>
function Animal({children}:ChildProp) {
    return <>{children}</>
}
function App() {
  return (
    <div className="App">
       <Animal >
         <Cat animal_name={"kitty"} />
       </Animal>
    </div>
  )
}

export default App
