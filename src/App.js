import React, { PureComponent } from 'react';
import CardCollection from './component/cardCollection/CardCollection';
import Input from './component/input/Input';
import Button from './component/button/Button';
import beerDefaultData from './data/beer';
import './App.css';

class BeerList extends PureComponent {
  state = {
    searchTerm: '',
    data: beerDefaultData,
  }

  search = (term) => {
    if (term && term.length > 0) {
      var regexExpression = new RegExp(term, 'ig');
      const filtered = beerDefaultData.filter(beerItem => beerItem.name.match(regexExpression));
      this.setState({
      ...this.state,
        data: filtered,
      });
    }
  }

  onInputChange = (value) => {
    this.setState({
      ...this.state,
      searchTerm: value,
    });
  }

  render() {
    const { data, searchTerm } = this.state;
    return (
      <div className="App">
        <div className="row search">
          <Input
            value={searchTerm}
            onChangeCallback={this.onInputChange}
          />
          <Button
            onClickCallback={() => this.search(searchTerm)}
            name="SUBMIT"
          />
        </div>
        <CardCollection data={data} />
      </div>
    );
  }
}

export default BeerList;
