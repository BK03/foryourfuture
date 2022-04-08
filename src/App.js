import React from "react";
import useLocalStorage from 'use-local-storage-state';
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
// import './App.css';
import './App.scoped.css';
import  { BsFillCloudSunFill }  from "react-icons/bs";






function App() {
  var Light = <BsFillCloudSunFill />;
  const defaultDark = window.matchMedia('(prefers-color-scheme: Light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'Dark' : 'Light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      
      <button onClick={switchTheme} className="button">
         {theme === 'light' ? 'Dark' : 'Light'} 
      </button>

  
      <Body /> 
      <Footer />
    </div>
  )
}

export default App;