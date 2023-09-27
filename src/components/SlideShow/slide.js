import "./slide.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
const SlideShow = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 4000;
  const location = useLocation();
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div>
      {" "}
      <Navbar />
      <div
        className={location.pathname === "/home" ? "slideshow" : "slideshow1"}
      >
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div className={"slide" + index} key={index}>
              <div className="headerText">
                <div className="headerLine1">we help</div>
                <div className="headerLine2"> growing business</div>
                <div className="headerLine3">
                  We help you managing asset, provide financial advise.Leave
                  money issue
                  <br /> with us and focus on your core business
                </div>
              </div>
              <div className="slideshowDots">
                {colors.map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
