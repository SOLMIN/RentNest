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

export default function AdminPortal({ listings, categories, bookings, settings, metrics, money, reload, notify }) {
  const [tab, setTab] = useState("overview");
  return (
    <section className="admin-shell" aria-label="Admin portal">
      <aside className="admin-sidebar">
        <p className="eyebrow">Admin</p><h1>Business command center</h1>
        <nav aria-label="Admin sections">
          {[["overview", LayoutDashboard, "Overview"], ["inventory", Boxes, "Inventory"], ["bookings", ClipboardList, "Bookings"], ["categories", Tags, "Categories"], ["settings", Settings, "Settings"]].map(([key, Icon, label]) => <button className={tab === key ? "active" : ""} key={key} type="button" onClick={() => setTab(key)}><Icon aria-hidden="true" />{label}</button>)}
        </nav>
      </aside>
      <div className="admin-main">
        {tab === "overview" ? <Overview metrics={metrics} bookings={bookings} money={money} settings={settings} /> : null}
        {tab === "inventory" ? <InventoryManager listings={listings} categories={categories} money={money} reload={reload} notify={notify} /> : null}
        {tab === "bookings" ? <BookingManager bookings={bookings} money={money} reload={reload} notify={notify} /> : null}
        {tab === "categories" ? <CategoryManager categories={categories} reload={reload} notify={notify} /> : null}
        {tab === "settings" ? <SettingsManager settings={settings} reload={reload} notify={notify} /> : null}
      </div>
    </section>
  );
}

function Overview({ metrics, bookings, money, settings }) {
  const cards = [["Total listings", metrics?.totalListings || 0, Boxes], ["Open bookings", metrics?.openBookings || 0, ClipboardList], ["Potential monthly revenue", money(metrics?.monthlyRevenue || 0), IndianRupee], ["Utilization", `${metrics?.utilizationPercent || 0}%`, Activity]];
  return (
    <>
      <div className="section-heading"><div><p className="eyebrow">Overview</p><h2>{settings?.platformName || "RentNest"} operations</h2></div></div>
      <div className="metrics-grid">{cards.map(([label, value, Icon]) => <article className="metric-card" key={label}><Icon aria-hidden="true" /><span>{label}</span><strong>{value}</strong></article>)}</div>
      <div className="admin-grid">
        <section className="admin-panel"><h3>Recent bookings</h3><div className="activity-list">{bookings.slice(0, 6).map((booking) => <article className="activity-row" key={getId(booking)}><div><strong>{booking.listingName}</strong><span>{booking.customer?.name} · {money(booking.total)}</span></div><StatusPill status={booking.status} /></article>)}{!bookings.length ? <p className="muted">No booking requests yet.</p> : null}</div></section>
        <section className="admin-panel"><h3>Policy snapshot</h3><div className="policy-list"><PolicyItem icon={ShieldCheck} label="Owner verification" value={settings?.ownerVerificationRequired ? "Required" : "Optional"} /><PolicyItem icon={Truck} label="Delivery" value={settings?.deliveryEnabled ? "Enabled" : "Disabled"} /><PolicyItem icon={IndianRupee} label="Platform fee" value={`${settings?.platformFeePercent || 0}%`} /><PolicyItem icon={CalendarCheck} label="Rental window" value={`${settings?.minRentalDays || 1}-${settings?.maxRentalDays || 12} months`} /></div></section>
      </div>
    </>
  );
}

