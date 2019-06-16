const db = require('./index.js')

const getUserPortfolios = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any("SELECT * FROM user_portfolios WHERE users_id=$1", userId)
    .then(user_porfolios => {
      res.status(200).json({
        status: "Success",
        user_porfolios,
        message: "Received user_porfolios"
      })
    })
    .catch(err => {
      return next(err);
    })
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

module.exports = { getUserPortfolios, createPortfolioItem, updatePortfolioItem }