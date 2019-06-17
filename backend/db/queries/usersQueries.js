const db = require('./index');

const authHelpers = require("../../auth/helpers")

function createUser(req, res, next) {
  const hash = authHelpers.createHash(req.body.password);

  db.none(
    "INSERT INTO users (username, email, password_digest) VALUES (${username}, ${email}, ${password})",
    { username: req.body.username, password: hash, email: req.body.email }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      next(err);
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).json({ message: "log out success" });
}

function loginUser(req, res) {
  delete req.user.password_digest
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if (req.user) {
    delete req.user.password_digest
    res.json({ username: req.user });
  } else {
    res.status(401).json({ err: "Nobody logged in" });
  }
}

function editUser(req, res, next) {
  db.none("UPDATE users SET balance=${balance} WHERE id=${id}", {
    balance: parseInt(req.body.balance),
    id: parseInt(req.params.id)
  })
  .then(() => {
    res.status(200).json({
      status: "Success",
      message: "You have updated your profile"
    })
  })
  .catch(err => {
    return next (err)
  })
}

function getUserBalance(req, res, next) {
  db.one("SELECT balance FROM users WHERE id=${id}", {
    id: parseInt(req.params.id)
  })
  .then((data) => {
    res.status(200).json({
      status: "Succes",
      data,
      message: "Received balance"
    })
  })
}

module.exports = {
  createUser: createUser,
  logoutUser: logoutUser,
  loginUser: loginUser,
  isLoggedIn: isLoggedIn,
  editUser: editUser,
  getUserBalance: getUserBalance
};