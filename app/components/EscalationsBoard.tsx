import { tickets } from "@/lib/mockData";

const priorityAccent = {
  High: "danger",
  Medium: "warning",
  Low: "accent"
} as const;

export function EscalationsBoard() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <div className="section-label">Escalation Queue</div>
          <div className="panel-title">WhatsApp conversations at risk</div>
        </div>
        <button className="secondary-button">Open Live Inbox</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.5fr) repeat(3, minmax(0, 1fr))",
              alignItems: "center",
              gap: "12px",
              padding: "16px 18px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)"
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>{ticket.customer}</div>
              <div style={{ color: "var(--text-tertiary)", fontSize: "0.85rem" }}>
                {ticket.channel} • {ticket.id}
              </div>
            </div>
            <div>
              <div className={`tag ${priorityAccent[ticket.priority]}`} style={{ justifyContent: "center" }}>
                {ticket.priority} priority
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>{ticket.assignedTo}</div>
              <div style={{ color: "var(--text-tertiary)", fontSize: "0.85rem" }}>owner</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "var(--text-secondary)" }}>Last update {ticket.lastMessageAgo}</div>
              <button className="secondary-button" style={{ marginTop: "8px", width: "100%" }}>
                Drop into thread
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
