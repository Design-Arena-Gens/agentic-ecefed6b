import { insights } from "@/lib/mockData";

const quickFilters = [
  "Priority Escalations",
  "Automation Drift",
  "Agent Coaching",
  "Template Health"
];

export function DashboardHeader() {
  return (
    <header className="panel" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
            <div className="tag accent">WHATSAPP CONTROL</div>
            <div className="tag">Realtime SLA Guardrails</div>
          </div>
          <h1 style={{ fontSize: "1.9rem", fontWeight: 700 }}>Agent Operations Command Center</h1>
          <p style={{ color: "var(--text-secondary)", marginTop: "8px", maxWidth: "640px" }}>
            Coordinate human agents, automations, and WhatsApp journeys from one surface. Monitor signal,
            deploy playbooks, and close loops before your customers churn.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
          <button className="primary-button">
            Launch Escalation War Room
            <span style={{ fontSize: "1.1rem" }}>→</span>
          </button>
          <button className="secondary-button">Export Ops Summary</button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "14px",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))"
        }}
      >
        <div className="panel stat-card" style={{ padding: "16px" }}>
          <div className="section-label">Messages Today</div>
          <div className="stat-value">{insights.messagesToday}</div>
          <div className="stat-trend">+21% vs yesterday</div>
        </div>
        <div className="panel stat-card" style={{ padding: "16px" }}>
          <div className="section-label">Resolution Rate</div>
          <div className="stat-value">{insights.resolutionRate}</div>
          <div style={{ color: "var(--text-secondary)" }}>SLA breach risk <span style={{ color: "var(--accent)" }}>Low</span></div>
        </div>
        <div className="panel stat-card" style={{ padding: "16px" }}>
          <div className="section-label">Avg Handle Time</div>
          <div className="stat-value">{insights.avgHandleTime}</div>
          <div style={{ color: "var(--text-secondary)" }}>Goal <span style={{ color: "var(--accent)" }}>≤ 5m</span></div>
        </div>
        <div className="panel stat-card" style={{ padding: "16px" }}>
          <div className="section-label">CSAT</div>
          <div className="stat-value">{insights.csat}</div>
          <div style={{ color: "var(--text-secondary)" }}>Automation deflection 63%</div>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {quickFilters.map((filter) => (
          <button key={filter} className="secondary-button">
            {filter}
          </button>
        ))}
      </div>
    </header>
  );
}
