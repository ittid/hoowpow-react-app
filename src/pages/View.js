//import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ViewIntro from "../components/atoms/ViewIntro";
//import FetchSlider from "../components/atoms/FetchSlider";
import Carousel from "./carousel/Carousel";

function View() {
  /*   let postId = useParams();
  let id = postId.postId; */

  let [image, setImage] = useState([]);

  useEffect(() => {
    fetch(`https://api.jsonbin.io/v3/b/60d15d485ed58625fd1658cb`)
      .then((res) => res.json())
      .then((blob) => {
        setImage(blob.record.bdImage);
      });
  }, []);

  const slides = [];

  image.map((elm) => {
    return slides.push(
      `https://d2hkgoif6etp77.cloudfront.net/${elm.bdImageFr}`
    );
  });

  const imgLength = image.length;
  console.log(imgLength);

  return (
    <>
      <div className="page">
        <div className="view_page">
          <div className="baner">
            <ViewIntro />
          </div>
          <Carousel
            slides={slides}
            controls
            indicators
            width={1200}
            imgSize={imgLength}
          />
          <div className="container"></div>
        </div>
      </div>
    </>
  );
}

export default View;
