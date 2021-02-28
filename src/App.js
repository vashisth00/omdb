
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ThemeContext, {themes} from './theme-context';
import Layout from './layout';
import Header from './components/Header.js';

function App() {
  const [theme,setTheme]  = useState(themes.dark);
  const toggleTheme = ()=>theme ===themes.dark? setTheme(themes.light) : setTheme(themes.dark);
  return(
 
  <ThemeContext.Provider value={theme}>
     <button onClick={toggleTheme}>Change theme</button>
       <Header/>
<Layout />
</ThemeContext.Provider>
  );
}

export default App;
