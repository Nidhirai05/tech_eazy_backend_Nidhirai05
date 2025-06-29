const db = require('./parcelModel');

// INSERT
exports.insertParcel = (parcel, callback) => {
  const { vendor_id, customer_name, address, contact_number, size, weight } = parcel;
  db.run(
    `INSERT INTO parcels (vendor_id, customer_name, address, contact_number, size, weight)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [vendor_id, customer_name, address, contact_number, size, weight],
    function (err) {
      callback(err, { id: this.lastID, ...parcel });
    }
  );
};

// GET ALL
exports.getParcels = (callback) => {
  db.all(`SELECT * FROM parcels`, [], callback);
};

// UPDATE
exports.updateParcelStatus = (id, status, callback) => {
  db.run(
    `UPDATE parcels SET status = ? WHERE id = ?`,
    [status, id],
    function (err) {
      callback(err, { updated: this.changes });
    }
  );
};

// DELETE
exports.deleteParcel = (id, callback) => {
  db.run(`DELETE FROM parcels WHERE id = ?`, [id], function (err) {
    callback(err, { deleted: this.changes });
  });
};

