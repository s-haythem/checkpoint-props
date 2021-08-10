import React from "react";
import PropTypes from 'prop-types';



const profile = (props) => {
  const{fullName,handleName}=props;
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
      <p style={{width:"200px"}}>Profession : {props.profession}</p>
      <button style= {{width:"200px", marginTop:'10px'}} onClick={() => handleName(fullName)} >Name</button>
    </div>
  );
};
profile.defaultProps = {
  img :'failed to load' , fullName :'failed to load', bio :'failed to load', profession:'failed to load'
}
profile.propTypes = {
  fullName : PropTypes.string,
  bio : PropTypes.string,
  profession : PropTypes.string,
  handleName : PropTypes.func
}

export default profile;
