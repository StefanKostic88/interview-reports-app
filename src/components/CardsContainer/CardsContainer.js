import CardItem from "./CardItem/CardItem";

const CardsContainer = ({ candidatesList }) => {
  if (!candidatesList) return;
  return (
    <div className="container section grid card__list" id="card-list">
      {candidatesList.map((candidate) => (
        <CardItem key={candidate.id} {...candidate} />
      ))}
    </div>
  );
};

export default CardsContainer;
