import logo from './logo.svg';
import './App.css';
import ThemeContext, {themes} from './theme-context';
import Layout from './layout';

function App() {
  return(
  <ThemeContext.Provider value={themes.dark}>
  <button onClick={toggleTheme}>Change theme</button>
<Layout />
</ThemeContext.Provider>
  );
}

export default App;
