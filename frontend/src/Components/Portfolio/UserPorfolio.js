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
      this.setState({stocks: res.user_portfolios})
    })
  }

  render(){
    return(
      <div>
        <h1>List of stocks in portfolio</h1>
        <PurchaseForm 
        user={this.props.user}
        />
      </div>
    )
  }
}

export default UserPortfolio;