import { useRef, useState, useEffect } from "react";
import CarouselItem from "./CarouselItem"
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";
import "./Carousel.css"
import { Link } from "react-router-dom";

const Carousel = ({ slides, interval = 5000, controls = false, indicators = false, autoPlay = false, width = 1000}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideInterval = useRef()
    let [num, setNum] = useState(2)
    let [rightData, setRightData] = useState([])

    const showRightBar = () => {
        fetch(`https://api.jsonbin.io/v3/b/60d15d6c8ea8ec25bd12c083`)
        .then((res) => res.json())
        .then((blob) => {
          setRightData(blob.record);
        });
    }

    const prev = () => {
        startSlideTimer()
        const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1
        setCurrentSlide(index);
    }
    
    const next = () => {
        startSlideTimer()
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        setCurrentSlide(index);
        console.log("next");
        fetch(`https://api.jsonbin.io/v3/b/60d15d485ed58625fd1658cb`)
        .then((res) => res.json())
        .then((blob) => {
            let size = (blob.record.bdImage.length);
            setNum(num + 1)
            console.log(num);
            if (num === size) {
              showRightBar();
            }
        });
    }



    const switchIndex = (index) => {
        startSlideTimer()
        setCurrentSlide(index)
    }

    const startSlideTimer = () => {
        if (autoPlay) {
            stopSlideTimer()
            slideInterval.current = setInterval(() => {
                setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
            }, interval)
        }
    }

    const stopSlideTimer = () => {
        if (autoPlay && slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }


    useEffect(() => {
        startSlideTimer()

        return () => stopSlideTimer()
    }, [])

    return (<>
        <div className="carousel" style={{ maxWidth : width }}>
            <div 
                className="carousel-inner"
                style={{ transform: `translateX(${-currentSlide * 100}%)`}}
            >
            {slides.map((slide, index) => (
                <CarouselItem slide={slide} key={index} stopSlide={stopSlideTimer} startSlide={startSlideTimer} />
            ))}
            </div>
            {indicators && <CarouselIndicators slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />}
            {controls && <CarouselControls prev={prev} next={next} />}
            
        </div>
        <div className="rightBar">
          {rightData.map((item) => {
              return (
                <div key={item.bdKey}>
                  <Link to={`/view/${item.bdKey}`}>
                      <img 
                        src={`https://d2hkgoif6etp77.cloudfront.net/${item.imageHomepage}`}
                        alt={item.name}
                      />
                  </Link>
                </div>
              );
            })}
        </div>

        </>
    )
}

export default Carousel
