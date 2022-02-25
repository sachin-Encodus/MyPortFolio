import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../App';
import { themes } from './../Theme/ThemeProvider';

const MotionWrap = (Component, classNames) => function HOC() {
 const theme = useContext(Theme);
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames} app__flex`}
    style={{ backgroundColor: theme === themes.dark ? "#000" : ''} }
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap;
