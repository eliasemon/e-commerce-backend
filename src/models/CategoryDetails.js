const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
    },
    image: {
        link: {
            type: String,
            required: true,
            validate: {
                validator: (value) => /^(http|https):\/\/[^ "]+$/.test(value),
                message: 'Invalid URL format',
            },
        },
        alt: {
            type: String,
        },
        storedId: {
            type: String,
            required: true,
        },
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        required: true,
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

categorySchema.pre('save', async function (next) {
    if (this.isModified('status') && this.status.type === 'published') {
        // Check if all required fields are filled
        const requiredFields = ['title', 'image', 'status']; // Adjust as needed
        const missingFields = requiredFields.filter((field) => !this[field]);

        if (missingFields.length > 0) {
            const missingFieldNames = missingFields.join(', ');
            throw new Error(
                `Cannot publish category. Missing required fields: ${missingFieldNames}`,
            );
        }
    }

    next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
