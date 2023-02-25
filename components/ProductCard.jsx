import Image from 'next/image'
import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
const ProductCard = ({category,description,id,image,price,title,rating}) => {
    const IndianPrize = Math.round(price*82.93)
  return (
    <div key={id} className='grid grid-row-4  bg-white mx-6  rounded-md '>
        <p className='text-right p-1 text-gray-400 m-2'>{category}</p>
      <Image height={200} width={200} className='mx-16 mb-2'  src={image} alt={title} />
      <p className='text-center'>{title}</p>
      <div className='flex justify-between'>

        <p className='ml-2'>₹ {IndianPrize}</p>
      <div className='flex  mr-2'>
      <AiTwotoneStar className='text-[rgb(242,146,30)]' />
        <p>{rating}</p>
        </div>
      </div>
        <p className='truncate m-1 mx-2 '>{description}</p>
        <button className='my-3 bg-[rgb(255,216,20)] rounded-full mt-auto  p-2 text-xs sm:text-sm hover:bg-yellow-400 hover:border hover:border-blue-500' >Add to Cart</button>
    </div>
  )
}

export default ProductCard
