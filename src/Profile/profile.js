import React from "react";

const profile = (props) => {
  return (
    <div
      style={{
        backgroundColor: "beige",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <img
        src={props.img}
        alt=""
        style={{ width: "300px", height: "300px", borderRadius: "50%" }}
      />
      <h2 style={{ color: "blue" }}>{props.fullName}</h2>
      <p style={{ width: "300px" }}>Bio : {props.bio}</p>
      <p>Profession : {props.profession}</p>
    </div>
  );
};
export default profile;
