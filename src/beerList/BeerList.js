import React, { PureComponent } from 'react';
import CardCollection from '../cardCollection/CardCollection';
import beerDefaultData from '../data/beer';

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
    } else {
      this.setState({
        ...this.state,
        data: beerDefaultData,
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
          <input type="text" value={searchTerm} onChange={e => this.onInputChange(e.target.value)} />
          <button
            id="button"
            className="btn waves-effect waves-light"
            onClick={() => this.search(searchTerm)}
          >SUBMIT
          </button>
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
