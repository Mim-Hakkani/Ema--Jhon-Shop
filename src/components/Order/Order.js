import React from 'react';
import UseCart from '../hooks/UseCart';
import UseProducts from '../hooks/UseProducts';

const Order = () => {
    const [products,setProducts] =UseProducts();
    const [cart, setCart]=UseCart(products);

//   console.log('products :: ',products);
//   console.log('carts :: ',cart);
    return (
        <div>
           <p>This is the Order {products.length}</p>
            <p>Cart Item is :  {cart.length}</p> 
            <p>hakakni data </p>
        </div>
    );
};

export default Order;