function PolicyItem({ icon: Icon, label, value }) {
  return <div className="policy-item"><Icon aria-hidden="true" /><span>{label}</span><strong>{value}</strong></div>;
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
      <div className="section-heading"><div><p className="eyebrow">Inventory</p><h2>Manage rental supply</h2></div><button className="secondary-action" type="button" onClick={reset}><Plus aria-hidden="true" />New item</button></div>
      <section className="admin-panel"><form className="admin-form" onSubmit={submit}>
        <div className="form-grid">
          <label><span>Item name</span><input value={form.name} onChange={(event) => update("name", event.target.value)} required /></label>
          <label><span>Category</span><select value={form.category} onChange={(event) => update("category", event.target.value)} required>{categories.map((category) => <option key={getId(category)} value={category.name}>{category.name}</option>)}</select></label>
          <label><span>Status</span><select value={form.status} onChange={(event) => update("status", event.target.value)}><option value="available">Available</option><option value="pending-review">Pending review</option><option value="rented">Rented</option><option value="maintenance">Maintenance</option><option value="hidden">Hidden</option></select></label>
          <label><span>Intent</span><select value={form.intent} onChange={(event) => update("intent", event.target.value)}><option value="Home">Home</option><option value="Event">Event</option><option value="Move-in">Move-in</option></select></label>
          <label><span>Area</span><select value={form.area} onChange={(event) => update("area", event.target.value)} required><option value="">Select locality</option>{serviceLocalities.map((locality) => <option key={locality} value={locality}>{locality}</option>)}</select></label>
          <label><span>Quantity</span><input type="number" min="0" value={form.quantity} onChange={(event) => update("quantity", event.target.value)} /></label>
          <label><span>Monthly price</span><input type="number" min="0" value={form.pricePerMonth} onChange={(event) => update("pricePerMonth", event.target.value)} required /></label>
          <label><span>Deposit</span><input type="number" min="0" value={form.deposit} onChange={(event) => update("deposit", event.target.value)} required /></label>
          <label><span>Owner</span><input value={form.ownerName} onChange={(event) => update("ownerName", event.target.value)} required /></label>
          <label><span>Owner phone</span><input value={form.ownerPhone} onChange={(event) => update("ownerPhone", event.target.value)} /></label>
        </div>
        <label><span>Description</span><textarea rows="3" value={form.description} onChange={(event) => update("description", event.target.value)} required /></label>
        <div className="form-actions"><label className="check-row"><input type="checkbox" checked={form.deliveryAvailable} onChange={(event) => update("deliveryAvailable", event.target.checked)} /><span>Delivery available</span></label><label className="check-row"><input type="checkbox" checked={form.ownerVerified} onChange={(event) => update("ownerVerified", event.target.checked)} /><span>Owner verified</span></label><button className="primary-action" type="submit"><Save aria-hidden="true" />{editingId ? "Save Item" : "Create Item"}</button></div>
      </form></section>
      <section className="admin-panel table-panel"><div className="table-wrap"><table><thead><tr><th>Item</th><th>Category</th><th>Status</th><th>Price</th><th>Owner</th><th>Actions</th></tr></thead><tbody>{listings.map((item) => <tr key={getId(item)}><td><strong>{item.name}</strong><span>{item.area}</span></td><td>{item.category}</td><td><StatusPill status={item.status} /></td><td>{money(item.pricePerMonth)}</td><td>{item.owner?.name}</td><td><div className="row-actions"><button className="icon-button" type="button" onClick={() => editListing(item)} aria-label={`Edit ${item.name}`} title="Edit"><Pencil aria-hidden="true" /></button><button className="icon-button danger" type="button" onClick={() => remove(getId(item))} aria-label={`Delete ${item.name}`} title="Delete"><Trash2 aria-hidden="true" /></button></div></td></tr>)}</tbody></table></div></section>
    </>
  );
}

