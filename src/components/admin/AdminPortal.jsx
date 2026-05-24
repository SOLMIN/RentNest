import { useEffect, useState } from "react";
import {
  Activity,
  Boxes,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  IndianRupee,
  LayoutDashboard,
  Pencil,
  Plus,
  Save,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Tags,
  Trash2,
  Truck,
} from "lucide-react";
import { api } from "../../services/api";
import { categoryImages, emptyListing, serviceLocalities } from "../../constants/marketplace";
import { getId } from "../../utils/formatters";
import StatusPill from "../shared/StatusPill";
import {
  Article,
  Aside,
  Box,
  Button,
  Form,
  Heading1,
  Heading2,
  Heading3,
  Input,
  Label,
  Nav,
  Option,
  Paragraph,
  Section,
  Select,
  Span,
  Strong,
  Table,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
} from "./styles";

export default function AdminPortal({ listings, categories, bookings, settings, metrics, money, reload, notify }) {
  const [tab, setTab] = useState("overview");
  return (
    <Section className="admin-shell" aria-label="Admin portal">
      <Aside className="admin-sidebar">
        <Paragraph className="eyebrow">Admin</Paragraph><Heading1>Business command center</Heading1>
        <Nav aria-label="Admin sections">
          {[["overview", LayoutDashboard, "Overview"], ["inventory", Boxes, "Inventory"], ["bookings", ClipboardList, "Bookings"], ["categories", Tags, "Categories"], ["settings", Settings, "Settings"]].map(([key, Icon, label]) => <Button className={tab === key ? "active" : ""} key={key} type="button" onClick={() => setTab(key)}><Icon aria-hidden="true" />{label}</Button>)}
        </Nav>
      </Aside>
      <Box className="admin-main">
        {tab === "overview" ? <Overview metrics={metrics} bookings={bookings} money={money} settings={settings} /> : null}
        {tab === "inventory" ? <InventoryManager listings={listings} categories={categories} money={money} reload={reload} notify={notify} /> : null}
        {tab === "bookings" ? <BookingManager bookings={bookings} money={money} reload={reload} notify={notify} /> : null}
        {tab === "categories" ? <CategoryManager categories={categories} reload={reload} notify={notify} /> : null}
        {tab === "settings" ? <SettingsManager settings={settings} reload={reload} notify={notify} /> : null}
      </Box>
    </Section>
  );
}

function Overview({ metrics, bookings, money, settings }) {
  const cards = [["Total listings", metrics?.totalListings || 0, Boxes], ["Open bookings", metrics?.openBookings || 0, ClipboardList], ["Potential monthly revenue", money(metrics?.monthlyRevenue || 0), IndianRupee], ["Utilization", `${metrics?.utilizationPercent || 0}%`, Activity]];
  return (
    <>
      <Box className="section-heading"><Box><Paragraph className="eyebrow">Overview</Paragraph><Heading2>{settings?.platformName || "RentNest"} operations</Heading2></Box></Box>
      <Box className="metrics-grid">{cards.map(([label, value, Icon]) => <Article className="metric-card" key={label}><Icon aria-hidden="true" /><Span>{label}</Span><Strong>{value}</Strong></Article>)}</Box>
      <Box className="admin-grid">
        <Section className="admin-panel"><Heading3>Recent bookings</Heading3><Box className="activity-list">{bookings.slice(0, 6).map((booking) => <Article className="activity-row" key={getId(booking)}><Box><Strong>{booking.listingName}</Strong><Span>{booking.customer?.name} · {money(booking.total)}</Span></Box><StatusPill status={booking.status} /></Article>)}{!bookings.length ? <Paragraph className="muted">No booking requests yet.</Paragraph> : null}</Box></Section>
        <Section className="admin-panel"><Heading3>Policy snapshot</Heading3><Box className="policy-list"><PolicyItem icon={ShieldCheck} label="Owner verification" value={settings?.ownerVerificationRequired ? "Required" : "Optional"} /><PolicyItem icon={Truck} label="Delivery" value={settings?.deliveryEnabled ? "Enabled" : "Disabled"} /><PolicyItem icon={IndianRupee} label="Platform fee" value={`${settings?.platformFeePercent || 0}%`} /><PolicyItem icon={CalendarCheck} label="Rental window" value={`${settings?.minRentalDays || 1}-${settings?.maxRentalDays || 12} months`} /></Box></Section>
      </Box>
    </>
  );
}

