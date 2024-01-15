import { useState } from 'react'
import './App.css'
import { Interval } from './Interval'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>

    <button onClick={()=>setShow(!show)}>Show / Hide</button>
    {show && <Interval/>}
    </>
  )
}

export default App
