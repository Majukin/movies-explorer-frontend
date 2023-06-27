import { useState, useEffect } from "react";

export function useBrowserWidth() {
  function getWindowSize() {
    const { innerHeight: height, innerWidth: width } = window;
    return { height, width };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleSizeСhange() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleSizeСhange());

    return () => window.removeEventListener("resize", handleSizeСhange());
  }, []);

  return windowSize;
}

export default useBrowserWidth;
