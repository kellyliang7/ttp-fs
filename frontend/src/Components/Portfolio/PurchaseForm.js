import React from "react";
import axios from 'axios'; 
import '../../App.css'


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
      this.setState({stock: {}})
      console.log(err)
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.validateBalance() && this.validateTicker() && this.validateQuantity()){
      return axios.post(`http://localhost:3001/transactions/new/`, {
        users_id: this.props.user.id,
        ticker: this.state.ticker,
        transaction_type: "BUY",
        quantity: this.state.quantity,
        price: this.state.stock.latestPrice
      })
        .then(() => {
          this.updateBalance()
      }).catch(err => {
        console.log(err)
      })
    } else {
      alert("Please enter valid information!")
    }
  }

  validateQuantity = () => {
    return Number.isInteger(parseInt(this.state.quantity)) 
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

  validateTicker = () => {
    const ticker = this.state.stock
    if(Object.entries(ticker).length === 0){
      return false 
    } else {
      return true 
    }
  }

  updateBalance = () => {
    const balance = this.state.balance
    console.log('THIS IS BALANCE', balance)
    const quantity = this.state.quantity
    const price = this.state.stock.latestPrice
    const total = quantity * price 
    let id = this.props.user.id
    axios.patch(`http://localhost:3001/users/update/${id}`, {
      balance: balance-total
    })
    .then(() => {
      this.getBalance()
    }).catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getBalance()
  }

  getBalance = () => {
    let id = this.props.user.id 
    axios.get(`http://localhost:3001/users/balance/${id}`)
    .then(res => {
      this.setState({balance: res.data.data.balance})
    })
    .then(() => {
      console.log(this.state)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return(
      <div className="portfolioPage">
        <div className="formPage">
          <h3>Cash Balance: ${this.state.balance}</h3>
          <form className="portfolioForm"onSubmit={this.handleSubmit}>
            <input className="formInput" onChange={this.handleChange} type="text" name="ticker" placeholder="Ticker" value={this.state.ticker} onBlur={this.getStockInfo} />
            <input className="formInput" onChange={this.handleChange} type="text" name="quantity" placeholder="Quantity" value={this.state.quantity} />
            <button className="submit">Buy</button>
          </form>
        </div>
      </div>
    )
  }
}

export default PurchaseForm;