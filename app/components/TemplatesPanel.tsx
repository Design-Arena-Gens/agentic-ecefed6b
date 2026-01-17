import { templates } from "@/lib/mockData";

export function TemplatesPanel() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <div className="section-label">Template Intelligence</div>
          <div className="panel-title">WhatsApp template portfolio</div>
        </div>
        <button className="secondary-button">Sync with Meta</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {templates.map((template) => (
          <div
            key={template.id}
            style={{
              alignItems: "center",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              justifyContent: "space-between",
              padding: "16px 18px",
              gap: "18px"
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ fontWeight: 600, fontSize: "1rem" }}>{template.name}</div>
                <div className="tag">{template.category}</div>
              </div>
              <div style={{ color: "var(--text-tertiary)", marginTop: "6px", fontSize: "0.85rem" }}>
                Updated {template.updatedAt} • {template.sentiment}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ textAlign: "right" }}>
                <div className="section-label">Usage</div>
                <div style={{ fontWeight: 600 }}>{template.usage.toLocaleString()}</div>
              </div>
              <button className="secondary-button">Run A/B Test</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
