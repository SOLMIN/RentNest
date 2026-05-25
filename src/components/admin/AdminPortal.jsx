import { useEffect, useMemo, useState } from "react";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import InsightsRounded from "@mui/icons-material/InsightsRounded";
import Inventory2Rounded from "@mui/icons-material/Inventory2Rounded";
import LocalOfferRounded from "@mui/icons-material/LocalOfferRounded";
import ReceiptLongRounded from "@mui/icons-material/ReceiptLongRounded";
import SaveRounded from "@mui/icons-material/SaveRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { api } from "../../services/api";
import { categoryImages, emptyListing, serviceLocalities } from "../../constants/marketplace";
import { getId } from "../../utils/formatters";

const listingStatuses = ["available", "pending-review", "rented", "maintenance", "hidden"];
const bookingStatuses = ["pending", "approved", "active", "completed", "cancelled"];
const intents = ["Home", "Event", "Move-in"];

const statusColor = (status) => {
  if (status === "available" || status === "approved" || status === "active" || status === "completed") return "success";
  if (status === "pending" || status === "pending-review" || status === "maintenance") return "warning";
  if (status === "cancelled" || status === "hidden") return "default";
  return "info";
};

export default function AdminPortal({ listings, categories, bookings, settings, metrics, money, reload, notify }) {
  const [tab, setTab] = useState("overview");
  const tabs = [
    ["overview", InsightsRounded, "Overview"],
    ["inventory", Inventory2Rounded, "Inventory"],
    ["bookings", ReceiptLongRounded, "Bookings"],
    ["categories", LocalOfferRounded, "Categories"],
    ["settings", SettingsRounded, "Settings"],
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, pb: 4 }}>
      <Paper
        sx={{
          p: { xs: 2, md: 2.5 },
          mb: 2.5,
          overflow: "hidden",
          position: "relative",
          border: "1px solid rgba(8,123,108,0.2)",
          background:
            "radial-gradient(140% 120% at 0% 0%, rgba(8,123,108,0.14), rgba(8,123,108,0.04) 45%, rgba(255,255,255,1) 75%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -56,
            right: -32,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(41,95,143,0.18), rgba(41,95,143,0))",
            pointerEvents: "none",
          }}
        />
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={2} alignItems={{ md: "center" }}>
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Chip
              label="Admin workspace"
              size="small"
              sx={{ mb: 1, bgcolor: "rgba(8,123,108,0.14)", color: "primary.dark", fontWeight: 700 }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                letterSpacing: 0,
                lineHeight: 1.05,
                fontSize: { xs: "1.65rem", md: "2.05rem" },
              }}
            >
              Operations command center
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 560 }}>
              Monitor rental flow, update inventory, and manage business rules from one streamlined control surface.
            </Typography>
          </Box>
          <ToggleButtonGroup exclusive value={tab} onChange={(_, next) => next && setTab(next)} size="small" sx={{ flexWrap: "wrap" }}>
            {tabs.map(([key, Icon, label]) => (
              <ToggleButton key={key} value={key}>
                <Icon sx={{ mr: 0.75, fontSize: 18 }} />
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>
      </Paper>

      {tab === "overview" ? <Overview metrics={metrics} bookings={bookings} money={money} settings={settings} /> : null}
      {tab === "inventory" ? <InventoryManager listings={listings} categories={categories} money={money} reload={reload} notify={notify} /> : null}
      {tab === "bookings" ? <BookingManager bookings={bookings} money={money} reload={reload} notify={notify} /> : null}
      {tab === "categories" ? <CategoryManager categories={categories} reload={reload} notify={notify} /> : null}
      {tab === "settings" ? <SettingsManager settings={settings} reload={reload} notify={notify} /> : null}
    </Box>
  );
}

function Overview({ metrics, bookings, money, settings }) {
  const cards = [
    ["Total listings", metrics?.totalListings || 0],
    ["Open bookings", metrics?.openBookings || 0],
    ["Potential monthly revenue", money(metrics?.monthlyRevenue || 0)],
    ["Utilization", `${metrics?.utilizationPercent || 0}%`],
  ];

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Typography variant="overline" color="text.secondary">
          Overview
        </Typography>
        <Typography variant="h5">
          {settings?.platformName || "RentNest"} operations
        </Typography>
      </Box>

      <Box sx={{ mb: 2.5, display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))", lg: "repeat(4,minmax(0,1fr))" } }}>
        {cards.map(([label, value]) => (
          <Card key={label} variant="outlined">
            <CardContent sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {label}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 700 }}>
                {value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1.25 }}>
              Recent bookings
            </Typography>
            <Stack spacing={1}>
              {bookings.slice(0, 6).map((booking) => (
                <Stack key={getId(booking)} direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 1.1, borderRadius: 1, bgcolor: "rgba(20,33,32,0.04)" }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {booking.listingName}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {booking.customer?.name} · {money(booking.total)}
                    </Typography>
                  </Box>
                  <Chip size="small" label={booking.status} color={statusColor(booking.status)} />
                </Stack>
              ))}
              {!bookings.length ? <Alert severity="info">No booking requests yet.</Alert> : null}
            </Stack>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1.25 }}>
              Policy snapshot
            </Typography>
            <Stack spacing={1}>
              <PolicyItem label="Owner verification" value={settings?.ownerVerificationRequired ? "Required" : "Optional"} />
              <PolicyItem label="Delivery" value={settings?.deliveryEnabled ? "Enabled" : "Disabled"} />
              <PolicyItem label="Platform fee" value={`${settings?.platformFeePercent || 0}%`} />
              <PolicyItem label="Rental window" value={`${settings?.minRentalDays || 1}-${settings?.maxRentalDays || 12} months`} />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

