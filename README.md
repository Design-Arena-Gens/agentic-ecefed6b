# WhatsApp Agent Command Center

Agent-facing control room for managing human + AI operations on WhatsApp. The UI showcases roster insight, automation coverage, escalation queues, and quick-launch playbooks designed for customer success teams.

## Getting Started

### Requirements

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to explore the dashboard.

### Production Build

```bash
npm run build
npm start
```

## Key Features

- Live roster table with agent load and SLA optics
- Automation kanban highlighting journey health and completion
- Command console to launch orchestrated playbooks with audience + owner selection
- Escalation queue for high-risk conversations
- Engagement chart surfacing WhatsApp signal surges

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Custom dark UI with CSS variables

## Deployment

Ready for deployment on Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-ecefed6b
```

Verify once DNS propagates:

```bash
curl https://agentic-ecefed6b.vercel.app
```
