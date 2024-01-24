import React, {useContext} from 'react';

//product context
import {ProductContext} from '../contexts/ProductContext';

//import component
import Product from '../components/Product';

import Hero from '../components/Hero';

const Home = () => {
const { products }= useContext(ProductContext);
  // get only black diamond beads\

  const filterProducts=products.filter(item =>{
    return item.category==="men's clothing" || item.category==="women's clothing";
    
  });
  // console.log(filterProducts);
  return <div>
  <Hero />
    <section className='py-16'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
        {filterProducts.map(products =>{
          return <Product products={products} key={products.id}/>
          
          {/* <div className='w-full h-[300px] bg-pink-200 ' key={products.id}>
          {products.title }</div> */}
          
        })}
      </div>
    </div> 
    </section>
  </div>
};

export default Home;
