import React from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} alt="logo"  className='w-36'/>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-500'>
            <NavLink to="/" className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[2px] bg-black hidden'/>
            </NavLink>

            <NavLink to="/collections" className='flex flex-col items-center gap-1'>
            <p>Collections</p>
            <hr className='w-2/4 border-none h-[2px] bg-black hidden'/>
            </NavLink>

            <NavLink to="/about" className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[2px] bg-black hidden'/>
            </NavLink>

            <NavLink to="/contact" className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[2px] bg-black hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-5'>

            <img src={assets.search_icon} alt="search" className='w-5 cursor-pointer'/>

            <div className='group relative'>
                <img src={assets.profile_icon} alt="profile" className='w-5 cursor-pointer'/>

                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='hover:text-black cursor-pointer'>My Profile</p>
                        <p className='hover:text-black cursor-pointer'>Orders</p>
                        <p className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>

            <Link to="/cart" className='relative'>
                    <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5 cursor-pointer'/>
                    <div className='absolute bottom-[-5px] right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>0</div>
                </Link>
        </div>
    </div>
  )
}

export default Navbar