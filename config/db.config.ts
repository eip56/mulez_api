import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB Connected')
  } catch (error: any) {
    console.error(error.message)
    process.exit(1)
  }
}

export default connectDB
