import "dotenv/config";
import mongoose from "mongoose";
import Category from "./models/Category.js";
import Listing from "./models/Listing.js";
import Setting from "./models/Setting.js";
import Booking from "./models/Booking.js";
import { seedCategories, seedListings, seedSettings } from "./data/seedData.js";

if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is required to seed MongoDB.");
  process.exit(1);
}

await mongoose.connect(process.env.MONGODB_URI);

await Promise.all([Category.deleteMany({}), Listing.deleteMany({}), Setting.deleteMany({}), Booking.deleteMany({})]);
await Category.insertMany(seedCategories);
await Listing.insertMany(seedListings);
await Setting.create({ singleton: "platform", ...seedSettings });

console.log("MongoDB seeded with RentNest demo data.");
await mongoose.disconnect();
