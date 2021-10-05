import './App.css';
import ConnectButton from './components/ConnectButton'
import Counter from './components/Counter'
import GetDatabasesButton from './components/GetDatabasesButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetDatabasesButton/>
        <ConnectButton/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
