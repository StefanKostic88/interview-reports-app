import {
  MainContainer,
  SearchHeader,
  CardsContainer,
  LoaderModal,
  ErrorModal,
} from "../../components";
import { useHomePage } from "../../hooks";

const Home = ({ candidatesList, onResetInput }) => {
  const {
    filteredList: filteredUsers,
    isLoading,
    filterCandidate,
  } = useHomePage(candidatesList);

  return (
    <MainContainer>
      <section className="container section " id="home">
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

// section__border
