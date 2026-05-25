import { useEffect, useMemo, useState } from "react";
import { Box as MuiBox, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
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

const processSteps = [
  { title: "Choose", copy: "Pick your setup from curated furniture, electronics, and appliance collections." },
  { title: "Rent", copy: "Select rental duration, confirm transparent pricing, and checkout in minutes." },
  { title: "Delivered", copy: "Get doorstep delivery, setup support, and easy pickup when you’re done." },
];

const testimonials = [
  { name: "Aarav, Pune", quote: "The sofa + dining combo made my flat move-in effortless. Delivery was smooth and fast." },
  { name: "Megha, Bengaluru", quote: "I rented a full WFH setup in one checkout. Clean quality and great monthly value." },
  { name: "Rohan, Hyderabad", quote: "Super clear pricing and support. RentNest feels premium without being expensive." },
];

const faqs = [
  { q: "How long can I rent products?", a: "You can choose flexible plans from 1 month up to long-term durations based on category availability." },
  { q: "Is security deposit refundable?", a: "Yes. Deposits are refundable after pickup and quality check as per your rental agreement." },
  { q: "Do you support quick delivery?", a: "Most listings support fast local delivery windows, typically within 72 hours in serviced zones." },
];

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
    <MuiBox sx={{ px: { xs: 2, md: 4 }, pb: 4 }}>
      <Paper
        sx={{
          p: { xs: 2, md: 2.75 },
          mb: 2.5,
          overflow: "hidden",
          border: "1px solid rgba(8,123,108,0.2)",
          background:
            "radial-gradient(140% 120% at 0% 0%, rgba(8,123,108,0.16), rgba(8,123,108,0.05) 45%, rgba(255,255,255,1) 75%)",
        }}
      >
        <Stack spacing={1.2}>
          <Chip label="Marketplace workspace" size="small" sx={{ alignSelf: "flex-start", bgcolor: "rgba(8,123,108,0.14)", color: "primary.dark" }} />
          <Typography variant="h4" sx={{ fontSize: { xs: "1.65rem", md: "2rem" } }}>
            Discover rentals, faster
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 720 }}>
            Compare curated packages, verified listings, and flexible monthly plans in one streamlined marketplace experience.
          </Typography>
          <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap" sx={{ pt: 0.5 }}>
            {["Bengaluru", "Mumbai", "Pune", "Delhi NCR", "Hyderabad"].map((city) => (
              <Chip key={city} label={city} size="small" variant="outlined" />
            ))}
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={{ p: { xs: 1.5, md: 1.75 }, mb: 2, border: "1px solid rgba(20,33,32,0.1)" }}>
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
      </Paper>

      <Paper sx={{ p: { xs: 1.5, md: 1.75 }, mb: 2, border: "1px solid rgba(20,33,32,0.1)" }}>
      <Section className="featured-carousel" aria-label="Featured rental collections">
        <Box className="carousel-card">
          {heroSlides.map((slide, index) => <Article className={`carousel-slide ${activeSlide === index ? "active" : ""}`} key={slide.title} aria-hidden={activeSlide !== index}><Img src={slide.image} alt={slide.title} /><Box className="carousel-copy"><Span>{slide.tag}</Span><Heading2>{slide.title}</Heading2><Paragraph>{slide.copy}</Paragraph></Box></Article>)}
          <Box className="carousel-controls"><Button type="button" onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous collection"><ChevronLeft aria-hidden="true" /></Button><Button type="button" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} aria-label="Next collection"><ChevronRight aria-hidden="true" /></Button></Box>
        </Box>
        <Box className="story-grid">{storyCards.map(([title, copy]) => <Article key={title}><Heading3>{title}</Heading3><Paragraph>{copy}</Paragraph></Article>)}</Box>
      </Section>
      </Paper>

      <Paper sx={{ p: { xs: 1.5, md: 1.75 }, mb: 2, border: "1px solid rgba(20,33,32,0.1)" }}>
      <Section className="promise-band" aria-label="Rental service promises">{promiseTiles.map(([title, copy, Icon]) => <Article key={title}><Icon aria-hidden="true" /><Box><Heading3>{title}</Heading3><Paragraph>{copy}</Paragraph></Box></Article>)}</Section>
      </Paper>

      <Paper sx={{ p: { xs: 1.5, md: 1.75 }, mb: 2, border: "1px solid rgba(20,33,32,0.1)" }}>
      <Section className="bundle-section" aria-label="Rental bundles">
        <Box className="section-heading"><Box><Paragraph className="eyebrow">Bundle plans</Paragraph><Heading2>Ready-made packages for Pune renters</Heading2></Box><Span className="soft-pill"><Sparkles aria-hidden="true" />Premium look, local inventory</Span></Box>
        <Box className="bundle-grid">{bundlePlans.map((plan) => <Article className="bundle-card" key={plan.name}><Span>{plan.area}</Span><Heading3>{plan.name}</Heading3><Paragraph>{plan.items}</Paragraph><Strong>{money(plan.price)}/month</Strong></Article>)}</Box>
      </Section>
      </Paper>

      <Paper sx={{ p: { xs: 1.5, md: 1.75 }, mb: 2, border: "1px solid rgba(20,33,32,0.1)" }}>
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
      </Paper>

      <Paper sx={{ p: { xs: 1.5, md: 1.75 }, border: "1px solid rgba(20,33,32,0.1)" }}>
      <OwnerListingSection categories={categories} onCreateListing={onCreateListing} />
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 2.5 }, mt: 2, border: "1px solid rgba(20,33,32,0.1)" }}>
        <Typography variant="h5" sx={{ mb: 1 }}>Why RentNest</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Premium yet affordable rentals for modern urban living.
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={1.25}>
          {processSteps.map((step) => (
            <Paper key={step.title} variant="outlined" sx={{ p: 1.5, flex: 1 }}>
              <Typography variant="subtitle1">{step.title}</Typography>
              <Typography variant="body2" color="text.secondary">{step.copy}</Typography>
            </Paper>
          ))}
        </Stack>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 2.5 }, mt: 2, border: "1px solid rgba(20,33,32,0.1)" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>What Customers Say</Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={1.25}>
          {testimonials.map((t) => (
            <Paper key={t.name} variant="outlined" sx={{ p: 1.5, flex: 1 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{t.quote}</Typography>
              <Typography variant="subtitle2">{t.name}</Typography>
            </Paper>
          ))}
        </Stack>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 2.5 }, mt: 2, border: "1px solid rgba(20,33,32,0.1)" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Frequently Asked Questions</Typography>
        <Stack spacing={1.25}>
          {faqs.map((f) => (
            <Paper key={f.q} variant="outlined" sx={{ p: 1.5 }}>
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>{f.q}</Typography>
              <Typography variant="body2" color="text.secondary">{f.a}</Typography>
            </Paper>
          ))}
        </Stack>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 2.5 }, mt: 2, mb: 1, border: "1px solid rgba(20,33,32,0.12)" }}>
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={2}>
          <MuiBox>
            <Typography variant="h6">RentNest</Typography>
            <Typography variant="body2" color="text.secondary">Rent Smart. Live Better.</Typography>
          </MuiBox>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Typography variant="body2" color="text.secondary">Support: support@rentnest.in</Typography>
            <Typography variant="body2" color="text.secondary">WhatsApp: +91 90000 00000</Typography>
          </Stack>
        </Stack>
        <Divider sx={{ my: 1.5 }} />
        <Typography variant="caption" color="text.secondary">© {new Date().getFullYear()} RentNest. All rights reserved.</Typography>
      </Paper>
      {selectedItem ? <BookingDrawer item={selectedItem} settings={settings} money={money} onClose={() => setSelectedItem(null)} onCreateBooking={onCreateBooking} /> : null}
    </MuiBox>
  );
}

