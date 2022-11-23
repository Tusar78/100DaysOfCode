import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import Counter from "./Counter";
import Hover from "./Hover";

const Content = () => {
  const context = useContext(ThemeContext);
  const { theme, themeSwitcher } = context;
  return (
    <div>
      <h2>This is Content section</h2>

      <Counter>
        {(count, incrementCount) => (
          <Hover
            count={count}
            incrementCount={incrementCount}
            theme={theme}
            themeSwitcher={themeSwitcher}
          />
        )}
      </Counter>
    </div>
  );
};

export default Content;
