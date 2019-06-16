const express = require('express');
const router = express.Router();
const { getUserPortfolios, createPortfolioItem, updatePortfolioItem } = require('../db/queries/userPortfoliosQueries')

router.get('/:id', getUserPortfolios);
router.post('/new', createPortfolioItem);
router.patch('/update', updatePortfolioItem);

module.exports = router;

