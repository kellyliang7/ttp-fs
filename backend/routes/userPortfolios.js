const express = require('express');
const router = express.Router();
const { getUserPortfolios, createPortfolioItem, getPortfolioItem, updatePortfolioItem } = require('../db/queries/userPortfoliosQueries')

router.get('/:id', getUserPortfolios);
router.get('/:users_id/:ticker_symbol', getPortfolioItem)
router.post('/new', createPortfolioItem);
router.patch('/update', updatePortfolioItem);

module.exports = router;

