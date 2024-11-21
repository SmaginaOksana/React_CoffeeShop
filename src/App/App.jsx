import { useLayoutEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { getData } from "../services/servicesDB";
import { useDispatch } from "react-redux";
import { addCappuccino } from "../store/slices/cappuccinoSlice";
import { addLatte } from "../store/slices/latteSlice";
import { addRaf } from "../store/slices/rafSlice";
import HomePage from "../pages/HomePage/HomePage";
import ActiveCoffeePage from "../pages/ActiveCoffeePage/ActiveCoffeePage";

function App() {
  const dispatch = useDispatch();
  const cappuccinoDB = getData("Cappuccino");
  const latteDB = getData("Latte");
  const rafDB = getData("Raf");
  const [activeLink, setActiveLink] = useState("");

  useLayoutEffect(() => {
    Promise.allSettled([cappuccinoDB, latteDB, rafDB]).then((results) => {
      if (results[0].status === "fulfilled") {
        results[0].value.map((item) => dispatch(addCappuccino(item)));
      }
      if (results[1].status === "fulfilled") {
        results[1].value.map((item) => dispatch(addLatte(item)));
      }
      if (results[2].status === "fulfilled") {
        results[2].value.map((item) => dispatch(addRaf(item)));
      }
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <header>
          <div className="container">
            <div className="greetings">
              <h3>Welcome!</h3>
              <h1>Alex</h1>
            </div>
            <div className="profile">
              <img src="/buy.png" alt="buy" />
              <img src="/profile.png" alt="profile" />
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage setActiveLink={setActiveLink} />}
            />
            <Route
              path="/coffee"
              element={
                <ActiveCoffeePage
                  activeLink={activeLink}
                  setActiveLink={setActiveLink}
                />
              }
            />
          </Routes>
        </main>
        <footer>
          <div className="container">
            <div>
              <img src="/home.png" alt="home" />
            </div>
            <div>
              <img src="/prize.png" alt="prize" />
            </div>
            <div>
              <img src="/list.png" alt="list" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
