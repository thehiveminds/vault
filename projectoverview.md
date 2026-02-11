# 📄 Product Requirements Document (PRD)

## Project: Vault — Inventory Management System

### 1. Executive Summary

Vault is a modern inventory management web application built with Next.js.
It will help businesses store, track, and control item inventory, including item inflows and outflows, stock levels, reporting, and user permissions — all in a sleek, responsive UI with light/dark theme support and clean typography.

---

## 2. Purpose & Objectives

### Purpose

To provide business owners and store managers with a web-based inventory system that is:

- Simple, intuitive, and reliable
- Modern UI with theme support
- Real-time inventory tracking

### Primary Objectives

- Track inventory in real time
- Record item in/out transactions
- Provide data reporting & export
- Multi-user role management
- Responsive and aesthetically modern UI

---

### 2.1 Market Research & Competitor Analysis

#### Market Overview

The global inventory management software market is projected to reach approximately **$5.87 billion by 2032**, growing at a CAGR of over 10%. Key drivers include the rise of e-commerce, the need for real-time supply chain visibility, and the adoption of cloud-based automation tools.

#### Competitor Landscape

| Competitor         | Target Audience         | Key Strengths                 | Weaknesses                              |
| :----------------- | :---------------------- | :---------------------------- | :-------------------------------------- |
| **Fishbowl**       | Medium-sized Warehouses | Strong QuickBooks integration | Expensive; dated UI                     |
| **Zoho Inventory** | SMBs & Online Sellers   | Affordable; good ecosystem    | Limited enterprise features             |
| **Sortly**         | Small Teams             | Mobile-first visual tracking  | Weak reporting features                 |
| **Excel / Sheets** | Micro-businesses        | Free & flexible               | Error-prone; no real-time collaboration |

#### Gap Analysis (Why Vault?)

While many solutions exist, they often suffer from **feature bloat** or **outdated interfaces**. Vault bridges the gap by offering:

- **Modern UX:** A clean, "Apple-like" interface that requires zero training.
- **Speed:** Built on Next.js for sub-second page loads, unlike sluggish legacy ERPs.
- **Simplicity:** Focuses on core inventory workflows without the complexity of full-scale ERP systems.

---

## 3. Target Users

| User Type      | Description                                                                        |
| -------------- | ---------------------------------------------------------------------------------- |
| **Admin**      | Full access to all modules. Can manage users, system settings, and permissions.    |
| **Manager**    | Can create/edit items, view reports, manage operations but no system admin rights. |
| **Staff/User** | Can add item in/out logs, see inventory status, but limited access to settings.    |

### **3.1 User Stories**

- **As an Admin**, I want to invite team members and assign roles so that I can control who has access to sensitive data.
- **As a Store Manager**, I want to receive low-stock alerts on my dashboard so that I can reorder products before they run out.
- **As a Staff Member**, I want to quickly log incoming stock using a simple form so that inventory levels are updated immediately.
- **As an Admin**, I want to export monthly inventory reports to PDF so that I can share them with stakeholders.

---

## 4. Core Features

### 4.1 User Authentication & Roles

- Sign up / Login / Logout
- Social login (optional)
- Role based permissions (Admin, Manager, Staff)
- Password recovery

---

### 4.2 Dashboard

Key Metrics

- Total items in inventory
- Recent item movements
- Alerts (low stock, reorder)
- Graphs (stock trends)

---

### 4.3 Item Management

| Feature                   | Description                               |
| ------------------------- | ----------------------------------------- |
| Add / Edit / Delete Items | SKU, name, category, supplier, unit price |
| Categorization            | Group items by type or department         |
| Stock Levels              | Real-time available quantity              |
| Attach Images             | Optional product image                    |

---

### 4.4 Inventory Transactions

| Transaction          | Description                 |
| -------------------- | --------------------------- |
| Item In (Stock In)   | Record incoming inventory   |
| Item Out (Stock Out) | Record sales or removal     |
| Bulk Upload          | CSV import for transactions |

---

### 4.5 Reporting

- Daily/Weekly/Monthly reports
- Low stock reports
- Export to CSV/PDF
- Print support

---

### 4.6 Settings

- Theme toggle (light / dark)
- Base currency
- Units of measure
- Notification preferences

---

### 4.7 Audit Trail

- Track actions per user
- View changes to items and transactions
- Export logs

---

## 5. UI / UX Guidelines

### 5.1 Design System

