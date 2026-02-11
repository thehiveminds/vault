# 🎨 Vault Design System

## 1. Design Philosophy

**"Cyber-Professional"** — A high-contrast, dark-mode-first aesthetic that combines the sleekness of modern SaaS with the vibrancy of futuristic interfaces.

- **Primary Vibe:** Modern, Clean, Efficient.
- **Visuals:** Deep blacks, subtle glassmorphism, and neon green accents.
- **Interaction:** Snappy micro-interactions, high-contrast states.

---

## 2. Color Palette

### 🌑 Backgrounds (Dark Mode)

| Token           | Hex Value | Usage                               |
| :-------------- | :-------- | :---------------------------------- |
| `bg-main`       | `#09090b` | Main app background (Deepest Black) |
| `bg-card`       | `#18181b` | Cards, Sidebar, Panels (Zinc 900)   |
| `bg-hover`      | `#27272a` | Hover states, Inputs (Zinc 800)     |
| `border-subtle` | `#3f3f46` | Separators, Card Borders (Zinc 700) |

### 🟢 Primary Accents (The Brand)

| Token           | Hex Value | Usage                                      |
| :-------------- | :-------- | :----------------------------------------- |
| `primary`       | `#22c55e` | Primary Buttons, Active States (Green 500) |
| `primary-hover` | `#16a34a` | Button Hover (Green 600)                   |
| `primary-glow`  | `#4ade80` | Glow effects, Success states (Green 400)   |
| `accent-purple` | `#a855f7` | Secondary actions, Charts (Purple 500)     |

### ⚪ Typography Colors

| Token            | Hex Value | Usage                                  |
| :--------------- | :-------- | :------------------------------------- |
| `text-primary`   | `#ffffff` | Headings, Main Text                    |
| `text-secondary` | `#a1a1aa` | Subtitles, Labels (Zinc 400)           |
| `text-muted`     | `#71717a` | Disabled text, Placeholders (Zinc 500) |

---

## 3. Typography

**Font Family:** `Poppins`, sans-serif.

| Style     | Weight         | Size | Line Height | Usage            |
| :-------- | :------------- | :--- | :---------- | :--------------- |
| **H1**    | Bold (700)     | 32px | 1.25        | Page Titles      |
| **H2**    | Semibold (600) | 24px | 1.3         | Section Headers  |
| **H3**    | Medium (500)   | 18px | 1.4         | Card Titles      |
| **Body**  | Regular (400)  | 14px | 1.5         | Standard Text    |
| **Small** | Regular (400)  | 12px | 1.5         | Labels, Captions |

---

## 4. UI Components

### 📦 Cards & Containers

- **Background:** `bg-card` (#18181b)
- **Border:** 1px solid `border-subtle` (#3f3f46)
- **Radius:** `rounded-2xl` (16px) or `rounded-xl` (12px)
- **Shadow:** `shadow-xl` (Soft black diffuse shadow)

### 🔘 Buttons

#### Primary

- **Bg:** `primary` -> `primary-hover`
- **Text:** Black (for contrast) or White
- **Radius:** `rounded-lg`
- **Effect:** Subtle scaling transformation on hover (`scale-105`)

#### Secondary / Ghost

- **Bg:** Transparent -> `bg-hover`
- **Text:** `text-primary`
- **Border:** 1px solid `border-subtle`

### 📝 Inputs

- **Bg:** `bg-main` or `bg-hover`
- **Border:** `border-subtle` -> `primary` (on focus)
- **Radius:** `rounded-lg`
- **Height:** 44px (generous touch target)

---

## 5. Effects & Details

### Glassmorphism (Optional)

Used sparingly on floating elements (e.g., sticky headers, modals).

- **Bg:** `bg-black/80`
- **Blur:** `backdrop-blur-md`

### Gradients

Use subtle gradients for backgrounds or active borders.

- **Green Gradient:** `bg-gradient-to-r from-green-500 to-emerald-600`

### Spacing

- **Grid:** 8px baseline.
- **Padding:** Generous whitespace inside cards (`p-6`).
