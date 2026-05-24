import { Router } from "express";
import { isMongoConnected } from "../config/db.js";
import { memoryStore, nextId } from "../data/memoryStore.js";
import Category from "../models/Category.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    if (!isMongoConnected()) {
      res.json(memoryStore.categories);
      return;
    }

    res.json(await Category.find().sort({ name: 1 }).lean({ virtuals: true }));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name,
      icon: req.body.icon || "package",
      description: req.body.description || "",
      active: req.body.active !== false,
    };

    if (!isMongoConnected()) {
      const category = { id: nextId("category"), ...payload, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      memoryStore.categories.push(category);
      res.status(201).json(category);
      return;
    }

    res.status(201).json(await Category.create(payload));
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const update = {
      ...(req.body.name !== undefined && { name: req.body.name }),
      ...(req.body.icon !== undefined && { icon: req.body.icon }),
      ...(req.body.description !== undefined && { description: req.body.description }),
      ...(req.body.active !== undefined && { active: req.body.active }),
    };

    if (!isMongoConnected()) {
      const index = memoryStore.categories.findIndex((item) => item.id === req.params.id);
      if (index === -1) {
        res.status(404).json({ message: "Category not found" });
        return;
      }
      memoryStore.categories[index] = { ...memoryStore.categories[index], ...update, updatedAt: new Date().toISOString() };
      res.json(memoryStore.categories[index]);
      return;
    }

    const category = await Category.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    if (!isMongoConnected()) {
      const before = memoryStore.categories.length;
      memoryStore.categories = memoryStore.categories.filter((item) => item.id !== req.params.id);
      res.json({ deleted: before !== memoryStore.categories.length });
      return;
    }

    const result = await Category.findByIdAndDelete(req.params.id);
    res.json({ deleted: Boolean(result) });
  } catch (error) {
    next(error);
  }
});

export default router;
