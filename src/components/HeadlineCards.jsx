import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      {/* CARDS */}
      <div className="rounded-xl relative">
        {/* OVERLAY  */}
        <div className=" absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Feeling A Little Tipsy ?</p>
          <p className="px-2">Whisky Whisker</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/51365/drink-alcohol-cup-whiskey-51365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Whiskey"
          />
      </div>
      <div className="rounded-xl relative">
        {/* OVERLAY  */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Mocus In Candy Land</p>
          <p className="px-2">Confectionery Delights!</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/33239/halloween-candy-chocolates-nuts-sweet.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="Sweets"
          />
      </div>
      <div className="rounded-xl relative">
        {/* OVERLAY  */}
        <div className=" absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Goodness Of Gourmet Burgers</p>
          <p className="px-2">Burger Bliss !</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/1025804/pexels-photo-1025804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Burgers"
          />
      </div>
    </div>
  );
};

export default HeadlineCards;
