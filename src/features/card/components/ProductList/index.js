import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState } from "../../productState";
import { addToCart, cartState } from "../../cardState";

const ProductList = () => {
  const productList = useRecoilValue(productListState);

  const [cart, setCart] = useRecoilState(cartState); // 1. Get recoil state

  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product); // 2. Use helper to create a new state
    setCart(newCart); // 3. Update recoil state
  };
  return (
    <div>
      <h2>Product List</h2>
      <ul className="product-list">
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            {/* 2. ADD THIS BUTTON */}
            <button
              style={{ marginLeft: "1rem" }}
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
