import React from "react";
import fullscreen from "../../assets/svg/viewpage/fullscreen.svg";
import { Link } from "react-router-dom";

class FullScreen extends React.Component {
  render() {
    return (
      <>
        <Link to={""}>
          <div className="fullscreen">
            <img src={fullscreen} alt="Accueil button" />
            <span>PLEIN ÉCRAN</span>
          </div>
        </Link>
      </>
    );
  }
}

export default FullScreen;
