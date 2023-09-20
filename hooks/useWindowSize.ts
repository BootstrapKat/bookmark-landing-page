import { useState, useEffect } from "react";

export const useWindowSize = () => {
  // Initialize state with undefined so server and client output match
  const [windowSize, setWindowSize] = useState<
    { width: number; height: number } | undefined
  >(undefined);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width and height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Only run this code if window is defined (i.e., we're on the client)
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
    }

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array means this effect only runs once (equivalent to componentDidMount)

  return windowSize;
};
