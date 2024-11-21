import "./HomePage.scss";
import { content } from "../../mainContent/mainContent";
import Coffee from "../../components/Coffee/Coffee";

export default function HomePage({ setActiveLink }) {
  return (
    <>
      <div className="container">
        <h2>Select your coffee</h2>
        <div className="coffee">
          {content.map((item, index) => {
            return (
              <Coffee item={item} key={index} setActiveLink={setActiveLink} />
            );
          })}
        </div>
      </div>
    </>
  );
}
