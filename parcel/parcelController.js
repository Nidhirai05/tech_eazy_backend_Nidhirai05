const express = require('express');
const router = express.Router();
const parcelService = require('./parcelService');

// Create new parcel
router.post('/', (req, res) => {
  parcelService.insertParcel(req.body, (err, parcel) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(parcel);
  });
});

// Get all parcels
router.get('/', (req, res) => {
  parcelService.getParcels((err, parcels) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(parcels);
  });
});

// Update parcel status
router.put('/:id', (req, res) => {
  const { status } = req.body;
  parcelService.updateParcelStatus(req.params.id, status, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// Delete parcel
router.delete('/:id', (req, res) => {
  parcelService.deleteParcel(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

module.exports = router;


