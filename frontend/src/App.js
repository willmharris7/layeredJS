import './App.css';
import ConnectButton from './components/ConnectButton'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConnectButton/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
