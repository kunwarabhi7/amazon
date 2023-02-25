import Image from 'next/image'
import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
const ProductCard = ({category,description,id,image,price,title,rating}) => {
    const IndianPrize = Math.round(price*82.93)
  return (
    <div key={id} className='grid grid-row-4 bg-white '>
        <p>{category}</p>
      <Image height={200} width={200}  src={image} alt={title} />
      <p>{title}</p>
      <div className='flex'>
      <AiTwotoneStar className='text-[rgb(242,146,30)]' />
        <p>{rating}</p>
        </div>
        <p>₹ {IndianPrize}</p>
        <p>{description}</p>
        <button className='bg-[rgb(255,216,20)] rounded-full m-2' >Add to Cart</button>
    </div>
  )
}

export default ProductCard
