import './App.css';
import ConnectButton from './components/ConnectButton'
import Counter from './components/Counter'
import GetDatabasesButton from './components/GetDatabasesButton';
import Top5ListingsButton from './components/Top5ListingsButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetDatabasesButton/>
        <Top5ListingsButton/>
        <ConnectButton/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
