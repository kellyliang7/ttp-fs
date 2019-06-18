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
          <p>BUY ({transaction.ticker_symbol}) - {transaction.quantity} shares @ {transaction.price}</p>
        </div>
      )
    })
    return displayTransactions
  }

  render() {
    return(
      <div>
        <h2>Transactions</h2>
        {this.displayTransactions()}
      </div>
    )
  }
}

export default UserTransactions;