import "./BasketPage.scss";
import BasketItem from "../../components/BasketItem/BasketItem";
import { useSelector } from "react-redux";

function BasketPage({ navigate, setFlag }) {
  const basketItems = useSelector((state) => {
    return state.basket.items;
  });
  const totalPrice = basketItems.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <>
      <header className="headerBasket">
        <div className="container">
          <div
            onClick={() => {
              navigate("/home");
            }}
            className="left"
          >
            <img src="/left.png" alt="left" />
          </div>
          <h4>Basket</h4>
        </div>
      </header>
      <main className="mainBasket">
        <div className="container">
          {basketItems.length > 0 ? (
            basketItems.map((item, index) => {
              return <BasketItem item={item} key={index} setFlag={setFlag} />;
            })
          ) : (
            <p>The basket is empty</p>
          )}
        </div>
      </main>
      <footer className="footerBasket">
        <div className="container">
          <div className="totalPrice">
            <h5>Total Price</h5>
            <h3>{totalPrice} BYN</h3>
          </div>
          <button
            onClick={() => {
              if (basketItems.length === 0) {
                return;
              } else {
                navigate("/ordered");
              }
            }}
          >
            <img src="/buy.png" alt="buy" /> <span>Order</span>
          </button>
        </div>
      </footer>
    </>
  );
}

export default BasketPage;
