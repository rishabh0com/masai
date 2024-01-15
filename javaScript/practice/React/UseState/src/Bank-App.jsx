import React from 'react'
import './App.css'

//component
function State() {
  const [count,setCount] = React.useState(1);
  const [text,setText] = React.useState("");
  // function handleClick(){
  //   setCount(count + 1);
  // }
  function handleChange(event){
    setText(event.target.value)
  }
  return (
    <>
    <button onClick={()=>setCount(count + 1)}>count : {count}</button> {/* another method is anonmous function */}
    <div>
      <input type="text" placeholder='enter text..' onChange={handleChange} />
    </div>
    <p> Entred Text : {text}</p>
    </>
  )
}

function Bank(){
  const [amount,setAmount] = React.useState(100);
  function clickAmount(){
    //this will update amount by 200 because you use function parameter under function
    setAmount((am)=> am + 100)
    setAmount((am)=> am + 100)

    //this will only update amoun with 100
    // setAmount(amount+100)
    // setAmount(amount+100) 
  }
  return(
    <>
     <h1>Current Amount : {amount}</h1>
     <button onClick={clickAmount}>Deposit ₹100</button>
     <button onClick={()=>setAmount(amount-100)}>WithDraw ₹ 100</button>
    </>
  )
}
// main App Component :-
function App(){
  return (
    <>
    <Bank/>
    </>
  )
}

export default App
