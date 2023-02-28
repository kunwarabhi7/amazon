import React from "react";
import { GiConfirmed } from "react-icons/gi";
const orderdone = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white h-60  mb-8 mx-96 pt-8">
 <div className="flex items-center px-5">

 <GiConfirmed size={20}  className='text-green-500'/>
        <p className="font-bold  text-xl px-1  ">
         Thank you, your order has been confirmed!
        </p>
 </div>
        <p className="text-sm px-6 my-4 ">
          Thank you for shopping with us. We'll send a confirmation once your
          item has shipped . if you would like to check the status of your
          order(s) please press the link below
        </p>
        <button className="bg-[rgb(255,216,20)] my-14 rounded-full mt-7  w-full px-4 py-3 font-semiboldbold text-xs sm:text-sm hover:bg-yellow-400 hover:border hover:border-blue-500">
          Go To my Orders
        </button>
      </div>
    </div>
  );
};

export default orderdone;
