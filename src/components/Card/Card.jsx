import "./Card.css";
import nece from "../../img/imageNotFound.png";
const Card = ({ Title, Poster }) => {
  return (
    <div className="card">
      <img
        className="cardImg"
        src={Poster}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = nece;
        }}
        alt="drnk"
      />
      <p className="title">{Title}</p>
    </div>
  );
};

export default Card;