function ListingCard({ item, money, onRent }) {
  const imageUrl = item.imageUrl || categoryImages[item.category] || categoryImages.Furniture;
  const tagList = (item.tags || []).slice(0, 3);
  const rating = Number(item.rating || 0).toFixed(1);

  return (
    <Paper
      component={Article}
      className="item-card"
      elevation={0}
      sx={{
        overflow: "hidden",
        border: "1px solid rgba(20,33,32,0.10)",
        transition: "transform .18s ease, box-shadow .18s ease, border-color .18s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "rgba(8,123,108,0.38)",
          boxShadow: "0 16px 40px rgba(20,33,32,0.12)",
        },
      }}
    >
      <MuiBox sx={{ position: "relative" }}>
        <Img src={imageUrl} alt={item.name} loading="lazy" style={{ width: "100%", height: 210, objectFit: "cover" }} />
        <Stack direction="row" spacing={0.75} sx={{ position: "absolute", top: 10, left: 10, right: 10 }}>
          <Chip size="small" label={statusLabels[item.status] || item.status} color={item.status === "available" ? "success" : "default"} />
          {item.owner?.verified ? <Chip size="small" label="Verified" color="info" icon={<BadgeCheck size={14} />} /> : null}
        </Stack>
      </MuiBox>

      <Stack spacing={1.1} sx={{ p: 1.4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
          <Heading3 style={{ margin: 0 }}>{item.name}</Heading3>
          <MuiBox sx={{ textAlign: "right" }}>
            <Typography variant="subtitle1">
              {money(item.pricePerMonth)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              per month
            </Typography>
          </MuiBox>
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 38 }}>
          {item.description}
        </Typography>

        {tagList.length ? (
          <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap">
            {tagList.map((tag) => (
              <Chip key={tag} size="small" label={tag} variant="outlined" />
            ))}
          </Stack>
        ) : null}

        <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap">
          <Chip size="small" icon={<MapPin size={14} />} label={item.area} />
          <Chip size="small" icon={<Star size={14} />} label={rating} />
          <Chip size="small" icon={item.deliveryAvailable ? <Truck size={14} /> : <Package size={14} />} label={item.deliveryAvailable ? "Delivery" : "Pickup"} />
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 0.5 }}>
          <MuiBox>
            <Typography variant="subtitle2">
              {item.owner?.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Deposit {money(item.deposit)}
            </Typography>
          </MuiBox>
          <Button className="primary-action compact" type="button" onClick={onRent}>
            <CalendarCheck aria-hidden="true" />
            Rent
          </Button>
        </Stack>
      </Stack>
    </Paper>
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
