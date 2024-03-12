import { Route, Router, Routes } from "react-router-dom";
import Accordian from "./pages/accordian";
import { FaStar } from "react-icons/fa";
import { useState,useEffect } from "react";
function App({ noOfStart = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function habdleclick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }
  function handleMouseLeave(getCurrentIndex) {
    // console.log(getCurrentIndex);
    setHover(rating);
  }

  return ( <> 
  <div className="flex justify-center gap-5 items-center">
    <div className="flex mt-5 p-8 justify-center">
      {[...Array(noOfStart)].map((_, i) => {
        i += 1;
        return (
          <FaStar
            key={i}
            className={
              i <= (hover || rating ) ? "text-yellow-400" : "text-gray-600"
            }
            onClick={() => habdleclick(i)}
            onMouseMove={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            size={40}
          />
        );
      })}
    </div>
          <h1 className="text-7xl font-extrabold ">Star {rating}/10</h1>
      
    </div>
    <ScrollIndicator/>
    </>
  );
}

export default App;

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener('scroll', updateScrollPercentage);

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-300">
      <div
        className="h-1 bg-blue-500"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};