import React from "react";

const ActionLink = () => {
  const HandleClick = (e) => {
    e.preventDefault();
    alert("Haythem Smirani");
  };
  return (
    <a
      href="/"
      onClick={HandleClick}
      style={{
        width: "300px",
        marginTop: "5%",
        backgroundColor: "lightgoldenrodyellow",
        display: "flex",
        justifyContent: "center",
      }}
    >
      Click for Magic !
    </a>
  );
};

export default ActionLink;
