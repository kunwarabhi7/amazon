import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsSearch} from  'react-icons/bs'

const SearchBar = () => {
  return (
    <div className='flex items-center  rounded-lg bg-[rgb(218,218,218)] w-[890px] h-15 ml-3 '>
 
<div className='w-[60px] h-10 px-2 flex text-black font-semibold justify-start items-center'>

     <h1 className='h-7 w-13 mx-2'>All</h1>
     <AiFillCaretDown />
</div>
     <input type="text"  className='w-[767px] h-10 p-1' placeholder='Search Amazon.in'/>
     <BsSearch size={30} className='bg-[rgb(243,168,71)]  p-1 text-black w-16 h-10 ' />
    </div>
  )
}

export default SearchBar
