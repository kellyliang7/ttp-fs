const express = require('express');
const router = express.Router();
const { getUserTransactions, createTransaction } = require('../db/queries/transactionsQueries.js')

router.get("/:id", getUserTransactions);
router.post("/", createTransaction)

module.exports = router; 
