import React,{useContext} from 'react';
import ThemeContext from './theme-context';


const Layout = () =>{
    const theme  = useContext(ThemeContext);
    return(
     <div style={theme}>Hi this is </div>
    );
    };

export default Layout; 