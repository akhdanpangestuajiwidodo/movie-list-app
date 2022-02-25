import { Link } from "react-router-dom";
import "./card.css";

const Card = (props: any) => {
  return (
    <Link to={"/detail"} state={""}>
      <div className="card">
        <div className="padding-card">
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${props.dataMovie.poster_path}`}
            className="img-card"
            alt=""
          />
          <div className="container">
            <h4>{props.dataMovie.original_title}</h4>
            <p>Vote Averrage: {props.dataMovie.vote_average}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
