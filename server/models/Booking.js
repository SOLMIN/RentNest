import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    contact: { type: String, required: true, trim: true },
  },
  { _id: false },
);

const BookingSchema = new mongoose.Schema(
  {
    listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
    listingName: { type: String, required: true },
    customer: { type: CustomerSchema, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    months: { type: Number, required: true, min: 1 },
    rentalAmount: { type: Number, required: true, min: 0 },
    deposit: { type: Number, required: true, min: 0 },
    platformFee: { type: Number, required: true, min: 0 },
    total: { type: Number, required: true, min: 0 },
    deliveryAddress: { type: String, trim: true },
    note: { type: String, trim: true },
    status: {
      type: String,
      enum: ["pending", "approved", "active", "completed", "cancelled"],
      default: "pending",
      index: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default mongoose.model("Booking", BookingSchema);
