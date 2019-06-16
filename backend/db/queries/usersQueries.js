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

module.exports = {
  createUser: createUser,
  logoutUser: logoutUser,
  loginUser: loginUser,
  isLoggedIn: isLoggedIn
};