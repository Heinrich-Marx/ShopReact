import { useState, useEffect } from "react";
import { API_URL } from "../config";
import { Preloader } from "./preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BacketList } from "./BacketList";
export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [backetState, setBacketState] = useState(false);
  const plusItem = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const minusItem = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const removeItem = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };
  const Backet = () => {
    setBacketState(!backetState);
  };
  const addToBacket = (item) => {
    const itemIndex = order.findIndex((value) => value.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((el, index) => {
        if (index === itemIndex) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
  };
  useEffect(function getGoods() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        data && setGoods(data);
        setLoading(false);
      });
  }, []);
  return (
    <main className="container content">
      <Cart quantity={order.length} Backet={Backet} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBacket={addToBacket} />
      )}
      {backetState && (
        <BacketList
          order={order}
          Backet={Backet}
          removeItem={removeItem}
          minusItem={minusItem}
          plusItem={plusItem}
        />
      )}
    </main>
  );
}
