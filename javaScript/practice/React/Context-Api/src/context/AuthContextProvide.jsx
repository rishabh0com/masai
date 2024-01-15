import React, {useContext, useState } from "react"
import { createContext } from "react";


// 1. create Context 
export const AuthContext = createContext()
console.log(AuthContext);

// 2. Provide Context
export function AuthContextProvider({children}){
    const [values, setValues] = useState({
        logIn : false,
        isAuth : false
    })

    return (
        <AuthContext.Provider value={{values,setValues}}> 
            {children}
        </AuthContext.Provider>
    )

    // const [logIn,setLogIn] = useState(false)

    // obj ={
    //     logIn,
    //     setLogIn
    // }

    // return (
    //     <AuthContext.Provider values={obj}>
    //       {children}
    //     </AuthContext.Provider>
    // ) 
}



