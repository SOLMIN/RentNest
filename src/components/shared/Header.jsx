import { LayoutDashboard, Plus, Store } from "lucide-react";
import { BrandButton, HeaderRoot, Link, Nav, NavButton, Small, Span, Strong } from "./styles";

export default function Header({ view, setView, health }) {
  return (
    <HeaderRoot className="topbar">
      <BrandButton className="brand-button" type="button" onClick={() => setView("marketplace")} aria-label="Open marketplace">
        <Span className="brand-mark">RN</Span>
        <Span className="brand-copy">
          <Strong>RentNest</Strong>
          <Small>{health?.dataMode === "mongodb" ? "MongoDB live" : "Demo data mode"}</Small>
        </Span>
      </BrandButton>

      <Nav className="nav-tabs" aria-label="Main views">
        <NavButton className={view === "marketplace" ? "active" : ""} type="button" onClick={() => setView("marketplace")}>
          <Store aria-hidden="true" />
          Marketplace
        </NavButton>
        <NavButton className={view === "admin" ? "active" : ""} type="button" onClick={() => setView("admin")}>
          <LayoutDashboard aria-hidden="true" />
          Admin Portal
        </NavButton>
      </Nav>

      <Link className="header-cta" href="#rent-out">
        <Plus aria-hidden="true" />
        List your item
      </Link>
    </HeaderRoot>
  );
}
