import "./ForgotPasswordPage.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPasswordPage({ auth, navigate }) {
  const [email, setEmail] = useState(false);
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
    await sendPasswordResetEmail(auth, data.email)
      .then(() => {
        setEmail(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <>
      <header className="headerPasswordPage">
        <div className="container">
          <div
            onClick={() => {
              navigate("/auth");
            }}
          >
            <img src="/left.png" alt="left" />
          </div>
        </div>
      </header>
      <main className="mainPasswordPage">
        <div className="container">
          <h2>Forgot Password?</h2>
          <p className="welcome">Enter your email address</p>
          <form onSubmit={handleSubmit(onSubmit, onError)} className="formUser">
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
            {errors.email && (
              <p className="errors">All the fields are required</p>
            )}
            {email && (
              <p className="errors">
                Password reset letter sent to your e-mail address. After the
                change, enter the new password
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
    </>
  );
}

export default ForgotPasswordPage;
