import './App.css';
import ConnectButton from './components/ConnectButton'
import ReactDefault from './components/ReactDefault'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactDefault/>
        <ConnectButton/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
