import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../../cardState";

const CardInfo = () => {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);

  return (
    <div>
      <h2>Cart info:</h2>

      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.name}: {item.quantity}
          </li>
        ))}
      </ul>

      <h4>Total: {total} $</h4>
    </div>
  );
};

export default CardInfo;
