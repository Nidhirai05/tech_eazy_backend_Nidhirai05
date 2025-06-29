const express = require('express');
const app = express();
const parcelRoutes = require('./parcel/parcelController');

app.use(express.json());
app.use('/api/parcels', parcelRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Zero Mile Delivery API running on port ${PORT}`);
});

