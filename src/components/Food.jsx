import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type Specific Items
  const filterTypes = (category)=>{
     setFoods(
          data.filter((item)=>{
               return item.category === category;
          })
     )
  };
  const filterPrice = (price)=>{
     setFoods(
          data.filter((item)=>{
               return item.price === price;
          })
     )
  }

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-blue-700 font-bold text-4xl text-center mb-5">
        TOP RATED MENU iNIT?!
      </h1>
      {/* FILTER ROW */}
      <div className=" flex flex-col lg:flex-row justify-between">
        {/* FILTER TYPE */}
        <p className="font-bold text-gray-700">Filter Type</p>
        <div className="flex justify-between flex-wrap">
          <button onClick={()=>setFoods(data)} className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            All
          </button>
          <button onClick={()=>filterTypes("Alcohol")} className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            Alcohol
          </button>
          <button onClick={()=>filterTypes("Burger")} className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            Burgers
          </button>
          <button onClick={()=>filterTypes("Dessert")} className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            Dessert
          </button>
        </div>
        {/* FILTER PRICE */}
        <p className="font-bold text-gray-700">Filter Price</p>
        <div className="flex justify-between max-w-[300px] w-full">
          <button onClick={()=>filterPrice("R100")} className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            R100
          </button>
          <button onClick={()=>filterPrice("R200")} className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            R200
          </button>
          <button onClick={()=>filterPrice("R300")} className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            R300
          </button>
          {/* <button className="m-1 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ">
            $$$$
          </button> */}
        </div>
      </div>
      {/* DISPLAY FOODS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-blue-700 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
