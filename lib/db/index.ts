/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/nextauth'

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

const cached = (global as any).mongoose || { conn: null, promise: null }

export async function connectToDatabase() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any)
  }
  cached.conn = await cached.promise
  return cached.conn
}
