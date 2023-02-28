import React from "react";

const SubTotal = () => {
  return (
    <div className="m-6 h-auto">
     <h1> Subtotal (1 item): <span className="font-bold text-xl"> ₹ 599.00 </span> </h1>
      <button className="bg-[rgb(255,216,20)] rounded-full mt-7  w-full px-4 py-3 text-xs sm:text-sm hover:bg-yellow-400 hover:border hover:border-blue-500">
        Proceed to Buy
      </button>
    </div>
  );
};

export default SubTotal;
