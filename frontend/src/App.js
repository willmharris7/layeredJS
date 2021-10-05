import './App.css';
import SearchForm from './components/SearchForm'
import GetDatabasesButton from './components/GetDatabasesButton';
import Top5ListingsButton from './components/Top5ListingsButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetDatabasesButton/>
        <Top5ListingsButton/>
        <SearchForm/>
      </header>
    </div>
  );
}

export default App;
