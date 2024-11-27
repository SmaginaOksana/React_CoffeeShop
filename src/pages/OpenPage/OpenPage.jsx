import { useLayoutEffect } from "react";
import "./OpenPage.scss";

function OpenPage({ navigate }) {
  useLayoutEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  }, []);
  return (
    <main className="mainOpenPage">
      <div>
        <img src="/vector.png" alt="vector" />
      </div>
      <div>
        <img src="/magic-coffee.png" alt="magic-coffee" />
      </div>
    </main>
  );
}

export default OpenPage;
