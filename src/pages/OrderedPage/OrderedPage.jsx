import "./OrderedPage.scss";
import { useSelector } from "react-redux";

function OrderedPage({ navigate }) {
  const user = useSelector((state) => {
    return state.authUser;
  });

  return (
    <>
      <header className="headerOrderedPage">
        <div className="container">
          <div
            onClick={() => {
              navigate("/basket");
            }}
          >
            <img src="/left.png" alt="left" />
          </div>
        </div>
      </header>
      <main className="mainOrderedPage">
        <div className="container">
          <div>
            <img src="/ordered.png" alt="ordered" />
          </div>
          <h3>Ordered</h3>
          <h5 className="placed">{user.name}</h5>
          <h5 className="placed">Your order has been successfully placed.</h5>
          <h5 className="time">
            The order will be ready today at the address Bradford BD1 1PR.
          </h5>
          <h5 className="submit">
            Submit your personal QR code at a coffee shop to receive an order.
          </h5>
        </div>
      </main>
      <footer className="footerOrderedPage">
        <div className="container">
          <button
            onClick={() => {
              navigate("/home");
            }}
          >
            <img src="/buy.png" alt="buy" /> <span>Home Page</span>
          </button>
        </div>
      </footer>
    </>
  );
}

export default OrderedPage;
