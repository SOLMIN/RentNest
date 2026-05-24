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
import {
  Anchor,
  Article,
  Aside,
  Box,
  Button,
  Form,
  Heading1,
  Heading2,
  Heading3,
  Img,
  Input,
  Label,
  Option,
  Paragraph,
  Section,
  Select,
  Small,
  Span,
  Strong,
  Textarea,
} from "./styles";

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
      <Section className="market-hero" aria-label="Rental marketplace">
        <Box className="hero-copy">
          <Paragraph className="eyebrow">Pune rentals for Hinjewadi, Wakad, Aundh, Baner</Paragraph>
          <Heading1>Premium rentals for Pune homes, teams, and weekend plans.</Heading1>
          <Paragraph>Rent furniture, appliances, electronics, utensils, and curated bundles with local delivery, installation, maintenance, and owner-powered inventory.</Paragraph>
          <Box className="hero-actions">
            <Anchor className="primary-action" href="#catalog"><Search aria-hidden="true" />Browse rentals</Anchor>
            <Anchor className="secondary-action hero-link" href="#rent-out"><UploadCloud aria-hidden="true" />Rent out your product</Anchor>
          </Box>
          <Box className="hero-stats" aria-label="Service highlights"><Span><Strong>6</Strong> Pune zones</Span><Span><Strong>72h</Strong> setup target</Span><Span><Strong>0</Strong> listing fee</Span></Box>
        </Box>
        <Box className="search-panel" aria-label="Marketplace search">
          <Box className="search-panel-top"><Span>Find your setup</Span><Strong>Pune live</Strong></Box>
          <Label className="wide-field"><Span>Search inventory</Span><Box className="input-with-icon"><Search aria-hidden="true" /><Input value={filters.search} onChange={(event) => updateFilter("search", event.target.value)} placeholder="Sofa, fridge, work desk, event kit" /></Box></Label>
          <Label><Span>Location</Span><Input value={filters.location} onChange={(event) => updateFilter("location", event.target.value)} placeholder="Hinjewadi Phase 1" /></Label>
          <Label><Span>Sort</Span><Select value={filters.sort} onChange={(event) => updateFilter("sort", event.target.value)}><Option value="recommended">Recommended</Option><Option value="price-low">Price low to high</Option><Option value="rating">Highest rated</Option></Select></Label>
          <Box className="locality-strip" aria-label="Popular Pune localities">{serviceLocalities.map((locality) => <Button className={filters.location === locality ? "active" : ""} key={locality} type="button" onClick={() => updateFilter("location", filters.location === locality ? "" : locality)}>{locality}</Button>)}</Box>
        </Box>
      </Section>
      <Section className="featured-carousel" aria-label="Featured rental collections">
        <Box className="carousel-card">
          {heroSlides.map((slide, index) => <Article className={`carousel-slide ${activeSlide === index ? "active" : ""}`} key={slide.title} aria-hidden={activeSlide !== index}><Img src={slide.image} alt={slide.title} /><Box className="carousel-copy"><Span>{slide.tag}</Span><Heading2>{slide.title}</Heading2><Paragraph>{slide.copy}</Paragraph></Box></Article>)}
          <Box className="carousel-controls"><Button type="button" onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous collection"><ChevronLeft aria-hidden="true" /></Button><Button type="button" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} aria-label="Next collection"><ChevronRight aria-hidden="true" /></Button></Box>
        </Box>
        <Box className="story-grid">{storyCards.map(([title, copy]) => <Article key={title}><Heading3>{title}</Heading3><Paragraph>{copy}</Paragraph></Article>)}</Box>
      </Section>
      <Section className="promise-band" aria-label="Rental service promises">{promiseTiles.map(([title, copy, Icon]) => <Article key={title}><Icon aria-hidden="true" /><Box><Heading3>{title}</Heading3><Paragraph>{copy}</Paragraph></Box></Article>)}</Section>
      <Section className="bundle-section" aria-label="Rental bundles">
        <Box className="section-heading"><Box><Paragraph className="eyebrow">Bundle plans</Paragraph><Heading2>Ready-made packages for Pune renters</Heading2></Box><Span className="soft-pill"><Sparkles aria-hidden="true" />Premium look, local inventory</Span></Box>
        <Box className="bundle-grid">{bundlePlans.map((plan) => <Article className="bundle-card" key={plan.name}><Span>{plan.area}</Span><Heading3>{plan.name}</Heading3><Paragraph>{plan.items}</Paragraph><Strong>{money(plan.price)}/month</Strong></Article>)}</Box>
      </Section>
      <Section className="market-layout" id="catalog">
        <Aside className="filters-card" aria-label="Filters">
          <Box className="panel-title"><Box><Paragraph className="eyebrow">Controls</Paragraph><Heading2>Filters</Heading2></Box><Button className="icon-button" type="button" onClick={() => setFilters(defaultFilters)} aria-label="Reset filters" title="Reset filters"><RotateCcw aria-hidden="true" /></Button></Box>
          <Label><Span>Category</Span><Select value={filters.category} onChange={(event) => updateFilter("category", event.target.value)}><Option value="all">All categories</Option>{categories.map((category) => <Option key={getId(category)} value={category.name}>{category.name}</Option>)}</Select></Label>
          <Label><Span>Max monthly price: {money(filters.maxPrice)}</Span><Input type="range" min="500" max="50000" step="500" value={filters.maxPrice} onChange={(event) => updateFilter("maxPrice", event.target.value)} /></Label>
          <Box className="intent-grid" role="group" aria-label="Rental intent">{["all", "Home", "Event", "Move-in"].map((intent) => <Button className={filters.intent === intent ? "active" : ""} key={intent} type="button" onClick={() => updateFilter("intent", intent)}>{intent === "all" ? "All" : intent}</Button>)}</Box>
          <Label className="check-row"><Input type="checkbox" checked={filters.verified} onChange={(event) => updateFilter("verified", event.target.checked)} /><Span>Verified owners only</Span></Label>
          <Label className="check-row"><Input type="checkbox" checked={filters.delivery} onChange={(event) => updateFilter("delivery", event.target.checked)} /><Span>Delivery available</Span></Label>
        </Aside>
        <Section className="catalog-area" aria-live="polite">
          <Box className="section-heading"><Box><Paragraph className="eyebrow">Available now</Paragraph><Heading2>{availableListings.length} local rentals</Heading2></Box><Box className="category-strip" aria-label="Categories"><Button className={filters.category === "all" ? "active" : ""} type="button" onClick={() => updateFilter("category", "all")}>All</Button>{categories.map((category) => <Button className={filters.category === category.name ? "active" : ""} key={getId(category)} type="button" onClick={() => updateFilter("category", category.name)}>{category.name}</Button>)}</Box></Box>
          {loading ? <Box className="empty-state">Loading marketplace inventory...</Box> : availableListings.length ? <Box className="catalog-grid">{availableListings.map((item) => <ListingCard item={item} key={getId(item)} money={money} onRent={() => setSelectedItem(item)} />)}</Box> : <Box className="empty-state"><Package aria-hidden="true" /><Heading3>No matching rentals</Heading3><Paragraph>Try another category, a wider price range, or a nearby locality.</Paragraph></Box>}
        </Section>
      </Section>
      <OwnerListingSection categories={categories} onCreateListing={onCreateListing} />
      {selectedItem ? <BookingDrawer item={selectedItem} settings={settings} money={money} onClose={() => setSelectedItem(null)} onCreateBooking={onCreateBooking} /> : null}
    </>
  );
}

