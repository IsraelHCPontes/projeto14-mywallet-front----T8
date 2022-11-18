import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    

    const imgProfile= JSON.parse(localStorage.getItem('useImg'))

    console.log(imgProfile)
    return(
            <UserContext.Provider value={{}}>
                {children}
            </UserContext.Provider>
         )
}

export default UserProvider;