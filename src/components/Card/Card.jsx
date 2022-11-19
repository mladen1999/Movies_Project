import "./Card.css";

const Card = ({ Title, Poster }) => {
  return (
    <div className="card">
      <img className="cardImg" src={Poster} alt="drnk" />
      <p className="title">{Title}</p>
    </div>
  );
};

export default Card;
