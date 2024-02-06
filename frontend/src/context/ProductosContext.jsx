import React, { createContext, useContext, useState } from 'react';

const ProductosContext = createContext();

export const useProductosContext = () => {
  return useContext(ProductosContext);
};

export const ProductosProvider = ({children})=>{
    const [productos, setProductos] = useState([])

    const contextValue = {
        productos,
        setProductos
    }

    return(
        <ProductosContext.Provider value={contextValue}>
            {children}
        </ProductosContext.Provider>
    )

}