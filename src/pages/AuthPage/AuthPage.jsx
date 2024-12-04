import "./AuthPage.scss";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setAuthUser } from "../../store/slices/authUserSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function AuthPage({ auth, navigate }) {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const users = useSelector((state) => {
    return state.users;
  });

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        const user = users.find((item) => {
          return item.email === data.email;
        });
        dispatch(setAuthUser(user));
        reset();
        navigate("/open");
      })
      .catch((error) => {
        setError(false);
        console.log(error);
      });
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <>
      <header className="headerAuthPage">
        <div className="container">
          <div
            className="left"
            onClick={() => {
              navigate("/registr");
            }}
          >
            <img src="/left.png" alt="left" />
          </div>
        </div>
      </header>
      <main className="mainAuthPage">
        <div className="container">
          <h2>Sign in</h2>
          <p className="welcome">Welcome back</p>
          <form onSubmit={handleSubmit(onSubmit, onError)} className="formUser">
            {error === false && (
              <p className="incorrect">Incorrect login or password</p>
            )}
            {(errors.email || errors.password) && (
              <p className="errors">All the fields are required!</p>
            )}
            <div>
              <div className="img">
                <img src="/message.png" alt="message" />
              </div>
              <input
                type="text"
                {...register("email", {
                  required: true,
                })}
                placeholder="email@gmail.com"
              />
            </div>
            <div>
              <div className="img">
                <img src="/lock.png" alt="lock" />
              </div>
              <input
                type="text"
                {...register("password", {
                  required: true,
                })}
                placeholder="Пароль"
              />
            </div>
            <NavLink to="/forgotPassword" className="forgotPassword">
              Forgot password?
            </NavLink>
            <div className="buttonRight">
              <button className="right">
                <img src="/right.png" alt="right" />
              </button>
            </div>
          </form>
        </div>
      </main>
      <footer>
        <div className="container">
          <p>New member? </p>
          <NavLink to="/registr">Sign up</NavLink>
        </div>
      </footer>
    </>
  );
}

export default AuthPage;
