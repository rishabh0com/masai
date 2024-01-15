import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css"

function CleanUp(){
    
    const [show,setShow] = useState(true);
    const [count , setCount] = useState(10)
    const [start , setStart] = useState(true)
    useEffect(()=> {
        document.title= "Clean UP "
    },[])

    function Timer(){
        // use useEffect under the function
        useEffect(()=>{
            let timerId = setInterval(()=>{
                
                setCount(count - 1)
                console.log(Date.now())
            },1000)
            if(count == 0){
                clearInterval(timerId)
            }
            
            return ()=>{
                clearInterval(timerId)
            }
        },[start])  
        return (<h1> timer : {count}</h1>)
    }

    console.log(show)
    return(
        <>
          <button onClick={()=> setShow(
            (prev) => !prev
          )}>Show / Hide </button>
          <button onClick={()=>{
             setCount(10)
             setStart((prev)=> !prev)
          }}>Reset</button>
          
          {show ? <Timer/> : null}
        </>
    )
}

export default CleanUp;