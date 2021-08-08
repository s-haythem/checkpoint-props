import React from "react";
import PropTypes from 'prop-types';



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
        alt="error"
        style={{ width: "300px", height: "300px", borderRadius: "50%" }}
      />
      <h2 style={{ color: "blue" }}>{props.fullName}</h2>
      <p style={{ width: "200px" }}>Bio : {props.bio}</p>
      <p>Profession : {props.profession}</p>
    </div>
  );
};
profile.defaultProps = {
  img :'failed to load' , fullName :'failed to load', bio :'failed to load', profession:'failed to load'
}
profile.propTypes = {
  fullName : PropTypes.string,
  bio : PropTypes.string,
  profession : PropTypes.string
}

export default profile;
