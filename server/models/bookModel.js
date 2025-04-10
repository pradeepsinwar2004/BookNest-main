import mongoose from 'mongoose';
import validator from 'validator';

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Book title is required'],
        maxlength: [50, 'Book title cannot exceed 50 characters'],
        unique: true,
        trim: true
    },
    author: {
        type: String,
        required: [true, 'Book author is required'],
        maxlength: [100, 'Book author cannot exceed 100 characters'],
        trim: true
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        trim: true
    },
    year: {
        type: Number,
        required: true,
        min: [1000, 'Year must be a valid 4-digit number'],
        max: [new Date().getFullYear(), 'Year cannot be in the future'],
        validate: {
            validator: Number.isInteger,
            message: 'Year must be an integer'
        }
    },
    pages: {
        type: Number,
        required: true,
        min: [1, 'Pages must be at least 1'],
        validate: {
            validator: Number.isInteger,
            message: 'Pages must be an integer'
        }
    },
    publisher: {
        type: String,
        required: [true, 'Publisher is required'],
        trim: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', BookSchema);

export default Book;
