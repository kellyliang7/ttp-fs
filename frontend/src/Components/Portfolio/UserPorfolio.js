import React from "react";
import axios from 'axios'; 

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
    // let users_id = this.props.users_id
    // axios.get(`/portfolios/${users_id}`).then(res => {
    //   this.setState({stocks: res.user_portfolios})
    // })
  }

  render(){
    return(
      <div>
        <h1>List of stocks in portfolio</h1>
      </div>
    )
  }
}

export default UserPortfolio;