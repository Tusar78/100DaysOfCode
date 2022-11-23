import React, { useEffect, useState } from 'react';

const useResize = () => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  const checkScreen = () => {
    setOnSmallScreen(window.innerWidth < 768);
  }

  useEffect(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);

    // CleanUp
    return () => window.removeEventListener('resize', checkScreen);
  }, [])

  return onSmallScreen;
};

export default useResize;