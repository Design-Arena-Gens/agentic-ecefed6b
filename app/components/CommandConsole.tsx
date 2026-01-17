/* eslint-disable react/no-array-index-key */
"use client";

import { useMemo, useState } from "react";
import { agents } from "@/lib/mockData";

interface Playbook {
  id: string;
  name: string;
  description: string;
  target: string;
  author: string;
}

const playbooks: Playbook[] = [
  {
    id: "pb-01",
    name: "High intent concierge",
    description: "Pair human + AI to fast track revenue-qualified WhatsApp leads within 7 minutes.",
    target: "Routed to Premium Success",
    author: "Ava Thompson"
  },
  {
    id: "pb-02",
    name: "Incident bridge",
    description: "Spin up a co-pilot and human swarm when API downtime triggers automation fallback.",
    target: "Escalation War Room",
    author: "Ops Automation"
  },
  {
    id: "pb-03",
    name: "Renewal retention loop",
    description: "Sequence nudges, attach incentives, and schedule agent callbacks for renewal dropoff.",
    target: "Lifecycle Pod • AMER",
    author: "Lifecycle Ops"
  }
];

const audiences = [
  "VIP Netflixers • 1,286",
  "LatAm Trial Workspaces • 984",
  "Proactive Care (Downtime) • 563",
  "Automation Drift Customers • 312"
];

export function CommandConsole() {
  const [selectedPlaybook, setSelectedPlaybook] = useState<Playbook>(playbooks[0]);
  const [audience, setAudience] = useState<string>(audiences[0]);
  const [owner, setOwner] = useState<string>(agents[0]?.name ?? "");
  const [notes, setNotes] = useState<string>("");

  const summary = useMemo(
    () => ({
      touchpoints: selectedPlaybook.id === "pb-02" ? 6 : 4,
      automationCoverage: selectedPlaybook.id === "pb-03" ? "67%" : "82%",
      liveAgents: selectedPlaybook.id === "pb-01" ? 3 : 2
    }),
    [selectedPlaybook]
  );

  return (
    <section className="panel" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      <div className="panel-header">
        <div>
          <div className="section-label">Command Console</div>
          <div className="panel-title">Launch orchestrated response</div>
        </div>
        <button className="secondary-button">View history</button>
      </div>

      <div className="grid" style={{ gap: "16px" }}>
        <div>
          <div className="section-label" style={{ marginBottom: "10px" }}>
            Playbook
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {playbooks.map((playbook) => {
              const active = playbook.id === selectedPlaybook.id;
              return (
                <button
                  key={playbook.id}
                  className="secondary-button"
                  onClick={() => setSelectedPlaybook(playbook)}
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    background: active ? "rgba(37, 211, 102, 0.12)" : "transparent",
                    borderColor: active ? "var(--accent-border)" : "rgba(255,255,255,0.08)",
                    color: active ? "var(--accent)" : "var(--text-secondary)",
                    padding: "14px"
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{playbook.name}</div>
                  <div style={{ color: "var(--text-tertiary)", fontSize: "0.85rem", marginTop: "4px" }}>
                    {playbook.description}
                  </div>
                  <div style={{ color: "var(--text-tertiary)", fontSize: "0.75rem", marginTop: "8px" }}>
                    Target: {playbook.target} • Author: {playbook.author}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div className="section-label" style={{ marginBottom: "10px" }}>
              Audience
            </div>
            <select className="input" value={audience} onChange={(event) => setAudience(event.target.value)}>
              {audiences.map((option, index) => (
                <option key={`${option}-${index}`}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: "10px" }}>
              Owner
            </div>
            <select className="input" value={owner} onChange={(event) => setOwner(event.target.value)}>
              {agents.map((agent) => (
                <option key={agent.id}>{agent.name}</option>
              ))}
            </select>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: "10px" }}>
              Field Notes
            </div>
            <textarea
              className="input"
              placeholder="Drop the context your agents need to jump in informed."
              rows={5}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px 18px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
          gap: "24px"
        }}
      >
        <div style={{ flex: 1 }}>
          <div className="section-label" style={{ marginBottom: "6px" }}>
            Briefing Summary
          </div>
          <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            {selectedPlaybook.name} will deploy <strong>{summary.liveAgents} live agents</strong> and chain{" "}
            <strong>{summary.touchpoints} touchpoints</strong> with automation coverage at{" "}
            <strong>{summary.automationCoverage}</strong>. Audience <strong>{audience}</strong>, owner{" "}
            <strong>{owner}</strong>.
          </div>
        </div>
        <button className="primary-button" style={{ padding: "14px 22px", fontSize: "0.95rem" }}>
          Launch playbook
        </button>
      </div>
    </section>
  );
}
