import "./RegistrPage.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { updateUsers } from "../../services/FB_server";

function RegistrPage({ auth, navigate, setFlag }) {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        sendEmailVerification(auth.currentUser).then(() => {
          setSuccess(true);
        });
        setFlag((prev) => !prev);
        updateUsers({ name: data.name, email: data.email });
        console.log("success");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onError = (errors, e) => console.log(errors, e);

  return (
    <>
      <header className="headerRegistrPage">
        <div className="container">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/left.png" alt="left" />
          </div>
        </div>
      </header>
      <main className="mainRegistrPage">
        <div className="container">
          <h2>Sign up</h2>
          {success ? (
            <p className="create">
              Account creation and sending confirmation to email was successful!
            </p>
          ) : (
            <p className="create">Create an account here</p>
          )}
          <form onSubmit={handleSubmit(onSubmit, onError)} className="formUser">
            <div>
              <div className="img">
                <img src="/profile.png" alt="profile" />
              </div>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <div className="img">
                <img src="/smartphone.png" alt="smartphone" />
              </div>
              <input
                type="text"
                {...register("phone", {
                  required: true,
                  pattern:
                    /^((8|\+3)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/,
                })}
                placeholder="+375000000000"
              />
            </div>
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
                  pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                })}
                placeholder="Пароль"
              />
            </div>
            <p className="terms">
              By signing up you agree with our Terms of Use
            </p>
            {(errors.name ||
              errors.phone ||
              errors.email ||
              errors.password) && (
              <p className="emptyFields">All the fields are required</p>
            )}
            {errors.phone?.type === "pattern" && (
              <p className="errors">
                The phone number must consist of digits and not contain spaces
                or hyphens
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="errors">
                The password must contain at least one digit, one capital and
                one small letter of the Latin alphabet and be at least 8
                characters long
              </p>
            )}
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
          <p>Already a member? </p>
          <NavLink to="/auth">Sign in.</NavLink>
        </div>
      </footer>
    </>
  );
}

export default RegistrPage;
