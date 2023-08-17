const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // You need to define the 'Category' schema for this reference
    },
    categoryName: {
        type: String,
    },
    shortDetails: {
        type: String,
    },
    fullDetails: {
        type: String,
    },
    productSpecs: {
        type: mongoose.Schema.Types.Mixed, // Allow any object
    },
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    unitLowestprice: {
        type: Number,
    },
    height: {
        type: Number,
    },
    width: {
        type: Number,
    },
    imprintedAreaHeight: {
        type: Number,
    },
    imprintedAreaWidth: {
        type: Number,
    },
    imprintedAreaPositionX: {
        type: Number,
    },
    imprintedAreaPositionY: {
        type: Number,
    },
    media: [
        {
            mediaDetails: {
                link: {
                    type: String,
                    required: true,
                    validate: {
                        validator: (value) =>
                            /^(http|https):\/\/[^ "]+$/.test(value),
                        message: 'Invalid URL format',
                    },
                },
                alt: {
                    type: String,
                    required: true,
                },
                id: {
                    type: String,
                    required: true,
                },
            },
            type: {
                type: String,
                enum: ['image', 'video'],
                required: true,
            },
        },
    ],
    averageRatingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AverageRating',
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        required: true,
    },
});

productSchema.pre('save', async function (next) {
    if (this.isModified('status') && this.status === 'published') {
        // Check if all required fields are filled
        const requiredFields = [
            'title',
            'categoryId' /* ... other required fields ... */,
        ];
        const missingFields = requiredFields.filter((field) => !this[field]);

        if (missingFields.length > 0) {
            const missingFieldNames = missingFields.join(', ');
            throw new Error(
                `Cannot publish product. Missing required fields: ${missingFieldNames}`,
            );
        }
    }

    next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