function PolicyItem({ label, value }) {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ p: 1, borderRadius: 1, bgcolor: "rgba(20,33,32,0.04)" }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        {value}
      </Typography>
    </Stack>
  );
}

function InventoryManager({ listings, categories, money, reload, notify }) {
  const [form, setForm] = useState(emptyListing);
  const [editingId, setEditingId] = useState(null);
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const reset = () => {
    setEditingId(null);
    setForm(emptyListing);
  };

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

  const columns = useMemo(
    () => [
      { field: "name", headerName: "Item", flex: 1.2, minWidth: 180 },
      { field: "category", headerName: "Category", flex: 0.9, minWidth: 120 },
      {
        field: "status",
        headerName: "Status",
        minWidth: 130,
        renderCell: (params) => <Chip size="small" label={params.value} color={statusColor(params.value)} />,
      },
      { field: "pricePerMonth", headerName: "Price", minWidth: 120, valueFormatter: (value) => money(value) },
      { field: "ownerName", headerName: "Owner", flex: 1, minWidth: 150 },
      {
        field: "actions",
        headerName: "Actions",
        minWidth: 120,
        sortable: false,
        renderCell: (params) => (
          <Stack direction="row">
            <IconButton size="small" onClick={() => editListing(params.row.raw)} aria-label="edit">
              <EditRounded fontSize="small" />
            </IconButton>
            <IconButton size="small" color="error" onClick={() => remove(params.row.id)} aria-label="delete">
              <DeleteOutlineRounded fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
    ],
    [money],
  );

  const rows = listings.map((item) => ({
    id: getId(item),
    name: item.name,
    category: item.category,
    status: item.status,
    pricePerMonth: Number(item.pricePerMonth || 0),
    ownerName: item.owner?.name || "-",
    raw: item,
  }));

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 1 }}>
        <DataGrid rows={rows} columns={columns} autoHeight disableRowSelectionOnClick pageSizeOptions={[5, 10, 20]} initialState={{ pagination: { paginationModel: { pageSize: 10 } } }} />
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }} sx={{ mb: 1.5 }}>
          <Typography variant="h6">
            Manage rental supply
          </Typography>
          <Button variant="outlined" onClick={reset}>
            New item
          </Button>
        </Stack>
        <Box component="form" onSubmit={submit}>
          <Grid container spacing={1.5}>
            <Grid size={{ xs: 12, md: 6 }}><TextField fullWidth label="Item name" value={form.name} onChange={(e) => update("name", e.target.value)} required /></Grid>
            <Grid size={{ xs: 12, md: 3 }}><TextField fullWidth select label="Category" value={form.category} onChange={(e) => update("category", e.target.value)}>{categories.map((c) => <MenuItem key={getId(c)} value={c.name}>{c.name}</MenuItem>)}</TextField></Grid>
            <Grid size={{ xs: 12, md: 3 }}><TextField fullWidth select label="Status" value={form.status} onChange={(e) => update("status", e.target.value)}>{listingStatuses.map((status) => <MenuItem key={status} value={status}>{status}</MenuItem>)}</TextField></Grid>
            <Grid size={{ xs: 12, md: 3 }}><TextField fullWidth select label="Intent" value={form.intent} onChange={(e) => update("intent", e.target.value)}>{intents.map((intent) => <MenuItem key={intent} value={intent}>{intent}</MenuItem>)}</TextField></Grid>
            <Grid size={{ xs: 12, md: 3 }}><TextField fullWidth select label="Area" value={form.area} onChange={(e) => update("area", e.target.value)}>{serviceLocalities.map((locality) => <MenuItem key={locality} value={locality}>{locality}</MenuItem>)}</TextField></Grid>
            <Grid size={{ xs: 6, md: 2 }}><TextField fullWidth type="number" label="Quantity" value={form.quantity} onChange={(e) => update("quantity", e.target.value)} /></Grid>
            <Grid size={{ xs: 6, md: 2 }}><TextField fullWidth type="number" label="Monthly price" value={form.pricePerMonth} onChange={(e) => update("pricePerMonth", e.target.value)} required /></Grid>
            <Grid size={{ xs: 6, md: 2 }}><TextField fullWidth type="number" label="Deposit" value={form.deposit} onChange={(e) => update("deposit", e.target.value)} required /></Grid>
            <Grid size={{ xs: 12, md: 4 }}><TextField fullWidth label="Owner name" value={form.ownerName} onChange={(e) => update("ownerName", e.target.value)} required /></Grid>
            <Grid size={{ xs: 12, md: 4 }}><TextField fullWidth label="Owner phone" value={form.ownerPhone} onChange={(e) => update("ownerPhone", e.target.value)} /></Grid>
            <Grid size={{ xs: 12 }}><TextField fullWidth multiline minRows={3} label="Description" value={form.description} onChange={(e) => update("description", e.target.value)} required /></Grid>
            <Grid size={{ xs: 12 }}>
              <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }}>
                <Stack direction={{ xs: "column", sm: "row" }}>
                  <FormControlLabel control={<Checkbox checked={form.deliveryAvailable} onChange={(e) => update("deliveryAvailable", e.target.checked)} />} label="Delivery available" />
                  <FormControlLabel control={<Checkbox checked={form.ownerVerified} onChange={(e) => update("ownerVerified", e.target.checked)} />} label="Owner verified" />
                </Stack>
                <Button type="submit" variant="contained" startIcon={<SaveRounded />}>
                  {editingId ? "Save Item" : "Create Item"}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Stack>
  );
}

