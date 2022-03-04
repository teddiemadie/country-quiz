import './App.css';
import Home from './Home'
import BackgroundImg from './background.png'

function App() {
  return (
    <div className="App">
      <div style={{
        backgroundImage: `url(${BackgroundImg})`,width: '100%', height:'100vh'}}>
        <Home/>
      </div>
    </div>
  );
}

export default App;
