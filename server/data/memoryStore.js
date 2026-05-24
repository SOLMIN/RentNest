import { seedCategories, seedListings, seedSettings } from "./seedData.js";

const clone = (value) => JSON.parse(JSON.stringify(value));

const withId = (items, prefix) =>
  items.map((item, index) => ({
    id: `${prefix}-${index + 1}`,
    ...clone(item),
    createdAt: new Date(Date.now() - index * 86400000).toISOString(),
    updatedAt: new Date().toISOString(),
  }));

export const memoryStore = {
  listings: withId(seedListings, "listing"),
  categories: withId(seedCategories, "category"),
  bookings: [],
  settings: { id: "settings-platform", ...clone(seedSettings), updatedAt: new Date().toISOString() },
};

export function resetMemoryStore() {
  memoryStore.listings = withId(seedListings, "listing");
  memoryStore.categories = withId(seedCategories, "category");
  memoryStore.bookings = [];
  memoryStore.settings = { id: "settings-platform", ...clone(seedSettings), updatedAt: new Date().toISOString() };
}

export function nextId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}
