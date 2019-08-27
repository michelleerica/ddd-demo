import React, { PureComponent } from 'react';
import CardCollection from '../cardCollection/CardCollection';

class BeerList extends PureComponent {
  state = {
    data: [],
  }

  componentDidMount() {
    this.data = require('./beers');
  }

  render() {
    const { data } = this.state;
    if (!data || data.length <= 0) {
      return <div>Loading...</div>;
    }
    return <CardCollection data={data} />;
  }
}

export default BeerList;