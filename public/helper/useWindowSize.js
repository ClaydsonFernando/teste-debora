import { useState, useEffect } from "react";

export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [slideHeight, setSlideHeight] = useState(null);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (window.innerWidth < 400){
        setSlideHeight(1350);
      } else if (window.innerWidth < 530){
        setSlideHeight(1050);
      } else if(window.innerWidth < 992){
        setSlideHeight(650);
      }
      else {
        setSlideHeight(400);
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return slideHeight;
}