const Outfit = require('../models/Outfit');

exports.saveOutfit = async (req, res) => {
  try {
    console.log("Saving outfit with data:", req.body);  // Debug log

    const { gender, occasion, weather, suggestion } = req.body;

    const newOutfit = new Outfit({
      gender,
      occasion,
      weather,
      suggestion
    });

    await newOutfit.save();

    res.status(201).json({ message: 'Outfit saved successfully!' });
  } catch (error) {
    console.error('Error saving outfit:', error);
    res.status(500).json({ message: 'Failed to save outfit' });
  }
};

exports.getOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find();
    res.json(outfits);
  } catch (error) {
    console.error('Error fetching outfits:', error);
    res.status(500).json({ message: 'Failed to fetch outfits' });
  }
};
