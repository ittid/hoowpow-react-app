import { Link } from "react-router-dom";
import title from "../../assets/svg/title.svg";

function Title() {
  var styleTitle = {
    title: {
      textAlign: "center",
    },
  };

  return (
    <>
      <div className="title" style={styleTitle.title}>
        <Link to={"/"}>
          <img src={title} alt="MUSLIM SHOW" />
        </Link>
      </div>
    </>
  );
}

export default Title;
