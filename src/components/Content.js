import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainCaracter from "../components/atoms/MainCaracter";

function Content() {
  let [post, setPost] = useState([]);

  useEffect(() => {
    if (post)
      fetch(`https://api.jsonbin.io/v3/b/60d15d6c8ea8ec25bd12c083`)
        .then((res) => res.json())
        .then((blob) => {
          setPost(blob.record);
        });
  }, []);

  // Customize date usning: french
  const months = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  return (
    <>
      <MainCaracter />
      <div className="page">
        <div className="main">
          {post.map((item) => {
            return (
              <article key={item.bdKey}>
                <Link to={`view/${item.bdKey}`}>
                  <figure>
                    <img
                      src={`https://d2hkgoif6etp77.cloudfront.net/${item.imageHomepage}`}
                      alt={item.name}
                    />
                    <figcaption>
                      <span>
                        {months[new Date(item.publicationDate).getDay()]}{" "}
                        {new Date(item.publicationDate).getDate()} -
                      </span>
                      <h2 className="title">{item.name}</h2>
                    </figcaption>
                  </figure>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Content;
