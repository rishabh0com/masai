import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AuthContext } from './context/AuthContextProvide'
import Login from './Login'

function App() {
  useEffect(()=>{document.title='Context Api'})
  const [count, setCount] = useState(0)

  // 3. useContext()
  const {values,setValues} = useContext(AuthContext)
  


  return (
    <>
   <button onClick={()=>{setValues({...values,logIn : true})}}>Show/Hide</button>
   {values.logIn ? <Login/> : null}
    
    </>
  )
}

export default App
