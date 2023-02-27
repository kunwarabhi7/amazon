import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

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

  return <div className="flex justify-between">
    <div><Image src={image} alt={title} width={200} height={200}  /></div>
    <div className="">
        <h1>{title}</h1>
        <button>Remove</button>

    </div>
    <div className="font-semibold text-xl">₹ {IndianPrize}</div>
  </div>;
};

export default CartItem;
