import React,{useContext} from 'react'
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import {ShopContext} from "..//..//context/shop_context"
const CartItem = (props) => {
    const {removefromCart,addToCart,cartItems}=useContext(ShopContext);
    const {id,name,category,image,price}=props.data
   
  return (  
    <div
      key={id}
      className="border shadow-lg rounded-lg hover:scale-105 duration-300"
    >
      <img
        src={image}
        alt={name}
        className=" w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="flex flex-col  items-center gap-4 px-2 py-4">
        <p className="font-bold ">{name}</p>
        <div className=" flex gap-x-6 "> 
          <span className="bg-orange-500 w-[40px] text-center text-white p-1 rounded-full">
            {price}
          </span>
          <button onClick={() => addToCart(id)} className="bg-orange-500 border-none  text-white rounded-full p-2 hover:bg-white hover:text-green-500 hover:scale-150  transition-all"><FaPlus/></button>
          <span className='bg-black border-none font-medium text-white rounded-full w-8 text-center pt-1'>{cartItems[id]}</span>
          <button onClick={() => removefromCart(id)} className="bg-orange-500 border-none  text-white rounded-full p-2 hover:bg-white hover:text-red-500 hover:scale-150  transition-all"><ImCross /></button>

        </div>
      </div>
    </div>
 )
}

export default CartItem