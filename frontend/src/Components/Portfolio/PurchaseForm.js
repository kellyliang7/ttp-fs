import React from "react";
import axios from 'axios'; 

class PurchaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      ticker: "",
      quantity: 0,
      price: 0
    }
  }
  APIUrl = (ticker) => {
    return `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=pk_6671a714d5da41efbec42097ab376ba2`
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/transactions/new/`, {
      users_id: this.props.users.id,
      ticker: this.state.ticker,
      transaction_type: "BUY",
      quantity: this.state.quantity,
      price: this.state.price
    })
      .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return(
      <>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="ticker" placeholder="Ticker" value={this.state.ticker} />
          <input onChange={this.handleChange} type="text" name="quantity" placeholder="Quantity" value={this.state.quantity} />
          <button>Buy</button>
        </form>
      </>
    )
  }
}

export default PurchaseForm;