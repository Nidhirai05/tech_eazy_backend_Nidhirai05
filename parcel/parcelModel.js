const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/parcel.db');

// Schema creation
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS parcels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vendor_id INTEGER,
    customer_name TEXT NOT NULL,
    address TEXT NOT NULL,
    contact_number TEXT,
    size TEXT,
    weight REAL,
    status TEXT DEFAULT 'pending'
  )`);
});

module.exports = db;