function PolicyItem({ icon: Icon, label, value }) {
  return <Box className="policy-item"><Icon aria-hidden="true" /><Span>{label}</Span><Strong>{value}</Strong></Box>;
}

function InventoryManager({ listings, categories, money, reload, notify }) {
  const [form, setForm] = useState(emptyListing);
  const [editingId, setEditingId] = useState(null);
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const reset = () => { setEditingId(null); setForm(emptyListing); };
  const editListing = (item) => {
    setEditingId(getId(item));
    setForm({ name: item.name || "", category: item.category || "Furniture", intent: item.intent || "Home", area: item.area || "", city: item.city || "Pune", pricePerMonth: item.pricePerMonth || 0, deposit: item.deposit || 0, quantity: item.quantity || 1, status: item.status || "available", condition: item.condition || "Good", rating: item.rating || 4.5, deliveryAvailable: Boolean(item.deliveryAvailable), imageUrl: item.imageUrl || "", description: item.description || "", tags: (item.tags || []).join(", "), ownerName: item.owner?.name || "", ownerEmail: item.owner?.email || "", ownerPhone: item.owner?.phone || "", ownerVerified: Boolean(item.owner?.verified) });
  };
  const submit = async (event) => {
    event.preventDefault();
    const payload = { ...form, imageUrl: form.imageUrl || categoryImages[form.category] || categoryImages.Furniture };
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
  const remove = async (id) => { await api.deleteListing(id); await reload(); notify("Inventory item deleted."); };

  return (
    <>
      <Box className="section-heading"><Box><Paragraph className="eyebrow">Inventory</Paragraph><Heading2>Manage rental supply</Heading2></Box><Button className="secondary-action" type="button" onClick={reset}><Plus aria-hidden="true" />New item</Button></Box>
      <Section className="admin-panel"><Form className="admin-form" onSubmit={submit}>
        <Box className="form-grid">
          <Label><Span>Item name</Span><Input value={form.name} onChange={(event) => update("name", event.target.value)} required /></Label>
          <Label><Span>Category</Span><Select value={form.category} onChange={(event) => update("category", event.target.value)} required>{categories.map((category) => <Option key={getId(category)} value={category.name}>{category.name}</Option>)}</Select></Label>
          <Label><Span>Status</Span><Select value={form.status} onChange={(event) => update("status", event.target.value)}><Option value="available">Available</Option><Option value="pending-review">Pending review</Option><Option value="rented">Rented</Option><Option value="maintenance">Maintenance</Option><Option value="hidden">Hidden</Option></Select></Label>
          <Label><Span>Intent</Span><Select value={form.intent} onChange={(event) => update("intent", event.target.value)}><Option value="Home">Home</Option><Option value="Event">Event</Option><Option value="Move-in">Move-in</Option></Select></Label>
          <Label><Span>Area</Span><Select value={form.area} onChange={(event) => update("area", event.target.value)} required><Option value="">Select locality</Option>{serviceLocalities.map((locality) => <Option key={locality} value={locality}>{locality}</Option>)}</Select></Label>
          <Label><Span>Quantity</Span><Input type="number" min="0" value={form.quantity} onChange={(event) => update("quantity", event.target.value)} /></Label>
          <Label><Span>Monthly price</Span><Input type="number" min="0" value={form.pricePerMonth} onChange={(event) => update("pricePerMonth", event.target.value)} required /></Label>
          <Label><Span>Deposit</Span><Input type="number" min="0" value={form.deposit} onChange={(event) => update("deposit", event.target.value)} required /></Label>
          <Label><Span>Owner</Span><Input value={form.ownerName} onChange={(event) => update("ownerName", event.target.value)} required /></Label>
          <Label><Span>Owner phone</Span><Input value={form.ownerPhone} onChange={(event) => update("ownerPhone", event.target.value)} /></Label>
        </Box>
        <Label><Span>Description</Span><Textarea rows="3" value={form.description} onChange={(event) => update("description", event.target.value)} required /></Label>
        <Box className="form-actions"><Label className="check-row"><Input type="checkbox" checked={form.deliveryAvailable} onChange={(event) => update("deliveryAvailable", event.target.checked)} /><Span>Delivery available</Span></Label><Label className="check-row"><Input type="checkbox" checked={form.ownerVerified} onChange={(event) => update("ownerVerified", event.target.checked)} /><Span>Owner verified</Span></Label><Button className="primary-action" type="submit"><Save aria-hidden="true" />{editingId ? "Save Item" : "Create Item"}</Button></Box>
      </Form></Section>
      <Section className="admin-panel table-panel"><Box className="table-wrap"><Table><Thead><Tr><Th>Item</Th><Th>Category</Th><Th>Status</Th><Th>Price</Th><Th>Owner</Th><Th>Actions</Th></Tr></Thead><Tbody>{listings.map((item) => <Tr key={getId(item)}><Td><Strong>{item.name}</Strong><Span>{item.area}</Span></Td><Td>{item.category}</Td><Td><StatusPill status={item.status} /></Td><Td>{money(item.pricePerMonth)}</Td><Td>{item.owner?.name}</Td><Td><Box className="row-actions"><Button className="icon-button" type="button" onClick={() => editListing(item)} aria-label={`Edit ${item.name}`} title="Edit"><Pencil aria-hidden="true" /></Button><Button className="icon-button danger" type="button" onClick={() => remove(getId(item))} aria-label={`Delete ${item.name}`} title="Delete"><Trash2 aria-hidden="true" /></Button></Box></Td></Tr>)}</Tbody></Table></Box></Section>
    </>
  );
}

function BookingManager({ bookings, money, reload, notify }) {
  const updateStatus = async (id, status) => { await api.updateBooking(id, { status }); await reload(); notify("Booking status updated."); };
  return (
    <>
      <Box className="section-heading"><Box><Paragraph className="eyebrow">Bookings</Paragraph><Heading2>Approve and track rental requests</Heading2></Box></Box>
      <Section className="admin-panel table-panel"><Box className="table-wrap"><Table><Thead><Tr><Th>Booking</Th><Th>Customer</Th><Th>Dates</Th><Th>Total</Th><Th>Status</Th></Tr></Thead><Tbody>{bookings.map((booking) => <Tr key={getId(booking)}><Td><Strong>{booking.listingName}</Strong><Span>{booking.months || booking.days || 1} month rental</Span></Td><Td><Strong>{booking.customer?.name}</Strong><Span>{booking.customer?.contact}</Span></Td><Td><Span>{String(booking.startDate).slice(0, 10)}</Span><Span>{String(booking.endDate).slice(0, 10)}</Span></Td><Td>{money(booking.total)}</Td><Td><Select value={booking.status} onChange={(event) => updateStatus(getId(booking), event.target.value)}><Option value="pending">Pending</Option><Option value="approved">Approved</Option><Option value="active">Active</Option><Option value="completed">Completed</Option><Option value="cancelled">Cancelled</Option></Select></Td></Tr>)}{!bookings.length ? <Tr><Td colSpan="5">No booking requests yet.</Td></Tr> : null}</Tbody></Table></Box></Section>
    </>
  );
}

function CategoryManager({ categories, reload, notify }) {
  const [form, setForm] = useState({ name: "", icon: "package", description: "" });
  const submit = async (event) => { event.preventDefault(); await api.createCategory({ ...form, active: true }); setForm({ name: "", icon: "package", description: "" }); await reload(); notify("Category added."); };
  const toggle = async (category) => { await api.updateCategory(getId(category), { active: !category.active }); await reload(); notify("Category updated."); };
  const remove = async (category) => { await api.deleteCategory(getId(category)); await reload(); notify("Category deleted."); };
  return (
    <>
      <Box className="section-heading"><Box><Paragraph className="eyebrow">Categories</Paragraph><Heading2>Manage marketplace structure</Heading2></Box></Box>
      <Section className="admin-panel"><Form className="admin-form" onSubmit={submit}><Box className="form-grid three"><Label><Span>Name</Span><Input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} required /></Label><Label><Span>Icon key</Span><Input value={form.icon} onChange={(event) => setForm((current) => ({ ...current, icon: event.target.value }))} /></Label><Label><Span>Description</Span><Input value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} /></Label></Box><Button className="primary-action" type="submit"><Plus aria-hidden="true" />Add Category</Button></Form></Section>
      <Box className="category-admin-grid">{categories.map((category) => <Article className="category-admin-card" key={getId(category)}><Box><Heading3>{category.name}</Heading3><Paragraph>{category.description}</Paragraph></Box><Box className="row-actions"><Button className="secondary-action" type="button" onClick={() => toggle(category)}><CheckCircle2 aria-hidden="true" />{category.active ? "Active" : "Paused"}</Button><Button className="icon-button danger" type="button" onClick={() => remove(category)} aria-label={`Delete ${category.name}`} title="Delete"><Trash2 aria-hidden="true" /></Button></Box></Article>)}</Box>
    </>
  );
}

