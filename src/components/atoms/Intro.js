import React from "react";
import { Link } from "react-router-dom";

var styleIntro = {
  intro: {
    backgroundColor: "#51AABC",
    textAlign: "center",
    borderRadius: "7px",
    margin: "1.5em auto 1.5em",
    padding: "1em 0",
    color: "#FFF",
    textDecoration: "none",
    width: "90%",
  },
  p: {
    margin: "0",
  },
  h2: {
    margin: "0",
  },
};

class Intro extends React.Component {
  render() {
    return (
      <>
        <Link to={"/"}>
          <div className="intro" style={styleIntro.intro}>
            <p style={styleIntro.p}>Disponible gratuitement :</p>
            <h2 style={styleIntro.h2}>LA BD DU JOUR</h2>
          </div>
        </Link>
      </>
    );
  }
}

export default Intro;
