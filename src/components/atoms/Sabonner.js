import React from "react";
import caracter from "../../assets/svg/caracter.svg";
import { Link } from "react-router-dom";

var styleSabonner = {
  sabonner: {
    backgroundColor: "#51AABC",
    textAlign: "center",
    borderRadius: "15px",
    margin: "2em auto 3em",
    padding: "1.4em 0",
    color: "#FFF",
    position: "relative",
  },
  h2: {
    margin: "0",
    fontWeight: "700",
    fontSize: "20px",
  },
  button: {
    border: "0",
    padding: "9px 24px",
    borderRadius: "4px",
    backgroundColor: "#FFC600",
    textTransform: "uppercase",
    fontSize: "22px",
    margin: "1em 0 0",
    cursor: "pointer",
  },
  login: {
    color: "#FFF",
    fontWeight: "500",
    position: "absolute",
    span: {
      display: "block",
    },
  },
  link: {
    textDecoration: "underline",
    color: "#FFF",
  },
};

class Sabonner extends React.Component {
  render() {
    return (
      <>
        <div className="sabonner" style={styleSabonner.sabonner}>
          <h2 style={styleSabonner.h2}>
            SOUTENEZ LA PRODUCTION EN VOUS ABONNANT !
          </h2>
          <Link to={"#sabonner"}>
            <button style={styleSabonner.button}>s'abonner</button>
          </Link>
          <p className="char">
            <img src={caracter} alt="" />
          </p>
          <p className="login" style={styleSabonner.login}>
            <Link to={"#login"} style={styleSabonner.link}>
              <span style={styleSabonner.login.span}>DÉJÀ ABONNÉ ?</span>
              <span>CONNECTEZ-VOUS</span>
            </Link>
          </p>
        </div>
      </>
    );
  }
}

export default Sabonner;
