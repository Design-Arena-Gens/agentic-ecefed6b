import { AutomationsPanel } from "./components/AutomationsPanel";
import { CommandConsole } from "./components/CommandConsole";
import { DashboardHeader } from "./components/DashboardHeader";
import { EngagementActivity } from "./components/EngagementActivity";
import { EscalationsBoard } from "./components/EscalationsBoard";
import { Sidebar } from "./components/Sidebar";
import { TeamRoster } from "./components/TeamRoster";

export default function Page() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout-main">
        <DashboardHeader />
        <div className="layout-columns">
          <div className="grid">
            <TeamRoster />
            <CommandConsole />
            <AutomationsPanel />
          </div>
          <div className="grid">
            <EngagementActivity />
            <EscalationsBoard />
            <div
              className="panel"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background:
                  "linear-gradient(135deg, rgba(37,211,102,0.22), rgba(29,161,242,0.15))"
              }}
            >
              <div className="section-label">AI Agent Intel</div>
              <div className="panel-title">WhatsApp co-pilot status</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="badge" style={{ justifyContent: "space-between" }}>
                  <span>Context windows synced</span>
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>100%</span>
                </div>
                <div className="badge" style={{ justifyContent: "space-between" }}>
                  <span>Suggested replies adopted</span>
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>78%</span>
                </div>
                <div className="badge" style={{ justifyContent: "space-between" }}>
                  <span>Escalation guardrails</span>
                  <span style={{ color: "var(--warning)", fontWeight: 600 }}>Monitor</span>
                </div>
              </div>
              <button className="secondary-button">Tune guardrails</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
