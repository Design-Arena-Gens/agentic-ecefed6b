import { agents } from "@/lib/mockData";

const statusLabel = {
  online: "In conversations",
  away: "Reviewing threads",
  offline: "Offline"
};

export function TeamRoster() {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <div className="section-label">Team Roster</div>
          <div className="panel-title">Live agent availability</div>
        </div>
        <button className="secondary-button">Route New Conversations</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Agent</th>
            <th>Role</th>
            <th>Status</th>
            <th>Active Chats</th>
            <th>Response Time</th>
            <th>CSAT</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id}>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      alignItems: "center",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: "12px",
                      display: "flex",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      height: "36px",
                      justifyContent: "center",
                      width: "36px"
                    }}
                  >
                    {agent.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600 }}>{agent.name}</div>
                    <div style={{ color: "var(--text-tertiary)", fontSize: "0.8rem" }}>
                      SLA coverage &bull; Tier {agent.id.slice(-1)}
                    </div>
                  </div>
                </div>
              </td>
              <td>{agent.role}</td>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className={`status-dot ${agent.status}`} />
                  <span style={{ color: "var(--text-secondary)" }}>{statusLabel[agent.status]}</span>
                </div>
              </td>
              <td>{agent.activeChats}</td>
              <td>{agent.responseTime}</td>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div
                    className="progress"
                    style={{ width: "90px", background: "rgba(255, 255, 255, 0.08)" }}
                    aria-hidden
                  >
                    <div className="progress-bar" style={{ width: `${agent.satisfaction}%` }} />
                  </div>
                  <span style={{ color: "var(--text-secondary)" }}>{agent.satisfaction}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
