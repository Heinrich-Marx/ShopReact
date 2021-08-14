import React from "react";
export function BacketItem(props) {
  const {
    id,
    title,
    price,
    quantity,
    removeItem = Function.prototype,
    minusItem = Function.prototype,
    plusItem = Function.prototype,
  } = props;
  let sum = price * quantity;

  return (
    <li className="collection-item ">
      {title} x {quantity} = {sum.toFixed(2)}$
      <span
        onClick={() => removeItem(id)}
        className="secondary-content closeBacket"
      >
        <i className="material-icons">close</i>
      </span>
      <span onClick={() => minusItem(id)} className="secondary-content minus">
        <i className="material-icons">exposure_neg_1</i>
      </span>
      <span onClick={() => plusItem(id)} className="secondary-content plus">
        <i className="material-icons">exposure_plus_1</i>
      </span>
    </li>
  );
}