function SettingsManager({ settings, reload, notify }) {
  const [form, setForm] = useState(settings || {});
  useEffect(() => setForm(settings || {}), [settings]);
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const submit = async (event) => { event.preventDefault(); await api.updateSettings(form); await reload(); notify("Business settings saved."); };
  return (
    <>
      <Box className="section-heading"><Box><Paragraph className="eyebrow">Settings</Paragraph><Heading2>Business logic and platform rules</Heading2></Box></Box>
      <Section className="admin-panel"><Form className="admin-form" onSubmit={submit}><Box className="form-grid"><Label><Span>Platform name</Span><Input value={form.platformName || ""} onChange={(event) => update("platformName", event.target.value)} /></Label><Label><Span>Operating city</Span><Input value={form.city || ""} onChange={(event) => update("city", event.target.value)} /></Label><Label><Span>Currency</Span><Input value={form.currency || "INR"} onChange={(event) => update("currency", event.target.value.toUpperCase())} /></Label><Label><Span>Platform fee %</Span><Input type="number" min="0" value={form.platformFeePercent || 0} onChange={(event) => update("platformFeePercent", Number(event.target.value))} /></Label><Label><Span>Default deposit %</Span><Input type="number" min="0" value={form.defaultDepositPercent || 0} onChange={(event) => update("defaultDepositPercent", Number(event.target.value))} /></Label><Label><Span>Late fee per month</Span><Input type="number" min="0" value={form.lateFeePerDay || 0} onChange={(event) => update("lateFeePerDay", Number(event.target.value))} /></Label><Label><Span>Cancellation window hours</Span><Input type="number" min="0" value={form.cancellationWindowHours || 0} onChange={(event) => update("cancellationWindowHours", Number(event.target.value))} /></Label><Label><Span>Min rental months</Span><Input type="number" min="1" value={form.minRentalDays || 1} onChange={(event) => update("minRentalDays", Number(event.target.value))} /></Label><Label><Span>Max rental months</Span><Input type="number" min="1" value={form.maxRentalDays || 30} onChange={(event) => update("maxRentalDays", Number(event.target.value))} /></Label><Label><Span>Support email</Span><Input value={form.supportEmail || ""} onChange={(event) => update("supportEmail", event.target.value)} /></Label><Label><Span>Support phone</Span><Input value={form.supportPhone || ""} onChange={(event) => update("supportPhone", event.target.value)} /></Label></Box><Box className="form-actions"><Label className="check-row"><Input type="checkbox" checked={Boolean(form.deliveryEnabled)} onChange={(event) => update("deliveryEnabled", event.target.checked)} /><Span>Delivery enabled</Span></Label><Label className="check-row"><Input type="checkbox" checked={Boolean(form.ownerVerificationRequired)} onChange={(event) => update("ownerVerificationRequired", event.target.checked)} /><Span>Require owner verification</Span></Label><Label className="check-row"><Input type="checkbox" checked={Boolean(form.autoApproveBookings)} onChange={(event) => update("autoApproveBookings", event.target.checked)} /><Span>Auto approve bookings</Span></Label></Box><Button className="primary-action" type="submit"><SlidersHorizontal aria-hidden="true" />Save Settings</Button></Form></Section>
    </>
  );
}
