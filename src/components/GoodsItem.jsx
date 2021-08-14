import React from "react";

export function GoodsItem(props) {
  const {
    id,
    title,
    description,
    price,
    image,
    addToBacket = Function.prototype,
  } = props;

  return (
    <div className="card wrapper">
      <div className="card-image" id={id}>
        <img src={image} />
      </div>
      <span className="card-title">{title}</span>
      <div className="card-content">
        <p>{description}</p>
        <div className="card-action">
          <button
            onClick={() =>
              addToBacket({
                id,
                title,
                price,
              })
            }
            className="btn"
          >
            Купить
          </button>
          <span className="right">{price}$</span>
        </div>
      </div>
    </div>
  );
}
