
import { FaPlus } from "react-icons/fa";
import {ShopContext} from "..//..//context/shop_context"
import React,{useContext} from 'react'
       
       const Product = (props) => {
        const {addToCart}=useContext(ShopContext)
        const {id,name,image,price}=props.data
         return (

           
            <div
              key={id}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between px-2 py-4">
                <p className="font-bold ">{name}</p>
                <p className="flex justify-between gap-x-2 items-center"> 
                  <span className="bg-orange-500 w-[60px] text-center text-white p-1 rounded-full">
                    {price +" /-"}
                  </span>
                  <button onClick={() => addToCart(id)} className="bg-orange-500 border-none  text-white rounded-full p-1 hover:bg-white hover:text-green-500 hover:scale-150  transition-all duration-500"><FaPlus /></button>
                </p>
              </div>
            </div>
         )
       }
       
       export default Product