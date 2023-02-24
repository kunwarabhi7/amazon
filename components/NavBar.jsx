import Image from 'next/image'
import amazon from '../public/assests/amazon.png'

const NavBar = () => {
  return (

    <div className='bg-[#252F25]'>
        <div>
<Image width={160} height={160} src={amazon} className='' />
        </div>
        <div className='bg-[rgb(19,25,33)]'>

        </div>
    </div>
  )
}

export default NavBar
