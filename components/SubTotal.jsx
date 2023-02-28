import { selectItems, selectTotal } from "@/slices/basketSlices";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import React from "react";
import { useSelector } from "react-redux";
const stripePromise = loadStripe(process.env.stripe_public_key)



const SubTotal = () => {
    const items =   useSelector(selectItems)
 const total =useSelector(selectTotal)
 const IndianPrize = Math.round(total * 82.93);
const session = useSession()
 const createCheckOutSession =async () => {
    const stripe = await stripePromise
    const checkOutSession = await axios.post('api/create-checkout-session',{
        items:items,
        email:useSession.user.email
    })
 }

  return (
    <div className="m-6 h-auto">
     <h1> Subtotal (${items.length} item): <span className="font-bold text-xl"> ₹ {IndianPrize} </span> </h1>
      <button onClick={createCheckOutSession} role={link} className="bg-[rgb(255,216,20)] rounded-full mt-7  w-full px-4 py-3 text-xs sm:text-sm hover:bg-yellow-400 hover:border hover:border-blue-500">
        Proceed to Buy
      </button>
    </div>
  );
};

export default SubTotal;
