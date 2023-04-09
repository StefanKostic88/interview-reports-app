import { useEffect, useState } from "react";
import CardItem from "./CardItem/CardItem";

const CardsContainer = ({ candidatesList }) => {
  const [animatedCards, setAnimatedCards] = useState([]);

  useEffect(() => {
    if (!animatedCards) return;
    let timer;
    const animate = async () => {
      candidatesList.forEach((card, index) => {
        const cardItemStyled = new Promise((res, rej) => {
          timer = setTimeout(() => {
            res({ ...card });
          }, index * 50);
        });
        cardItemStyled.then((newCard) =>
          setAnimatedCards((prev) => [...prev, newCard])
        );
      });
    };
    animate();
    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (!candidatesList) return;
  return (
    <div className="container section grid card__list" id="card-list">
      {animatedCards.map((candidate) => (
        <CardItem key={candidate.id} {...candidate} />
      ))}
    </div>
  );
};

export default CardsContainer;
