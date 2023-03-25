import CardItem from "./CardItem/CardItem";

const nineCards = [];

for (let i = 0; i < 9; i++) {
  nineCards.push(
    <div key={i}>
      <CardItem />
    </div>
  );
}

// nineCards.map((card) => (
//   <div key={i}>
//     <CardItem />
//   </div>
// ));

const CardsContainer = () => {
  // return <div>{nineCards}</div>;
};

export default CardsContainer;
