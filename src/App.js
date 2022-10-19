// import logo from './logo.svg';

import React, { useState } from "react";
import "./App.css";

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
      </div>
    </div>
  );
}

export default App;
