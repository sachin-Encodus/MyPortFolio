import React, { useContext, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";
import { Theme } from "../../App";
import { themes } from './../../Theme/ThemeProvider';

const Navbar = (props) => {
  const {toggleTheme} = props;
  const theme = useContext(Theme)

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar" style={{color:  theme === themes.dark? " white" :''}}> 
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <h2>Developer</h2>
      </div>
      <ul className="app__navbar-links"  style={{color:  theme === themes.dark? " white" :''}}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a  style={{color: theme === themes.dark ? '#fff' : '#000'}} href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}cls
            </ul>
            
          </motion.div>
        )}
      </div> */}
       <div className="app__navbar_daek_mode">
         <a href="#"  className="press" onClick={()=>toggleTheme()} >
        <img src={theme === themes.dark ? images.night : images.day  } alt="logo" />

         </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
