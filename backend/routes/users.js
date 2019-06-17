var express = require('express');
var router = express.Router();
const db = require("../db/queries/usersQueries");
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");

/* GET users listing. */
router.post("/new", db.createUser);
router.post("/login", passport.authenticate("local", {}), db.loginUser);
router.get("/isLoggedIn", db.isLoggedIn);
router.patch("/update/:id", db.editUser);
router.get("/logout", loginRequired, db.logoutUser);
router.get("/balance/:id", db.getUserBalance);

module.exports = router;
