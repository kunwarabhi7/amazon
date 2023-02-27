import Image from "next/image";
import React from "react";

const CartItem = ({
  category,
  description,
  id,
  image,
  price,
  title,
  rating,
}) => {
  const IndianPrize = Math.round(price * 82.93);

  return (
    <div className="flex justify-between  h-[221px] w-[1187px]">
      <div>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-[180px] h-[180px]"
        />
      </div>
      <div className="mt-4  font-bold text-xl w-96">
        <h1 className="w-full">{title}</h1>
        <h1>{category}</h1>
       <div className=" flex space-x-8  ">
        <button className="bg-[rgb(255,216,20)] rounded-full mt-7  px-4 py-3 text-xs sm:text-sm hover:bg-yellow-400 hover:border hover:border-blue-500">
          Add More
        </button>
    <button className="bg-[rgb(255,216,20)] rounded-full mt-7  px-4 py-3 text-xs sm:text-sm hover:bg-yellow-400 hover:border hover:border-blue-500">
          Remove
        </button>
        </div> 
      </div>
      <div className="font-semibold text-xl m-4">₹ {IndianPrize}</div>
    </div>
  );
};

export default CartItem;
