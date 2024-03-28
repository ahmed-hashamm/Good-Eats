import React, { useContext } from "react";
import { ShopContext } from "../../context/shop_context";
import { data } from "../../data/data.js";
import CartItem from "./CartItem.jsx";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div>
        <h1 className="text-[3vw] font-bold text-orange-600 text-center">Your Items</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout flex flex-col items-center justify-center ">
          <h1 className="text-[3vw] font-bold text-black">
            Sub Total :{ totalAmount +" /-"}
          </h1>
        </div>
      ) : (
        <div className="flex flex-col gap-3 items-center justify-center ">
          <h1 className=" text-2xl">Your Cart is Empty</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-black w-[200px] text-white  rounded-2xl p-2 font-medium"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
