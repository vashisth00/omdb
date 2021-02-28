import React, { Component, useContext, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ThemeContext ,{themes}from '../theme-context';
//import {toggleTheme} from '../App';

//import ThemeContext,  from '../theme-context';
import Layout from '../layout';

const Header = () =>{
    const [theme,setTheme]  = useState(themes.dark);
    const toggleTheme = ()=>theme ===themes.dark? setTheme(themes.light) : setTheme(themes.dark);
    return(
<ThemeContext.Provider value={theme}>
<Navbar style={theme}>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        
        <button onClick={toggleTheme}>Change theme</button>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
<Layout />
</ThemeContext.Provider>
    );
    };

export default Header; 
