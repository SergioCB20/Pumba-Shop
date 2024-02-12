import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({children})=>{
    const [user, setUser] = useState({})
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
      });

    const contextValue = {
        user,
        setUser,
        cart,
        setCart
    }

    return(
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )

}
