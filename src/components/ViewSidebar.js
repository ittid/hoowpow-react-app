import { useParams } from "react-router-dom";
import Logo from "./atoms/Logo";
/* view page components */
import Home from "./atoms/Home";
import FullScreen from "./atoms/FullScreen";
import Partager from "./atoms/Partager";
import { useEffect, useState } from "react";

var stylingSidebar = {
  header: {
    position: "fixed",
    width: "25vw",
    height: "100%",
    background: "#000",
    color: "#FFF",
    padding: "1.4em 0",
    overflow: "scroll",
  },
};

function ViewSidebar() {
  let postId = useParams();
  let id = postId.postId;

  let [selectedPost, setSelectedPost] = useState([]);
  let selectedOne = selectedPost.filter((item) => {
    return item.bdKey === +id;
  });

  useEffect(() => {
    if (id)
      fetch(`https://api.jsonbin.io/v3/b/60d15d6c8ea8ec25bd12c083`)
        .then((res) => res.json())
        .then((blob) => {
          setSelectedPost(blob.record);
        });
  }, []);

  return (
    <>
      <header className="sidebar" style={stylingSidebar.header}>
        <div className="container">
          <Logo />
          {selectedOne.map((item) => {
            return (
              <div key={item.id}>
                <figure className="sidebar_preview">
                  <img
                    src={`https://d2hkgoif6etp77.cloudfront.net/${item.imageHomepage}`}
                    alt={item.name}
                  />
                  <figcaption>
                    <h2 className="title">{item.name}</h2>
                  </figcaption>
                </figure>
              </div>
            );
          })}
          <Partager />
          <Home />
          <FullScreen />
        </div>
      </header>
    </>
  );
}

export default ViewSidebar;
