import React, { useState,createContext ,useReducer} from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import {themes} from "./Theme/ThemeProvider";

const Theme = createContext();

const App = () =>{


const [theme, setTheme] = useState(themes.light)
const toggleTheme = () =>{
theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
}
 return(
  <Theme.Provider value={ theme }>
    <div className='app' style={{backgroundColor:"black"}}>
    <Navbar  toggleTheme={toggleTheme}/>
    <Header   />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
    </div>
   
  </Theme.Provider>
);
} 

export default App;
export { Theme };