import { selectItems } from '@/slices/basketSlices'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const FullCart = () => {
  const items =   useSelector(selectItems)
  return (
    <div className='bg-white'>
<div className='m-12 w-[1227px] h-[607px]'>
    <h1 className='text-3xl font-semibold'>Shopping Cart</h1>
    <p className='text-xs'>No items selected. <span className='text-blue-500 cursor-pointer hover:underline hover:text-red-400'> Select all items </span></p>
<h1 className='text-right'>Price</h1>
<hr />
{items.map(({category,
      description,
      id,
      image,
      price,
      title,
      rating,}) =>(
    <CartItem description={description} category={category} id={id} key={id} image={image} price={price} title={title} rating={rating} />
))}
</div>
<div className='w-[300px] h-[766px]'></div>
    </div>
  )
}

export default FullCart
