import { Router } from "express";
import { isMongoConnected } from "../config/db.js";
import { memoryStore } from "../data/memoryStore.js";
import Booking from "../models/Booking.js";
import Listing from "../models/Listing.js";

const router = Router();

function summarize(listings, bookings) {
  const totalListings = listings.length;
  const availableListings = listings.filter((item) => item.status === "available").length;
  const monthlyRevenue = listings.reduce((sum, item) => sum + Number(item.pricePerMonth || 0) * Number(item.quantity || 1), 0);
  const averageDeposit = totalListings
    ? Math.round(listings.reduce((sum, item) => sum + Number(item.deposit || 0), 0) / totalListings)
    : 0;
  const openBookings = bookings.filter((booking) => ["pending", "approved", "active"].includes(booking.status)).length;
  const bookingRevenue = bookings.reduce((sum, booking) => sum + Number(booking.total || 0), 0);

  return {
    totalListings,
    availableListings,
    openBookings,
    bookingRevenue,
    monthlyRevenue,
    averageDeposit,
    utilizationPercent: totalListings ? Math.round(((totalListings - availableListings) / totalListings) * 100) : 0,
    bookingsByStatus: bookings.reduce((acc, booking) => {
      acc[booking.status] = (acc[booking.status] || 0) + 1;
      return acc;
    }, {}),
  };
}

router.get("/", async (_req, res, next) => {
  try {
    if (!isMongoConnected()) {
      res.json(summarize(memoryStore.listings, memoryStore.bookings));
      return;
    }

    const [listings, bookings] = await Promise.all([Listing.find().lean(), Booking.find().lean()]);
    res.json(summarize(listings, bookings));
  } catch (error) {
    next(error);
  }
});

export default router;
