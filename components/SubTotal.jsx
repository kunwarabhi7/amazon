import { selectItems, selectTotal } from "@/slices/basketSlices";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const SubTotal = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const IndianPrize = Math.round(total * 82.93);
  const router = useRouter()
const goToCheckOut = () => {
router.push('/orderdone')
}

  return (
    <div className="m-6 h-auto">
      <h1>
        {" "}
        Subtotal (${items.length} item):{" "}
        <span className="font-bold text-xl"> ₹ {IndianPrize} </span>{" "}
      </h1>
      <button
        onClick={goToCheckOut}
        className="bg-[rgb(255,216,20)] rounded-full mt-7  w-full px-4 py-3 text-xs sm:text-sm hover:bg-yellow-400 hover:border hover:border-blue-500"
      >
        Proceed to Buy
      </button>
    </div>
  );
};

export default SubTotal;
