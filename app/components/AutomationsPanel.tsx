import { automations } from "@/lib/mockData";

export function AutomationsPanel() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <div className="section-label">Automation Graph</div>
          <div className="panel-title">Journeys orchestrating WhatsApp</div>
        </div>
        <button className="secondary-button">View Journey Map</button>
      </div>
      <div className="kanban">
        {automations.map((flow) => (
          <div key={flow.id} className="kanban-column">
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div className="section-label">{flow.status === "active" ? "Active" : "Paused"}</div>
              <div className={`tag ${flow.status === "active" ? "accent" : "warning"}`}>
                {flow.touchpoints} steps
              </div>
            </div>
            <div className="kanban-card">
              <div style={{ fontWeight: 600, marginBottom: "8px" }}>{flow.name}</div>
              <div style={{ color: "var(--text-tertiary)", fontSize: "0.85rem", marginBottom: "12px" }}>
                Trigger: {flow.trigger}
              </div>
              <div className="badge" style={{ marginBottom: "12px" }}>
                📈 {flow.kpi}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div className="section-label">Completion</div>
                <div className="progress" aria-hidden>
                  <div className="progress-bar" style={{ width: `${flow.completion}%` }} />
                </div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                  {flow.completion}% of customers close loop in <strong>15m</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
