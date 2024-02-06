import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({children})=>{
    const [user, setUser] = useState({})

    const contextValue = {
        user,
        setUser
    }

    return(
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )

}
