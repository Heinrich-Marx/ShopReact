import React from "react";
import { BacketItem } from "./BacketItem";
export function BacketList(props) {
  const {
    order = [],
    Backet = Function.prototype,
    removeItem = Function.prototype,
    minusItem = Function.prototype,
    plusItem = Function.prototype,
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="collection backet">
      <span onClick={Backet} className="secondary-content closeBacketAll">
        <i className="material-icons">close</i>
      </span>
      <li className="collection-item active">Корзина товаров</li>

      {order.length ? (
        order.map((item) => {
          return (
            <BacketItem
              key={item.id}
              removeItem={removeItem}
              minusItem={minusItem}
              plusItem={plusItem}
              {...item}
            />
          );
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость:
        <span className="secondary-content">{totalPrice.toFixed(2)}$</span>
      </li>
    </div>
  );
}
