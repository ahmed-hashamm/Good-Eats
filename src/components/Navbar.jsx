import React, {useState,useContext} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shop_context';
import logo from "../assets/logo.png"; 
const Navbar = () => {
  const {getTotalItems}=useContext(ShopContext);
const [nav, setNav] = useState(false)
const totalItems =getTotalItems();



  return (
    <div className=' max-w-[1640px] sm:mx-4 flex justify-center   items-center '>
      {/* Left side */}
      <div className='flex w-full  justify-between px-8  items-center -mt-4'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <Link to="/" className=' pl-28'>
       
        <img className='w-[170px]' src={logo} alt="" />
     
        </Link>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-zinc-900 text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/* Logo */}
      
      {/* Cart button */}
      <Link to="/cart" className={!nav ? 'bg-black fixed bottom-6 right-10 z-50 text-white flex flex-col  md:flex  md:flex-row items-center p-2 px-3 rounded-full':'bg-zinc-100 fixed bottom-6 right-10 z-50 text-zinc-800 flex flex-col  md:flex  md:flex-row items-center p-2 px-3 rounded-full'}>
        <BsFillCartFill size={20} className='mr-2' /> <span> Cart ({totalItems})</span>
        </Link> 

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Good <span className='font-bold'>Eats</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
