import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { Package, RotateCcw } from "lucide-react";
import { api } from "./services/api";
import Header from "./components/shared/Header";
import Marketplace from "./components/marketplace/Marketplace";
import { normalizeCurrency } from "./utils/formatters";
import { Button, ErrorMain, Heading1, Main, Paragraph, Shell, Toast } from "./App.styles";

const AdminPortal = lazy(() => import("./components/admin/AdminPortal"));

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
    <Shell className="app-shell">
      <Header view={view} setView={setView} health={health} />
      {error ? (
        <ErrorMain className="error-screen">
          <Package aria-hidden="true" />
          <Heading1>API connection needs attention</Heading1>
          <Paragraph>{error}</Paragraph>
          <Button className="primary-action" type="button" onClick={loadData}>
            <RotateCcw aria-hidden="true" />
            Retry
          </Button>
        </ErrorMain>
      ) : (
        <Main>
          <Suspense fallback={<Paragraph style={{ padding: "20px 24px" }}>Loading module...</Paragraph>}>
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
          </Suspense>
        </Main>
      )}
      <Toast className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">
        {toast}
      </Toast>
    </Shell>
  );
}

export default App;
