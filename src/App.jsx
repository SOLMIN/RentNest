import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  BadgeCheck,
  Boxes,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ClipboardList,
  IndianRupee,
  LayoutDashboard,
  MapPin,
  Package,
  Pencil,
  Plus,
  Repeat,
  RotateCcw,
  Save,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  SlidersHorizontal,
  Star,
  Store,
  Tags,
  Trash2,
  Truck,
  UploadCloud,
  X,
} from "lucide-react";
import { api } from "./services/api";

const emptyListing = {
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

const categoryImages = {
  Furniture: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=82",
  Electronics: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=1000&q=82",
  Utensils: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=82",
  Appliances: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=82",
  Event: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=82",
};

const statusLabels = {
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

const serviceLocalities = ["Hinjewadi Phase 1", "Hinjewadi Phase 2", "Hinjewadi Phase 3", "Wakad", "Aundh", "Baner"];

const promiseTiles = [
  ["72-hour setup", "Delivery, placement, and install windows inspired by premium rental flows.", Truck],
  ["Flexible plans", "Monthly, quarterly, and move-in bundle pricing for short stays and new apartments.", Repeat],
  ["Verified supply", "Owner checks, deposits, condition notes, and admin approval before going live.", ShieldCheck],
];

const bundlePlans = [
  { name: "Work-from-home kit", area: "Baner + Wakad", price: 1299, items: "Desk, chair, monitor stand, lamp" },
  { name: "1BHK move-in bundle", area: "Hinjewadi", price: 5299, items: "Bed, mattress, wardrobe, desk, fridge" },
  { name: "Weekend event kit", area: "Aundh + Baner", price: 2499, items: "Projector, speaker, dinner set, lights" },
];

const heroSlides = [
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

const storyCards = [
  ["Zero-hassle setup", "Delivery, placement, basic installation, and pickup support in your locality."],
  ["Maintenance included", "Admin can track condition, owner verification, and service notes from inventory."],
  ["Rent or list", "Customers can rent monthly. Owners can submit products for admin review."],
  ["Bundle-first shopping", "Curated packages help new Pune renters furnish faster."],
];

function getId(item) {
  return item?.id || item?._id;
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function addMonthsIso(months) {
  const date = new Date();
  date.setMonth(date.getMonth() + Number(months || 1));
  return date.toISOString().slice(0, 10);
}

function normalizeCurrency(currency) {
  return currency || "INR";
}

function App() {
  const [view, setView] = useState("marketplace");
  const [listings, setListings] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [settings, setSettings] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");

  const money = (value) => {
    try {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: normalizeCurrency(settings?.currency),
        maximumFractionDigits: 0,
      }).format(Number(value || 0));
    } catch {
      return `₹${Number(value || 0).toLocaleString("en-IN")}`;
    }
  };

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => setToast(""), 2800);
  };

  const loadData = async () => {
    setError("");
    try {
      const [healthData, listingsData, categoriesData, bookingsData, settingsData, metricsData] = await Promise.all([
        api.health(),
        api.listings("?includeAll=true"),
        api.categories(),
        api.bookings(),
        api.settings(),
        api.metrics(),
      ]);

      setHealth(healthData);
      setListings(listingsData);
      setCategories(categoriesData);
      setBookings(bookingsData);
      setSettings(settingsData);
      setMetrics(metricsData);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const activeCategories = useMemo(() => categories.filter((category) => category.active !== false), [categories]);

  return (
    <div className="app-shell">
      <Header view={view} setView={setView} health={health} />

      {error ? (
        <main className="error-screen">
          <Package aria-hidden="true" />
          <h1>API connection needs attention</h1>
          <p>{error}</p>
          <button className="primary-action" type="button" onClick={loadData}>
            <RotateCcw aria-hidden="true" />
            Retry
          </button>
        </main>
      ) : (
        <main>
          {view === "marketplace" ? (
            <Marketplace
              listings={listings}
              categories={activeCategories}
              settings={settings}
              loading={loading}
              money={money}
              onCreateBooking={async (payload) => {
                await api.createBooking(payload);
                await loadData();
                notify("Booking request sent to the admin queue.");
              }}
              onCreateListing={async (payload) => {
                await api.createListing(payload);
                await loadData();
                notify("Listing published and added to inventory.");
              }}
            />
          ) : (
            <AdminPortal
              listings={listings}
              categories={categories}
              bookings={bookings}
              settings={settings}
              metrics={metrics}
              money={money}
              reload={loadData}
              notify={notify}
            />
          )}
        </main>
      )}

      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </div>
  );
}

function Header({ view, setView, health }) {
  return (
    <header className="topbar">
      <button className="brand-button" type="button" onClick={() => setView("marketplace")} aria-label="Open marketplace">
        <span className="brand-mark">RN</span>
        <span className="brand-copy">
          <strong>RentNest</strong>
          <small>{health?.dataMode === "mongodb" ? "MongoDB live" : "Demo data mode"}</small>
        </span>
      </button>

      <nav className="nav-tabs" aria-label="Main views">
        <button className={view === "marketplace" ? "active" : ""} type="button" onClick={() => setView("marketplace")}>
          <Store aria-hidden="true" />
          Marketplace
        </button>
        <button className={view === "admin" ? "active" : ""} type="button" onClick={() => setView("admin")}>
          <LayoutDashboard aria-hidden="true" />
          Admin Portal
        </button>
      </nav>

      <a className="header-cta" href="#rent-out">
        <Plus aria-hidden="true" />
        List your item
      </a>
    </header>
  );
}

function Marketplace({ listings, categories, settings, loading, money, onCreateBooking, onCreateListing }) {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    category: "all",
    intent: "all",
    maxPrice: 20000,
    verified: false,
    delivery: false,
    sort: "recommended",
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const availableListings = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    const location = filters.location.trim().toLowerCase();

    return listings
      .filter((item) => item.status === "available")
      .filter((item) => {
        const haystack = [item.name, item.category, item.description, item.owner?.name, ...(item.tags || [])].join(" ").toLowerCase();
        const itemLocation = [item.area, item.city].join(" ").toLowerCase();

        return (
          (!query || haystack.includes(query)) &&
          (!location || itemLocation.includes(location)) &&
          (filters.category === "all" || item.category === filters.category) &&
          (filters.intent === "all" || item.intent === filters.intent) &&
          Number(item.pricePerMonth) <= Number(filters.maxPrice) &&
          (!filters.verified || item.owner?.verified) &&
          (!filters.delivery || item.deliveryAvailable)
        );
      })
      .sort((a, b) => {
        if (filters.sort === "price-low") return a.pricePerMonth - b.pricePerMonth;
        if (filters.sort === "rating") return b.rating - a.rating;
        return Number(b.owner?.verified) - Number(a.owner?.verified) || b.rating - a.rating;
      });
  }, [filters, listings]);

  const updateFilter = (key, value) => setFilters((current) => ({ ...current, [key]: value }));
  const resetFilters = () =>
    setFilters({
      search: "",
      location: "",
      category: "all",
      intent: "all",
      maxPrice: 20000,
      verified: false,
      delivery: false,
      sort: "recommended",
    });

  return (
    <>
      <section className="market-hero" aria-label="Rental marketplace">
        <div className="hero-copy">
          <p className="eyebrow">Pune rentals for Hinjewadi, Wakad, Aundh, Baner</p>
          <h1>Premium rentals for Pune homes, teams, and weekend plans.</h1>
          <p>
            Rent furniture, appliances, electronics, utensils, and curated bundles with local delivery,
            installation, maintenance, and owner-powered inventory.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#catalog">
              <Search aria-hidden="true" />
              Browse rentals
            </a>
            <a className="secondary-action hero-link" href="#rent-out">
              <UploadCloud aria-hidden="true" />
              Rent out your product
            </a>
          </div>
          <div className="hero-stats" aria-label="Service highlights">
            <span><strong>6</strong> Pune zones</span>
            <span><strong>72h</strong> setup target</span>
            <span><strong>0</strong> listing fee</span>
          </div>
        </div>

        <div className="search-panel" aria-label="Marketplace search">
          <div className="search-panel-top">
            <span>Find your setup</span>
            <strong>Pune live</strong>
          </div>
          <label className="wide-field">
            <span>Search inventory</span>
            <div className="input-with-icon">
              <Search aria-hidden="true" />
              <input value={filters.search} onChange={(event) => updateFilter("search", event.target.value)} placeholder="Sofa, fridge, work desk, event kit" />
            </div>
          </label>
          <label>
            <span>Location</span>
            <input value={filters.location} onChange={(event) => updateFilter("location", event.target.value)} placeholder="Hinjewadi Phase 1" />
          </label>
          <label>
            <span>Sort</span>
            <select value={filters.sort} onChange={(event) => updateFilter("sort", event.target.value)}>
              <option value="recommended">Recommended</option>
              <option value="price-low">Price low to high</option>
              <option value="rating">Highest rated</option>
            </select>
          </label>
          <div className="locality-strip" aria-label="Popular Pune localities">
            {serviceLocalities.map((locality) => (
              <button
                className={filters.location === locality ? "active" : ""}
                key={locality}
                type="button"
                onClick={() => updateFilter("location", filters.location === locality ? "" : locality)}
              >
                {locality}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-carousel" aria-label="Featured rental collections">
        <div className="carousel-card">
          {heroSlides.map((slide, index) => (
            <article className={`carousel-slide ${activeSlide === index ? "active" : ""}`} key={slide.title} aria-hidden={activeSlide !== index}>
              <img src={slide.image} alt={slide.title} />
              <div className="carousel-copy">
                <span>{slide.tag}</span>
                <h2>{slide.title}</h2>
                <p>{slide.copy}</p>
              </div>
            </article>
          ))}
          <div className="carousel-controls">
            <button type="button" onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous collection">
              <ChevronLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} aria-label="Next collection">
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="story-grid">
          {storyCards.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="promise-band" aria-label="Rental service promises">
        {promiseTiles.map(([title, copy, Icon]) => (
          <article key={title}>
            <Icon aria-hidden="true" />
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bundle-section" aria-label="Rental bundles">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Bundle plans</p>
            <h2>Ready-made packages for Pune renters</h2>
          </div>
          <span className="soft-pill">
            <Sparkles aria-hidden="true" />
            Premium look, local inventory
          </span>
        </div>
        <div className="bundle-grid">
          {bundlePlans.map((plan) => (
            <article className="bundle-card" key={plan.name}>
              <span>{plan.area}</span>
              <h3>{plan.name}</h3>
              <p>{plan.items}</p>
              <strong>{money(plan.price)}/month</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="market-layout" id="catalog">
        <aside className="filters-card" aria-label="Filters">
          <div className="panel-title">
            <div>
              <p className="eyebrow">Controls</p>
              <h2>Filters</h2>
            </div>
            <button className="icon-button" type="button" onClick={resetFilters} aria-label="Reset filters" title="Reset filters">
              <RotateCcw aria-hidden="true" />
            </button>
          </div>

          <label>
            <span>Category</span>
            <select value={filters.category} onChange={(event) => updateFilter("category", event.target.value)}>
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option key={getId(category)} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Max monthly price: {money(filters.maxPrice)}</span>
            <input type="range" min="500" max="50000" step="500" value={filters.maxPrice} onChange={(event) => updateFilter("maxPrice", event.target.value)} />
          </label>

          <div className="intent-grid" role="group" aria-label="Rental intent">
            {["all", "Home", "Event", "Move-in"].map((intent) => (
              <button
                className={filters.intent === intent ? "active" : ""}
                key={intent}
                type="button"
                onClick={() => updateFilter("intent", intent)}
              >
                {intent === "all" ? "All" : intent}
              </button>
            ))}
          </div>

          <label className="check-row">
            <input type="checkbox" checked={filters.verified} onChange={(event) => updateFilter("verified", event.target.checked)} />
            <span>Verified owners only</span>
          </label>
          <label className="check-row">
            <input type="checkbox" checked={filters.delivery} onChange={(event) => updateFilter("delivery", event.target.checked)} />
            <span>Delivery available</span>
          </label>
        </aside>

        <section className="catalog-area" aria-live="polite">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Available now</p>
              <h2>{availableListings.length} local rentals</h2>
            </div>
            <div className="category-strip" aria-label="Categories">
              <button className={filters.category === "all" ? "active" : ""} type="button" onClick={() => updateFilter("category", "all")}>
                All
              </button>
              {categories.map((category) => (
                <button
                  className={filters.category === category.name ? "active" : ""}
                  key={getId(category)}
                  type="button"
                  onClick={() => updateFilter("category", category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="empty-state">Loading marketplace inventory...</div>
          ) : availableListings.length ? (
            <div className="catalog-grid">
              {availableListings.map((item) => (
                <ListingCard item={item} key={getId(item)} money={money} onRent={() => setSelectedItem(item)} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Package aria-hidden="true" />
              <h3>No matching rentals</h3>
              <p>Try another category, a wider price range, or a nearby locality.</p>
            </div>
          )}
        </section>
      </section>

      <OwnerListingSection categories={categories} onCreateListing={onCreateListing} />

      {selectedItem ? (
        <BookingDrawer
          item={selectedItem}
          settings={settings}
          money={money}
          onClose={() => setSelectedItem(null)}
          onCreateBooking={onCreateBooking}
        />
      ) : null}
    </>
  );
}

function ListingCard({ item, money, onRent }) {
  const imageUrl = item.imageUrl || categoryImages[item.category] || categoryImages.Furniture;

  return (
    <article className="item-card">
      <div className="item-media">
        <img src={imageUrl} alt={item.name} loading="lazy" />
        <span className={`status-badge ${item.status}`}>{statusLabels[item.status] || item.status}</span>
      </div>
      <div className="item-body">
        <div className="card-top">
          <h3>{item.name}</h3>
          <strong>{money(item.pricePerMonth)}/month</strong>
        </div>
        <p>{item.description}</p>
        <div className="benefit-row">
          {(item.tags || []).slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="meta-row">
          <span>
            <MapPin aria-hidden="true" />
            {item.area}
          </span>
          <span>
            <Star aria-hidden="true" />
            {Number(item.rating || 0).toFixed(1)}
          </span>
          <span>
            {item.deliveryAvailable ? <Truck aria-hidden="true" /> : <Package aria-hidden="true" />}
            {item.deliveryAvailable ? "Delivery" : "Pickup"}
          </span>
          {item.owner?.verified ? (
            <span>
              <BadgeCheck aria-hidden="true" />
              Verified
            </span>
          ) : null}
        </div>
        <div className="card-footer">
          <div>
            <strong>{item.owner?.name}</strong>
            <span>Deposit {money(item.deposit)}</span>
          </div>
          <button className="primary-action compact" type="button" onClick={onRent}>
            <CalendarCheck aria-hidden="true" />
            Rent
          </button>
        </div>
      </div>
    </article>
  );
}

function BookingDrawer({ item, settings, money, onClose, onCreateBooking }) {
  const [form, setForm] = useState({
    customerName: "",
    customerContact: "",
    startDate: todayIso(),
    months: 3,
    deliveryAddress: "",
    note: "",
  });
  const [saving, setSaving] = useState(false);
  const months = Math.max(1, Number(form.months || 1));
  const rentalAmount = Number(item.pricePerMonth || 0) * months;
  const platformFee = Math.round((rentalAmount * Number(settings?.platformFeePercent || 0)) / 100);
  const total = rentalAmount + Number(item.deposit || 0) + platformFee;
  const endDate = addMonthsIso(months);

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event) => {
    event.preventDefault();
    setSaving(true);
    try {
      await onCreateBooking({
        listingId: getId(item),
        customerName: form.customerName,
        customerContact: form.customerContact,
        startDate: form.startDate,
        endDate,
        months,
        deliveryAddress: form.deliveryAddress,
        note: form.note,
      });
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <aside className="drawer-shell" aria-label="Booking request">
      <button className="drawer-backdrop" type="button" onClick={onClose} aria-label="Close booking drawer" />
      <section className="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="icon-button drawer-close" type="button" onClick={onClose} aria-label="Close" title="Close">
          <X aria-hidden="true" />
        </button>
        <img className="drawer-image" src={item.imageUrl || categoryImages[item.category] || categoryImages.Furniture} alt={item.name} />
        <div className="drawer-heading">
          <div>
            <p className="eyebrow">{item.category}</p>
            <h2 id="booking-title">{item.name}</h2>
          </div>
          <strong>{money(item.pricePerMonth)}/month</strong>
        </div>

        <form className="drawer-form" onSubmit={submit}>
          <div className="form-grid">
            <label>
              <span>Start date</span>
              <input type="date" value={form.startDate} min={todayIso()} onChange={(event) => update("startDate", event.target.value)} required />
            </label>
            <label>
              <span>Tenure</span>
              <select value={form.months} onChange={(event) => update("months", event.target.value)}>
                <option value="1">1 month</option>
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
              </select>
            </label>
          </div>
          <label>
            <span>Your name</span>
            <input value={form.customerName} onChange={(event) => update("customerName", event.target.value)} required />
          </label>
          <label>
            <span>Phone or email</span>
            <input value={form.customerContact} onChange={(event) => update("customerContact", event.target.value)} required />
          </label>
          <label>
            <span>Delivery address or pickup note</span>
            <textarea rows="3" value={form.deliveryAddress} onChange={(event) => update("deliveryAddress", event.target.value)} />
          </label>

          <div className="total-box">
            <div>
              <span>{months} month rent</span>
              <strong>{money(rentalAmount)}</strong>
            </div>
            <div>
              <span>Security deposit</span>
              <strong>{money(item.deposit)}</strong>
            </div>
            <div>
              <span>Platform fee</span>
              <strong>{money(platformFee)}</strong>
            </div>
            <div className="total-line">
              <span>Total before pickup</span>
              <strong>{money(total)}</strong>
            </div>
          </div>

          <button className="primary-action full" type="submit" disabled={saving}>
            <CalendarCheck aria-hidden="true" />
            {saving ? "Sending..." : "Request Booking"}
          </button>
        </form>
      </section>
    </aside>
  );
}

function OwnerListingSection({ categories, onCreateListing }) {
  const [form, setForm] = useState(emptyListing);
  const [saving, setSaving] = useState(false);
  const estimatedMonthly = Math.max(0, Math.round(Number(form.pricePerMonth || 0) * 0.75));

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event) => {
    event.preventDefault();
    setSaving(true);
    try {
      await onCreateListing({
        ...form,
        status: "pending-review",
        city: "Pune",
        tags: `${form.tags || ""}, community owner, pending inspection`,
        imageUrl: form.imageUrl || categoryImages[form.category] || categoryImages.Furniture,
      });
      setForm(emptyListing);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="owner-section" id="rent-out" aria-label="List an item">
      <div className="owner-copy">
        <p className="eyebrow">Rent out your product</p>
        <h2>Turn idle furniture, electronics, and utensils into monthly income</h2>
        <p>
          Owners in Hinjewadi, Wakad, Aundh, and Baner can submit items for review. Admins approve,
          price, and manage the listing before it goes live.
        </p>
        <div className="owner-earnings">
          <span>Estimated monthly earning</span>
          <strong>₹{estimatedMonthly.toLocaleString("en-IN")}</strong>
          <small>Estimated owner payout after platform operations</small>
        </div>
        <div className="owner-steps">
          <span>1. Submit item</span>
          <span>2. Admin verifies</span>
          <span>3. Customer books</span>
        </div>
      </div>

      <form className="listing-form" onSubmit={submit}>
        <div className="form-grid">
          <label>
            <span>Item name</span>
            <input value={form.name} onChange={(event) => update("name", event.target.value)} required />
          </label>
          <label>
            <span>Category</span>
            <select value={form.category} onChange={(event) => update("category", event.target.value)} required>
              {categories.map((category) => (
                <option key={getId(category)} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Area</span>
            <select value={form.area} onChange={(event) => update("area", event.target.value)} required>
              <option value="">Select locality</option>
              {serviceLocalities.map((locality) => (
                <option key={locality} value={locality}>
                  {locality}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Monthly price</span>
            <input type="number" min="0" value={form.pricePerMonth} onChange={(event) => update("pricePerMonth", event.target.value)} required />
          </label>
          <label>
            <span>Security deposit</span>
            <input type="number" min="0" value={form.deposit} onChange={(event) => update("deposit", event.target.value)} required />
          </label>
          <label>
            <span>Owner name</span>
            <input value={form.ownerName} onChange={(event) => update("ownerName", event.target.value)} required />
          </label>
          <label>
            <span>Owner phone</span>
            <input value={form.ownerPhone} onChange={(event) => update("ownerPhone", event.target.value)} placeholder="+91 98765 43210" />
          </label>
          <label>
            <span>Photo URL</span>
            <input value={form.imageUrl} onChange={(event) => update("imageUrl", event.target.value)} placeholder="Optional image link" />
          </label>
        </div>
        <label>
          <span>Description</span>
          <textarea rows="4" value={form.description} onChange={(event) => update("description", event.target.value)} required />
        </label>
        <div className="form-actions">
          <label className="check-row">
            <input type="checkbox" checked={form.deliveryAvailable} onChange={(event) => update("deliveryAvailable", event.target.checked)} />
            <span>Delivery available</span>
          </label>
          <label className="check-row">
            <input type="checkbox" checked={form.ownerVerified} onChange={(event) => update("ownerVerified", event.target.checked)} />
            <span>Owner verified</span>
          </label>
        </div>
        <button className="primary-action full" type="submit" disabled={saving}>
          <UploadCloud aria-hidden="true" />
          {saving ? "Submitting..." : "Submit for Admin Review"}
        </button>
      </form>
    </section>
  );
}

function AdminPortal({ listings, categories, bookings, settings, metrics, money, reload, notify }) {
  const [tab, setTab] = useState("overview");

  return (
    <section className="admin-shell" aria-label="Admin portal">
      <aside className="admin-sidebar">
        <p className="eyebrow">Admin</p>
        <h1>Business command center</h1>
        <nav aria-label="Admin sections">
          {[
            ["overview", LayoutDashboard, "Overview"],
            ["inventory", Boxes, "Inventory"],
            ["bookings", ClipboardList, "Bookings"],
            ["categories", Tags, "Categories"],
            ["settings", Settings, "Settings"],
          ].map(([key, Icon, label]) => (
            <button className={tab === key ? "active" : ""} key={key} type="button" onClick={() => setTab(key)}>
              <Icon aria-hidden="true" />
              {label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="admin-main">
        {tab === "overview" ? <Overview metrics={metrics} bookings={bookings} money={money} settings={settings} /> : null}
        {tab === "inventory" ? (
          <InventoryManager listings={listings} categories={categories} money={money} reload={reload} notify={notify} />
        ) : null}
        {tab === "bookings" ? <BookingManager bookings={bookings} money={money} reload={reload} notify={notify} /> : null}
        {tab === "categories" ? <CategoryManager categories={categories} reload={reload} notify={notify} /> : null}
        {tab === "settings" ? <SettingsManager settings={settings} reload={reload} notify={notify} /> : null}
      </div>
    </section>
  );
}

function Overview({ metrics, bookings, money, settings }) {
  const cards = [
    ["Total listings", metrics?.totalListings || 0, Boxes],
    ["Open bookings", metrics?.openBookings || 0, ClipboardList],
    ["Potential monthly revenue", money(metrics?.monthlyRevenue || 0), IndianRupee],
    ["Utilization", `${metrics?.utilizationPercent || 0}%`, Activity],
  ];

  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>{settings?.platformName || "RentNest"} operations</h2>
        </div>
      </div>
      <div className="metrics-grid">
        {cards.map(([label, value, Icon]) => (
          <article className="metric-card" key={label}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
      <div className="admin-grid">
        <section className="admin-panel">
          <h3>Recent bookings</h3>
          <div className="activity-list">
            {bookings.slice(0, 6).map((booking) => (
              <article className="activity-row" key={getId(booking)}>
                <div>
                  <strong>{booking.listingName}</strong>
                  <span>
                    {booking.customer?.name} · {money(booking.total)}
                  </span>
                </div>
                <StatusPill status={booking.status} />
              </article>
            ))}
            {!bookings.length ? <p className="muted">No booking requests yet.</p> : null}
          </div>
        </section>
        <section className="admin-panel">
          <h3>Policy snapshot</h3>
          <div className="policy-list">
            <PolicyItem icon={ShieldCheck} label="Owner verification" value={settings?.ownerVerificationRequired ? "Required" : "Optional"} />
            <PolicyItem icon={Truck} label="Delivery" value={settings?.deliveryEnabled ? "Enabled" : "Disabled"} />
            <PolicyItem icon={IndianRupee} label="Platform fee" value={`${settings?.platformFeePercent || 0}%`} />
            <PolicyItem icon={CalendarCheck} label="Rental window" value={`${settings?.minRentalDays || 1}-${settings?.maxRentalDays || 12} months`} />
          </div>
        </section>
      </div>
    </>
  );
}

function PolicyItem({ icon: Icon, label, value }) {
  return (
    <div className="policy-item">
      <Icon aria-hidden="true" />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function InventoryManager({ listings, categories, money, reload, notify }) {
  const [form, setForm] = useState(emptyListing);
  const [editingId, setEditingId] = useState(null);

  const editListing = (item) => {
    setEditingId(getId(item));
    setForm({
      name: item.name || "",
      category: item.category || "Furniture",
      intent: item.intent || "Home",
      area: item.area || "",
      city: item.city || "Pune",
      pricePerMonth: item.pricePerMonth || 0,
      deposit: item.deposit || 0,
      quantity: item.quantity || 1,
      status: item.status || "available",
      condition: item.condition || "Good",
      rating: item.rating || 4.5,
      deliveryAvailable: Boolean(item.deliveryAvailable),
      imageUrl: item.imageUrl || "",
      description: item.description || "",
      tags: (item.tags || []).join(", "),
      ownerName: item.owner?.name || "",
      ownerEmail: item.owner?.email || "",
      ownerPhone: item.owner?.phone || "",
      ownerVerified: Boolean(item.owner?.verified),
    });
  };

  const reset = () => {
    setEditingId(null);
    setForm(emptyListing);
  };

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event) => {
    event.preventDefault();
    const payload = {
      ...form,
      imageUrl: form.imageUrl || categoryImages[form.category] || categoryImages.Furniture,
    };

    if (editingId) {
      await api.updateListing(editingId, payload);
      notify("Inventory item updated.");
    } else {
      await api.createListing(payload);
      notify("Inventory item created.");
    }

    reset();
    await reload();
  };

  const remove = async (id) => {
    await api.deleteListing(id);
    await reload();
    notify("Inventory item deleted.");
  };

  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Inventory</p>
          <h2>Manage rental supply</h2>
        </div>
        <button className="secondary-action" type="button" onClick={reset}>
          <Plus aria-hidden="true" />
          New item
        </button>
      </div>

      <section className="admin-panel">
        <form className="admin-form" onSubmit={submit}>
          <div className="form-grid">
            <label>
              <span>Item name</span>
              <input value={form.name} onChange={(event) => update("name", event.target.value)} required />
            </label>
            <label>
              <span>Category</span>
              <select value={form.category} onChange={(event) => update("category", event.target.value)} required>
                {categories.map((category) => (
                  <option key={getId(category)} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Status</span>
              <select value={form.status} onChange={(event) => update("status", event.target.value)}>
                <option value="available">Available</option>
                <option value="pending-review">Pending review</option>
                <option value="rented">Rented</option>
                <option value="maintenance">Maintenance</option>
                <option value="hidden">Hidden</option>
              </select>
            </label>
            <label>
              <span>Intent</span>
              <select value={form.intent} onChange={(event) => update("intent", event.target.value)}>
                <option value="Home">Home</option>
                <option value="Event">Event</option>
                <option value="Move-in">Move-in</option>
              </select>
            </label>
            <label>
              <span>Area</span>
              <select value={form.area} onChange={(event) => update("area", event.target.value)} required>
                <option value="">Select locality</option>
                {serviceLocalities.map((locality) => (
                  <option key={locality} value={locality}>
                    {locality}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Quantity</span>
              <input type="number" min="0" value={form.quantity} onChange={(event) => update("quantity", event.target.value)} />
            </label>
            <label>
              <span>Monthly price</span>
              <input type="number" min="0" value={form.pricePerMonth} onChange={(event) => update("pricePerMonth", event.target.value)} required />
            </label>
            <label>
              <span>Deposit</span>
              <input type="number" min="0" value={form.deposit} onChange={(event) => update("deposit", event.target.value)} required />
            </label>
            <label>
              <span>Owner</span>
              <input value={form.ownerName} onChange={(event) => update("ownerName", event.target.value)} required />
            </label>
            <label>
              <span>Owner phone</span>
              <input value={form.ownerPhone} onChange={(event) => update("ownerPhone", event.target.value)} />
            </label>
          </div>
          <label>
            <span>Description</span>
            <textarea rows="3" value={form.description} onChange={(event) => update("description", event.target.value)} required />
          </label>
          <div className="form-actions">
            <label className="check-row">
              <input type="checkbox" checked={form.deliveryAvailable} onChange={(event) => update("deliveryAvailable", event.target.checked)} />
              <span>Delivery available</span>
            </label>
            <label className="check-row">
              <input type="checkbox" checked={form.ownerVerified} onChange={(event) => update("ownerVerified", event.target.checked)} />
              <span>Owner verified</span>
            </label>
            <button className="primary-action" type="submit">
              <Save aria-hidden="true" />
              {editingId ? "Save Item" : "Create Item"}
            </button>
          </div>
        </form>
      </section>

      <section className="admin-panel table-panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Status</th>
                <th>Price</th>
                <th>Owner</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item) => (
                <tr key={getId(item)}>
                  <td>
                    <strong>{item.name}</strong>
                    <span>{item.area}</span>
                  </td>
                  <td>{item.category}</td>
                  <td>
                    <StatusPill status={item.status} />
                  </td>
                  <td>{money(item.pricePerMonth)}</td>
                  <td>{item.owner?.name}</td>
                  <td>
                    <div className="row-actions">
                      <button className="icon-button" type="button" onClick={() => editListing(item)} aria-label={`Edit ${item.name}`} title="Edit">
                        <Pencil aria-hidden="true" />
                      </button>
                      <button className="icon-button danger" type="button" onClick={() => remove(getId(item))} aria-label={`Delete ${item.name}`} title="Delete">
                        <Trash2 aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function BookingManager({ bookings, money, reload, notify }) {
  const updateStatus = async (id, status) => {
    await api.updateBooking(id, { status });
    await reload();
    notify("Booking status updated.");
  };

  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Bookings</p>
          <h2>Approve and track rental requests</h2>
        </div>
      </div>
      <section className="admin-panel table-panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Booking</th>
                <th>Customer</th>
                <th>Dates</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={getId(booking)}>
                  <td>
                    <strong>{booking.listingName}</strong>
                    <span>{booking.months || booking.days || 1} month rental</span>
                  </td>
                  <td>
                    <strong>{booking.customer?.name}</strong>
                    <span>{booking.customer?.contact}</span>
                  </td>
                  <td>
                    <span>{String(booking.startDate).slice(0, 10)}</span>
                    <span>{String(booking.endDate).slice(0, 10)}</span>
                  </td>
                  <td>{money(booking.total)}</td>
                  <td>
                    <select value={booking.status} onChange={(event) => updateStatus(getId(booking), event.target.value)}>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="active">Active</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
              {!bookings.length ? (
                <tr>
                  <td colSpan="5">No booking requests yet.</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function CategoryManager({ categories, reload, notify }) {
  const [form, setForm] = useState({ name: "", icon: "package", description: "" });

  const submit = async (event) => {
    event.preventDefault();
    await api.createCategory({ ...form, active: true });
    setForm({ name: "", icon: "package", description: "" });
    await reload();
    notify("Category added.");
  };

  const toggle = async (category) => {
    await api.updateCategory(getId(category), { active: !category.active });
    await reload();
    notify("Category updated.");
  };

  const remove = async (category) => {
    await api.deleteCategory(getId(category));
    await reload();
    notify("Category deleted.");
  };

  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Categories</p>
          <h2>Manage marketplace structure</h2>
        </div>
      </div>
      <section className="admin-panel">
        <form className="admin-form" onSubmit={submit}>
          <div className="form-grid three">
            <label>
              <span>Name</span>
              <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} required />
            </label>
            <label>
              <span>Icon key</span>
              <input value={form.icon} onChange={(event) => setForm((current) => ({ ...current, icon: event.target.value }))} />
            </label>
            <label>
              <span>Description</span>
              <input value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} />
            </label>
          </div>
          <button className="primary-action" type="submit">
            <Plus aria-hidden="true" />
            Add Category
          </button>
        </form>
      </section>
      <div className="category-admin-grid">
        {categories.map((category) => (
          <article className="category-admin-card" key={getId(category)}>
            <div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
            <div className="row-actions">
              <button className="secondary-action" type="button" onClick={() => toggle(category)}>
                <CheckCircle2 aria-hidden="true" />
                {category.active ? "Active" : "Paused"}
              </button>
              <button className="icon-button danger" type="button" onClick={() => remove(category)} aria-label={`Delete ${category.name}`} title="Delete">
                <Trash2 aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function SettingsManager({ settings, reload, notify }) {
  const [form, setForm] = useState(settings || {});

  useEffect(() => {
    setForm(settings || {});
  }, [settings]);

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event) => {
    event.preventDefault();
    await api.updateSettings(form);
    await reload();
    notify("Business settings saved.");
  };

  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Settings</p>
          <h2>Business logic and platform rules</h2>
        </div>
      </div>
      <section className="admin-panel">
        <form className="admin-form" onSubmit={submit}>
          <div className="form-grid">
            <label>
              <span>Platform name</span>
              <input value={form.platformName || ""} onChange={(event) => update("platformName", event.target.value)} />
            </label>
            <label>
              <span>Operating city</span>
              <input value={form.city || ""} onChange={(event) => update("city", event.target.value)} />
            </label>
            <label>
              <span>Currency</span>
              <input value={form.currency || "INR"} onChange={(event) => update("currency", event.target.value.toUpperCase())} />
            </label>
            <label>
              <span>Platform fee %</span>
              <input type="number" min="0" value={form.platformFeePercent || 0} onChange={(event) => update("platformFeePercent", Number(event.target.value))} />
            </label>
            <label>
              <span>Default deposit %</span>
              <input type="number" min="0" value={form.defaultDepositPercent || 0} onChange={(event) => update("defaultDepositPercent", Number(event.target.value))} />
            </label>
            <label>
              <span>Late fee per month</span>
              <input type="number" min="0" value={form.lateFeePerDay || 0} onChange={(event) => update("lateFeePerDay", Number(event.target.value))} />
            </label>
            <label>
              <span>Cancellation window hours</span>
              <input type="number" min="0" value={form.cancellationWindowHours || 0} onChange={(event) => update("cancellationWindowHours", Number(event.target.value))} />
            </label>
            <label>
              <span>Min rental months</span>
              <input type="number" min="1" value={form.minRentalDays || 1} onChange={(event) => update("minRentalDays", Number(event.target.value))} />
            </label>
            <label>
              <span>Max rental months</span>
              <input type="number" min="1" value={form.maxRentalDays || 30} onChange={(event) => update("maxRentalDays", Number(event.target.value))} />
            </label>
            <label>
              <span>Support email</span>
              <input value={form.supportEmail || ""} onChange={(event) => update("supportEmail", event.target.value)} />
            </label>
            <label>
              <span>Support phone</span>
              <input value={form.supportPhone || ""} onChange={(event) => update("supportPhone", event.target.value)} />
            </label>
          </div>
          <div className="form-actions">
            <label className="check-row">
              <input type="checkbox" checked={Boolean(form.deliveryEnabled)} onChange={(event) => update("deliveryEnabled", event.target.checked)} />
              <span>Delivery enabled</span>
            </label>
            <label className="check-row">
              <input type="checkbox" checked={Boolean(form.ownerVerificationRequired)} onChange={(event) => update("ownerVerificationRequired", event.target.checked)} />
              <span>Require owner verification</span>
            </label>
            <label className="check-row">
              <input type="checkbox" checked={Boolean(form.autoApproveBookings)} onChange={(event) => update("autoApproveBookings", event.target.checked)} />
              <span>Auto approve bookings</span>
            </label>
          </div>
          <button className="primary-action" type="submit">
            <SlidersHorizontal aria-hidden="true" />
            Save Settings
          </button>
        </form>
      </section>
    </>
  );
}

function StatusPill({ status }) {
  return <span className={`status-pill ${status}`}>{statusLabels[status] || status}</span>;
}

export default App;
