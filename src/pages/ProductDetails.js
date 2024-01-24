import React, { useContext } from "react";
//import useparam
import { useParams } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';

import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  //get the product id from the url
  const { id } = useParams();
  console.log(id);
  const { Product } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //get the single product based on th id
  const products = Product.find((item) => {
    return item.id === parseInt(id);
  });
  // console.log(products);

  //if prodcuts is not found
  if (!products) {
    return (
      <section className="h-sceen flex justify-center items-center">
        Loading....
      </section>
    );
  }

  //destructure product
  const { title, price, description, image } = products;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center justify-center">
      <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center">

        <div className="max-w-[200px] lg:max-w-sm"><img className='max-w-[200px] lg:max-w-sm' src={image} alt=""></img></div>

        <div className="flex-1 text-center lg:text-left">
        <h1 className="text-[26px] font-medium mb-2 ma-w-[450px] mx-auto lg:mx-0">{title}</h1>
        <div className="text-xl textred-500 font-medium mb-6">${price}</div>
        <p className="mb-8">
          {description}
        </p>
        <button onClick={()=>addToCart(products,products.id)} className="bg-primary py-4 text-white">
        add to cart
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProductDetails;
