import { useEffect, useState,Children } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface User {
    name: string,
    email: string,
    phone: string
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(()=>{
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json())
        .then(data => {
            let user_data = {
                name: data.name,
                email: data.email,
                phone: data.phone
            }
            setUser(user_data)
        })
    }, 3000)
  })
  
  return (
    <div className="App">
       {user ? <div> {user.name} - {user.email} - {user.phone} </div>: <div>loading ..</div>}
    </div>
  )
}


export default App
