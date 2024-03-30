import React, { useState } from "react";

import Hero from "../../components/Hero.jsx";
import HeadlineCards from "../../components/HeadlineCards.jsx";
import { data } from "../../data/data.js";
import { FaLessThan } from "react-icons/fa";

import Product from "./Products.jsx";
const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price < price;
      })
    );
  };

  return (
    <>
      <Hero />
      <HeadlineCards />
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center">
          Top Rated Menu Items
        </h1>

        {/* Filter Row */}
        <div className="flex flex-col gap-4 my-8 lg:flex-row justify-between items-center">
          {/* Fliter Type */}
          <div>
            <p className="font-bold text-gray-700">Filter Type</p>
            <div className="flex justfiy-between flex-wrap font-medium">
              <button
                onClick={() => setFoods(data)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                All
              </button>
              <button
                onClick={() => filterType("burger")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Burgers
              </button>
              <button
                onClick={() => filterType("pizza")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Pizza
              </button>
              <button
                onClick={() => filterType("salad")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Salads
              </button>
              <button
                onClick={() => filterType("chicken")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Chicken
              </button>
            </div>
          </div>
          {/* Filter Price */}
          <div>
            <p className="font-bold text-gray-700">Filter Price</p>
            <div className="flex flex-wrap justify-between font-medium  ">
              <button
                onClick={() => filterPrice(500)}
                className="m-1 border-orange-600 flex items-center justify-center  text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                <FaLessThan className="pt-[2px] mr-1" />
                500
              </button>
              <button
                onClick={() => filterPrice(1000)}
                className="m-1 border-orange-600 flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                <FaLessThan className="pt-[2px] mr-1" />
                1000
              </button>
              <button
                onClick={() => filterPrice(1500)}
                className="m-1 border-orange-600 flex items-center justify-center  text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                <FaLessThan className="pt-[2px] mr-1" />
                1500
              </button>
              <button
                onClick={() => setFoods(data)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                All
              </button>
            </div>
          </div>
        </div>

        {/* Display foods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {foods.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Food;
