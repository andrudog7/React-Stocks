import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let allStocks = [...this.props.stocks]
    let stocks
    if (this.props.sort === "Alphabetically") {
      stocks = allStocks.sort((a,b) => a.name > b.name ? 1 : -1).map(stock => <Stock stock={stock} handleClick={this.props.handleClick}/>)
    } else if (this.props.sort === "Price") {
      stocks = allStocks.sort((a,b) => a.price - b.price).map(stock => <Stock stock={stock} handleClick={this.props.handleClick}/>)
    } else {
      stocks = allStocks.map(stock => <Stock stock={stock} handleClick={this.props.handleClick}/>)
    }
    return (
      <div>
        <h2>Stocks</h2>
        {stocks}
      </div>
    );
  }

}

export default StockContainer;
