import React from "react";
import { data } from "../data/data";

const Food = () => {
  console.log(data);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-blue-700 font-bold text-4xl text-center">
        Top Rated Items
      </h1>
      {/* FILTER ROW */}
      <div className=" flex flex-col lg:flex-row justify-between">
        {/* FILTER TYPE */}
        <p className="font-bold text-gray-700">Filter Type</p>
        <div className="flex justify-between flex-wrap">
          <button className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            All
          </button>
          <button className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            Alcohol{" "}
          </button>
          <button className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            Burgers
          </button>
          <button className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            Dessert
          </button>
        </div>
        {/* FILTER PRICE */}
        <p className="font-bold text-gray-700">Filter Price</p>
        <div className="flex justify-between max-w-[300px] w-full">
          <button className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            $
          </button>
          <button className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            $$$
          </button>
          <button className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            $$$
          </button>
          <button className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            $$$$
          </button>
        </div>
      </div>
      {/* DISPLAY FOODS */}

      <div>

      </div>
      
    </div>
  );
};

export default Food;
