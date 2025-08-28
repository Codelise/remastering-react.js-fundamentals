import React, { useState } from "react";

const ProductList = () => {
  const productArr = [
    { id: 0, name: "Laptop", price: 50000 },
    { id: 1, name: "Phone", price: 20000 },
    { id: 2, name: "Headphones", price: 3000 },
  ];

  return (
    <>
      <ul>
        {productArr.map((product) => (
          // use product.id as the key
          <li key={product.id}>
            {/* // it will output the Product name and product price */}
            {product.name}: {product.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
