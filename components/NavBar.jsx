import Image from 'next/image'
import amazon from '../public/assests/amazon.png'
import {SlLocationPin} from 'react-icons/sl'
import SearchBar from './SearchBar'


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
    </div>
  )
}

export default NavBar
