import { Router } from "express";
import { isMongoConnected } from "../config/db.js";
import { memoryStore, nextId } from "../data/memoryStore.js";
import Booking from "../models/Booking.js";
import Listing from "../models/Listing.js";
import { getSettingsDocument } from "./settings.js";

const router = Router();

function dateDiffMonths(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
  return Math.max(1, diff || 1);
}

function calculateBooking(listing, settings, body) {
  const months = Number(body.months || body.days || dateDiffMonths(body.startDate, body.endDate));
  const rentalAmount = listing.pricePerMonth * months;
  const platformFee = Math.round((rentalAmount * Number(settings.platformFeePercent || 0)) / 100);
  const deposit = Number(listing.deposit);

  return {
    months,
    rentalAmount,
    deposit,
    platformFee,
    total: rentalAmount + deposit + platformFee,
  };
}

router.get("/", async (_req, res, next) => {
  try {
    if (!isMongoConnected()) {
      res.json(memoryStore.bookings);
      return;
    }

    res.json(await Booking.find().sort({ createdAt: -1 }).populate("listing").lean({ virtuals: true }));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const settings = await getSettingsDocument();

    if (!isMongoConnected()) {
      const listing = memoryStore.listings.find((item) => item.id === req.body.listingId);
      if (!listing) {
        res.status(404).json({ message: "Listing not found" });
        return;
      }

      const totals = calculateBooking(listing, settings, req.body);
      const booking = {
        id: nextId("booking"),
        listing: listing.id,
        listingName: listing.name,
        customer: {
          name: req.body.customer?.name || req.body.customerName,
          contact: req.body.customer?.contact || req.body.customerContact,
        },
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        deliveryAddress: req.body.deliveryAddress || "",
        note: req.body.note || "",
        status: settings.autoApproveBookings ? "approved" : "pending",
        ...totals,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      memoryStore.bookings.unshift(booking);
      res.status(201).json(booking);
      return;
    }

    const listing = await Listing.findById(req.body.listingId);
    if (!listing) {
      res.status(404).json({ message: "Listing not found" });
      return;
    }

    const totals = calculateBooking(listing, settings, req.body);
    const booking = await Booking.create({
      listing: listing._id,
      listingName: listing.name,
      customer: {
        name: req.body.customer?.name || req.body.customerName,
        contact: req.body.customer?.contact || req.body.customerContact,
      },
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      deliveryAddress: req.body.deliveryAddress || "",
      note: req.body.note || "",
      status: settings.autoApproveBookings ? "approved" : "pending",
      ...totals,
    });

    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const update = {};
    if (req.body.status) update.status = req.body.status;
    if (req.body.note !== undefined) update.note = req.body.note;

    if (!isMongoConnected()) {
      const index = memoryStore.bookings.findIndex((item) => item.id === req.params.id);
      if (index === -1) {
        res.status(404).json({ message: "Booking not found" });
        return;
      }
      memoryStore.bookings[index] = { ...memoryStore.bookings[index], ...update, updatedAt: new Date().toISOString() };
      res.json(memoryStore.bookings[index]);
      return;
    }

    const booking = await Booking.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!booking) {
      res.status(404).json({ message: "Booking not found" });
      return;
    }
    res.json(booking);
  } catch (error) {
    next(error);
  }
});

export default router;
