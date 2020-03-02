const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    publishedDate: { type: String, required: false },
    email: { type: String, trim: true, required: true, index: { unique: true }, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
    ISBN: { type: Number, required: true },
    price: { type: Number, required: true }
});

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;