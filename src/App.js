// import logo from './logo.svg';

import React, { useState } from "react";
import "./App.css";
import { FaBeer } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';


function App() {
  let time = new Date().toLocaleTimeString();

  const [ctime, seCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    seCtime(time);
  };
  setInterval(UpdateTime, 1000);

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1 className="time">{time}</h1>
        </div>
      </div>
      
      
      <div className="footer">
        <a href="https://ahmedrazachandio.github.io/" target="_blank">
          Powered and Developed By Ahmed Raza
        </a>
        <div>
          <FaBeer />
          <BsGithub className="icons" />
          {/* https://react-icons.github.io/react-icons/search */}

          {/* https://codepen.io/RamiAlmofleh/pen/KKorLRy */}
        </div>  
      </div>
    </div>
  );
}

export default App;
