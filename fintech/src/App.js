import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import StateAndEvent from './components/StateAndEvent';
import ArrayMap from './components/ArrayMap';
import AppBar from './components/common/AppBar';
function App() {
  return (
    <div className="App">
      <AppBar title="메인화면"></AppBar>
      <header className="App-header">
        <Welcome username="유관우" age="33"></Welcome>
        <StateAndEvent></StateAndEvent>
        <ArrayMap></ArrayMap>
      </header>
    </div>
  );
}

export default App;
