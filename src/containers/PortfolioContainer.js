import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  

  render() {
    let portfolioStocks = this.props.portfolio.map(stock => <Stock stock={stock} portfolio={this.props.portfolio} handlePortfolioClick={this.props.handlePortfolioClick}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {portfolioStocks}
      </div>
    );
  }

}

export default PortfolioContainer;
