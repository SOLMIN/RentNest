import { useEffect, useMemo, useState } from "react";
import { Package, RotateCcw } from "lucide-react";
import { api } from "./services/api";
import Header from "./components/shared/Header";
import Marketplace from "./components/marketplace/Marketplace";
import AdminPortal from "./components/admin/AdminPortal";
import { normalizeCurrency } from "./utils/formatters";

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

export default App;
