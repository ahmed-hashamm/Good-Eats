import React, { createContext, useState } from 'react'
export const ShopContext=createContext(null);
import {data}  from '../data/data';
const getDefaultCart=()=>{
    let cart={}
    for (let i = 1; i < data.length+1; i++) {
        cart[i]=0
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart());
   
    const getTotalAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=data.find((product)=>product.id===Number(item))
                totalAmount+=cartItems[item]*itemInfo.price;        

            }
        }
        return totalAmount;
    }
    const getTotalItems=()=>{
        let totalItems=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=data.find((product)=>product.id===Number(item))
                totalItems+=cartItems[item]        
        }
    }
    return totalItems;
    }


    const addToCart = (itemid) => {
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}));
        console.log(cartItems);
       
      }

      const removefromCart = (itemid) => {
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}));
        console.log(cartItems);
    }
    
     
    const contextValue={addToCart,getTotalAmount,removefromCart,cartItems,getTotalItems};
return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  
}

export default ShopContextProvider