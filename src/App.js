import React from 'react';
import './App.css';
import NumberInput from './calculator/NumberInput';
import BeerList from './beerList/BeerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BeerList />
      </header>
    </div>
  );
}

export default App;
