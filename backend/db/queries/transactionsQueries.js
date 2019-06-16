const { db } = require('./index.js')

const getUserTransactions = (req, res, next) => {
  let userId = parseInt(req.params.id)
  db.any("SELECT * FROM user_transactions WHERE users_id=${userId}", {userId})
    .then(transactions => {
      res.status(200).json({
        status: "Success",
        transactions,
        message: "Received all transactions"
      });
    })
    .catch(err => {
      return next(err);
  });
}

const createTransaction = (req, res, next) => {
  db.none("INSERT INTO user_transactions(users_id, ticker_symbol, transaction_type, quantity, price) VALUES(${users_id}, ${ticker_symbol), ${transaction_type}, ${quantity}, ${price})",
    req.body
  )
  .then(() => {
    res.status(200).json({
      status: "Success",
      message: "Created a transaction"
    });
  })
  .catch(err => {
    console.log(err)
    return next(err);
  });
};

module.exports = { getUserTransactions, createTransaction }