import './App.css';
import NewsSearch from './NewsSearch';
import NewsList from './NewsList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NewsSearch />
        <NewsList />
      </div>
    </div>
  );
}

export default App;
