import { createContext, useState } from "react";

export const userContext = createContext({});



function UserProvider({children}){
    const [userName, setUsername] = useState("")

    const imgProfile= JSON.parse(localStorage.getItem('useImg'))
    console.log('to no privado',userName)
   
    console.log(imgProfile)
    return(
            <userContext.Provider value={{userName, setUsername}}>
                {children}
            </userContext.Provider>
         )
}

export default UserProvider;