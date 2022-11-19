import { createContext, useState } from "react";

export const TokenContext = createContext({});

function UserProvider({children}){
    

    const imgProfile= JSON.parse(localStorage.getItem('useImg'))
    const [token, setToken] = useState('')

    console.log(imgProfile)
    return(
            <TokenContext.Provider value={{token, setToken}}>
                {children}
            </TokenContext.Provider>
         )
}

export default UserProvider;