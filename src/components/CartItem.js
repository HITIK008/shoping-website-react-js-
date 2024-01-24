import React, { useContext } from 'react';
//import link
import { Link } from 'react-router-dom';


//import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

//import cartContext
import {CartContext} from '../contexts/CartContext';

const CartItem = ({item}) => {

  const {removeFromCart,increaseamount,decreasseamount} =useContext(CartContext);
  //destruture item
  const {id,title,image,price,amount}=item;
  return <div className='flex gap-x-4 py-2 lg:px- border-b border-gray-200 w-full font-light text-gray-500'>
  <div>
    <div className='w-full min-h-[150px] flex item-center gap-x-4'>
    <Link to={`/products/${id}`}>
          <img className='max-w-[80px]' 
      src={image} alt='' />
      </Link>
      <div className='w-full flex flex-col'>
        {/*title & remove icon */}
        <div className='flex justify-center items-center mb-2'>
        <Link to={`/products/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>

        <div onClick={()=>removeFromCart(id)} className='text-xl cursor-pointer'>
          <IoMdClose className='text-gray-500 hover:text-red-5-- transition' />
        </div>
      </div>



      <div className='flex gap-x-2 h-[36px] text-sm'>      
      {/* total qty */}
      <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
        {/* minus icon */}
        <div onClick={()=>decreasseamount(id)} className='flex-1 h-full w-full flex justify-center items-center cursor-pointer bg-red-500 h-full w-full'> <IoMdRemove /></div>
        {/* how many amount of item */}
        <div className='h-full flex justify-center items-center px-2'>{amount}</div>
        {/* plus icon */}
        <div onClick={()=>increaseamount(id)} className='flex-1 h-full w-full flex justify-center items-center cursor-pointer bg-green-500 h-full w-full'><IoMdAdd /></div>
      </div>
      
      {/* item price */}
      <div className='flex1- flex items-center justify-around'>$ {price}</div>
      {/* final price */}
      {/* make them into decimal */}
      <div className='flex-1 flex justify-end items-center text-primary font midium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
    
    </div>
    </div>

    </div>
  </div>
  </div>;
};

export default CartItem;
