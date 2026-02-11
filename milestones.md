# Vault Project Milestones

## Phase 1: Project Setup & Foundation

- [x] Initialize Next.js Project (App Router, TypeScript)
- [x] Configure Tailwind CSS with Design System Tokens
  - [x] Define colors (Cyber Green, Deep Black) in `tailwind.config.ts`
  - [x] Set up fonts (Inter)
- [x] Set up Shadcn UI & Icons (Lucide React)
- [x] Create Core UI Components (Button, Input, Card) based on Design System
- [x] Set up Folder Structure (admin, auth, public routes)

## Phase 2: Database & Authentication

- [ ] Set up Database (PostgreSQL/MongoDB) & Prisma ORM
- [ ] Define Schema: Users, Items, Transactions
- [ ] Implement Authentication (NextAuth.js)
  - [ ] Login Page
  - [ ] Register Page
  - [ ] Forgot Password Page
- [ ] Implement Role-Based Access Control (Admin, Manager, User) middleware

## Phase 3: Core Features - Inventory Management

- [ ] **Item Management**
  - [ ] API Route for CRUD Items
  - [ ] Create Item Form (Add/Edit)
  - [ ] Items List View with Filters & Search
  - [ ] Delete Item Functionality
- [ ] **Inventory Transactions**
  - [ ] API Route for Transactions (In/Out)
  - [ ] Stock In Form (Add to inventory)
  - [ ] Stock Out Form (Remove/Sell)
  - [ ] Update Item Stock Logic on Transaction

## Phase 4: Dashboard & Analytics

- [ ] Create Admin Dashboard Page
- [ ] Implement Dashboard Metrics
  - [ ] Total Items Count
  - [ ] Low Stock Alerts
  - [ ] Recent Activity Feed
- [ ] Visual Charts (Stock Trends)

## Phase 5: Reporting & Export

- [ ] Create Reports Page
- [ ] Implement Reporting Logic (Filter by Date/Type)
- [ ] Export Functionality (CSV/PDF)

## Phase 6: User Management (Admin Only)

- [ ] Create User Management Page
- [ ] Add/Edit User Roles
- [ ] Active/Inactive User Status

## Phase 7: Polish & Deployment

- [ ] Implement Dark/Light Theme Toggle (Default: Dark)
- [ ] Audit all pages for responsiveness
- [ ] Final UI Polish (Animations, Hover Effects)
- [ ] Deploy to Vercel (Staging/Prod)
