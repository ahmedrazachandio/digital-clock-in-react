import logo from './logo.svg';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();


  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
  }

  return (
    <div className="App">
      <h1>{time}</h1>
      
    </div>
  );
}

export default App;
