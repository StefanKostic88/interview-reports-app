import { useState } from "react";
import OperationOneCardItem from "./OperationOneCardItem/OperationOneCardItem";

const OperationOne = ({ candidatesList, onCandidateClick }) => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [chosenId, setChosenId] = useState(null);

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
            />
          </div>
        </form>
      </div>
      <div className="operations__card-list">
        {candidatesList.map((candidate) => (
          <OperationOneCardItem
            {...candidate}
            key={candidate.id}
            onClick={() => {
              setBtnIsActive(() => true);
              setChosenId(() => candidate.id);
            }}
          />
        ))}
      </div>
      {btnIsActive && (
        <button
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
