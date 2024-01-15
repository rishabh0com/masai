import { useState,useEffect } from "react"

export function Interval(){
      const [count, setCount] = useState(5);
      
   

        useEffect(()=>{
            let timerId = setInterval(()=>{
                setCount((prev)=>prev-1)
            },1000)

            if(count === 0){
                clearInterval(timerId)
            }
    
            return ()=>{clearInterval(timerId)}
            
          },[count])

     

    return(
        <>
        <h1>Timer</h1>
        <button onClick={()=>{setCount(5)}}>Reset</button>
        <h1>{count}</h1>
        </>
    )
}


