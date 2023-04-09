import React from "react";
import { LoaderModal } from "../../components";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <LoaderModal />;
    </div>
  );
};

export default Loading;
