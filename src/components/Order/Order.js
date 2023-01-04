import React from 'react';
import UseProducts from '../hooks/UseProducts';

const Order = () => {
    const [products,setProducts] =UseProducts();
  console.log('products :: ',products);
    return (
        <div>
            <p>This is the Order {products.length}</p>
        </div>
    );
};

export default Order;