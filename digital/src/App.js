import logo from './logo.svg';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();


  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
  }
  setInterval(UpdateTime, 1000);

  return (
    <div className="App">
      <h1>{time}</h1>
      
    </div>
  );
}

export default App;
