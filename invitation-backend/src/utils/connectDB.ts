import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    const {
        MONGO_DB_USERNAME: userName,
        MONGO_DB_PASSWORD: password,
        MONGO_DB_NAME: dbName,
    } = process.env

    if (!userName || !password || !dbName) {
        console.error('MongoDB connection parameters are missing.')
        process.exit(1)
    }

    const uri = `mongodb+srv://${userName}:${password}@cluster0.akgsv.mongodb.net/${dbName}?retryWrites=true&w=majority`

    try {
        await mongoose.connect(uri)
        console.log('Successfully connected to MongoDB')
    } catch (error) {
        console.error('Failed to connect to MongoDB')
        console.error(error)
    }
}

export default connectDB
