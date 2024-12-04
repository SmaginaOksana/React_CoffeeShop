import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import { getData } from "../services/FB_server";
import { useDispatch } from "react-redux";
import { setBasket, setUsers, setCoffee } from "../store/index.js";
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

  useEffect(() => {
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
      getData("basket"),
      getData("users"),
      getData("coffee"),
    ]).then((results) => {
      if (results[0].status === "fulfilled") {
        dispatch(setBasket(results[0].value ? results[0].value : []));
      }
      if (results[1].status === "fulfilled") {
        dispatch(
          setUsers(results[1].value ? Object.values(results[1].value) : [])
        );
      }
      if (results[2].status === "fulfilled") {
        dispatch(setCoffee(results[2].value ? results[2].value : []));
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
