import Image from 'next/image'
import amazon from '../public/assests/amazon.png'
import {SlLocationPin} from 'react-icons/sl'
import SearchBar from './SearchBar'
import {AiFillCaretDown} from 'react-icons/ai'

const NavBar = () => {
  return (

    <div className='bg-[#252F25] text-white flex items-center p-1 px-1'>
        {/* logo */}
        <div>
<Image width={160} height={160} src={amazon} className='cursor-pointer hover:border hover:border-white'  />
        </div>
        {/* select your field */}
    <div className='cursor-pointer hover:border hover:border-white'>
        <div>
        <p>Hello</p>
        </div>
        <div className='flex justify-center items-center'>
            <SlLocationPin size={20} className='text-white'/>
            <p className='font-semibold'>Select your location</p>

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
    </div>
  )
}

export default NavBar
