import React,{createContext,useState,useEffect} from 'react';

//create context
export const CartContext=createContext();

const CartProvider = ({children}) => {
  //cart state
  const [cart,setCart]=useState([]);

  //item aount state
  const[itemAmount,setItemAmount]=useState(0);

  //total price state
  const[total,setTotal]=useState(0);

  useEffect(()=>{
    const total =cart.reduce((accumlator,currentItem)=>{
      return accumlator+currentItem.price * currentItem.amount;
    },0);
    setTotal(total);
  })


  //update items
  useEffect(()=>{
    if(cart){
      const amount =cart.reduce((accumlator,currentItem)=>{
        return accumlator + currentItem.amount;
      },0);
      setItemAmount(amount);
    }
  },[cart])

  //add to cart
  const addToCart = (products,id)=>{
    const newItem ={...products,amount:1};

    //chek if the item is alredy in the cart
    const cartItem = cart.find((item)=>{
      return item.id ===id;
    });
    // console.log(cartItem);
    // console.log(` ${products.title} added to the cart`);


    //if cart item is already in the cart
    if(cartItem){
      const newCart = [...cart].map(item=>{
        if(item.id === id){
          return {...item, amount:cartItem.amount+1};
        }
        else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem]);
    }
  };

  //remove from cart
  const removeFromCart =(id)=>{
    const newCart = cart.filter((item) =>{
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clear cart
  const clearCart =()=>{
    setCart([]);
  };


  //incerase amount
  const increaseamount=(id)=>{
    const cartItem =cart.find((item)=> item.id===id);
    addToCart(cartItem,id);
  };

  //decrease amount
  const decreasseamount=(id)=>{
    const cartItem = cart.find((item)=>{
      return item.id===id;
    });

      if(cartItem){
        const newCart = cart.map((item) =>{
          if(item.id===id){
            return {...item, amount:cartItem.amount-1};
          }else{
            return item;
          } 
        });
        setCart(newCart);
      }
        
          if(cartItem.amount < 2){
            removeFromCart(id);
          }
        
      
    };



  
  return <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increaseamount,decreasseamount,itemAmount,total}}>
  {children}
  </CartContext.Provider>
};

export default CartProvider;