function BookingManager({ bookings, money, reload, notify }) {
  const updateStatus = async (id, status) => {
    await api.updateBooking(id, { status });
    await reload();
    notify("Booking status updated.");
  };

  const columns = [
    { field: "listingName", headerName: "Booking", flex: 1.2, minWidth: 180 },
    { field: "customerName", headerName: "Customer", flex: 1, minWidth: 160 },
    { field: "dates", headerName: "Dates", flex: 1.2, minWidth: 190 },
    { field: "total", headerName: "Total", minWidth: 120 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 170,
      renderCell: (params) => (
        <TextField select size="small" value={params.value} onChange={(event) => updateStatus(params.row.id, event.target.value)} sx={{ minWidth: 140 }}>
          {bookingStatuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
      ),
    },
  ];

  const rows = bookings.map((booking) => ({
    id: getId(booking),
    listingName: booking.listingName,
    customerName: `${booking.customer?.name || "-"} (${booking.customer?.contact || "-"})`,
    dates: `${String(booking.startDate).slice(0, 10)} → ${String(booking.endDate).slice(0, 10)}`,
    total: money(booking.total),
    status: booking.status,
  }));

  return (
    <Paper sx={{ p: 1 }}>
      <DataGrid rows={rows} columns={columns} autoHeight disableRowSelectionOnClick pageSizeOptions={[5, 10, 20]} initialState={{ pagination: { paginationModel: { pageSize: 10 } } }} />
    </Paper>
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
    <Stack spacing={2}>
      <Paper sx={{ p: 2 }}>
        <Box component="form" onSubmit={submit}>
          <Grid container spacing={1.5}>
            <Grid size={{ xs: 12, md: 4 }}><TextField fullWidth label="Name" value={form.name} onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))} required /></Grid>
            <Grid size={{ xs: 12, md: 3 }}><TextField fullWidth label="Icon key" value={form.icon} onChange={(e) => setForm((current) => ({ ...current, icon: e.target.value }))} /></Grid>
            <Grid size={{ xs: 12, md: 5 }}><TextField fullWidth label="Description" value={form.description} onChange={(e) => setForm((current) => ({ ...current, description: e.target.value }))} /></Grid>
            <Grid size={{ xs: 12 }}><Button type="submit" variant="contained">Add Category</Button></Grid>
          </Grid>
        </Box>
      </Paper>
      <Grid container spacing={1.5}>
        {categories.map((category) => (
          <Grid key={getId(category)} size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="subtitle1">
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </Box>
                <Stack direction="row">
                  <Button variant="outlined" size="small" onClick={() => toggle(category)}>
                    {category.active ? "Active" : "Paused"}
                  </Button>
                  <IconButton color="error" onClick={() => remove(category)}>
                    <DeleteOutlineRounded fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

function SettingsManager({ settings, reload, notify }) {
  const [form, setForm] = useState(settings || {});
  useEffect(() => setForm(settings || {}), [settings]);
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const submit = async (event) => {
    event.preventDefault();
    await api.updateSettings(form);
    await reload();
    notify("Business settings saved.");
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box component="form" onSubmit={submit}>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, md: 4 }}><TextField fullWidth label="Platform name" value={form.platformName || ""} onChange={(e) => update("platformName", e.target.value)} /></Grid>
          <Grid size={{ xs: 12, md: 4 }}><TextField fullWidth label="Operating city" value={form.city || ""} onChange={(e) => update("city", e.target.value)} /></Grid>
          <Grid size={{ xs: 12, md: 4 }}><TextField fullWidth label="Currency" value={form.currency || "INR"} onChange={(e) => update("currency", e.target.value.toUpperCase())} /></Grid>
          <Grid size={{ xs: 6, md: 3 }}><TextField fullWidth type="number" label="Platform fee %" value={form.platformFeePercent || 0} onChange={(e) => update("platformFeePercent", Number(e.target.value))} /></Grid>
          <Grid size={{ xs: 6, md: 3 }}><TextField fullWidth type="number" label="Default deposit %" value={form.defaultDepositPercent || 0} onChange={(e) => update("defaultDepositPercent", Number(e.target.value))} /></Grid>
          <Grid size={{ xs: 6, md: 3 }}><TextField fullWidth type="number" label="Late fee per month" value={form.lateFeePerDay || 0} onChange={(e) => update("lateFeePerDay", Number(e.target.value))} /></Grid>
          <Grid size={{ xs: 6, md: 3 }}><TextField fullWidth type="number" label="Cancellation window hours" value={form.cancellationWindowHours || 0} onChange={(e) => update("cancellationWindowHours", Number(e.target.value))} /></Grid>
          <Grid size={{ xs: 6, md: 3 }}><TextField fullWidth type="number" label="Min rental months" value={form.minRentalDays || 1} onChange={(e) => update("minRentalDays", Number(e.target.value))} /></Grid>
          <Grid size={{ xs: 6, md: 3 }}><TextField fullWidth type="number" label="Max rental months" value={form.maxRentalDays || 30} onChange={(e) => update("maxRentalDays", Number(e.target.value))} /></Grid>
          <Grid size={{ xs: 12, md: 3 }}><TextField fullWidth label="Support email" value={form.supportEmail || ""} onChange={(e) => update("supportEmail", e.target.value)} /></Grid>
          <Grid size={{ xs: 12, md: 3 }}><TextField fullWidth label="Support phone" value={form.supportPhone || ""} onChange={(e) => update("supportPhone", e.target.value)} /></Grid>
          <Grid size={{ xs: 12 }}>
            <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }}>
              <Stack direction={{ xs: "column", sm: "row" }}>
                <FormControlLabel control={<Checkbox checked={Boolean(form.deliveryEnabled)} onChange={(e) => update("deliveryEnabled", e.target.checked)} />} label="Delivery enabled" />
                <FormControlLabel control={<Checkbox checked={Boolean(form.ownerVerificationRequired)} onChange={(e) => update("ownerVerificationRequired", e.target.checked)} />} label="Require owner verification" />
                <FormControlLabel control={<Checkbox checked={Boolean(form.autoApproveBookings)} onChange={(e) => update("autoApproveBookings", e.target.checked)} />} label="Auto approve bookings" />
              </Stack>
              <Button type="submit" variant="contained" startIcon={<SaveRounded />}>
                Save Settings
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
