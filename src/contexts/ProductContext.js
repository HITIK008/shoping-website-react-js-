import React, {createContext, useEffect, useState} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //product state
  const [products, setProducts]=useState([]);

  //fetch products
    useEffect(()=>{
      const fetchProduct =async()=>{
        const response= await fetch('https://fakestoreapi.com/products');
        const data =await  response.json();
        setProducts(data);
      };
      fetchProduct();
    },[]);
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
  
};

export default ProductProvider;
