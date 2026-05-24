import { Repeat, ShieldCheck, Sparkles, Truck } from "lucide-react";

export const emptyListing = {
  name: "",
  category: "Furniture",
  intent: "Home",
  area: "",
  city: "Pune",
  pricePerMonth: 4500,
  deposit: 1200,
  quantity: 1,
  status: "available",
  condition: "Good",
  rating: 4.6,
  deliveryAvailable: true,
  imageUrl: "",
  description: "",
  tags: "",
  ownerName: "",
  ownerEmail: "",
  ownerPhone: "",
  ownerVerified: true,
};

export const categoryImages = {
  Furniture: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=82",
  Electronics: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=1000&q=82",
  Utensils: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=82",
  Appliances: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=82",
  Event: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=82",
};

export const serviceLocalities = ["Hinjewadi Phase 1", "Hinjewadi Phase 2", "Hinjewadi Phase 3", "Wakad", "Aundh", "Baner"];

export const promiseTiles = [
  ["72-hour setup", "Delivery, placement, and install windows inspired by premium rental flows.", Truck],
  ["Flexible plans", "Monthly, quarterly, and move-in bundle pricing for short stays and new apartments.", Repeat],
  ["Verified supply", "Owner checks, deposits, condition notes, and admin approval before going live.", ShieldCheck],
];

export const bundlePlans = [
  { name: "Work-from-home kit", area: "Baner + Wakad", price: 1299, items: "Desk, chair, monitor stand, lamp" },
  { name: "1BHK move-in bundle", area: "Hinjewadi", price: 5299, items: "Bed, mattress, wardrobe, desk, fridge" },
  { name: "Weekend event kit", area: "Aundh + Baner", price: 2499, items: "Projector, speaker, dinner set, lights" },
];

export const heroSlides = [
  {
    title: "Move-in packages",
    copy: "Furniture, fridge, washer, desk, and mattress bundles for new homes near Hinjewadi.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=82",
    tag: "From ₹5,299/month",
  },
  {
    title: "Work and study kits",
    copy: "Desk, chair, monitor stand, and lamps for hybrid workers in Baner and Wakad.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=82",
    tag: "Setup in 72h",
  },
  {
    title: "Weekend event rentals",
    copy: "Projectors, speakers, dinner sets, and lights for house parties and office evenings.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=82",
    tag: "Event-ready",
  },
];

export const storyCards = [
  ["Zero-hassle setup", "Delivery, placement, basic installation, and pickup support in your locality."],
  ["Maintenance included", "Admin can track condition, owner verification, and service notes from inventory."],
  ["Rent or list", "Customers can rent monthly. Owners can submit products for admin review."],
  ["Bundle-first shopping", "Curated packages help new Pune renters furnish faster."],
];

export const statusLabels = {
  available: "Available",
  "pending-review": "Pending review",
  rented: "Rented",
  maintenance: "Maintenance",
  hidden: "Hidden",
  pending: "Pending",
  approved: "Approved",
  active: "Active",
  completed: "Completed",
  cancelled: "Cancelled",
};

export const defaultFilters = {
  search: "",
  location: "",
  category: "all",
  intent: "all",
  maxPrice: 20000,
  verified: false,
  delivery: false,
  sort: "recommended",
};
