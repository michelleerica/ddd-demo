import React, { useState } from 'react';
import CardCollection from './component/cardCollection/CardCollection';
import Input from './component/input/Input';
import beerDefaultData from './data/beer';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [beerData, setBeerData] = useState(beerDefaultData);

  const search = (term) => {
    if (term && term.length > 0) {
      const filteredData = beerDefaultData
        .filter(beerItem => beerItem.name.includes(term));
      setBeerData(filteredData)
    } else {
      setBeerData(beerDefaultData);
    }
  }

  const onInputChange = (value) => {
    search(value)
    setSearchTerm(value);
  }

  return (
    <div className="App">
      <div className="row search">
        <Input
          value={searchTerm}
          onChangeCallback={onInputChange}
        />
      </div>
      <CardCollection data={beerData} />
    </div>
  );
}

export default App;
