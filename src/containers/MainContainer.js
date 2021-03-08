import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filter: [],
    sort: ""
  }

  handleSort = (event) => {
    this.setState({
      sort: event.target.value
    })

  }
  
  handleFilter = (event) => {
    let filter = event.target.value
    this.setState((prevState) => ({
      filter: prevState.stocks.filter(stock => stock.type === filter)
    }))
  }

  handleClick = (id) => {
    let stock = this.state.stocks.find(stock => stock.id === id)
    this.setState((prevState) => ({
      portfolio: [...prevState.portfolio, stock]
    }))
  }

  handlePortfolioClick = (id) => {
    let stocks = this.state.portfolio.filter(stock => stock.id !== id)
    this.setState({
      portfolio: stocks
    })
  }

  checkFilter = () => {
    if (this.state.filter.length === 0) {
      return false
    } else {
      return true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(res => this.setState({stocks: res}))
  }

  render() {
    return (
      <div>
        <SearchBar stocks={this.state.stocks} handleFilter={this.handleFilter} handleSort={this.handleSort} sort={this.state.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.checkFilter() ? this.state.filter : this.state.stocks} handleClick={this.handleClick} sort={this.state.sort}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} stocks={this.state.stocks} handlePortfolioClick={this.handlePortfolioClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
