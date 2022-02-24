import { Link } from "react-router-dom";
import "./card.css";

const Card = (props: any) => {
  return (
    <Link to={"/detail"} state={{ from: props.dataCard }}>
      <div className="card">
        <div className="padding-card">
          <img src={props.dataCard.gambar} className="img-card" alt="" />
          <div className="container">
            <h4>{props.dataCard.title}</h4>
            <p>Genre</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
