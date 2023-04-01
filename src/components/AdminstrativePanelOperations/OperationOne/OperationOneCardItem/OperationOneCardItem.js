const OperationOneCardItem = ({
  avatar,
  birthday,
  education,
  email,
  id,
  name,
  onClick,
  isActive,
}) => {
  // isActiveCard
  return (
    <div
      className={`operations__card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="operations__card-border">
        <div className="operations__card-perfil">
          <img src={avatar} alt="Card" className="operations__card-img" />
        </div>
      </div>
      <div className="operations__card-info">
        <h3 className="operations__card-name">{name}</h3>
        <span className="operations__card-email">{email}</span>
      </div>
    </div>
  );
};

export default OperationOneCardItem;
