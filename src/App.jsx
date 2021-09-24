import './App.scss';
import { useState } from "react";

import Topbar from './components/topbar/topbar';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import MenuMobile from './components/menu-mobile/menu-mobile';
import AboutMe from './components/about-me/about-me';


function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <AboutMe />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;