const express = require('express');

const { 
  getGroceries,
  getGroceriesSearch,
  getGrocery, 
  createGrocery, 
  updateGrocery,
  deleteGrocery,
} = require('../controllers/groceries');

const router = express.Router();

router.get('/', getGroceries);
router.get('/search', getGroceriesSearch);
router.get('/:id', getGrocery);
router.post('/', createGrocery);
router.patch('/:id', updateGrocery);
router.delete('/:id', deleteGrocery);

module.exports = router;