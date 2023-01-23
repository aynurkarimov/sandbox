const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: [2, 'The minimum length is 2']
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'The price must be above 0'],
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ['fruit', 'vegetable', 'beverage'],
      message: "{VALUE} isn't supported"
    } 
  }
})

module.exports = mongoose.model('Grocery', grocerySchema);