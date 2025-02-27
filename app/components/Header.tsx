import React from 'react'
import { DrawerForMobile, LogoEdcs } from './SvgImages'

const Header = () => {
   
    
  return (
    <div className='w-full py-3 flex justify-between items-center my-2 px-3 xl:px-[2rem]'>
        <section className='w-[50px]'>
            <LogoEdcs className=''/>
        </section>
        <section className='hidden sm:block'>
            <ul className='flex items-center space-x-[2rem] text-[13px]'>
                <li>Home</li>
                <li>About</li>
                <li>FAQs</li>
                <li>How It Works</li>
            </ul>
        </section>
    <button className='bg-blue-800 rounded-md p-[2px] block sm:hidden'>
        <DrawerForMobile className=''/>
    </button>
        <section className='hidden  space-x-5 sm:block '>
            <button className='bg-transparent text-sm'>Sign Up</button>
            <button className='text-sm text-white rounded-md bg-blue-900 border-1 px-3 py-1'>Login</button>
        </section>
<section>
</section>
    </div>
  )
}

export default Header