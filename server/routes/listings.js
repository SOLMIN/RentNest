import { Router } from "express";
import { isMongoConnected } from "../config/db.js";
import { memoryStore, nextId } from "../data/memoryStore.js";
import Listing from "../models/Listing.js";

const router = Router();

function normalizeListingPayload(body) {
  const payload = {};

  if (body.name !== undefined) payload.name = body.name;
  if (body.category !== undefined) payload.category = body.category;
  if (body.intent !== undefined) payload.intent = body.intent;
  if (body.area !== undefined) payload.area = body.area;
  if (body.city !== undefined) payload.city = body.city;
  if (body.pricePerMonth !== undefined) payload.pricePerMonth = Number(body.pricePerMonth);
  if (body.pricePerDay !== undefined && body.pricePerMonth === undefined) payload.pricePerMonth = Number(body.pricePerDay);
  if (body.deposit !== undefined) payload.deposit = Number(body.deposit);
  if (body.quantity !== undefined) payload.quantity = Number(body.quantity);
  if (body.status !== undefined) payload.status = body.status;
  if (body.condition !== undefined) payload.condition = body.condition;
  if (body.rating !== undefined) payload.rating = Number(body.rating);
  if (body.deliveryAvailable !== undefined) payload.deliveryAvailable = Boolean(body.deliveryAvailable);
  if (body.imageUrl !== undefined) payload.imageUrl = body.imageUrl;
  if (body.description !== undefined) payload.description = body.description;
  if (body.tags !== undefined) {
    payload.tags = Array.isArray(body.tags) ? body.tags : String(body.tags).split(",").map((tag) => tag.trim()).filter(Boolean);
  }

  const hasOwner =
    body.owner !== undefined ||
    body.ownerName !== undefined ||
    body.ownerEmail !== undefined ||
    body.ownerPhone !== undefined ||
    body.ownerVerified !== undefined;

  if (hasOwner) {
    payload.owner = {
      name: body.owner?.name || body.ownerName || "Owner",
      email: body.owner?.email || body.ownerEmail || "",
      phone: body.owner?.phone || body.ownerPhone || "",
      verified: Boolean(body.owner?.verified ?? body.ownerVerified),
    };
  }

  return payload;
}

function applyMemoryFilters(items, query) {
  const search = String(query.search || "").trim().toLowerCase();
  const location = String(query.location || "").trim().toLowerCase();
  const category = query.category || "all";
  const intent = query.intent || "all";
  const maxPrice = Number(query.maxPrice || 0);
  const sort = query.sort || "recommended";
  const includeAll = query.includeAll === "true";

  const filtered = items.filter((item) => {
    const haystack = [item.name, item.category, item.description, item.owner?.name, ...(item.tags || [])].join(" ").toLowerCase();
    const matchesSearch = !search || haystack.includes(search);
    const matchesLocation = !location || [item.area, item.city].join(" ").toLowerCase().includes(location);
    const matchesCategory = category === "all" || !category || item.category === category;
    const matchesIntent = intent === "all" || !intent || item.intent === intent;
    const matchesPrice = !maxPrice || item.pricePerMonth <= maxPrice;
    const matchesVerified = query.verified !== "true" || item.owner?.verified;
    const matchesDelivery = query.delivery !== "true" || item.deliveryAvailable;
    const matchesStatus = includeAll ? true : item.status === "available";

    return matchesSearch && matchesLocation && matchesCategory && matchesIntent && matchesPrice && matchesVerified && matchesDelivery && matchesStatus;
  });

  return filtered.sort((a, b) => {
    if (sort === "price-low") return a.pricePerMonth - b.pricePerMonth;
    if (sort === "rating") return b.rating - a.rating;
    return Number(b.owner?.verified) - Number(a.owner?.verified) || b.rating - a.rating;
  });
}

function buildMongoQuery(query) {
  const filter = {};

  if (query.includeAll !== "true") {
    filter.status = "available";
  }

  if (query.search) {
    const pattern = new RegExp(query.search, "i");
    filter.$or = [{ name: pattern }, { category: pattern }, { description: pattern }, { tags: pattern }, { "owner.name": pattern }];
  }

  if (query.location) {
    const location = new RegExp(query.location, "i");
    filter.$and = [...(filter.$and || []), { $or: [{ area: location }, { city: location }] }];
  }

  if (query.category && query.category !== "all") filter.category = query.category;
  if (query.intent && query.intent !== "all") filter.intent = query.intent;
  if (query.maxPrice) filter.pricePerMonth = { $lte: Number(query.maxPrice) };
  if (query.verified === "true") filter["owner.verified"] = true;
  if (query.delivery === "true") filter.deliveryAvailable = true;

  return filter;
}

function buildMongoSort(sort) {
  if (sort === "price-low") return { pricePerMonth: 1 };
  if (sort === "rating") return { rating: -1 };
  return { "owner.verified": -1, rating: -1, createdAt: -1 };
}

router.get("/", async (req, res, next) => {
  try {
    if (!isMongoConnected()) {
      res.json(applyMemoryFilters(memoryStore.listings, req.query));
      return;
    }

    const listings = await Listing.find(buildMongoQuery(req.query)).sort(buildMongoSort(req.query.sort)).lean({ virtuals: true });
    res.json(listings);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const payload = {
      intent: "Home",
      city: "Pune",
      quantity: 1,
      status: "available",
      condition: "Good",
      rating: 4.5,
      deliveryAvailable: true,
      imageUrl: "",
      ...normalizeListingPayload(req.body),
    };

    if (!isMongoConnected()) {
      const listing = { id: nextId("listing"), ...payload, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      memoryStore.listings.unshift(listing);
      res.status(201).json(listing);
      return;
    }

    const listing = await Listing.create(payload);
    res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const payload = normalizeListingPayload(req.body);
    const update = Object.fromEntries(
      Object.entries(payload).filter(([, value]) => value !== undefined && value !== null && value !== "" && !Number.isNaN(value)),
    );

    if (!isMongoConnected()) {
      const index = memoryStore.listings.findIndex((item) => item.id === req.params.id);
      if (index === -1) {
        res.status(404).json({ message: "Listing not found" });
        return;
      }
      memoryStore.listings[index] = { ...memoryStore.listings[index], ...update, updatedAt: new Date().toISOString() };
      res.json(memoryStore.listings[index]);
      return;
    }

    const listing = await Listing.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!listing) {
      res.status(404).json({ message: "Listing not found" });
      return;
    }
    res.json(listing);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    if (!isMongoConnected()) {
      const before = memoryStore.listings.length;
      memoryStore.listings = memoryStore.listings.filter((item) => item.id !== req.params.id);
      res.json({ deleted: before !== memoryStore.listings.length });
      return;
    }

    const result = await Listing.findByIdAndDelete(req.params.id);
    res.json({ deleted: Boolean(result) });
  } catch (error) {
    next(error);
  }
});

export default router;
