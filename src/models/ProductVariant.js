const mongoose = require('mongoose');

const priceTableSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    eachPriceWithRange: [
        {
            unitNumber: {
                type: Number,
                required: true,
                min: 0,
            },
            unitPrice: {
                type: Number,
                required: true,
                min: 0,
            },
        },
    ],
    minUnitsToOrder: {
        type: Number,
        required: true,
        min: 0,
    },
    unitAdditionalPrintPrice: {
        type: Number,
        required: true,
        min: 0,
    },
});

priceTableSchema.pre('save', async function (next) {
    this.eachPriceWithRange.sort((a, b) => a.unitNumber - b.unitNumber);
    next();
});

const ProductPriceTable = mongoose.model('ProductPriceTable', priceTableSchema);

module.exports = ProductPriceTable;
