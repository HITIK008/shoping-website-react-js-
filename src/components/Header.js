import React, { useContext,useEffect,useState } from 'react';

//import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

//import icons
import { BsBag } from 'react-icons/bs';

//IMPORT CART CONTEXT
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

//import logo
import Logo from '../img/logo.svg';

const Header = () => {
  //header state
  const[isActive,setIsActive] = useState(true);
  const {itemAmount}=useContext(CartContext);
  const {isOpen,setIsOpen}=useContext(SidebarContext);

  //event listener
  useEffect(()=>{
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  })


  return <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6' } fixed w-full z-10 transition-all`}>
  <div className='container mx-auto flex items-center justify-between h-full'>




  <Link to={'/'}>
    <img className='w-[40px]'src={Logo} alt=''></img>
  </Link>


    <div></div>


    <div onClick={()=>
    setIsOpen(!isOpen) } className='cursor-pointer flex relative'>
    <BsBag className='text=2xl'/>
    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>
      {itemAmount}
    </div>

  </div>

    </div>

  </header>
};

export default Header;
