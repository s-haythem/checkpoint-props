import React from "react";
import PropTypes from "prop-types";

const ActionLink = () => {
  const HandleName = () => {
    alert("Haythem Smirani");
  };
  return (
    <a
      href="/"
      onClick={HandleName}
      style={{
        width: "300px",
        marginTop: "5%",
        backgroundColor: "lightgoldenrodyellow",
        display: "flex",
        justifyContent: "center",
      }}
    >
      Click Me !
    </a>
  );
};
ActionLink.propTypes = {
  HandleName: PropTypes.func,
};

export default ActionLink;
