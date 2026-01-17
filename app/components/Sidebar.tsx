const navItems = [
  { label: "Overview", active: true },
  { label: "Live Inbox" },
  { label: "Automations" },
  { label: "Templates" },
  { label: "Integrations" },
  { label: "Analytics" },
  { label: "Routing" }
];

const shortcuts = [
  { label: "Escalation Matrix", emoji: "🛡️" },
  { label: "Customer Journeys", emoji: "🧭" },
  { label: "Workflows", emoji: "⚙️" },
  { label: "QA Playbooks", emoji: "📚" }
];

export function Sidebar() {
  return (
    <aside className="panel" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            alignItems: "center",
            background: "rgba(37, 211, 102, 0.15)",
            borderRadius: "16px",
            color: "var(--accent)",
            display: "flex",
            fontSize: "1.25rem",
            height: "40px",
            justifyContent: "center",
            width: "40px"
          }}
        >
          ⚡
        </div>
        <div>
          <div style={{ fontWeight: 600, letterSpacing: ".03em" }}>Agent Orchestrator</div>
          <div style={{ color: "var(--text-tertiary)", fontSize: ".78rem" }}>WhatsApp Command</div>
        </div>
      </div>

      <div>
        <div className="section-label">Navigation</div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "12px", gap: "6px" }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              className="secondary-button"
              style={{
                justifyContent: "space-between",
                borderColor: item.active ? "var(--accent-border)" : "rgba(255,255,255,0.08)",
                background: item.active ? "rgba(37, 211, 102, 0.12)" : "transparent",
                color: item.active ? "var(--accent)" : "var(--text-secondary)"
              }}
            >
              <span>{item.label}</span>
              {item.active && (
                <span
                  style={{
                    alignItems: "center",
                    background: "var(--accent)",
                    borderRadius: "999px",
                    color: "#041007",
                    display: "inline-flex",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    padding: "2px 8px"
                  }}
                >
                  LIVE
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="section-label">Shortcuts</div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "12px", gap: "8px" }}>
          {shortcuts.map((item) => (
            <div
              key={item.label}
              className="badge"
              style={{
                justifyContent: "space-between",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "10px 12px"
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "1rem" }}>{item.emoji}</span>
                <span>{item.label}</span>
              </span>
              <span style={{ color: "var(--text-tertiary)", fontSize: "0.75rem" }}>⌘</span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, rgba(37, 211, 102, 0.25), rgba(255,255,255,0.03))",
          borderRadius: "18px",
          padding: "20px",
          border: "1px solid rgba(37, 211, 102, 0.3)"
        }}
      >
        <div className="section-label" style={{ marginBottom: "8px" }}>
          Proactive Intel
        </div>
        <div style={{ fontWeight: 600, marginBottom: "12px" }}>Unlock agent assistance</div>
        <div style={{ color: "var(--text-tertiary)", fontSize: "0.85rem", marginBottom: "16px" }}>
          Deploy GPT co-pilots for WhatsApp to coach agents live inside high intent threads.
        </div>
        <button className="primary-button" style={{ width: "100%", justifyContent: "center" }}>
          Activate AI Coaching
        </button>
      </div>
    </aside>
  );
}
