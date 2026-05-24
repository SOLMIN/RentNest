import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Package,
  RotateCcw,
  Search,
  Sparkles,
  Star,
  Truck,
  UploadCloud,
  X,
} from "lucide-react";
import {
  bundlePlans,
  categoryImages,
  defaultFilters,
  emptyListing,
  heroSlides,
  promiseTiles,
  serviceLocalities,
  statusLabels,
  storyCards,
} from "../../constants/marketplace";
import { addMonthsIso, getId, todayIso } from "../../utils/formatters";

export default function Marketplace({ listings, categories, settings, loading, money, onCreateBooking, onCreateListing }) {
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 5200);
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

  return (
    <>
      <section className="market-hero" aria-label="Rental marketplace">
        <div className="hero-copy">
          <p className="eyebrow">Pune rentals for Hinjewadi, Wakad, Aundh, Baner</p>
          <h1>Premium rentals for Pune homes, teams, and weekend plans.</h1>
          <p>Rent furniture, appliances, electronics, utensils, and curated bundles with local delivery, installation, maintenance, and owner-powered inventory.</p>
          <div className="hero-actions">
            <a className="primary-action" href="#catalog"><Search aria-hidden="true" />Browse rentals</a>
            <a className="secondary-action hero-link" href="#rent-out"><UploadCloud aria-hidden="true" />Rent out your product</a>
          </div>
          <div className="hero-stats" aria-label="Service highlights"><span><strong>6</strong> Pune zones</span><span><strong>72h</strong> setup target</span><span><strong>0</strong> listing fee</span></div>
        </div>
        <div className="search-panel" aria-label="Marketplace search">
          <div className="search-panel-top"><span>Find your setup</span><strong>Pune live</strong></div>
          <label className="wide-field"><span>Search inventory</span><div className="input-with-icon"><Search aria-hidden="true" /><input value={filters.search} onChange={(event) => updateFilter("search", event.target.value)} placeholder="Sofa, fridge, work desk, event kit" /></div></label>
          <label><span>Location</span><input value={filters.location} onChange={(event) => updateFilter("location", event.target.value)} placeholder="Hinjewadi Phase 1" /></label>
          <label><span>Sort</span><select value={filters.sort} onChange={(event) => updateFilter("sort", event.target.value)}><option value="recommended">Recommended</option><option value="price-low">Price low to high</option><option value="rating">Highest rated</option></select></label>
          <div className="locality-strip" aria-label="Popular Pune localities">{serviceLocalities.map((locality) => <button className={filters.location === locality ? "active" : ""} key={locality} type="button" onClick={() => updateFilter("location", filters.location === locality ? "" : locality)}>{locality}</button>)}</div>
        </div>
      </section>
      <section className="featured-carousel" aria-label="Featured rental collections">
        <div className="carousel-card">
          {heroSlides.map((slide, index) => <article className={`carousel-slide ${activeSlide === index ? "active" : ""}`} key={slide.title} aria-hidden={activeSlide !== index}><img src={slide.image} alt={slide.title} /><div className="carousel-copy"><span>{slide.tag}</span><h2>{slide.title}</h2><p>{slide.copy}</p></div></article>)}
          <div className="carousel-controls"><button type="button" onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous collection"><ChevronLeft aria-hidden="true" /></button><button type="button" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} aria-label="Next collection"><ChevronRight aria-hidden="true" /></button></div>
        </div>
        <div className="story-grid">{storyCards.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <section className="promise-band" aria-label="Rental service promises">{promiseTiles.map(([title, copy, Icon]) => <article key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</section>
      <section className="bundle-section" aria-label="Rental bundles">
        <div className="section-heading"><div><p className="eyebrow">Bundle plans</p><h2>Ready-made packages for Pune renters</h2></div><span className="soft-pill"><Sparkles aria-hidden="true" />Premium look, local inventory</span></div>
        <div className="bundle-grid">{bundlePlans.map((plan) => <article className="bundle-card" key={plan.name}><span>{plan.area}</span><h3>{plan.name}</h3><p>{plan.items}</p><strong>{money(plan.price)}/month</strong></article>)}</div>
      </section>
      <section className="market-layout" id="catalog">
        <aside className="filters-card" aria-label="Filters">
          <div className="panel-title"><div><p className="eyebrow">Controls</p><h2>Filters</h2></div><button className="icon-button" type="button" onClick={() => setFilters(defaultFilters)} aria-label="Reset filters" title="Reset filters"><RotateCcw aria-hidden="true" /></button></div>
          <label><span>Category</span><select value={filters.category} onChange={(event) => updateFilter("category", event.target.value)}><option value="all">All categories</option>{categories.map((category) => <option key={getId(category)} value={category.name}>{category.name}</option>)}</select></label>
          <label><span>Max monthly price: {money(filters.maxPrice)}</span><input type="range" min="500" max="50000" step="500" value={filters.maxPrice} onChange={(event) => updateFilter("maxPrice", event.target.value)} /></label>
          <div className="intent-grid" role="group" aria-label="Rental intent">{["all", "Home", "Event", "Move-in"].map((intent) => <button className={filters.intent === intent ? "active" : ""} key={intent} type="button" onClick={() => updateFilter("intent", intent)}>{intent === "all" ? "All" : intent}</button>)}</div>
          <label className="check-row"><input type="checkbox" checked={filters.verified} onChange={(event) => updateFilter("verified", event.target.checked)} /><span>Verified owners only</span></label>
          <label className="check-row"><input type="checkbox" checked={filters.delivery} onChange={(event) => updateFilter("delivery", event.target.checked)} /><span>Delivery available</span></label>
        </aside>
        <section className="catalog-area" aria-live="polite">
          <div className="section-heading"><div><p className="eyebrow">Available now</p><h2>{availableListings.length} local rentals</h2></div><div className="category-strip" aria-label="Categories"><button className={filters.category === "all" ? "active" : ""} type="button" onClick={() => updateFilter("category", "all")}>All</button>{categories.map((category) => <button className={filters.category === category.name ? "active" : ""} key={getId(category)} type="button" onClick={() => updateFilter("category", category.name)}>{category.name}</button>)}</div></div>
          {loading ? <div className="empty-state">Loading marketplace inventory...</div> : availableListings.length ? <div className="catalog-grid">{availableListings.map((item) => <ListingCard item={item} key={getId(item)} money={money} onRent={() => setSelectedItem(item)} />)}</div> : <div className="empty-state"><Package aria-hidden="true" /><h3>No matching rentals</h3><p>Try another category, a wider price range, or a nearby locality.</p></div>}
        </section>
      </section>
      <OwnerListingSection categories={categories} onCreateListing={onCreateListing} />
      {selectedItem ? <BookingDrawer item={selectedItem} settings={settings} money={money} onClose={() => setSelectedItem(null)} onCreateBooking={onCreateBooking} /> : null}
    </>
  );
}

function ListingCard({ item, money, onRent }) {
  const imageUrl = item.imageUrl || categoryImages[item.category] || categoryImages.Furniture;
  return (
    <article className="item-card">
      <div className="item-media"><img src={imageUrl} alt={item.name} loading="lazy" /><span className={`status-badge ${item.status}`}>{statusLabels[item.status] || item.status}</span></div>
      <div className="item-body">
        <div className="card-top"><h3>{item.name}</h3><strong>{money(item.pricePerMonth)}/month</strong></div>
        <p>{item.description}</p>
        <div className="benefit-row">{(item.tags || []).slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="meta-row">
          <span><MapPin aria-hidden="true" />{item.area}</span>
          <span><Star aria-hidden="true" />{Number(item.rating || 0).toFixed(1)}</span>
          <span>{item.deliveryAvailable ? <Truck aria-hidden="true" /> : <Package aria-hidden="true" />}{item.deliveryAvailable ? "Delivery" : "Pickup"}</span>
          {item.owner?.verified ? <span><BadgeCheck aria-hidden="true" />Verified</span> : null}
        </div>
        <div className="card-footer"><div><strong>{item.owner?.name}</strong><span>Deposit {money(item.deposit)}</span></div><button className="primary-action compact" type="button" onClick={onRent}><CalendarCheck aria-hidden="true" />Rent</button></div>
      </div>
    </article>
  );
}

function BookingDrawer({ item, settings, money, onClose, onCreateBooking }) {
  const [form, setForm] = useState({ customerName: "", customerContact: "", startDate: todayIso(), months: 3, deliveryAddress: "", note: "" });
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
      await onCreateBooking({ listingId: getId(item), customerName: form.customerName, customerContact: form.customerContact, startDate: form.startDate, endDate, months, deliveryAddress: form.deliveryAddress, note: form.note });
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <aside className="drawer-shell" aria-label="Booking request">
      <button className="drawer-backdrop" type="button" onClick={onClose} aria-label="Close booking drawer" />
      <section className="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="icon-button drawer-close" type="button" onClick={onClose} aria-label="Close" title="Close"><X aria-hidden="true" /></button>
        <img className="drawer-image" src={item.imageUrl || categoryImages[item.category] || categoryImages.Furniture} alt={item.name} />
        <div className="drawer-heading"><div><p className="eyebrow">{item.category}</p><h2 id="booking-title">{item.name}</h2></div><strong>{money(item.pricePerMonth)}/month</strong></div>
        <form className="drawer-form" onSubmit={submit}>
          <div className="form-grid"><label><span>Start date</span><input type="date" value={form.startDate} min={todayIso()} onChange={(event) => update("startDate", event.target.value)} required /></label><label><span>Tenure</span><select value={form.months} onChange={(event) => update("months", event.target.value)}><option value="1">1 month</option><option value="3">3 months</option><option value="6">6 months</option><option value="12">12 months</option></select></label></div>
          <label><span>Your name</span><input value={form.customerName} onChange={(event) => update("customerName", event.target.value)} required /></label>
          <label><span>Phone or email</span><input value={form.customerContact} onChange={(event) => update("customerContact", event.target.value)} required /></label>
          <label><span>Delivery address or pickup note</span><textarea rows="3" value={form.deliveryAddress} onChange={(event) => update("deliveryAddress", event.target.value)} /></label>
          <div className="total-box"><div><span>{months} month rent</span><strong>{money(rentalAmount)}</strong></div><div><span>Security deposit</span><strong>{money(item.deposit)}</strong></div><div><span>Platform fee</span><strong>{money(platformFee)}</strong></div><div className="total-line"><span>Total before pickup</span><strong>{money(total)}</strong></div></div>
          <button className="primary-action full" type="submit" disabled={saving}><CalendarCheck aria-hidden="true" />{saving ? "Sending..." : "Request Booking"}</button>
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
      await onCreateListing({ ...form, status: "pending-review", city: "Pune", tags: `${form.tags || ""}, community owner, pending inspection`, imageUrl: form.imageUrl || categoryImages[form.category] || categoryImages.Furniture });
      setForm(emptyListing);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="owner-section" id="rent-out" aria-label="List an item">
      <div className="owner-copy"><p className="eyebrow">Rent out your product</p><h2>Turn idle furniture, electronics, and utensils into monthly income</h2><p>Owners in Hinjewadi, Wakad, Aundh, and Baner can submit items for review. Admins approve, price, and manage the listing before it goes live.</p><div className="owner-earnings"><span>Estimated monthly earning</span><strong>₹{estimatedMonthly.toLocaleString("en-IN")}</strong><small>Estimated owner payout after platform operations</small></div><div className="owner-steps"><span>1. Submit item</span><span>2. Admin verifies</span><span>3. Customer books</span></div></div>
      <form className="listing-form" onSubmit={submit}>
        <div className="form-grid">
          <label><span>Item name</span><input value={form.name} onChange={(event) => update("name", event.target.value)} required /></label>
          <label><span>Category</span><select value={form.category} onChange={(event) => update("category", event.target.value)} required>{categories.map((category) => <option key={getId(category)} value={category.name}>{category.name}</option>)}</select></label>
          <label><span>Area</span><select value={form.area} onChange={(event) => update("area", event.target.value)} required><option value="">Select locality</option>{serviceLocalities.map((locality) => <option key={locality} value={locality}>{locality}</option>)}</select></label>
          <label><span>Monthly price</span><input type="number" min="0" value={form.pricePerMonth} onChange={(event) => update("pricePerMonth", event.target.value)} required /></label>
          <label><span>Security deposit</span><input type="number" min="0" value={form.deposit} onChange={(event) => update("deposit", event.target.value)} required /></label>
          <label><span>Owner name</span><input value={form.ownerName} onChange={(event) => update("ownerName", event.target.value)} required /></label>
          <label><span>Owner phone</span><input value={form.ownerPhone} onChange={(event) => update("ownerPhone", event.target.value)} placeholder="+91 98765 43210" /></label>
          <label><span>Photo URL</span><input value={form.imageUrl} onChange={(event) => update("imageUrl", event.target.value)} placeholder="Optional image link" /></label>
        </div>
        <label><span>Description</span><textarea rows="4" value={form.description} onChange={(event) => update("description", event.target.value)} required /></label>
        <div className="form-actions">
          <label className="check-row"><input type="checkbox" checked={form.deliveryAvailable} onChange={(event) => update("deliveryAvailable", event.target.checked)} /><span>Delivery available</span></label>
          <label className="check-row"><input type="checkbox" checked={form.ownerVerified} onChange={(event) => update("ownerVerified", event.target.checked)} /><span>Owner verified</span></label>
        </div>
        <button className="primary-action full" type="submit" disabled={saving}><UploadCloud aria-hidden="true" />{saving ? "Submitting..." : "Submit for Admin Review"}</button>
      </form>
    </section>
  );
}
