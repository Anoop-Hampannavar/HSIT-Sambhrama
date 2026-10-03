# HSIT Sambhrama 2026 — Official Fest Platform
Live link:https://sambhrama-web.vercel.app/
> Modern, responsive web platform engineered for **HSIT Sambhrama 2026**, the annual cultural and technical flagship festival of Hirasugar Institute of Technology.

---

## 🌟 Overview

The **HSIT Sambhrama 2026** platform serves as the central digital hub for event schedules, student registrations, venue coordinates, and committee directories. Built with Next.js and Tailwind CSS, the platform delivers high-performance interactions, real-time schedule tracking across multi-day events, and structured coordinator contact points.

---

## 📅 Event Timeline & Highlights

| Day | Date | Event Name | Focus & Highlights | Venue |
|:---:|:---:|:---|:---|:---|
| **Day 1** | May 18, 2026 | **PRARAMBH** | Inauguration Ceremony & Food Fest | Open Air Theatre |
| **Day 2** | May 19, 2026 | **Chromatic Unity** | Matching Colour Celebration Day | EC Parking Area |
| **Day 3** | May 20, 2026 | **VIRASAT** | Regional Pride & Traditional Showcase | EC Parking Area |

---

## 👥 Committee & Coordination

### Faculty Coordinators
- **Prof. S. B. Patil** (Convener, Computer Science & Engineering)
- **Prof. A. U. Neshti** (Electrical & Electronics Engineering)
- **Prof. B. P. Khot** (Electronics & Communication Engineering)
- **Prof. P. M. Kokitkar** (Mechanical Engineering)
- **Prof. I. N. Kambar** (First Year Department)

### Student Leads & Coordinators
- **Lead Developer & Coordinator**: Anoop Hampannavar (CSE)
- **Organizing Leads**: Kartik Suragimath (CSE), Suraj Huddar (CSE), Ritika Aparadh (CSE), Sakshi Chunamuri (CSE), Pramod Pujar (CSE), Megha Sakkappanavar (CSE), Shreyas Upadhyay (ECE), Shreya Magadum (ECE), Samatha Kasti (ECE), Preeti Dhanawadi (ECE), Akash Naik (ECE)

---

## 🛠️ Architecture & Tech Stack

- **Framework**: Next.js 14+ (App Router architecture)
- **Frontend**: React, TypeScript, Tailwind CSS
- **Design Tokens**: Custom dark neon UI theme with accessible responsive cards
- **Deployment & Containers**: Docker multi-stage containerization with Nginx/Node runtime

### Project Structure
```text
HSIT-Sambhrama/
├── public/               # Static assets & festival branding
├── src/
│   ├── app/              # Next.js App Router (layout, pages, routing)
│   ├── components/       # UI modules (Timeline, Cards, Modals, Navbar)
│   ├── data/             # Static schedule JSON & coordinator directories
│   └── lib/              # Client helpers, animations & utility routines
├── Dockerfile            # Production multi-stage build definition
├── docker-compose.yml    # Container orchestration specification
├── package.json
└── README.md
