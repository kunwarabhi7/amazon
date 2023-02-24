import Image from 'next/image'
import amazon from '../public/assests/amazon.png'
import {SlLocationPin} from 'react-icons/sl'
import SearchBar from './SearchBar'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'

const NavBar = () => {
  return (

    <div className='bg-[#252F25] text-white flex justify-evenly items-center p-1 font-semibold'>
        {/* logo */}
        <div>
<Image width={160} height={160} src={amazon} className='cursor-pointer w-32 hover:border hover:border-white'  />
        </div>
        {/* select your field */}
    <div className='cursor-pointer  items-center flex hover:border text-xs hover:border-white w-[140px] h-13'>
        <div>
            <SlLocationPin size={20} className='text-white'/>
        </div>
        <div>

        <p className='text-gray-400'>Deliver to Abhishek</p>
            <p className='font-bold text-sm '>Jaipur 302018</p>
        </div>
        
    </div>
    {/* Input Bar */}
    <div><SearchBar /></div>
    {/* Country */}
    <div className='w-18 h-12 flex items-center  mx-4 hover:border hover:border-white p-1 '>
        <img className='w-6 h-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/1024px-Flag_of_India.png'/>
        <h1 className='font-semibold mx-1' >EN</h1>
<AiFillCaretDown />
    </div>
    {/* User details */}
    <div className='hover:border hover:border-white p-1'>
        <div className='flex'>
            <h1>Hello,</h1>
            <p>Abhishek</p>
        </div>
        <div className='flex items-center'>
        <h1>Account & Lists</h1>
        <AiFillCaretDown />
        </div>
    </div>
    {/* Return and Order  */}
    <div className='hover:border w-19 h-[50px] hover:border-white p-1'>
        <p>Returns</p>
<p>& Orders</p>
    </div>
    {/*  */}
    <div className='flex hover:border hover:border-white p-1 items-end '>
        <BsCart2 size={25}/>
        <h1>Cart</h1>
    </div>
    </div>
  )
}

export default NavBar
