import Image from 'next/image'
import amazon from '../public/assests/amazon.png'
import {SlLocationPin} from 'react-icons/sl'
import SearchBar from './SearchBar'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import {signIn,signOut,useSession} from 'next-auth/react'

const NavBar = () => {
const {data:session}  = useSession()


  return (

    <div className='bg-[#252F25] text-white flex justify-evenly items-center p-1 cursor-pointer font-semibold'>
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

        <p className='text-gray-400 text-xs'>{session? `Deliver to ${session.user.name.slice(0,10)}` : 'Hello'} </p>
            <p className='font-bold text-xs '>{session? ` Jaipur 302018` : 'Select your address'}</p>
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
    <div onClick={!session? signIn : signOut} className='hover:border hover:border-white p-1'>
        <div className='flex'>
            <h1>Hello,</h1>
            {session?            <p className='text-xs mt-1 ml-1'>{session.user.name}</p>:            <p>sign in</p>}

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
    <div className='flex hover:border hover:border-white p-1 items-end relative'>
        <span className='absolute top-1 right-11  text-orange-500'>0</span>
        <BsCart2 size={25} className='mt-3'/>
        <h1>Cart</h1>
    </div>
    </div>
  )
}

export default NavBar
