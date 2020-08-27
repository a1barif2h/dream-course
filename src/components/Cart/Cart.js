import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  let off25 = 0;
  let grandTotal = 0;
  if (total >= 500) {
    off25 = total / 25;
    grandTotal = total - off25;
  } else {
    grandTotal = total;
  }
  return (
    <div className="summary">
      <h5>Orders Summary</h5>
      <p>Purchase $500 get 25% off</p>
      <h6>Items Enrolled: {cart.length} </h6>
      <p>Enrolled Price: ${Number(total.toFixed(2))} </p>
      <p>25% off: {Number(off25.toFixed(2))} </p>
      <p>Grand Total: {Number(grandTotal.toFixed(2))} </p>
    </div>
  );
};

export default Cart;
