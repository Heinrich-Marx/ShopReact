import React from "react";
export function Cart(props) {
  const { quantity = 0, Backet = Function.prototype } = props;
  return (
    <div className="cart" onClick={Backet}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="el">{quantity}</span> : null}
    </div>
  );
}
