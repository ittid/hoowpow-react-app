import icon from "../../assets/svg/menu.svg";
import logo from "../../assets/svg/logo.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import telegram from "../../assets/svg/telegram.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

var styleBrand = {
  brand: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function Logo() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="brand" style={styleBrand.brand}>
        <div className="dropdown">
          <img src={icon} alt="menu" onClick={handleOpen} />
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                <a href="#link">myyagis</a>
              </li>
              <li className="menu-item">
                <a href="#link">mon espace member</a>
              </li>
              <li className="menu-item">
                <a href="#link">offrir un abonnement</a>
              </li>
              <hr />
              <div className="s_media">
                <p>
                  <img src={telegram} alt="telegram" />
                  <span>nous suivre sur telegram</span>
                </p>
                <p>
                  <img src={linkedin} alt="linkedin" />
                  <span>nous suivre sur linkedin</span>
                </p>
              </div>
              <hr />
              <li className="menu-item">
                <a href="#link">conditions d'utilisation</a>
              </li>
              <li className="menu-item">
                <a href="#link">se déconnecter</a>
              </li>
            </ul>
          ) : null}
        </div>
        <Link to={"/"}>
          <img src={logo} alt="HoowPow" />
        </Link>
      </div>
    </>
  );
}

export default Logo;
