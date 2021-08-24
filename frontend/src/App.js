import './App.css';
import NewsSearch from './NewsSearch';
import NewsList from './NewsList';
import ContextData from './Context/Data/ContextData';
import { useReducer } from 'react';
import ReducerData from './Context/Data/ReducerData';
import StateData from './Context/Data/StateData';

function App() {
  const [stateData, dispatchData] = useReducer(ReducerData, StateData);

  return (
    <div className="App">
      <div className="container">
        <ContextData.Provider value={{stateData, dispatchData}}>
          <NewsSearch />
          <NewsList />
        </ContextData.Provider>
      </div>
    </div>
  );
}

export default App;
