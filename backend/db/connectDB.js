const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.set("strictQuery", false);
let db = null;

const connectDB = async () => {
    try {
        db = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};

const getDB = async () => {
    if (!db) {
        await connectDB();
    }
    return db;
}

module.exports = {connectDB, getDB};