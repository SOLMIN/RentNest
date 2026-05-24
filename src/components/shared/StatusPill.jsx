import { statusLabels } from "../../constants/marketplace";
import { StatusText } from "./styles";

export default function StatusPill({ status }) {
  return <StatusText className={`status-pill ${status}`}>{statusLabels[status] || status}</StatusText>;
}
