import { useEffect, useState } from "react";
import { MainContainer, SearchHeader, CardsContainer } from "../../components";
// import "./Home.css";

const Home = ({ candidatesList }) => {
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filterCandidate = (candidateName) => {
    const candidateConverted = candidateName.toLowerCase();
    const data = candidatesList.filter((candidate) =>
      candidate.name.toLowerCase().startsWith(candidateConverted)
    );
    setFilteredUsers(() => [...data]);
  };

  useEffect(() => {
    setFilteredUsers(() => [...candidatesList]);
    setIsLoading(() => false);
  }, [candidatesList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(() => false);
    }, 500);
    return () => {
      clearTimeout(timer);
      setIsLoading(() => true);
    };
  }, [filteredUsers]);

  return (
    <MainContainer>
      <section className="container section section__border" id="home">
        <SearchHeader onFilterCandidate={filterCandidate} />
        {!isLoading ? (
          <CardsContainer candidatesList={filteredUsers} />
        ) : (
          <div>Loading</div>
        )}
      </section>
    </MainContainer>
  );
};

export default Home;
