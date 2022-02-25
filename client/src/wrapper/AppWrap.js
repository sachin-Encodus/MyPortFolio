import React, { useContext } from "react";
import { Theme } from "../App";
import { NavigationDots, SocialMedia } from "../components";
import { themes } from './../Theme/ThemeProvider';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const theme = useContext(Theme)
    return (
      <div id={idName} style={{ backgroundColor: theme === themes.dark ? "#000" : ''} } className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2020 Sachin</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
