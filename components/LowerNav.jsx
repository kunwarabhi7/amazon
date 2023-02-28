import React from 'react'
import {BiMenu} from 'react-icons/bi'

const LowerNav = () => {
  return (
    <div className='bg-[rgb(35,47,62)] text-white flex items-center h-10 p-1 font-semibold'>
     <div className='flex mx-2 items-center'>
        <BiMenu size={25} />
        <p>All</p>
     </div>
     <p className='mx-2'>Fresh</p>
     <p  className='mx-2'>Amazon miniTV</p>
     <p  className='mx-2'>Amazon Pay</p>
     <p  className='mx-2'>Gift Cards</p>
     <p  className='mx-2'>Buy Again</p>
     <p  className='mx-2'>Gift Ideas</p>
     <p  className='mx-2'>Health,Household & Personal Care</p>
     <p  className='mx-2'>AmazonBasics</p>
     <p  className='mx-2'>Home Improvements</p>
     <p  className='mx-2'>Coupns</p>
    </div>
  )
}

export default LowerNav
