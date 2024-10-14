'use client'
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import ProfilePic from '../../../assets/Images/portrait-smiley-woman.jpg'; 
import Sidebar from './Sidebar';
import ThemeToggle from '../Items/ThemeToggle';
import { RiLogoutCircleLine } from "react-icons/ri";
import Logo from '../../../assets/Images/az-logo.svg';


export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="fixed w-full md:w-4.5/6 z-50 top-0 bg-[var(--card-bg)] border border-[var(--card-stroke)] dark:bg-gray-900 shadow-lg h-16 flex items-center justify-between px-4 mt-0 md:mt-4 md:px-8 shadow-3xl rounded-none md:rounded-full right-0 md:right-2" >
      {/* Hamburger for mobile */}
      <div className="block md:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-600 dark:text-white">
          <FiMenu size={24} />
        </button>
      </div>

      {/* Logo or Title for larger screens */}
      <div className="hidden md:flex justify-center items-center">
        <Image src={Logo}  alt="Logo" className="h-10 w-10" />
        <h1 className="text-lg font-medium text-[var(--text-secondary)]">AllZone Management Solutions</h1>
      </div>
      <div className=' h-auto flex justify-between items-center'><ThemeToggle hideText />
      {/* Profile Section */}
      <div className="relative group" >
        <button
          className="flex items-center space-x-2 text-gray-800 dark:text-white p-0 "
          // onClick={toggleProfileMenu}
        
        >
          
          <div className="w-10 h-10 rounded-full relative hover:scale-105 transition-all duration-300 ease-in-out">
          <Image src={ProfilePic} alt="Profile" className="rounded-full object-cover h-10 w-40"  />
          </div>
        </button>
        

        {/* Profile Menu Dropdown */}
        {isProfileMenuOpen && (
          <div className="hidden group-hover:block absolute mt-2 w-48 bg-[var(--card-bg)] shadow-md rounded-lg py-2 px-4 border border-[var(--card-stroke)]"   style={{marginTop:'2px ', right:'-30px'}}>
            <h3 className='font-bold text-[var(--text-primary)]'>Hi! Rajee</h3>
            <p className='text-xs text-[var(--text-secondary)]'>Senior Human resource</p>
            <hr className='my-2'/>
            <a href="#" className="text-[var(--text-primary)] bg-[var(--custome-btn-bg-fill)] rounded-lg flex justify-center items-center gap-3 font-bold block  py-2 px-2 ">
             <RiLogoutCircleLine/> Logout
            </a>
          </div>
        )}
      </div>
      </div>
      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--card-bg)] bg-opacity-25  md:w-full md:hidden w-72 bg-[var(--card-bg)]">
          {/* <div className='w-full bg-red h-full'></div> */}
          <div className="fixed inset-y-0 left-0 w-72 h-full  p-4 shadow-lg z-50" style={{height:'93%'}}>
            <div  className="flex justify-end " >
              <h1 onClick={toggleMobileMenu} className='p-3 w-11 h-11 flex justify-center items-center  text-lg font-black bg-[var(--menu-item-hover)] rounded-full text-[var(--text-primary)]'>X</h1>
            </div>
            

            <Sidebar toggleMobileMenu={toggleMobileMenu} isMobileOpen={isMobileOpen} />
           
          </div>
        </div>
      )}
    </header>
  );
}
