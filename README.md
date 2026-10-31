# AI Infrastructure / DevOps Portfolio

A focused portfolio for AI-native operations: digital products, automation workflows, Linux-oriented infrastructure, and the engineering discipline around agents. The site presents three projects with real mobile UI captures and concise notes about the work behind them.

## Why this portfolio is relevant

The target role combines Linux servers, Docker, PostgreSQL, Telegram automations, security-minded access decisions, backups, reliable deployments, and practical work with AI agents. This portfolio is built around that intersection:

- agents are used to accelerate implementation, but a human owns architecture, data, permissions, testing, and release decisions;
- the projects span a live product, a Telegram recruitment workflow, and a mobile-first VPN client;
- the site keeps project status and limitations explicit instead of presenting concepts as production proof;
- the next areas I am deliberately deepening are observability, backup/recovery routines, least-privilege operations, and agent tooling such as project instructions, skills, hooks, and MCP integrations.

## Selected projects

### Beerloga

A live digital storefront for a retail brand.

- Product: [client-beer](https://github.com/work-dis/client-beer)
- Demo: [client-beer.vercel.app](https://client-beer.vercel.app/)
- Focus: responsive product presentation, storefront UX, Git-based delivery, and Vercel deployment
- Capture: the home screen after the age gate

### WorKingEU

A recruitment workflow built around a public vacancy catalog and Telegram onboarding.

- Product: [hr-pro-bot](https://github.com/work-dis/hr-pro-bot)
- Focus: vacancy discovery, candidate onboarding, Telegram flows, PostgreSQL-backed data, and admin operations
- Capture: the responsive mobile landing page

### simple-dimple

A mobile-first VPN client and supporting infrastructure project.

- Product: [simple-dimple](https://github.com/work-dis/simple-dimple)
- Focus: Linux, Docker, Xray/VLESS, server selection, account flows, and deployment-oriented architecture
- Capture: the mobile client screen from the development build

> The simple-dimple capture was taken without the backend running, so the visible API error is kept and labeled honestly. It reflects the real development state rather than an invented mockup.

## What this repository demonstrates

- Translating product requirements into a clear, responsive interface
- Working across frontend, backend, Telegram workflows, APIs, and infrastructure
- Using Git, QA checks, and deployment workflows as part of delivery
- Using AI agents to accelerate implementation while keeping architecture, security, validation, and final decisions human-owned
- Communicating project scope and maturity without overstating production readiness

## Repository structure

```text
index.html    Portfolio markup and content
styles.css    Responsive visual system and layout
app.js        RU / EN language toggle and contact-link rendering
config.js     Public profile settings; no secrets
assets/       Favicon and verified project screenshots
```

## Publication

This is a static GitHub Pages portfolio. It has no build step, package installation, or runtime dependencies: GitHub Pages serves the repository root directly.

## Notes

- Contact links are configured in `config.js`; empty values stay hidden.
- Do not put passwords, tokens, private IPs, or API keys in this repository.
- Project screenshots are real mobile captures from the corresponding project work; they are not generated concept art.

