
const runChorusAnalysis = require('../chorusEngine');
module.exports = async (req, res) => {
  const imageData = req.body?.image || null;
  if (!imageData) {
    return res.status(400).json({ error: "No image data provided" });
  }
  const result = runChorusAnalysis(imageData);
  return res.status(200).json(result);
};
