
import './App.css';
import Photo from './Photo';
import mainpic from './images/mainphoto.svg'
import { Link, useLocation } from 'react-router-dom';

import Interface from './interface';
import Intro from './intro';
import { useEffect } from 'react';
import NavBar from './Navbar';
import content from './styles/content.module.css'


function App() {

  return (
    <div>
      <header className={content.header}>

        <NavBar />
        {/* <img src={logo} className="App-logo" alt="logo" /> 
        <a 
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          >
           </a>*/}
        <div className={content.container}>
          <img src={mainpic} alt="main page Tamagotchi" />
          <h1><b><Link to="/intro" className={content.mainlink}>Tamagotchi</Link> </b> </h1>
        </div>
      </header >
    </div >
  )
}

export default App;
