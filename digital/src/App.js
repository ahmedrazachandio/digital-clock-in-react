// import logo from './logo.svg';

import React, { useState } from "react";
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();

  const [ctime, seCtime] = useState(time);


  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    seCtime(time);
  }
  setInterval(UpdateTime, 1000);

  return (
    <div className="App  timer">
      <div className="card"> 

        <h1 className="time">{time}</h1>
      </div>
      <a href="https://mythrillfiction.com/" target="_blank">Mythrill</a>
    </div>
  );
}

export default App;
