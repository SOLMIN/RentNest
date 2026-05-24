import mongoose from "mongoose";

let usingMemoryFallback = false;

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;
  const allowFallback = process.env.ALLOW_MEMORY_FALLBACK !== "false";

  if (!uri) {
    usingMemoryFallback = true;
    console.warn("MONGODB_URI is not set. API is using the in-memory demo store.");
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3500,
    });
    usingMemoryFallback = false;
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    if (!allowFallback) {
      throw error;
    }

    usingMemoryFallback = true;
    console.warn(`MongoDB unavailable. API is using the in-memory demo store. ${error.message}`);
  }
}

export function isMongoConnected() {
  return mongoose.connection.readyState === 1 && !usingMemoryFallback;
}

export function dataMode() {
  return isMongoConnected() ? "mongodb" : "memory";
}
