
const express = require('express');
const router = express.Router();
const outfitController = require('../controllers/outfitController');
const { saveOutfit } = require('../controllers/outfitController');

router.post('/', outfitController.saveOutfit); 

router.get('/', outfitController.getOutfits); 

module.exports = router;
