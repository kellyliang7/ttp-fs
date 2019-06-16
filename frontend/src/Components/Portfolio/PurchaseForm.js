import React from "react";
import axios from 'axios'; 

class PurchaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      ticker: "",
      quantity: 0,
      stock: {}
    }
  }
  APIUrl = (ticker) => {
    return `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=pk_6671a714d5da41efbec42097ab376ba2`
  };

  getStockInfo = () => {
    axios.get(this.APIUrl(this.state.ticker))
    .then(res => {
      this.setState({stock: res.data})
    }).catch(err => {
      console.log(err)
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/transactions/new/`, {
      users_id: this.props.user.id,
      ticker: this.state.ticker,
      transaction_type: "BUY",
      quantity: this.state.quantity,
      price: this.state.stock.latestPrice
    })
      .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  validateQuantity = () => {
    return Number.isInteger(this.state.quantity) 
  }

  validateBalance = () => {
    const balance = this.props.user.balance
    const quantity = this.state.quantity
    const price = this.state.stock.latestPrice
    if(balance >= quantity * price){
      return true 
    } else {
      return false 
    }
  }

  render() {
    return(
      <>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="ticker" placeholder="Ticker" value={this.state.ticker} onBlur={this.getStockInfo} />
          <input onChange={this.handleChange} type="text" name="quantity" placeholder="Quantity" value={this.state.quantity} />
          <button>Buy</button>
        </form>
      </>
    )
  }
}

export default PurchaseForm;