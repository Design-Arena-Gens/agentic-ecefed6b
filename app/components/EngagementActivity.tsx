import { activity } from "@/lib/mockData";

export function EngagementActivity() {
  const maxVolume = Math.max(...activity.map((point) => point.volume));

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <div className="section-label">Engagement Volume</div>
          <div className="panel-title">7 day inbound signal</div>
        </div>
        <button className="secondary-button">Download CSV</button>
      </div>
      <div className="chart">
        {activity.map((point) => (
          <div key={point.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div
              className={`chart-bar ${point.active ? "active" : ""}`}
              style={{ height: `${(point.volume / maxVolume) * 100}%`, width: "100%" }}
            />
            <div style={{ color: point.active ? "var(--accent)" : "var(--text-tertiary)", fontSize: "0.8rem" }}>
              {point.label}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          alignItems: "center",
          background: "rgba(37,211,102,0.08)",
          borderRadius: "14px",
          border: "1px solid rgba(37,211,102,0.18)",
          display: "flex",
          gap: "12px",
          marginTop: "18px",
          padding: "14px 16px"
        }}
      >
        <span style={{ fontSize: "1.4rem" }}>🔍</span>
        <div>
          <div style={{ fontWeight: 600 }}>Signal Surge Detected</div>
          <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
            Automation deflection dipped on Wednesday cohorts. Suggest activating human follow-up for recovered carts.
          </div>
        </div>
        <button className="primary-button" style={{ marginLeft: "auto" }}>
          Deploy recovery squad
        </button>
      </div>
    </section>
  );
}
