const mongoose = require('mongoose');

const averageRatingSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    totalRating: {
        type: Number,
        required: true,
        min: 0,
    },
    totalRatingSubmition: {
        type: Number,
        required: true,
        min: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const AverageRating = mongoose.model('AverageRating', averageRatingSchema);

module.exports = AverageRating;
