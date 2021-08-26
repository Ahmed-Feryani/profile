import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  return (
    <div
      onClick={() => props.handleName(props.fullName)}
      style={{
        display: "grid",
        gridTemplateColumns: "40% 60%",
        maxWidth: "500px",
        height: "310.5px",
        background:
          "linear-gradient(-45deg,rgba( 255, 255, 255, 0.1 ),rgba( 255, 255, 255, 0.4 ))",
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        margin: "auto",
        marginTop: "140px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            borderBottom: "2px solid rgba(255,255,255,0.2)",
            padding: "0 40px",
          }}
        >
          Full Name :<h2>{props.fullName}</h2>
          Bio :<h3>{props.bio}</h3>
          profession :<h3>{props.profession}</h3>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "default name",
  bio: "default bio",
  profession: "default profession",
};

Profile.propTypes = {
  handleName: PropTypes.func,
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};

export default Profile;
