const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Something went wrong");
  }

  return payload;
}

export const api = {
  health: () => request("/health"),
  listings: (query = "") => request(`/listings${query}`),
  createListing: (data) => request("/listings", { method: "POST", body: JSON.stringify(data) }),
  updateListing: (id, data) => request(`/listings/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteListing: (id) => request(`/listings/${id}`, { method: "DELETE" }),
  bookings: () => request("/bookings"),
  createBooking: (data) => request("/bookings", { method: "POST", body: JSON.stringify(data) }),
  updateBooking: (id, data) => request(`/bookings/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  categories: () => request("/categories"),
  createCategory: (data) => request("/categories", { method: "POST", body: JSON.stringify(data) }),
  updateCategory: (id, data) => request(`/categories/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteCategory: (id) => request(`/categories/${id}`, { method: "DELETE" }),
  settings: () => request("/settings"),
  updateSettings: (data) => request("/settings", { method: "PATCH", body: JSON.stringify(data) }),
  metrics: () => request("/metrics"),
};