For detailed styling, color palettes, and component definitions, please refer to the **[Design System Document](file:///e:/vault/design_system.md)**.

**Core Aesthetic:**

- **Theme:** "Cyber-Professional" (High-contrast Dark Mode)
- **Primary Color:** Vibrant Green (`#22c55e`)
- **Background:** Deep Black / Zinc (`#09090b`)
- **Typography:** Inter Sans-serif

---

## 6. Technology Stack

| Layer            | Technology              |
| ---------------- | ----------------------- |
| Frontend         | Next.js, React          |
| Styling          | TailwindCSS / CSS-in-JS |
| State Management | Redux / React Context   |
| Backend          | API Routes in Next.js   |
| Database         | PostgreSQL / MongoDB    |
| Auth             | NextAuth.js             |
| Deployment       | Vercel / Cloud          |

---

## 7. API / Data Model Overview

### 7.1 Key Entities

- Users _(id, name, email, role)_
- Items _(id, name, SKU, category, stock)_
- Transactions _(id, item_id, qty, type, timestamp)_
- Reports _(generated by query)_

---

## 8. Non-Functional Requirements

### Performance

- Handle large inventory datasets (support up to 50,000+ items without lag)
- Fast page load (< 1.5s for dashboard, < 500ms for interaction response)
- 99.9% Uptime SLA expectation
- Database Query Response Time: < 200ms for critical queries
- API Response Time: < 300ms for 90% of API calls

### Security

- JWT / Secure cookies
- Role-based access control
- Data encryption at rest/in transit

### Usability

- Responsive design (mobile/desktop)
- Accessible UI (WCAG standards)

---

## 9. MVP Scope (Version 1)

In Scope
✔ Dashboard
✔ User auth & roles
✔ Item CRUD
✔ Inventory transactions
✔ Basic reporting
✔ Light/Dark theme

Out of Scope (Later Phases)
❌ Barcode scanning
❌ AI-based forecasts
❌ Offline sync

---

## 10. User Flow (Simplified)

1. User logs in
2. Redirect to dashboard
3. User adds or edits items
4. Staff logs item in/out
5. Manager views reports

---

## 11. Deployment & Hosting

| Environment | Platform       |
| ----------- | -------------- |
| Dev         | Vercel Preview |
| Prod        | Vercel         |

---

## 12. Success Metrics

| KPI               | Goal                                 |
| ----------------- | ------------------------------------ |
| Adoption Rate     | 80% of registered users active daily |
| Errors            | < 0.5% crash-free sessions           |
| Report Generation | < 2s for monthly reports             |
| API Latency       | < 200ms average response time        |

---

## 13. Risks & Mitigation

| Risk           | Mitigation               |
| -------------- | ------------------------ |
| Stock mismatch | Audit logs + validation  |
| Data breach    | Encryption + secure auth |

---

## 14. Next Steps

✅ Finalize UI mockups
✅ Define data schema
✅ Setup Next.js boilerplate
✅ Theme system (dark/light)
✅ Build authentication

#file structure
vault/
├── app/
│ ├── (admin)/ # 🔒 Protected Admin Area
│ │ ├── dashboard/ # Overview & metrics
│ │ │ └── page.tsx
│ │ ├── items/ # Item master management
│ │ │ ├── page.tsx
│ │ │ └── [itemId]/page.tsx
│ │ ├── inventory/ # Stock in / out
│ │ │ ├── in/
│ │ │ │ └── page.tsx
│ │ │ ├── out/
│ │ │ │ └── page.tsx
│ │ │ └── history/
│ │ │ └── page.tsx
│ │ ├── reports/ # Analytics & exports
│ │ │ └── page.tsx
│ │ ├── users/ # Role & user management
│ │ │ └── page.tsx
│ │ ├── settings/ # App & system settings
│ │ │ └── page.tsx
│ │ ├── layout.tsx # Admin layout (sidebar, header)
│ │ └── loading.tsx
│ │
│ ├── (auth)/ # 🔓 Public Auth Routes
│ │ ├── login/
│ │ │ └── page.tsx
│ │ ├── register/
│ │ │ └── page.tsx
│ │ ├── forgot-password/
│ │ │ └── page.tsx
│ │ └── reset-password/
│ │ └── page.tsx
│ │
│ ├── (public)/ # 🌍 Public Pages
│ │ ├── landing/
│ │ │ └── page.tsx
│ │ ├── privacy/
│ │ │ └── page.tsx
│ │ └── terms/
│ │ └── page.tsx
│ │
│ ├── api/ # ⚙️ Backend (Next API Routes)
│ │ ├── auth/
│ │ │ └── route.ts
│ │ ├── items/
│ │ │ └── route.ts
│ │ ├── inventory/
│ │ │ └── route.ts
│ │ ├── reports/
│ │ │ └── route.ts
│ │ └── users/
│ │ └── route.ts
│ │
│ ├── globals.css # Tailwind + global styles
│ └── layout.tsx # Root layout (theme, fonts)
│
├── components/
│ ├── ui/ # 🧩 Shadcn UI components
│ ├── layout/
│ │ ├── sidebar.tsx
│ │ ├── header.tsx
│ │ └── breadcrumb.tsx
│ ├── inventory/
│ │ ├── stock-in-form.tsx
│ │ ├── stock-out-form.tsx
│ │ └── stock-table.tsx
│ └── theme-provider.tsx # Dark / Light theme logic
│
├── lib/
│ ├── services/ # 🧠 Business logic layer
│ │ ├── auth.ts
│ │ ├── items.ts
│ │ ├── inventory.ts
│ │ ├── reports.ts
│ │ └── users.ts
│ │
│ ├── db/
│ │ ├── prisma.ts # DB client
│ │ └── schema.prisma
│ │
│ ├── constants.ts # Roles, statuses, enums
│ ├── permissions.ts # RBAC rules
│ └── utils.ts # Helpers
│
├── hooks/
│ ├── use-auth.ts
│ ├── use-theme.ts
│ └── use-permissions.ts
│
├── types/
│ ├── auth.ts
│ ├── inventory.ts
│ ├── reports.ts
│ └── index.ts
│
├── public/
│ ├── logos/
│ ├── icons/
│ └── images/
│
├── styles/
│ └── themes.css # Black / Green theme tokens
│
├── middleware.ts # Route protection (RBAC)
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
