import React from "react";
import Overlay from "../ui/ModalWindow/Overlay";

const UserCreatedMessage = ({ msg }) => {
  return (
    <>
      <Overlay />
      <div className="modal user-created">
        <h2>{msg}</h2>
        <hr />
      </div>
    </>
  );
};

export default UserCreatedMessage;
