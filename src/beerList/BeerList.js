import React, { PureComponent } from 'react';
import CardCollection from '../cardCollection/CardCollection';
import beerDefaultData from '../data/beer';
import Input from '../input/Input';
import Button from '../button/Button';

class BeerList extends PureComponent {
  state = {
    searchTerm: '',
    data: [],
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      data: beerDefaultData,
    });
  }

  search = (term) => {
    if (term && term.length > 0) {
      var regexExpression = new RegExp(term, 'ig');
      const filtered = beerDefaultData.filter(beerItem => beerItem.title.match(regexExpression));
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
      <div>
        <div className="row search">
          <Input
            value={searchTerm}
            onChange={this.onInputChange}
          />
          <Button
            onClick={() => this.search(searchTerm)}
            name="SUBMIT"
          />
        </div>
        { (!data || data.length <= 0) ?
          <div>Loading...</div> :
          <CardCollection data={data} />
        }
      </div>
    );
  }
}

export default BeerList;
