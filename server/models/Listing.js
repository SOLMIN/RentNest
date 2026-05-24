import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    verified: { type: Boolean, default: false },
  },
  { _id: false },
);

const ListingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true, index: true },
    intent: { type: String, enum: ["Home", "Event", "Move-in"], default: "Home", index: true },
    area: { type: String, required: true, trim: true, index: true },
    city: { type: String, default: "Bengaluru", trim: true },
    pricePerMonth: { type: Number, required: true, min: 0 },
    deposit: { type: Number, required: true, min: 0 },
    quantity: { type: Number, default: 1, min: 0 },
    status: {
      type: String,
      enum: ["available", "pending-review", "rented", "maintenance", "hidden"],
      default: "available",
      index: true,
    },
    condition: { type: String, default: "Good", trim: true },
    rating: { type: Number, default: 4.5, min: 0, max: 5 },
    deliveryAvailable: { type: Boolean, default: true },
    imageUrl: { type: String, default: "" },
    description: { type: String, required: true, trim: true },
    tags: [{ type: String, trim: true }],
    owner: { type: OwnerSchema, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default mongoose.model("Listing", ListingSchema);
