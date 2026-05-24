import { statusLabels } from "../../constants/marketplace";

export default function StatusPill({ status }) {
  return <span className={`status-pill ${status}`}>{statusLabels[status] || status}</span>;
}
