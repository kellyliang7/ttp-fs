const db = require('./index.js')

const getUserPortfolios = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any("SELECT * FROM user_portfolios WHERE users_id=$1", userId)
    .then(user_portfolios => {
      res.status(200).json({
        status: "Success",
        user_portfolios,
        message: "Received user_portfolios"
      })
    })
    .catch(err => {
      return next(err);
    })
}

const getPortfolioItem = (req, res, next) => {
  let userId = parseInt(req.params.users_id);
  let ticker_symbol = req.params.ticker_symbol;
  console.log(userId, ticker_symbol)
  db.any("SELECT * FROM user_portfolios WHERE users_id=$1 AND ticker_symbol=$2",
   [userId, ticker_symbol])
   .then((portfolioItem) => {
    res.status(200).json({
      status: "Success",
      portfolioItem,
      message: "Received portfolio item"
    });
  })
  .catch(err => {
    return next(err);
  });
}

const createPortfolioItem = (req, res, next) => {
  const values = Object.values(req.body)
  db.any("INSERT INTO user_portfolios(users_id, ticker_symbol, quantity, purchase_price) VALUES($1, $2, $3, $4)",
   values)
  .then(() => {
    res.status(200).json({
      status: "Success",
      message: "Added portfolio item"
    });
  })
  .catch(err => {
    return next(err);
  });
}

const updatePortfolioItem = (req, res, next) => {
  const values = Object.values(req.body)
  db.any("UPDATE user_portfolios SET quantity = $1 WHERE users_id = $2 AND ticker_symbol=$3",
   values)
   .then(() => {
    res.status(200).json({
      status: "Success",
      message: "Updated portfolio item"
    });
  })
  .catch(err => {
    return next(err);
  });
}

module.exports = { getUserPortfolios, createPortfolioItem, updatePortfolioItem, getPortfolioItem }