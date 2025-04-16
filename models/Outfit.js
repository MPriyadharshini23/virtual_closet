
const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
  gender: String,
  occasion: String,
  weather: String,
  suggestion: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Outfit', outfitSchema);
