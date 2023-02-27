import { selectItems } from '@/slices/basketSlices'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const FullCart = () => {
  const items =   useSelector(selectItems)
  return (
    <div className='m-12  flex'>
<div className=' w-[1227px] p-8 bg-white h-full'>
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
    <CartItem description={description} category={category} id={id} key={id} image={image} price={price} title={title} rating={rating.rate} />
))}
</div>
<div className='w-[300px] h-[766px] bg-white ml-16'>yo</div>
    </div>
  )
}

export default FullCart