function BookingManager({ bookings, money, reload, notify }) {
  const updateStatus = async (id, status) => { await api.updateBooking(id, { status }); await reload(); notify("Booking status updated."); };
  return (
    <>
      <div className="section-heading"><div><p className="eyebrow">Bookings</p><h2>Approve and track rental requests</h2></div></div>
      <section className="admin-panel table-panel"><div className="table-wrap"><table><thead><tr><th>Booking</th><th>Customer</th><th>Dates</th><th>Total</th><th>Status</th></tr></thead><tbody>{bookings.map((booking) => <tr key={getId(booking)}><td><strong>{booking.listingName}</strong><span>{booking.months || booking.days || 1} month rental</span></td><td><strong>{booking.customer?.name}</strong><span>{booking.customer?.contact}</span></td><td><span>{String(booking.startDate).slice(0, 10)}</span><span>{String(booking.endDate).slice(0, 10)}</span></td><td>{money(booking.total)}</td><td><select value={booking.status} onChange={(event) => updateStatus(getId(booking), event.target.value)}><option value="pending">Pending</option><option value="approved">Approved</option><option value="active">Active</option><option value="completed">Completed</option><option value="cancelled">Cancelled</option></select></td></tr>)}{!bookings.length ? <tr><td colSpan="5">No booking requests yet.</td></tr> : null}</tbody></table></div></section>
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
      <div className="section-heading"><div><p className="eyebrow">Categories</p><h2>Manage marketplace structure</h2></div></div>
      <section className="admin-panel"><form className="admin-form" onSubmit={submit}><div className="form-grid three"><label><span>Name</span><input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} required /></label><label><span>Icon key</span><input value={form.icon} onChange={(event) => setForm((current) => ({ ...current, icon: event.target.value }))} /></label><label><span>Description</span><input value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} /></label></div><button className="primary-action" type="submit"><Plus aria-hidden="true" />Add Category</button></form></section>
      <div className="category-admin-grid">{categories.map((category) => <article className="category-admin-card" key={getId(category)}><div><h3>{category.name}</h3><p>{category.description}</p></div><div className="row-actions"><button className="secondary-action" type="button" onClick={() => toggle(category)}><CheckCircle2 aria-hidden="true" />{category.active ? "Active" : "Paused"}</button><button className="icon-button danger" type="button" onClick={() => remove(category)} aria-label={`Delete ${category.name}`} title="Delete"><Trash2 aria-hidden="true" /></button></div></article>)}</div>
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
      <div className="section-heading"><div><p className="eyebrow">Settings</p><h2>Business logic and platform rules</h2></div></div>
      <section className="admin-panel"><form className="admin-form" onSubmit={submit}><div className="form-grid"><label><span>Platform name</span><input value={form.platformName || ""} onChange={(event) => update("platformName", event.target.value)} /></label><label><span>Operating city</span><input value={form.city || ""} onChange={(event) => update("city", event.target.value)} /></label><label><span>Currency</span><input value={form.currency || "INR"} onChange={(event) => update("currency", event.target.value.toUpperCase())} /></label><label><span>Platform fee %</span><input type="number" min="0" value={form.platformFeePercent || 0} onChange={(event) => update("platformFeePercent", Number(event.target.value))} /></label><label><span>Default deposit %</span><input type="number" min="0" value={form.defaultDepositPercent || 0} onChange={(event) => update("defaultDepositPercent", Number(event.target.value))} /></label><label><span>Late fee per month</span><input type="number" min="0" value={form.lateFeePerDay || 0} onChange={(event) => update("lateFeePerDay", Number(event.target.value))} /></label><label><span>Cancellation window hours</span><input type="number" min="0" value={form.cancellationWindowHours || 0} onChange={(event) => update("cancellationWindowHours", Number(event.target.value))} /></label><label><span>Min rental months</span><input type="number" min="1" value={form.minRentalDays || 1} onChange={(event) => update("minRentalDays", Number(event.target.value))} /></label><label><span>Max rental months</span><input type="number" min="1" value={form.maxRentalDays || 30} onChange={(event) => update("maxRentalDays", Number(event.target.value))} /></label><label><span>Support email</span><input value={form.supportEmail || ""} onChange={(event) => update("supportEmail", event.target.value)} /></label><label><span>Support phone</span><input value={form.supportPhone || ""} onChange={(event) => update("supportPhone", event.target.value)} /></label></div><div className="form-actions"><label className="check-row"><input type="checkbox" checked={Boolean(form.deliveryEnabled)} onChange={(event) => update("deliveryEnabled", event.target.checked)} /><span>Delivery enabled</span></label><label className="check-row"><input type="checkbox" checked={Boolean(form.ownerVerificationRequired)} onChange={(event) => update("ownerVerificationRequired", event.target.checked)} /><span>Require owner verification</span></label><label className="check-row"><input type="checkbox" checked={Boolean(form.autoApproveBookings)} onChange={(event) => update("autoApproveBookings", event.target.checked)} /><span>Auto approve bookings</span></label></div><button className="primary-action" type="submit"><SlidersHorizontal aria-hidden="true" />Save Settings</button></form></section>
    </>
  );
}
