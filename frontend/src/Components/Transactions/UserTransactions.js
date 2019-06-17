import React from "react";
import axios from 'axios'; 
import '../../App.css'

class UserTransactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
    let id = this.props.user.id 
    axios.get(`http://localhost:3001/transactions/${id}`)
    .then(res => {
      this.setState({transactions: res.data.transactions})
    })
    .then(() => {
      console.log(this.state)
    })
    .catch(err => {
      console.log(err) 
    })
  }

  displayTransactions = () => {
    let transactions = this.state.transactions
    let displayTransactions = transactions.map(transaction => {
      return (
        <div>
          <p>ticker_symbol={transaction.ticker_symbol}</p>
          <p>quantity={transaction.quantity}</p>
          <p>price={transaction.price}</p>
        </div>
      )
    })
    return displayTransactions
  }

  render() {
    return(
      <div>
        <h1>UserTransactions</h1>
        {this.displayTransactions()}
      </div>
    )
  }
}

export default UserTransactions;