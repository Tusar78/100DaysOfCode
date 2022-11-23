import { useCallback, useEffect, useState } from "react";

const useResize = (screenSize) => {
  const [onScreenSmall, setOnScreenSmall] = useState(screenSize);

  const checkScreen = useCallback(() => {
    setOnScreenSmall(window.innerWidth < screenSize);
  }, [screenSize]);

  useEffect(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);

    // cleanup
    return () => window.removeEventListener("resize", checkScreen);
  }, [checkScreen]);

  return onScreenSmall;
};

export default useResize;
