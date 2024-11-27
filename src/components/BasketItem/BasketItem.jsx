import "./BasketItem.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { deleteBasketItem } from "../../functions/deleteBasketItem";

function BasketItem({ item, setFlag, basket }) {
  const { name, count, price, image, ristretto, takeaway, volume } = item;
  const totalPrice = count * price;
  const [deleteClass, setDeleteClass] = useState(false);

  return (
    <>
      <div className="basketItem">
        <div
          className={deleteClass === false ? "item" : "item delete"}
          onClick={() => {
            setDeleteClass((prev) => !prev);
          }}
        >
          <div className="imgBasketItem">
            <img src={image} alt={name} />
          </div>
          <div className="description">
            <span className="name">{name}</span>
            <span className="spanDescription">{ristretto}</span>|
            <span className="spanDescription">{takeaway}</span>|
            <span className="spanDescription">{volume}</span>
            <span className="count">x {count}</span>
          </div>
          <div className="priceBasketItem">
            <h4>{totalPrice % 1 === 0 ? `${totalPrice}.0` : totalPrice}</h4>
            <h4>BYN</h4>
          </div>
        </div>
        <div
          className={deleteClass === false ? "close" : "open"}
          onClick={() => {
            deleteBasketItem(basket, item, setFlag);
          }}
        >
          <img src="/close.png" alt="close" />
        </div>
      </div>
    </>
  );
}

export default BasketItem;
