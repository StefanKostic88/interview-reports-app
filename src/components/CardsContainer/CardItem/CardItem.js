import { useNavigate } from "react-router";

const CardItem = ({ id, email, name, avatar }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card card-animation"
      onClick={() => navigate(`/candidate-reports/:${id}`)}
    >
      <div className="card__border">
        <div className="card__perfil">
          <img src={avatar} alt={`${avatar}-${id}`} className="card__img" />
        </div>
      </div>
      <h3 className="card__name">{name}</h3>
      <span className="card__email">{email}</span>
    </div>
  );
};

export default CardItem;
