import "./WelcomePage.scss";

function WelcomePage({ navigate, setWelcomePage, auth }) {
  return (
    <>
      <header className="headerWelcomePage"></header>
      <main className="mainWelcomePage">
        <div className="darkBack">
          <div>
            <img src="/welcomePageIMG/vector.png" alt="vector" />
          </div>
          <div>
            <img src="/welcomePageIMG/magic-coffee.png" alt="magic-coffee" />
          </div>
        </div>
        <div className="lightBack">
          <h1>Feel yourself like a barista!</h1>
          <h2>Magic coffee on order.</h2>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="buttonRight">
            <button
              className="right"
              onClick={() => {
                if (!auth.currentUser) {
                  setWelcomePage(false);
                } else {
                  navigate("/open");
                }
              }}
            >
              <img src="/right.png" alt="right" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default WelcomePage;