function ListingCard({ item, money, onRent }) {
  const imageUrl = item.imageUrl || categoryImages[item.category] || categoryImages.Furniture;
  return (
    <Article className="item-card">
      <Box className="item-media"><Img src={imageUrl} alt={item.name} loading="lazy" /><Span className={`status-badge ${item.status}`}>{statusLabels[item.status] || item.status}</Span></Box>
      <Box className="item-body">
        <Box className="card-top"><Heading3>{item.name}</Heading3><Strong>{money(item.pricePerMonth)}/month</Strong></Box>
        <Paragraph>{item.description}</Paragraph>
        <Box className="benefit-row">{(item.tags || []).slice(0, 3).map((tag) => <Span key={tag}>{tag}</Span>)}</Box>
        <Box className="meta-row">
          <Span><MapPin aria-hidden="true" />{item.area}</Span>
          <Span><Star aria-hidden="true" />{Number(item.rating || 0).toFixed(1)}</Span>
          <Span>{item.deliveryAvailable ? <Truck aria-hidden="true" /> : <Package aria-hidden="true" />}{item.deliveryAvailable ? "Delivery" : "Pickup"}</Span>
          {item.owner?.verified ? <Span><BadgeCheck aria-hidden="true" />Verified</Span> : null}
        </Box>
        <Box className="card-footer"><Box><Strong>{item.owner?.name}</Strong><Span>Deposit {money(item.deposit)}</Span></Box><Button className="primary-action compact" type="button" onClick={onRent}><CalendarCheck aria-hidden="true" />Rent</Button></Box>
      </Box>
    </Article>
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
    <Aside className="drawer-shell" aria-label="Booking request">
      <Button className="drawer-backdrop" type="button" onClick={onClose} aria-label="Close booking drawer" />
      <Section className="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <Button className="icon-button drawer-close" type="button" onClick={onClose} aria-label="Close" title="Close"><X aria-hidden="true" /></Button>
        <Img className="drawer-image" src={item.imageUrl || categoryImages[item.category] || categoryImages.Furniture} alt={item.name} />
        <Box className="drawer-heading"><Box><Paragraph className="eyebrow">{item.category}</Paragraph><Heading2 id="booking-title">{item.name}</Heading2></Box><Strong>{money(item.pricePerMonth)}/month</Strong></Box>
        <Form className="drawer-form" onSubmit={submit}>
          <Box className="form-grid"><Label><Span>Start date</Span><Input type="date" value={form.startDate} min={todayIso()} onChange={(event) => update("startDate", event.target.value)} required /></Label><Label><Span>Tenure</Span><Select value={form.months} onChange={(event) => update("months", event.target.value)}><Option value="1">1 month</Option><Option value="3">3 months</Option><Option value="6">6 months</Option><Option value="12">12 months</Option></Select></Label></Box>
          <Label><Span>Your name</Span><Input value={form.customerName} onChange={(event) => update("customerName", event.target.value)} required /></Label>
          <Label><Span>Phone or email</Span><Input value={form.customerContact} onChange={(event) => update("customerContact", event.target.value)} required /></Label>
          <Label><Span>Delivery address or pickup note</Span><Textarea rows="3" value={form.deliveryAddress} onChange={(event) => update("deliveryAddress", event.target.value)} /></Label>
          <Box className="total-box"><Box><Span>{months} month rent</Span><Strong>{money(rentalAmount)}</Strong></Box><Box><Span>Security deposit</Span><Strong>{money(item.deposit)}</Strong></Box><Box><Span>Platform fee</Span><Strong>{money(platformFee)}</Strong></Box><Box className="total-line"><Span>Total before pickup</Span><Strong>{money(total)}</Strong></Box></Box>
          <Button className="primary-action full" type="submit" disabled={saving}><CalendarCheck aria-hidden="true" />{saving ? "Sending..." : "Request Booking"}</Button>
        </Form>
      </Section>
    </Aside>
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
    <Section className="owner-section" id="rent-out" aria-label="List an item">
      <Box className="owner-copy"><Paragraph className="eyebrow">Rent out your product</Paragraph><Heading2>Turn idle furniture, electronics, and utensils into monthly income</Heading2><Paragraph>Owners in Hinjewadi, Wakad, Aundh, and Baner can submit items for review. Admins approve, price, and manage the listing before it goes live.</Paragraph><Box className="owner-earnings"><Span>Estimated monthly earning</Span><Strong>₹{estimatedMonthly.toLocaleString("en-IN")}</Strong><Small>Estimated owner payout after platform operations</Small></Box><Box className="owner-steps"><Span>1. Submit item</Span><Span>2. Admin verifies</Span><Span>3. Customer books</Span></Box></Box>
      <Form className="listing-form" onSubmit={submit}>
        <Box className="form-grid">
          <Label><Span>Item name</Span><Input value={form.name} onChange={(event) => update("name", event.target.value)} required /></Label>
          <Label><Span>Category</Span><Select value={form.category} onChange={(event) => update("category", event.target.value)} required>{categories.map((category) => <Option key={getId(category)} value={category.name}>{category.name}</Option>)}</Select></Label>
          <Label><Span>Area</Span><Select value={form.area} onChange={(event) => update("area", event.target.value)} required><Option value="">Select locality</Option>{serviceLocalities.map((locality) => <Option key={locality} value={locality}>{locality}</Option>)}</Select></Label>
          <Label><Span>Monthly price</Span><Input type="number" min="0" value={form.pricePerMonth} onChange={(event) => update("pricePerMonth", event.target.value)} required /></Label>
          <Label><Span>Security deposit</Span><Input type="number" min="0" value={form.deposit} onChange={(event) => update("deposit", event.target.value)} required /></Label>
          <Label><Span>Owner name</Span><Input value={form.ownerName} onChange={(event) => update("ownerName", event.target.value)} required /></Label>
          <Label><Span>Owner phone</Span><Input value={form.ownerPhone} onChange={(event) => update("ownerPhone", event.target.value)} placeholder="+91 98765 43210" /></Label>
          <Label><Span>Photo URL</Span><Input value={form.imageUrl} onChange={(event) => update("imageUrl", event.target.value)} placeholder="Optional image link" /></Label>
        </Box>
        <Label><Span>Description</Span><Textarea rows="4" value={form.description} onChange={(event) => update("description", event.target.value)} required /></Label>
        <Box className="form-actions">
          <Label className="check-row"><Input type="checkbox" checked={form.deliveryAvailable} onChange={(event) => update("deliveryAvailable", event.target.checked)} /><Span>Delivery available</Span></Label>
          <Label className="check-row"><Input type="checkbox" checked={form.ownerVerified} onChange={(event) => update("ownerVerified", event.target.checked)} /><Span>Owner verified</Span></Label>
        </Box>
        <Button className="primary-action full" type="submit" disabled={saving}><UploadCloud aria-hidden="true" />{saving ? "Submitting..." : "Submit for Admin Review"}</Button>
      </Form>
    </Section>
  );
}
