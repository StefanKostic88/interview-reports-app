import CardItem from "./CardItem/CardItem";

const nineCards = [];

for (let i = 0; i < 9; i++) {
  nineCards.push(<CardItem key={i} />);
}

// nineCards.map((card) => (
//   <div key={i}>
//     <CardItem />
//   </div>
// ));

const CardsContainer = () => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: "repeat(3, max-content)",
        justifyContent: "center",
        padding: "2rem 0",
      }}
    >
      {nineCards}
    </div>
  );
};

export default CardsContainer;
