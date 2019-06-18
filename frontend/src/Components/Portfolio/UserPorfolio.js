import React from "react";
import axios from 'axios'; 
import PurchaseForm from './PurchaseForm'

const APIUrl = (ticker) => {
  return `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=pk_6671a714d5da41efbec42097ab376ba2`
};

class UserPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: []
    }
  }

  componentDidMount() {
    console.log('this is props',this.props)
    let users_id = this.props.user.id
    axios.get(`http://localhost:3001/portfolios/${users_id}`).then(res => {
      this.setState({stocks: res.data.user_portfolios})
      console.log(res.data)
    })
    .catch(err => {
      console.log(err) 
    })
  }

  displayPortfolio = () => {
    let stocks = this.state.stocks
    let displayPortfolio = stocks.map(stock => {
      return (
        <div style={{padding: 10, border: '1px solid #67b890', margin: 10}} key={stock.id}>
          <p>{stock.ticker_symbol} - {stock.quantity} shares</p>
        </div>
      )
    })
    return displayPortfolio
  }

  render(){
    return(
      <>
      <h2>Portfolio</h2>
      <div style={{display:'flex', flexFlow:'row nonwrap'}}>
        <div style={{display:'flex', flexFlow:'column'}}>
        {this.displayPortfolio()}
        </div>
        <PurchaseForm 
        user={this.props.user}
        />
      </div>
      </>
    )
  }
}

export default UserPortfolio;