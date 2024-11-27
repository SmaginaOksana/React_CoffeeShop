import { useLayoutEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import { getData } from "../services/FB_server";
import { useDispatch } from "react-redux";
import {
  setAmericano,
  setCappuccino,
  setLatte,
  setFlatWhite,
  setRaf,
  setEspresso,
  setBasket,
  setUsers,
} from "../store/index.js";

import {
  WelcomePage,
  RegistrPage,
  AuthPage,
  HomePage,
  ToOrderPage,
  ForgotPasswordPage,
  BasketPage,
  OrderedPage,
  OpenPage,
} from "../pages/index.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [welcomePage, setWelcomePage] = useState(true);

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
        if (!welcomePage && navigate !== "/registr") {
          if (navigate !== "/auth") {
            navigate("/registr");
            return;
          }
          return;
        }
      }
    });

    Promise.allSettled([
      getData("Americano"),
      getData("Cappuccino"),
      getData("Latte"),
      getData("Flat White"),
      getData("Raf"),
      getData("Espresso"),
      getData("basket"),
      getData("users"),
    ]).then((results) => {
      if (results[0].status === "fulfilled") {
        dispatch(setAmericano(results[0].value));
      }
      if (results[1].status === "fulfilled") {
        dispatch(setCappuccino(results[1].value));
      }
      if (results[2].status === "fulfilled") {
        dispatch(setLatte(results[2].value));
      }
      if (results[3].status === "fulfilled") {
        dispatch(setFlatWhite(results[3].value));
      }
      if (results[4].status === "fulfilled") {
        dispatch(setRaf(results[4].value));
      }
      if (results[5].status === "fulfilled") {
        dispatch(setEspresso(results[5].value));
      }
      if (results[6].status === "fulfilled") {
        dispatch(setBasket(results[6].value ? results[6].value : []));
      }
      if (results[7].status === "fulfilled") {
        dispatch(
          setUsers(results[7].value ? Object.values(results[7].value) : [])
        );
      }
    });
  }, [flag, welcomePage]);

  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <WelcomePage
                setWelcomePage={setWelcomePage}
                navigate={navigate}
                auth={auth}
              />
            }
          />
          <Route path="/open" element={<OpenPage navigate={navigate} />} />
          <Route
            path="/registr"
            element={
              <RegistrPage
                auth={auth}
                navigate={navigate}
                setFlag={setFlag}
                setWelcomePage={setWelcomePage}
              />
            }
          />
          <Route
            path="/auth"
            element={<AuthPage auth={auth} navigate={navigate} />}
          />
          <Route
            path="/forgotPassword"
            element={<ForgotPasswordPage auth={auth} navigate={navigate} />}
          />
          <Route
            path="/home"
            element={
              <HomePage setActiveLink={setActiveLink} navigate={navigate} />
            }
          />
          <Route
            path="/toOrder"
            element={
              <ToOrderPage
                activeLink={activeLink}
                navigate={navigate}
                setFlag={setFlag}
              />
            }
          />
          <Route
            path="/basket"
            element={<BasketPage navigate={navigate} setFlag={setFlag} />}
          />
          <Route
            path="/ordered"
            element={<OrderedPage navigate={navigate} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
