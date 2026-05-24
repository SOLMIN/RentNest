import { Router } from "express";
import { isMongoConnected } from "../config/db.js";
import { memoryStore } from "../data/memoryStore.js";
import Setting from "../models/Setting.js";

const router = Router();

const mutableFields = [
  "platformName",
  "city",
  "currency",
  "platformFeePercent",
  "defaultDepositPercent",
  "lateFeePerDay",
  "cancellationWindowHours",
  "minRentalDays",
  "maxRentalDays",
  "deliveryEnabled",
  "ownerVerificationRequired",
  "autoApproveBookings",
  "supportEmail",
  "supportPhone",
];

export async function getSettingsDocument() {
  if (!isMongoConnected()) {
    return memoryStore.settings;
  }

  return Setting.findOneAndUpdate(
    { singleton: "platform" },
    { $setOnInsert: { singleton: "platform" } },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  );
}

router.get("/", async (_req, res, next) => {
  try {
    res.json(await getSettingsDocument());
  } catch (error) {
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const update = Object.fromEntries(Object.entries(req.body).filter(([key]) => mutableFields.includes(key)));

    if (!isMongoConnected()) {
      memoryStore.settings = { ...memoryStore.settings, ...update, updatedAt: new Date().toISOString() };
      res.json(memoryStore.settings);
      return;
    }

    const settings = await Setting.findOneAndUpdate(
      { singleton: "platform" },
      { $set: update },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    );

    res.json(settings);
  } catch (error) {
    next(error);
  }
});

export default router;
