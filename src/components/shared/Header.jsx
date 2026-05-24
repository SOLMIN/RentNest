import { LayoutDashboard, Plus, Store } from "lucide-react";

export default function Header({ view, setView, health }) {
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
