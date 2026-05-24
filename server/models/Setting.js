import mongoose from "mongoose";

const SettingSchema = new mongoose.Schema(
  {
    singleton: { type: String, default: "platform", unique: true },
    platformName: { type: String, default: "RentNest", trim: true },
    city: { type: String, default: "Bengaluru", trim: true },
    currency: { type: String, default: "INR", trim: true },
    platformFeePercent: { type: Number, default: 8, min: 0, max: 100 },
    defaultDepositPercent: { type: Number, default: 35, min: 0, max: 500 },
    lateFeePerDay: { type: Number, default: 250, min: 0 },
    cancellationWindowHours: { type: Number, default: 24, min: 0 },
    minRentalDays: { type: Number, default: 1, min: 1 },
    maxRentalDays: { type: Number, default: 30, min: 1 },
    deliveryEnabled: { type: Boolean, default: true },
    ownerVerificationRequired: { type: Boolean, default: true },
    autoApproveBookings: { type: Boolean, default: false },
    supportEmail: { type: String, default: "", trim: true },
    supportPhone: { type: String, default: "", trim: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default mongoose.model("Setting", SettingSchema);
