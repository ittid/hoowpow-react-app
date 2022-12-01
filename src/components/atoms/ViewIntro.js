import React from "react";
import { Link } from "react-router-dom";

var styleIntro = {
  span: {
    margin: "0",
  },
};

class ViewIntro extends React.Component {
  render() {
    return (
      <>
        <Link to={"/"}>
          <div className="view_intro">
            <span style={styleIntro.span}>Disponible gratuitement :</span>
            <span style={styleIntro.span}>LA BD DU JOUR</span>
          </div>
        </Link>
      </>
    );
  }
}

export default ViewIntro;
