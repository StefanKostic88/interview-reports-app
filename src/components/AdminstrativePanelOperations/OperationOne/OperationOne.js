import { useEffect, useState } from "react";
import OperationOneCardItem from "./OperationOneCardItem/OperationOneCardItem";

const OperationOne = ({
  candidatesList,
  onCandidateClick,
  onCandidateName,
}) => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [chosenId, setChosenId] = useState(null);
  const [listStyled, setListStyled] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    setListStyled(() => [...candidatesList]);
  }, [candidatesList]);

  const onChangeHandler = (e) => {
    const filtered = candidatesList.filter((user) => {
      return user.name.toLowerCase().startsWith(e.target.value.toLowerCase());
    });

    setSearchUser(() => e.target.value);
    setListStyled(() => [...filtered]);
  };

  const setActiveStyleStatus = (id) => {
    const newArr = listStyled.map((el) => {
      if (el.id === id) {
        return { ...el, isActive: true };
      } else {
        return { ...el, isActive: false };
      }
    });
    setListStyled(() => [...newArr]);
  };

  return (
    <div className="operations__content operations__content--1 operations__content--active">
      <div className="operations__search">
        <form action="" className="search__form" id="contact-form">
          <div className="search__form-div">
            <label className="search__form-tag">Search</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Search..."
              className="search__form-input"
              id="contact-name"
              onChange={onChangeHandler}
              value={searchUser}
            />
          </div>
        </form>
      </div>
      <div className="operations__card-list">
        {listStyled.map((candidate) => (
          <OperationOneCardItem
            {...candidate}
            key={candidate.id}
            onClick={() => {
              setBtnIsActive(() => true);
              setChosenId(() => candidate.id);
              setActiveStyleStatus(candidate.id);
              onCandidateName(candidate.name);
              //
            }}
          />
        ))}
      </div>
      {btnIsActive && (
        <button
          className="btn left"
          onClick={() => {
            onCandidateClick(chosenId);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default OperationOne;

{
  /* <!-- CONTENT 1 --> */
}
{
  /* */
}

// <div className="operations__card">
//           <div className="operations__card-border">
//             <div className="operations__card-perfil">
//               <img
//                 src="./assets/img/perfil.png"
//                 alt="Card Image"
//                 className="operations__card-img"
//               />
//             </div>
//           </div>
//           <div className="operations__card-info">
//             <h3 className="operations__card-name">Brian Johnston</h3>
//             <span className="operations__card-email">
//               brian.johnston@gmail.com
//             </span>
//           </div>
//         </div>
