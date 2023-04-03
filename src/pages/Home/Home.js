import { useEffect, useState } from "react";
import {
  MainContainer,
  SearchHeader,
  CardsContainer,
  LoaderModal,
  ErrorModal,
} from "../../components";

const Home = ({ candidatesList, onResetInput }) => {
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
        <SearchHeader
          onFilterCandidate={filterCandidate}
          onResetInput={onResetInput}
        />
        {!isLoading ? (
          filteredUsers.length === 0 ? (
            <ErrorModal />
          ) : (
            <CardsContainer candidatesList={filteredUsers} />
          )
        ) : (
          <LoaderModal />
        )}
      </section>
    </MainContainer>
  );
};

export default Home;
