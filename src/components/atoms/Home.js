import React from "react";
import accueilIcon from "../../assets/svg/viewpage/accueil.svg";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Link to={"/"}>
          <div className="accueil">
            <img src={accueilIcon} alt="Accueil button" />
            <span>accueil</span>
          </div>
        </Link>
      </>
    );
  }
}

export default Home;
