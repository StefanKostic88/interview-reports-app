import CardItem from "./CardItem/CardItem";
import "./CardsContainer.css";
const nineCards = [];

for (let i = 0; i < 9; i++) {
  nineCards.push(<CardItem key={i} />);
}

// nineCards.map((card) => (
//   <div key={i}>
//     <CardItem />
//   </div>
// ));

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
