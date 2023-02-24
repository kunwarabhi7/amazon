import Image from 'next/image'
import amazon from '../public/assests/amazon.png'
import {SlLocationPin} from 'react-icons/sl'


const NavBar = () => {
  return (

    <div className='bg-[#252F25] text-white flex items-center'>
        {/* logo */}
        <div>
<Image width={160} height={160} src={amazon} className='' />
        </div>
        {/* select your field */}
    <div className=''>
        <div>
        <p>Hello</p>
        </div>
        <div className='flex justify-center items-center'>
            <SlLocationPin size={20} className='text-white'/>
            <p className='font-semibold'>Select your location</p>

        </div>
    </div>
    </div>
  )
}

export default NavBar
